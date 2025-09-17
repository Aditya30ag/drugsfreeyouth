import React from "react";
import { cn } from "@/lib/utils";

type Variant = "sent" | "received";

interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

export function ChatBubble({ variant = "received", className, children, ...props }: ChatBubbleProps) {
  const isSent = variant === "sent";
  return (
    <div
      className={cn(
        "flex w-full items-end gap-3",
        isSent ? "justify-end flex-row-reverse" : "justify-start",
        className,
      )}
      {...props}
    >
      {!isSent && children}
      {isSent && children}
    </div>
  );
}

interface ChatBubbleAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  fallback?: string;
}

export function ChatBubbleAvatar({ src, fallback, className, ...props }: ChatBubbleAvatarProps) {
  return (
    <div className={cn("flex h-8 w-8 items-center justify-center", className)} {...props}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={fallback || "avatar"} className="h-8 w-8 rounded-full object-cover" />
      ) : (
        <div className="h-8 w-8 rounded-full bg-muted text-xs font-medium text-muted-foreground flex items-center justify-center">
          {fallback || ""}
        </div>
      )}
    </div>
  );
}

interface ChatBubbleMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  isLoading?: boolean;
}

export function ChatBubbleMessage({
  variant = "received",
  isLoading = false,
  className,
  children,
  ...props
}: ChatBubbleMessageProps) {
  const isSent = variant === "sent";
  return (
    <div
      className={cn(
        "max-w-[90%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
        isSent
          ? "bg-primary text-primary-foreground"
          : "bg-card text-foreground border border-border/80",
        className,
      )}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-1">
          <span className="size-1.5 animate-bounce rounded-full bg-foreground/70 [animation-delay:-0.2s]"></span>
          <span className="size-1.5 animate-bounce rounded-full bg-foreground/70"></span>
          <span className="size-1.5 animate-bounce rounded-full bg-foreground/70 [animation-delay:0.2s]"></span>
        </span>
      ) : (
        children
      )}
    </div>
  );
}
