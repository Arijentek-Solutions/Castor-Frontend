"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const professionals = [
  "Referral Preference",
  "Drug-Free Environment",
  "Thorough Screening",
  "Comprehensive Training",
  "Ongoing Education",
  "Competitive Compensation",
];

export default function VeteranTrainProfs() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] tracking-[-0.13px]">
            Our Skilled and Trained Professionals
          </h2>
        </motion.div>

        {/* Badges Grid - Card Style Container */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-white border-2 border-[#f3f4f6] rounded-[32px] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-gradient-to-br from-[#dbf2f2] to-white border border-[#20a9ad33] rounded-[14px] px-6 py-5 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex-shrink-0 size-6 bg-[#20a9ad] rounded-full flex items-center justify-center">
                  <Check className="size-4 text-white stroke-[3px]" />
                </div>
                <span className="text-[16px] font-bold text-[#0e1b33] tracking-[-0.31px]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
