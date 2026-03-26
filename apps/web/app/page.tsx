import { AboutCastorSection } from "@/app/hero/about";
import { Hero } from "@/app/hero/hero";
import { OurServices } from "@/app/hero/ourservices";
import { HealthcareCareers } from "@/app/hero/healthcare-careers";
import { ProviderReferral } from "@/app/hero/provider-referral";
import { MedicalSupplies } from "@/app/hero/medical-supplies";
import { JoinOurTeam } from "@/app/hero/join-our-team";
import { Testimonials } from "@/app/hero/testimonials";
import { CTA } from "@/app/hero/cta";

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
