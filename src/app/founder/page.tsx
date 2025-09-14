import Header from '../../component/Header';
import FounderHero from '../../component/FounderHero';
import EntrepreneurshipJourney from '../../component/EntrepreneurshipJourney';
import DrugsFreeYouthVision from '../../component/DrugsFreeYouthVision';
import LeadershipPhilosophy from '../../component/LeadershipPhilosophy';
import FounderImpact from '../../component/FounderImpact';
import FounderMessage from '../../component/FounderMessage';
import BeyondSocialChange from '../../component/BeyondSocialChange';
import FounderInvitation from '../../component/FounderInvitation';

export default function Founder() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FounderHero />
      <EntrepreneurshipJourney />
      <DrugsFreeYouthVision />
      <LeadershipPhilosophy />
      <FounderImpact />
      <FounderMessage />
      <BeyondSocialChange />
      <FounderInvitation />
    </div>
  );
}
