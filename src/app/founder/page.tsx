import Header from '../../components/Header';
import FounderHero from '../../components/FounderHero';
import EntrepreneurshipJourney from '../../components/EntrepreneurshipJourney';
import DrugsFreeYouthVision from '../../components/DrugsFreeYouthVision';
import LeadershipPhilosophy from '../../components/LeadershipPhilosophy';
import FounderImpact from '../../components/FounderImpact';
import FounderMessage from '../../components/FounderMessage';
import BeyondSocialChange from '../../components/BeyondSocialChange';
import FounderInvitation from '../../components/FounderInvitation';
import EnhancedFooter from '@/components/EnhancedFooter';

export default function Founder() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FounderHero />
      <EntrepreneurshipJourney />
      <DrugsFreeYouthVision />
      <LeadershipPhilosophy />
      <FounderImpact />
      <FounderMessage />
      <BeyondSocialChange />
      <FounderInvitation />
      <EnhancedFooter/>
    </div>
  );
}
