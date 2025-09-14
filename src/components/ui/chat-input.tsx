import React from "react";
import { cn } from "@/lib/utils";

type ChatInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function ChatInput({ className, rows = 2, ...props }: ChatInputProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "block w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}
