import React from 'react';
import Header from '../../components/Header';
import EnhancedFooter from '../../components/EnhancedFooter';
import ResourcesHero from './ResourcesHero';
import ResourceOverview from './ResourceOverview';
import ResourceTiles from './ResourceTiles';
import FAQIntro from './FAQIntro';
import FAQAccordion from './FAQAccordion';
import MythsVsFacts from './MythsVsFacts';

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            
            <main className="pt-20">
                {/* Resources Hero Section */}
                <ResourcesHero />
                
                {/* Resource Overview Section */}
                <ResourceOverview />
                
                {/* Quick Resource Tiles Section */}
                <ResourceTiles />
                
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
