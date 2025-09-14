import Header from '../../component/Header';
import LogoSection from '../../component/LogoSection';
import EnhancedFooter from '../../component/EnhancedFooter';
import CampaignHero from '../../component/CampaignHero';
import MovementSection from '../../component/MovementSection';
import FourPillars from '../../component/FourPillars';
import QRInnovation from '../../component/QRInnovation';
import CampaignPartnerships from '../../component/CampaignPartnerships';
import CampaignImpact from '../../component/CampaignImpact';
import WhyDifferent from '../../component/WhyDifferent';

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
