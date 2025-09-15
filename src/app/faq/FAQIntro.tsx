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
                    
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        Answers to the questions we hear most often. If your question is not here, 
                        email{' '}
                        <a 
                            href="mailto:support@drugsfreeyouth.org"
                            className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200 inline-flex items-center gap-1"
                        >
                            <Mail className="h-4 w-4" />
                            support@drugsfreeyouth.org
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQIntro;
