"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, ShieldCheck, Sparkles, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { cn } from "@/lib/utils";

type TableSegment = {
  type: "table";
  headers: string[];
  rows: string[][];
};

type MarkdownSegment =
  | { type: "markdown"; content: string }
  | TableSegment;

const markdownComponents: Components = {
  p: ({ children }) => (
    <p className="text-sm leading-relaxed text-foreground/90">{children}</p>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="text-foreground/80">{children}</em>,
  ul: ({ children }) => <ul className="my-2 ml-5 list-disc space-y-1 text-sm text-foreground/90">{children}</ul>,
  ol: ({ children }) => <ol className="my-2 ml-5 list-decimal space-y-1 text-sm text-foreground/90">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  h3: ({ children }) => (
    <h3 className="text-sm font-semibold text-foreground">{children}</h3>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-primary underline-offset-4 hover:underline"
    >
      {children}
    </a>
  ),
  hr: () => <div className="my-3 h-px w-full bg-border" />,
  br: () => <br />,
};

const normalizeMarkdown = (content: string) =>
  content
    .replace(/\r\n/g, "\n")
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/^[\t ]+$/gm, "")
    .replace(/^\s*•\s?/gm, "- ");

const isTableRow = (line: string) => /^\s*\|.+\|\s*$/.test(line);

const isSeparatorRow = (line: string) =>
  /^\s*\|(?:\s*:?[-=]{3,}:?\s*\|)+\s*$/.test(line);

const splitTableRow = (line: string) =>
  line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

const segmentMarkdownContent = (rawContent: string): MarkdownSegment[] => {
  const content = normalizeMarkdown(rawContent);
  const lines = content.split("\n");
  const segments: MarkdownSegment[] = [];
  let buffer: string[] = [];

  const flushBuffer = () => {
    if (buffer.length === 0) {
      return;
    }
    const merged = buffer.join("\n").trim();
    if (merged) {
      segments.push({ type: "markdown", content: merged });
    }
    buffer = [];
  };

  let index = 0;
  while (index < lines.length) {
    const line = lines[index];

    if (
      isTableRow(line) &&
      index + 1 < lines.length &&
      isSeparatorRow(lines[index + 1])
    ) {
      flushBuffer();
      const headers = splitTableRow(line);
      index += 2; // Skip header and separator
      const rows: string[][] = [];

      while (index < lines.length && isTableRow(lines[index])) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }

      segments.push({ type: "table", headers, rows });
      continue;
    }

    buffer.push(line);
    index += 1;
  }

  flushBuffer();
  return segments.length > 0 ? segments : [{ type: "markdown", content }];
};

