import React from 'react';
import Header from '../../components/Header';
import EnhancedFooter from '../../components/EnhancedFooter';
import FAQIntro from './FAQIntro';
import FAQAccordion from './FAQAccordion';
import MythsVsFacts from './MythsVsFacts';

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            
            <main className="pt-20">
                {/* FAQ Intro Section */}
                <FAQIntro />
                
                {/* FAQ Accordion Section */}
                <FAQAccordion />
                
                {/* Myths vs Facts Section */}
                <MythsVsFacts />
            </main>
            
            <EnhancedFooter />
        </div>
    );
}
