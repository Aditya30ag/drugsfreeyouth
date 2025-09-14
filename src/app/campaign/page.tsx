import Header from '../../components/Header';
import EnhancedFooter from '../../components/EnhancedFooter';
import CampaignHero from '../../components/CampaignHero';
import MovementSection from '../../components/MovementSection';
import FourPillars from '../../components/FourPillars';
import QRInnovation from '../../components/QRInnovation';
import CampaignPartnerships from '../../components/CampaignPartnerships';
import CampaignImpact from '../../components/CampaignImpact';
import WhyDifferent from '../../components/WhyDifferent';

export default function Campaign() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CampaignHero />
      <MovementSection />
      <FourPillars />
      <QRInnovation />
      <CampaignPartnerships />
      <CampaignImpact />
      <WhyDifferent />
      <EnhancedFooter />
    </div>
  );
}
