"use client";

import { useEffect, useState } from "react";
import { Bot, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const ScrollCounsellorPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasDismissed) {
        return;
      }

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) {
        return;
      }

      const scrollProgress = (scrollTop / docHeight) * 100;

      if (scrollProgress >= 30) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasDismissed]);

  useEffect(() => {
    const handleChatOpened = () => {
      setIsVisible(false);
      setHasDismissed(true);
    };

    window.addEventListener("dfy-chat-opened", handleChatOpened);

    return () => {
      window.removeEventListener("dfy-chat-opened", handleChatOpened);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);
  };

  const handleOpenCounsellor = () => {
    window.dispatchEvent(new Event("dfy-open-chat"));
    setIsVisible(false);
    setHasDismissed(true);
  };

  if (!isVisible || hasDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-28 right-5 z-[60] w-[min(320px,90vw)] rounded-2xl border border-primary/30 bg-background/95 p-4 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex items-start gap-3">
        <span className="rounded-xl bg-primary/15 p-2 text-primary">
          <Bot className="h-5 w-5" />
        </span>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-semibold text-foreground">Need quick guidance?</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Chat with our AI counsellor for anonymous tips on reporting, staying safe, and helping friends.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Button size="sm" className="gap-1.5" onClick={handleOpenCounsellor}>
              <Sparkles className="h-3.5 w-3.5" />
              Try AI Counsellor
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDismiss}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCounsellorPrompt;
