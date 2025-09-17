import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ChatInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const ChatInput = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ className, rows = 2, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "block w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      />
    );
  },
);

ChatInput.displayName = "ChatInput";

export { ChatInput };
