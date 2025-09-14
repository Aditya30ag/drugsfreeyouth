import React from 'react';
import Header from '../../components/Header';
import EnhancedFooter from '../../components/EnhancedFooter';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ReportingSection from './ReportingSection';
import InstitutionalPartners from './InstitutionalPartners';
import SocialFollow from './SocialFollow';
import PrivacyNote from './PrivacyNote';
import QuickLinks from './QuickLinks';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            
            <main>
                {/* Hero Section */}
                <ContactHero />
                
                {/* Contact Information */}
                <ContactInfo />
                
                {/* Anonymous Reporting Section */}
                <ReportingSection />
                
                {/* Institutional Partners */}
                <InstitutionalPartners />
                
                {/* Privacy Assurance */}
                <PrivacyNote />
                
                {/* Quick Links */}
                <QuickLinks />
                
                {/* Social Media & Follow */}
                <SocialFollow />
                
            </main>
            
            <EnhancedFooter />
        </div>
    );
}
