"use client";

import { useState } from "react";

import { B2BSection } from "./b2b-section/b2b-section";
import { FaqSection } from "./faq-section/faq-section";
import { Hero } from "./hero/hero";
import { JourneySection } from "./journey-section/journey-section";
import { StudentSection } from "./student-section/student-section";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [audience, setAudience] = useState<"students" | "facilities">(
    "students",
  );

  return (
    <main className="min-h-screen bg-[var(--page-background)]">
      <Hero />
      <AnimatePresence mode="wait">
        {audience === "students" ? (
          <motion.div
            key="students"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <StudentSection onSelectAudience={setAudience} />
            <JourneySection />
            <FaqSection />
          </motion.div>
        ) : (
          <motion.div
            key="facilities"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <B2BSection onSelectAudience={setAudience} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
