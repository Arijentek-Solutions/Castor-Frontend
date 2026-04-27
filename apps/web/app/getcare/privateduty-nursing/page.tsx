import { PrivateDutyHero } from "./private-duty-hero";
import AboutHomeNursing from "./abouthome-nursing";
import CountiesWeServe from "./counties-we-serve";
import WhyCastor from "./why-castor";
import OurHomeNursingService from "./our-home-nursing-service";
import OurSkilledProfs from "./our-skilled-profs";
import LearnMore from "./learn-more";

export const metadata = {
  title: "Private Duty Nursing | Castor Healthcare",
  description: "Specialized, long-term nursing care for medically fragile children and adults in the comfort of home.",
};

export default function PrivateDutyNursingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PrivateDutyHero />
      <AboutHomeNursing />
      <CountiesWeServe />
      <WhyCastor />
      <OurHomeNursingService />
      <OurSkilledProfs />
      <LearnMore />
    </main>
  );
}
