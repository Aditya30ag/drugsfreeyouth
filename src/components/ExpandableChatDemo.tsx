"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Bot, CornerDownLeft, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChatBubble, ChatBubbleMessage } from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatBody,
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { cn } from "@/lib/utils";

type Role = "user" | "assistant";

type Message = {
  id: string;
  role: Role;
  content: string;
};

const systemPrompt = `You are the Drugs Free Youth AI counsellor. Offer compassionate, actionable guidance about the initiative, safe reporting, rehabilitation support, community involvement, and substance-abuse awareness. Keep replies concise, encouraging, and focused on protecting youth. Decline any request that is unrelated to the Drugs Free Youth campaign, drug awareness, law-enforcement collaboration, community safety, or ways to get involved, and gently remind the user of the supported topics.`;

const markdownComponents: Components = {
  p: ({ children }) => <span className="block">{children}</span>,
  a: ({ children, ...props }) => (
    <a
      {...props}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-primary underline underline-offset-2"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="ml-4 list-disc space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="ml-4 list-decimal space-y-1">{children}</ol>,
};

const quickPrompts = [
  {
    id: "report",
    label: "Report anonymously",
    prompt: "How can I file an anonymous report about drug activity?",
  },
  {
    id: "mission",
    label: "Campaign goals",
    prompt: "What are the main goals of the Drugs Free Youth initiative?",
  },
  {
    id: "volunteer",
    label: "Volunteer",
    prompt: "How can students participate or volunteer with Drugs Free Youth?",
  },
];

const getMessageId = () =>
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : `msg-${Date.now()}-${Math.random().toString(16).slice(2)}`;

export default function ExpandableChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: getMessageId(),
      role: "assistant",
      content:
        "👋 Hi! I'm the Drugs Free Youth AI counsellor. Ask me about staying safe, reporting concerns, or getting support.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messageListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!messageListRef.current) return;

    messageListRef.current.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  useEffect(() => {
    const focusComposer = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        return;
      }

      requestAnimationFrame(() => {
        inputRef.current?.focus({ preventScroll: true });
      });
    };

    window.addEventListener("dfy-chat-opened", focusComposer);
    return () => {
      window.removeEventListener("dfy-chat-opened", focusComposer);
    };
  }, []);

  const submitMessage = useCallback(
    async (rawText: string) => {
      const trimmed = rawText.trim();
      if (!trimmed || isLoading) return;

      const userMessage: Message = {
        id: getMessageId(),
        role: "user",
        content: trimmed,
      };

      const payloadMessages = [
        { role: "system" as const, content: systemPrompt },
        ...messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
        { role: "user" as const, content: trimmed },
      ];

      setMessages((prev) => [...prev, userMessage]);
      setError(null);
      setIsLoading(true);
      setInput("");

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: payloadMessages }),
        });

        if (!response.ok) {
          const errorPayload = await response.json().catch(() => null);
          const errorMessage =
            errorPayload?.error || "The AI counsellor is unavailable right now. Please try again soon.";
          throw new Error(errorMessage);
        }

        const data = (await response.json()) as { message?: string };
        if (!data.message) {
          throw new Error("The AI counsellor returned an empty response.");
        }

        const assistantMessage: Message = {
          id: getMessageId(),
          role: "assistant",
          content: data.message,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        console.error("Chat request failed", err);
        setError(
          err instanceof Error
            ? err.message
            : "We couldn't reach the AI counsellor. Please try again in a moment.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages],
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await submitMessage(input);
    },
    [input, submitMessage],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        void submitMessage(input);
      }
    },
    [input, submitMessage],
  );

  const shouldShowQuickPrompts = !isLoading && messages.length === 1;

  return (
    <div className="relative">
      <ExpandableChat
        size="lg"
        position="bottom-right"
        icon={<Bot className="h-6 w-6" />}
        className="drop-shadow-2xl"
      >
        <ExpandableChatHeader className="relative border-0 bg-gradient-to-r from-primary to-primary/80 pb-5 pt-6 text-primary-foreground sm:rounded-t-lg sm:pb-4">
          <span
            className="pointer-events-none absolute left-1/2 top-2 block h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/60 sm:hidden"
            aria-hidden
          />
          <div className="flex w-full items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-white/20 backdrop-blur">
              <Bot className="h-5 w-5" />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-base font-semibold tracking-tight">
                DFY AI Counsellor
              </span>
              <span className="text-xs text-primary-foreground/80">
                Confidential guidance powered by Groq intelligence
              </span>
            </div>
            <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/10 px-2 py-1 text-[11px] font-medium leading-none">
              <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_10px] shadow-emerald-300/60" />
              Online
            </span>
          </div>
        </ExpandableChatHeader>

        <ExpandableChatBody className="bg-muted/40 pb-5 pt-3 sm:pb-6 sm:pt-6">
          <ChatMessageList
            ref={messageListRef}
            className="flex h-full flex-col gap-4 overflow-y-auto px-4"
          >
            {messages.map((message) => {
              const isUser = message.role === "user";
              return (
                <ChatBubble
                  key={message.id}
                  variant={isUser ? "sent" : "received"}
                  className="flex-col gap-1"
                >
                  <span
                    className={cn(
                      "text-xs font-medium uppercase tracking-wide text-muted-foreground",
                      isUser ? "self-end" : "self-start",
                    )}
                  >
                    {isUser ? "You" : "DFY AI Counsellor"}
                  </span>
                  <ChatBubbleMessage
                    variant={isUser ? "sent" : "received"}
                    className={cn(
                      "leading-relaxed",
                      isUser
                        ? ""
                        : "bg-background text-foreground shadow-sm ring-1 ring-border/60",
                    )}
                  >
                    <ReactMarkdown components={markdownComponents}>
                      {message.content.trim()}
                    </ReactMarkdown>
                  </ChatBubbleMessage>
                </ChatBubble>
              );
            })}

            {isLoading && (
              <ChatBubble variant="received" className="flex-col gap-1">
                <span className="self-start text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  DFY AI Counsellor
                </span>
                <ChatBubbleMessage
                  variant="received"
                  isLoading
                  className="bg-background shadow-sm ring-1 ring-border/60"
                />
              </ChatBubble>
            )}

            {shouldShowQuickPrompts && (
              <div className="flex w-full flex-col gap-3 pt-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Try an AI counsellor prompt
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickPrompts.map((prompt) => (
                    <Button
                      key={prompt.id}
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={isLoading}
                      onClick={() => void submitMessage(prompt.prompt)}
                      className="rounded-full border-dashed text-xs"
                    >
                      <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
                      {prompt.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter className="border-0 bg-background/95 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 backdrop-blur supports-[backdrop-filter]:bg-background/70 sm:pb-4">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="relative rounded-lg border bg-background/80 shadow-sm focus-within:ring-1 focus-within:ring-primary">
              <ChatInput
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask the AI counsellor about reporting, safety tips, or support resources."
                rows={3}
                disabled={isLoading}
                className="min-h-[88px] resize-none border-0 bg-transparent px-3 py-3 text-sm focus-visible:ring-0"
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[11px] text-muted-foreground">
                {isLoading
                  ? "AI counsellor is thinking…"
                  : "Press Enter to send • Shift + Enter for a new line"}
              </span>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                {error && (
                  <span className="max-w-[220px] text-[11px] font-medium text-destructive">
                    {error}
                  </span>
                )}
                <Button
                  type="submit"
                  size="sm"
                  disabled={isLoading || input.trim().length === 0}
                  className="gap-1.5"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Thinking…
                    </>
                  ) : (
                    <>
                      Ask counsellor
                      <CornerDownLeft className="h-3.5 w-3.5" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </div>
  );
}
