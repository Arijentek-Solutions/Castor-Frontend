import { GetCareHero } from "./hero/get-care-hero";
import { OurServices } from "./hero/ourservices";
import { HowToRequestCare } from "./hero/HowToRequestCare";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)]">
          <GetCareHero />
          <OurServices />
          <HowToRequestCare />
    </main>
  );
}