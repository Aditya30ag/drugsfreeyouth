import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import QRCodeSection from '../components/QRCodeSection';
import ImpactSnapshot from '../components/ImpactSnapshot';
import AboutSection from '../components/AboutSection';
import CampaignPillars from '../components/CampaignPillars';
import SuccessStories from '../components/SuccessStories';
import FounderMessage from '../components/FounderMessage';
import InitiativeDrivers from '../components/InitiativeDrivers';
import StatsSection from '../components/StatsSection';
import ResourcesEducation from '../components/ResourcesEducation';
import PartnersEndorsements from '../components/PartnersEndorsements';
import EnhancedFooter from '../components/EnhancedFooter';
import ScrollCounsellorPrompt from '../components/ScrollCounsellorPrompt';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollCounsellorPrompt />
      {/* 1. Header Navigation */}
      <Header />
      
      {/* 3. Enhanced Hero Banner with Mission Statement + Video + Multiple CTAs */}
      <HeroBanner />
      
      {/* 4. QR Code Section for Instant Reporting */}
      <QRCodeSection />
      
      {/* 5. Impact Snapshot - Why This Matters (NEW) */}
      <ImpactSnapshot />
      
      {/* 6. About Section - Mission Overview */}
      <AboutSection />
      
      {/* 7. Campaign Pillars - Our 4 Pillars of Action (Enhanced) */}
      <CampaignPillars />
      
      {/* 8. Success Stories & Testimonials (NEW) */}
      <SuccessStories />
      
      {/* 9. Founder Message */}
      <FounderMessage />

      {/* 10. Initiative Drivers */}
      <InitiativeDrivers />

      {/* 11. Stats Section - Achievements */}
      <StatsSection />


      {/* 12. Resources & Education - Guides + Myths vs Facts + Helplines (NEW) */}
      <ResourcesEducation />
      
      {/* 13. Partners & Endorsements - Credibility & Trust (NEW) */}
      <PartnersEndorsements />
      
      {/* 14. Enhanced Footer with Multiple CTAs */}
      <EnhancedFooter />
    </div>
  );
}
