import { GetCareHero } from "../components/hero/get-care-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)]">
      <section id="getcare" aria-label="Get care page">
        <section id="hero" aria-label="Get care hero">
          <GetCareHero />
        </section>
      </section>
    </main>
  );
}
