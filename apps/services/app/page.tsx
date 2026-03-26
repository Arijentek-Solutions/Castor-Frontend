import { GetCareHero } from "./hero/get-care-hero";
import { OurServices } from "./hero/ourservices";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)]">
      <section id="getcare" aria-label="Get care page">
        <section id="hero" aria-label="Get care hero">
          <GetCareHero />
        </section>
        <section id="services" aria-label="Our services">
          <OurServices />
        </section>
      </section>
    </main>
  );
}
