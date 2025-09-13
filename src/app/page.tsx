import Header from '../component/Header';
import LogoSection from '../component/LogoSection';
import HeroBanner from '../component/HeroBanner';
import QRCodeSection from '../component/QRCodeSection';
import AwakeParentsCampaign from '../component/AwakeParentsCampaign';
import StatsSection from '../component/StatsSection';
import VolunteerSection from '../component/VolunteerSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <LogoSection />
      <HeroBanner />
      <QRCodeSection />
      <AwakeParentsCampaign />
      <StatsSection />
      <VolunteerSection />
    </div>
  );
}
