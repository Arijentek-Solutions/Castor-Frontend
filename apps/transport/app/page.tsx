"use client";
import { FleetSection } from "./fleet-section/fleet-section";
import { HowItWorks } from "./how-it-works/how-it-works";
import { Hero } from "./hero/hero";
import { ServiceCoverage } from "./service-coverage/service-coverage";
import { Disclaimer } from "./disclaimer/disclaimer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)] transition-colors duration-500">
      <Hero />
      <FleetSection />
      <HowItWorks />
      <ServiceCoverage />
      <Disclaimer />
    </main>
  );
}
