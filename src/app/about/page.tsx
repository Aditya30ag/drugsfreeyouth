import Header from '../../components/Header';
import AboutHero from '../../components/AboutHero';
import MissionVision from '../../components/MissionVision';
import OurStory from '../../components/OurStory';
import WhyThisMatters from '../../components/WhyThisMatters';
import HowWeWork from '../../components/HowWeWork';
import FounderProfile from '../../components/FounderProfile';
import ImpactNumbers from '../../components/ImpactNumbers';
import Partnerships from '../../components/Partnerships';
import LookingAhead from '../../components/LookingAhead';
import EnhancedFooter from '@/components/EnhancedFooter';
import AboutImageSlider from '@/components/AboutImageSlider';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <AboutImageSlider />
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
