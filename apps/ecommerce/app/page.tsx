"use client";

import { Hero } from "./hero/hero";
import { RentalsBanner } from "./hero/rentals-banner";
import { WelcomeSection } from "./hero/welcome-section";
import { BrandMarquee } from "./hero/brand-marquee";
import { Footer } from "@castor/ui";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <main className="w-full pt-[140px] sm:pt-[148px] lg:pt-[172px]">
        <Hero />
        <RentalsBanner />
        <WelcomeSection />
        <BrandMarquee />
      </main>
      <Footer />
    </div>
  );
}

