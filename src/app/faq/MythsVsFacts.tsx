"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MythFactCardProps {
    myth: string;
    fact: string;
    isOpen: boolean;
    onToggle: () => void;
}

const MythFactCard: React.FC<MythFactCardProps> = ({
    myth,
    fact,
    isOpen,
    onToggle,
}) => {
    return (
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <button
                className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors duration-200 flex items-start justify-between gap-4"
                onClick={onToggle}
            >
                <div className="flex-1">
                    <div className="flex items-start gap-3">
                        <span className="text-sm font-semibold text-destructive bg-destructive/10 px-2 py-1 rounded">
                            MYTH
                        </span>
                        <p className="text-foreground font-medium text-left">{myth}</p>
                    </div>
                </div>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                )}
            </button>
            
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-6 pb-4">
                    <div className="flex items-start gap-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                            FACT
                        </span>
                        <p className="text-muted-foreground leading-relaxed">{fact}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MythsVsFacts = () => {
    const [openCards, setOpenCards] = useState<Set<number>>(new Set());

    const toggleCard = (index: number) => {
        setOpenCards((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const mythFactItems = [
        {
            myth: "Only hard drugs are dangerous.",
            fact: "Even occasional use of some substances can cause irreversible harm, especially in developing brains."
        },
        {
            myth: "Kids will grow out of it.",
            fact: "Early use increases the risk of long-term addiction. Early intervention improves outcomes."
        },
        {
            myth: "Reporting a user will ruin their life.",
            fact: "Responsible reporting connects people to health services and can save lives. The goal is treatment, not punishment."
        },
        {
            myth: "Only certain economic groups use drugs.",
            fact: "Drug use crosses all socio-economic lines. Prevention must be universal."
        },
        {
            myth: "Talking about drugs encourages use.",
            fact: "Open, factual conversations reduce curiosity-driven experimentation and promote safety."
        },
        {
            myth: "Rehab always means incarceration.",
            fact: "Many treatment programs are medical and therapeutic and prioritize recovery over punishment."
        },
        {
            myth: "If someone relapses, treatment failed.",
            fact: "Relapse can be part of recovery. It signals a need for adjusted support, not failure."
        },
        {
            myth: "You must be addicted to need help.",
            fact: "Early support for experimentation or harmful patterns prevents escalation."
        },
        {
            myth: "Parents are to blame when kids use drugs.",
            fact: "Drug use results from multiple factors. Blame is unhelpful; action and support are effective."
        },
        {
            myth: "Narcan/naloxone is dangerous for non-users.",
            fact: "Naloxone is safe to administer in suspected overdose and can save lives."
        },
        {
            myth: "Therapy always takes years.",
            fact: "Evidence-based short-term interventions exist and can start helping quickly."
        },
        {
            myth: "Only illegal drugs are a problem.",
            fact: "Misuse of prescription medications also carries high risk and requires attention."
        },
        {
            myth: "Addiction is a moral failure.",
            fact: "Addiction is a medical issue influenced by biology, environment, and social factors."
        },
        {
            myth: "Once someone is in recovery, they are fine.",
            fact: "Recovery requires ongoing support and community reintegration."
        },
        {
            myth: "Only the police can stop peddlers.",
            fact: "Community vigilance and anonymous reporting are vital inputs that trigger enforcement."
        },
        {
            myth: "Talking to kids means threatening punishment.",
            fact: "Effective conversations focus on safety, boundaries, and support — not threats."
        }
    ];

    return (
        <section className="py-16 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Myths vs Facts
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Rapid corrections to the most persistent myths. Share these with your community.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mythFactItems.map((item, index) => (
                        <MythFactCard
                            key={index}
                            myth={item.myth}
                            fact={item.fact}
                            isOpen={openCards.has(index)}
                            onToggle={() => toggleCard(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MythsVsFacts;
