"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const mobileBreakpoint = 640;

export type ChatPosition = "bottom-right" | "bottom-left";
export type ChatSize = "sm" | "md" | "lg" | "xl" | "full";

const chatConfig = {
  dimensions: {
    sm: "sm:max-w-sm sm:max-h-[500px]",
    md: "sm:max-w-md sm:max-h-[600px]",
    lg: "sm:max-w-lg sm:max-h-[700px]",
    xl: "sm:max-w-xl sm:max-h-[800px]",
    full: "sm:w-full sm:h-full",
  },
  positions: {
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
  },
  chatPositions: {
    "bottom-right": "sm:bottom-[calc(100%+10px)] sm:right-0",
    "bottom-left": "sm:bottom-[calc(100%+10px)] sm:left-0",
  },
  states: {
    open: "pointer-events-auto opacity-100 visible scale-100 translate-y-0",
    closed:
      "pointer-events-none opacity-0 invisible translate-y-full sm:translate-y-5 sm:scale-95",
  },
};

interface ExpandableChatProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: ChatPosition;
  size?: ChatSize;
  icon?: React.ReactNode;
}

const ExpandableChat: React.FC<ExpandableChatProps> = ({
  className,
  position = "bottom-right",
  size = "md",
  icon,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const originalOverflowRef = useRef<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const panelId = useId();

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleOpen = () => openChat();
    const handleClose = () => closeChat();

    window.addEventListener("dfy-open-chat", handleOpen);
    window.addEventListener("dfy-close-chat", handleClose);

    return () => {
      window.removeEventListener("dfy-open-chat", handleOpen);
      window.removeEventListener("dfy-close-chat", handleClose);
    };
  }, []);

  useEffect(() => {
    const eventName = isOpen ? "dfy-chat-opened" : "dfy-chat-closed";
    window.dispatchEvent(new Event(eventName));
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const body = document.body;

    if (isOpen && isMobile) {
      if (originalOverflowRef.current === null) {
        originalOverflowRef.current = body.style.overflow;
      }
      body.style.overflow = "hidden";
    } else if (!isOpen && originalOverflowRef.current !== null) {
      body.style.overflow = originalOverflowRef.current;
      originalOverflowRef.current = null;
    }

    return () => {
      if (originalOverflowRef.current !== null) {
        body.style.overflow = originalOverflowRef.current;
        originalOverflowRef.current = null;
      }
    };
  }, [isOpen, isMobile]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[70] bg-background/90 backdrop-blur-sm transition-opacity duration-300 sm:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeChat}
        aria-hidden
      />
      <div
        className={cn(`fixed ${chatConfig.positions[position]} z-[90]`, className)}
        {...props}
      >
        <div
          ref={chatRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          className={cn(
            "flex flex-col bg-background border shadow-xl overflow-hidden transition-transform duration-300 ease-out sm:absolute sm:w-[90vw] sm:h-[80vh]",
            isMobile
              ? "fixed inset-x-0 bottom-0 top-[max(1.5rem,env(safe-area-inset-top))] w-full rounded-t-3xl"
              : "sm:rounded-lg",
            chatConfig.chatPositions[position],
            chatConfig.dimensions[size],
            isOpen ? chatConfig.states.open : chatConfig.states.closed,
            className,
          )}
        >
          {children}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 sm:hidden"
            onClick={closeChat}
            type="button"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <ExpandableChatToggle
          icon={icon}
          isOpen={isOpen}
          toggleChat={toggleChat}
          aria-controls={panelId}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          className={cn(
            "sm:shadow-lg",
            isMobile && isOpen ? "opacity-0 pointer-events-none" : "",
          )}
        />
      </div>
    </>
  );
};

ExpandableChat.displayName = "ExpandableChat";

const ExpandableChatHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex items-center justify-between p-4 border-b", className)}
    {...props}
  />
);

ExpandableChatHeader.displayName = "ExpandableChatHeader";

const ExpandableChatBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("flex-grow overflow-y-auto", className)} {...props} />;

ExpandableChatBody.displayName = "ExpandableChatBody";

const ExpandableChatFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("border-t p-4", className)} {...props} />;

ExpandableChatFooter.displayName = "ExpandableChatFooter";

interface ExpandableChatToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  isOpen: boolean;
  toggleChat: () => void;
}

const ExpandableChatToggle: React.FC<ExpandableChatToggleProps> = ({
  className,
  icon,
  isOpen,
  toggleChat,
  ...props
}) => {
  const { ["aria-label"]: ariaLabelProp, title, ...rest } = props;
  const computedLabel = ariaLabelProp ?? (isOpen ? "Close chat" : "Open chat");
  const computedTitle = title ?? (isOpen ? "Close chat" : "Open chat");

  return (
    <Button
      variant="default"
      onClick={toggleChat}
      type="button"
      className={cn(
        "w-14 h-14 rounded-full shadow-md flex items-center justify-center hover:shadow-lg hover:shadow-black/30 transition-all duration-300",
        className,
        isOpen ? "bg-primary text-primary-foreground" : "",
      )}
      aria-label={computedLabel}
      title={computedTitle}
      {...rest}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        icon || <MessageCircle className="h-6 w-6" />
      )}
    </Button>
  );
};

ExpandableChatToggle.displayName = "ExpandableChatToggle";

export {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
};
