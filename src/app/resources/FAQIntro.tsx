import React from 'react';
import { Mail } from 'lucide-react';

const FAQIntro = () => {
    return (
        <section className="pt-16 bg-gradient-to-b from-background to-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
                        FAQ
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                    
                    {/* New Intro Paragraph */}
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
                        If you&apos;re worried or you&apos;ve seen something suspicious — thank you for caring. 
                        This FAQ explains how to report, what happens next, how we protect your privacy, 
                        and exactly how to help a child you suspect is using drugs. If your situation is 
                        an immediate emergency, call local emergency services now.
                    </p>

                    {/* Existing Email Line */}
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        Answers to the questions we hear most often. If your question is not here, 
                        email{' '}
                        <a 
                            href="mailto:support@makeachangefoundation.in"
                            className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200 inline-flex items-center gap-1"
                        >
                            <Mail className="h-4 w-4" />
                            support@makeachangefoundation.in
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQIntro;
