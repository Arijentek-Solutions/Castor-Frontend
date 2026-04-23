"use client";
import { Hero } from "./hero/hero";
import { ServiceCoverage } from "./service-coverage/service-coverage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)] transition-colors duration-500">
      <Hero />
      <ServiceCoverage />

    </main>
  );
}
