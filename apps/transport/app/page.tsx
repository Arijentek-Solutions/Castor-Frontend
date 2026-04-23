"use client";
import { Hero } from "./hero/hero";
import { TransportFor } from "./hero/transport-for";
import { WelcomeSection } from "./hero/welcome-section";
import { MissionSection } from "./hero/mission-section";
import { VisionSection } from "./hero/vision-section";
import { HowItWorksSection } from "./hero/how-it-works-section";
import { CTASection } from "./hero/cta-section";
import { ServiceCoverage } from "./service-coverage/service-coverage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)] transition-colors duration-500">
      <Hero />
      <TransportFor />
      <WelcomeSection />
      <MissionSection />
      <VisionSection />
      <HowItWorksSection />
      <CTASection />
      <ServiceCoverage />
    </main>
  );
}

