"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
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

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function AICounsellorChat() {
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

  const systemPrompt = useMemo(
    () =>
      "You are the Drugs Free Youth AI counsellor. Offer clear, compassionate guidance about drug awareness, reporting suspicious activity, community support, and staying safe. Encourage responsible actions and remind users about official reporting channels when appropriate. Keep responses concise and practical.",
    [],
  );

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);

    window.addEventListener("dfy-open-chat", handleOpenChat);
    return () => {
      window.removeEventListener("dfy-open-chat", handleOpenChat);
    };
  }, []);

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

  return (
    <div className="relative h-[600px]">
      <ExpandableChat
        size="lg"
        position="bottom-right"
        icon={<Bot className="h-6 w-6" />}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <ExpandableChatHeader className="flex-col items-start gap-1 text-left">
          <h1 className="text-xl font-semibold">AI Counsellor</h1>
          <p className="text-sm text-muted-foreground">
            Get guidance on reporting, safety, and helping your community stay drug-free.
          </p>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                variant={message.role === "user" ? "sent" : "received"}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  {message.role === "user" ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>
                <ChatBubbleMessage
                  variant={message.role === "user" ? "sent" : "received"}
                >
                  {message.content}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}

            {isLoading && (
              <ChatBubble variant="received">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            )}
            <div ref={messagesEndRef} />
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg border bg-background p-1 focus-within:ring-1 focus-within:ring-ring"
          >
            <ChatInput
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask the AI counsellor..."
              className="min-h-12 resize-none rounded-lg border-0 bg-background p-3 shadow-none focus-visible:ring-0"
              disabled={isLoading}
            />
            <div className="flex items-center justify-end p-3 pt-0">
              <Button
                type="submit"
                size="sm"
                className="gap-1.5"
                disabled={isLoading}
              >
                Send
                <Send className="h-3.5 w-3.5" aria-hidden />
              </Button>
            </div>
          </form>
          {error && (
            <p className="mt-2 text-xs text-destructive">
              {error}
            </p>
          )}
        </ExpandableChatFooter>
      </ExpandableChat>
    </div>
  );
}
