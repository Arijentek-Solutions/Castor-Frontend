"use client";

import { useState } from "react";

import { B2BSection } from "./b2b-section/b2b-section";
import { FaqSection } from "./faq-section/faq-section";
import { Hero } from "./hero/hero";
import { JourneySection } from "./journey-section/journey-section";
import { StudentSection } from "./student-section/student-section";
import { AnimatePresence, motion } from "framer-motion";

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M3 9.5L12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 11.5v3.4c0 .5.3 1 .8 1.3 1.2.7 2.7 1.1 4.2 1.1s3-.4 4.2-1.1c.5-.3.8-.8.8-1.3v-3.4" />
      <path d="M21 10v4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M4 20V7.5A1.5 1.5 0 0 1 5.5 6H11v14" />
      <path d="M13 20V4.5A1.5 1.5 0 0 1 14.5 3H19a1 1 0 0 1 1 1v16" />
      <path d="M8 10h.01M8 13h.01M8 16h.01M16 8h.01M16 11h.01M16 14h.01" />
      <path d="M3 20h18" />
    </svg>
  );
}

export default function Home() {
  const [audience, setAudience] = useState<"students" | "facilities">(
    "students",
  );

  return (
    <main className="min-h-screen bg-[var(--page-background)]">
      <Hero />
      
      {/* Persistent Audience Toggle */}
      <div className="flex justify-center pb-8 pt-4">
        <div className="w-full max-w-[512px] rounded-full bg-[#edf7f8] p-1.5 shadow-[inset_0_0_0_1px_rgba(202,228,231,0.8)]">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setAudience("students")}
              className={`flex h-[45px] items-center justify-center gap-2 rounded-full px-5 text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 ${
                audience === "students"
                  ? "bg-white text-[#20a9ad] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                  : "text-[#6a6a67] hover:text-[#20a9ad]"
              }`}
              aria-pressed={audience === "students"}
            >
              <GraduationCapIcon />
              <span>For Students</span>
            </button>
            <button
              type="button"
              onClick={() => setAudience("facilities")}
              className={`flex h-[45px] items-center justify-center gap-2 rounded-full px-5 text-[14px] font-semibold tracking-[-0.01em] transition-all duration-300 ${
                audience === "facilities"
                  ? "bg-white text-[#20a9ad] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                  : "text-[#6a6a67] hover:text-[#20a9ad]"
              }`}
              aria-pressed={audience === "facilities"}
            >
              <BuildingIcon />
              <span>For Facilities (B2B)</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {audience === "students" ? (
          <motion.div
            key="students"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <StudentSection onSelectAudience={setAudience} />
            <JourneySection />
            <FaqSection />
          </motion.div>
        ) : (
          <motion.div
            key="facilities"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <B2BSection onSelectAudience={setAudience} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
