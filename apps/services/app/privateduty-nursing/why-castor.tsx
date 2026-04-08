"use client";

import { motion } from "framer-motion";

export default function WhyCastor() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[1216px]"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-10 tracking-[-0.48px] max-w-[500px]">
            Why Choose Castor?
          </h2>
          <div className="max-w-[1215px]">
            <p className="text-[18px] leading-[1.65] text-[#6a6a67] font-normal">
              Castor offers convenient, affordable, and high-quality home nursing care delivered by highly trained professionals. Their team is skilled in using advanced medical equipment, providing therapies, and performing background and reference checks, and verified experience. All staff provide hospital-level care at home. Castor&apos;s services are tailored to medical, personal, natural, financial, and emotional needs. Families also get relief from caregiving responsibilities, while patients benefit from improved comfort, healing, independence, and peace of mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
