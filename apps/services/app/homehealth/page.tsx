import { HomeHealthHero } from "./home-health-hero";
import { AboutUs } from "./about-us";
import { ComprehensiveServices } from "./comprehensive-services";
import { HomeHealthServices } from "./home-health-services";
import { CountiesServe } from "./counties-serve";
import { WhyChoose } from "./why-choose";
import { ProfessionalsSection } from "./professionals-section";
import { HomeHealthCTA } from "./home-health-cta";

export default function HomeHealthPage() {
  return (
    <main className="min-h-screen bg-white">
      <HomeHealthHero />
      <AboutUs />
      <CountiesServe />
      <WhyChoose />
      <HomeHealthServices />
      <ComprehensiveServices />
      <ProfessionalsSection />
      <HomeHealthCTA />
    </main>
  );
}
