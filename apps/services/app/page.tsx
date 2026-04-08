import { GetCareHero } from "./hero/get-care-hero";
import { OurServices } from "./hero/ourservices";
import WhyChooseUs from "./hero/why-choose-us";
import CareStorySection from "./hero/care-story-section";
import DedicatedCare from "./hero/dedicated-care";
import MissionVision from "./hero/mission-vision";
import Testimonials from "./hero/testimonials";
import HomeCTA from "./hero/home-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)]">
          <GetCareHero />
          <DedicatedCare />
          <WhyChooseUs/>
          <OurServices />
          <CareStorySection />
          <MissionVision />
          <Testimonials />
          <HomeCTA />
    </main>
  );
}