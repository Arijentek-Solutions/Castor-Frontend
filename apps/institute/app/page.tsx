"use client";

import { useState } from "react";

import { B2BSection } from "./b2b-section/b2b-section";
import { FaqSection } from "./faq-section/faq-section";
import { Hero } from "./hero/hero";
import { JourneySection } from "./journey-section/journey-section";
import { StudentSection } from "./student-section/student-section";

export default function Home() {
  const [audience, setAudience] = useState<"students" | "facilities">(
    "students",
  );

  return (
    <main className="min-h-screen bg-[var(--page-background)]">
      <Hero />
      {audience === "students" ? (
        <>
          <StudentSection onSelectAudience={setAudience} />
          <JourneySection />
          <FaqSection />
        </>
      ) : (
        <B2BSection onSelectAudience={setAudience} />
      )}
    </main>
  );
}