const TableRenderer = ({ headers, rows }: TableSegment) => {
  const normalizedHeaders = headers.length > 0 ? headers : ["Details"];

  return (
    <div className="mt-3 space-y-3">
      {rows.map((row, rowIndex) => {
        const columnCount = Math.max(normalizedHeaders.length, row.length);
        const entries = Array.from({ length: columnCount }, (_, columnIndex) => ({
          header: normalizedHeaders[columnIndex] ?? `Column ${columnIndex + 1}`,
          value: row[columnIndex] ?? "",
        }));

        const [primaryEntry, ...otherEntries] = entries;
        const visibleSecondaryEntries = otherEntries.filter((entry) => entry.value);

        return (
          <div
            key={`table-card-${rowIndex}`}
            className="rounded-2xl border border-border/70 bg-background px-4 py-4 shadow-sm"
          >
            <div className="space-y-3">
              {primaryEntry?.value && (
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {primaryEntry.header || "Step"}
                  </span>
                  <div className="text-sm font-semibold text-foreground">
                    <ReactMarkdown components={markdownComponents}>
                      {primaryEntry.value}
                    </ReactMarkdown>
                  </div>
                </div>
              )}

              {visibleSecondaryEntries.length > 0 && (
                <div className="grid gap-3">
                  {visibleSecondaryEntries.map((entry, columnIndex) => (
                    <div
                      key={`table-card-${rowIndex}-${columnIndex}-detail`}
                      className="space-y-1"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {entry.header}
                      </span>
                      <div className="space-y-1 text-sm leading-relaxed text-foreground/90">
                        <ReactMarkdown components={markdownComponents}>
                          {entry.value}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MessageContent = ({ content }: { content: string }) => {
  const segments = useMemo(() => segmentMarkdownContent(content), [content]);

  return (
    <div className="space-y-3">
      {segments.map((segment, index) => {
        if (segment.type === "table") {
          return <TableRenderer key={`table-${index}`} {...segment} />;
        }

        return (
          <div key={`markdown-${index}`} className="space-y-2 text-sm">
            <ReactMarkdown components={markdownComponents}>
              {segment.content}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function AICounsellorChat() {
  const STORAGE_KEY = "dfy.aiChat.messages.v1";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "assistant-0",
      role: "assistant",
      content:
        "Hi, I'm your AI counsellor. I can help with reporting concerns, staying safe, and supporting friends on their drug-free journey. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLTextAreaElement>(null);
  const hasHydratedRef = useRef(false);
  const quickPrompts = useMemo(
    () => [
      "How do I report a suspicious drug activity anonymously?",
      "What immediate steps should I take if a friend is using drugs?",
      "Who can I contact for youth mental-health support?",
    ],
    [],
  );

  const systemPrompt = useMemo(
    () =>
      [
        "You are the Drugs Free Youth AI counsellor.",
        "Offer clear, compassionate guidance about drug awareness, reporting suspicious activity, community support, and staying safe.",
        "Encourage responsible actions and remind users about official reporting channels when appropriate.",
        "Keep responses concise, practical, and easy to scan on mobile.",
        "Never output Markdown tables or HTML tables.",
        "Follow this response structure whenever you provide step-by-step instructions:",
        "Step 1 – [Short Title]",
        "What to do:",
        "- Bullet with actions",
        "Key details:",
        "- Bullet with important watch-outs or context",
        "Continue numbering steps sequentially with the same sections.",
        "After the steps, add a 'Quick Contact List' if relevant, using bullets like 'Service: … — Phone: …'.",
        "Finish with a short 'Remember' list highlighting 2-3 critical safety reminders.",
      ].join("\n"),
    [],
  );

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);

    window.addEventListener("dfy-open-chat", handleOpenChat);
    return () => {
      window.removeEventListener("dfy-open-chat", handleOpenChat);
    };
  }, []);

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as Message[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // ignore malformed storage
    } finally {
      hasHydratedRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist messages to localStorage whenever they change (after hydration)
  useEffect(() => {
    if (!hasHydratedRef.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // storage may be unavailable (e.g., in private mode)
    }
  }, [messages, STORAGE_KEY]);

  useEffect(() => {
    if (isOpen) {
      window.dispatchEvent(new Event("dfy-chat-opened"));
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...nextMessages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          (errorData && (errorData.error as string | undefined)) ||
            "Unable to reach the AI counsellor. Please try again.",
        );
      }

      const data = (await response.json()) as { message?: string; error?: string };

      if (!data.message) {
        throw new Error(data.error || "The AI counsellor did not return a response.");
      }

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const fallbackMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong while contacting the AI counsellor.";
      setError(fallbackMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
    setIsOpen(true);
    requestAnimationFrame(() => {
      chatInputRef.current?.focus();
    });
  };

  return (
    <ExpandableChat
      className="sm:drop-shadow-2xl"
      size="lg"
      position="bottom-right"
      icon={<Bot className="h-6 w-6" />}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <ExpandableChatHeader className="relative flex-col items-start gap-3 overflow-hidden border-b bg-gradient-to-r from-primary to-primary/90 p-5 text-left text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 " />
        <div className="relative flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/15">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-lg font-semibold">AI Counsellor</h1>
              <p className="text-xs text-primary-foreground/80">Confidential guidance within seconds.</p>
            </div>
          </div>
          <span className="relative flex items-center gap-1 rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-medium">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Online
          </span>
        </div>
        <div className="relative flex flex-wrap items-center gap-2 text-xs text-primary-foreground/90">
          <div className="inline-flex items-center gap-1 rounded-full bg-primary-foreground/15 px-3 py-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            Confidential
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-primary-foreground/15 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5" />
            Actionable tips
          </div>
        </div>
      </ExpandableChatHeader>

      <ExpandableChatBody className="relative bg-muted/20 flex flex-col flex-1 min-h-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,58,138,0.08),transparent_60%)]" />
        <ChatMessageList className="relative flex-1 min-h-0 overflow-y-auto pr-1 sm:pr-2 [scrollbar-color:rgba(30,58,138,0.35)_transparent]">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.role === "user" ? "sent" : "received"}
              className={cn(
                message.role === "user" ? "items-end" : "items-start",
              )}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                {message.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
              </div>
              <ChatBubbleMessage
                variant={message.role === "user" ? "sent" : "received"}
                className={cn(
                  "w-full break-words min-w-0",
                  message.role === "user"
                    ? "shadow-lg"
                    : "bg-background text-foreground shadow-sm",
                )}
              >
                <MessageContent content={message.content} />
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Bot className="h-5 w-5" />
              </div>
              <ChatBubbleMessage
                className="bg-background text-foreground"
                variant="received"
                isLoading
              />
            </ChatBubble>
          )}
          <div ref={messagesEndRef} />
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter className="space-y-3 bg-gradient-to-b from-background/95 via-background/90 to-background/80 p-4 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => handlePromptClick(prompt)}
              disabled={isLoading}
              className={cn(
                "rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors duration-200",
                "hover:border-primary/60 hover:text-primary disabled:cursor-not-allowed disabled:opacity-60",
              )}
            >
              {prompt}
            </button>
          ))}
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Try asking
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-border/80 bg-background/90 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/40"
        >
          <div className="relative">
            <ChatInput
              ref={chatInputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask the AI counsellor..."
              className="min-h-12 max-h-32 h-auto resize-none rounded-2xl border-0 bg-transparent p-4 pr-12 text-sm text-foreground focus-visible:ring-0"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 bottom-2 h-9 w-9 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              disabled={isLoading}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <div className="flex items-center justify-between gap-2 border-t border-dashed border-border/80 px-4 py-2.5">
            <span className="text-xs text-muted-foreground">We respond with practical next steps.</span>
          </div>
        </form>
        {error && (
          <p className="text-xs text-destructive">
            {error}
          </p>
        )}
      </ExpandableChatFooter>
    </ExpandableChat>
  );
}
