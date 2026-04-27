"use client";

import { motion } from "framer-motion";

export function PediatricWhyChoose() {
  return (
    <section className="bg-white py-24 px-8 sm:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-8"
        >
          <div className="w-full">
            <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] tracking-[-0.02em] text-[#0e1b33] sm:text-[48px]">
              Why Choose Castor?
            </h2>
          </div>
          <div className="w-full">
            <p className="font-['Inter'] text-[18px] font-normal leading-[1.625] text-[#6a6a67] max-w-[1209px]">
              Castor Home Nursing&apos;s Pediatric division delivers high quality, compassionate 24/7 home care through highly trained nurses who provide assessments, vital monitoring, sample collection, and coordinated care with physicians. With flexible nurse scheduling, over 30 years of pediatric experience, and complete transparency for families and payors, we ensure reliable support at home. Our fully electronic charting system, routine supervisory reviews, and quarterly audits maintain accuracy and quality, enabling us to quickly provide required documentation within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
