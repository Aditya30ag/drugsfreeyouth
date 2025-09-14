import Header from '../../component/Header';
import AboutHero from '../../component/AboutHero';
import MissionVision from '../../component/MissionVision';
import OurStory from '../../component/OurStory';
import WhyThisMatters from '../../component/WhyThisMatters';
import HowWeWork from '../../component/HowWeWork';
import FounderProfile from '../../component/FounderProfile';
import ImpactNumbers from '../../component/ImpactNumbers';
import Partnerships from '../../component/Partnerships';
import LookingAhead from '../../component/LookingAhead';
import EnhancedFooter from '@/component/EnhancedFooter';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <MissionVision />
      <OurStory />
      <WhyThisMatters />
      <HowWeWork />
      <FounderProfile />
      <ImpactNumbers />
      <Partnerships />
      <LookingAhead />
      <EnhancedFooter/>
    </div>
  );
}
