import { AboutCastorSection } from "./hero/about";
import { Hero } from "./hero/hero";
import { OurServices } from "./hero/ourservices";
import { HealthcareCareers } from "./hero/healthcare-careers";
import { ProviderReferral } from "./hero/provider-referral";
import { MedicalSupplies } from "./hero/medical-supplies";
import { JoinOurTeam } from "./hero/join-our-team";
import { Testimonials } from "./hero/testimonials";
import { CTA } from "./hero/cta";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <main className="flex-grow">
        <Hero />
        <AboutCastorSection />
        <OurServices />
        <HealthcareCareers />
        <MedicalSupplies />
        <ProviderReferral />
        <JoinOurTeam />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
