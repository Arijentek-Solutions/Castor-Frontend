"use client";

import { motion } from "framer-motion";

export function ProfessionalsSection() {
  return (
    <section className="bg-white py-24 px-8 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="w-full">
            <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] text-[#0e1b33] sm:text-[48px] tracking-tight">
              Our Skilled and Trained Professionals
            </h2>
          </div>
          <div className="w-full max-w-[1208px]">
            <p className="font-['Inter'] text-[18px] font-normal leading-[1.625] text-[#6a6a67]">
              Our interdisciplinary in-home care team including skilled nurses,
              physical and occupational therapists, speech-language
              pathologists, and home health aides delivers comprehensive,
              patient-centered support designed to enhance health, mobility,
              communication, and daily functioning. By providing high-quality
              clinical care and personalized assistance within the comfort of
              home, we help reduce rehospitalizations, minimize the need for
              facility-based care, and empower patients to maintain
              independence, confidence, and overall well-being.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
