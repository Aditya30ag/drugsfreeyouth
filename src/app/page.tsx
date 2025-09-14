import Header from '../component/Header';
import HeroBanner from '../component/HeroBanner';
import QRCodeSection from '../component/QRCodeSection';
import ImpactSnapshot from '../component/ImpactSnapshot';
import CampaignPillars from '../component/CampaignPillars';
import SuccessStories from '../component/SuccessStories';
import ResourcesEducation from '../component/ResourcesEducation';
import PartnersEndorsements from '../component/PartnersEndorsements';
import StatsSection from '../component/StatsSection';
import EnhancedFooter from '../component/EnhancedFooter';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Header Navigation */}
      <Header />
      
      {/* 3. Enhanced Hero Banner with Mission Statement + Video + Multiple CTAs */}
      <HeroBanner />
      
      {/* 4. QR Code Section for Instant Reporting */}
      <QRCodeSection />
      
      {/* 5. Impact Snapshot - Why This Matters (NEW) */}
      <ImpactSnapshot />
      
      {/* 6. Campaign Pillars - Our 4 Pillars of Action (Enhanced) */}
      <CampaignPillars />
      
      {/* 7. Stats Section - Achievements */}
      <StatsSection />
      
      {/* 8. Success Stories & Testimonials (NEW) */}
      <SuccessStories />
      
      
      {/* 10. Resources & Education - Guides + Myths vs Facts + Helplines (NEW) */}
      <ResourcesEducation />
      
      {/* 11. Partners & Endorsements - Credibility & Trust (NEW) */}
      <PartnersEndorsements />
      
      {/* 12. Enhanced Footer with Multiple CTAs */}
      <EnhancedFooter />
    </div>
  );
}
