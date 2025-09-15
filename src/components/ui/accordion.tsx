"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-between"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 bg-muted/50 text-muted-foreground">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export { Accordion, AccordionItem };
