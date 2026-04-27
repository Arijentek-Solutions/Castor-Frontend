"use client";
import { Hero } from "./hero/hero";
import { TransportFor } from "./hero/transport-for";
import { WelcomeSection } from "./hero/welcome-section";
import { MissionSection } from "./hero/mission-section";
import { VisionSection } from "./hero/vision-section";
import { HowItWorksSection } from "./hero/how-it-works-section";
import { CTASection } from "./hero/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white transition-colors duration-500">
      <Hero />
      <TransportFor />
      <WelcomeSection />
      <MissionSection />
      <VisionSection />
      <HowItWorksSection />
      <CTASection />
    </main>
  );
}

