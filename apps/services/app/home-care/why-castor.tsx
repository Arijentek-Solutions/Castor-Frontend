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
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-10 tracking-[-0.48px]">
            Why Choose Castor?
          </h2>
          <div className="space-y-8 max-w-[1215px]">
            <p className="text-[18px] leading-[1.65] text-[#6a6a67] font-normal">
              Castor brings over 30 years of trusted service to both rural and suburban communities, supported by a team of 100+ highly trained caregivers dedicated to promoting independence, safety, and an enhanced quality of life. Caring for others is not just our responsibility—it&apos;s our passion.
            </p>
            <p className="text-[18px] leading-[1.65] text-[#6a6a67] font-normal">
              A key strength of Castor&apos;s approach is the intentional matching of caregivers to clients. Through detailed assessments and continuous communication, we ensure each caregiver aligns with the client&apos;s needs, preferences, and personality. This thoughtful pairing fosters meaningful relationships, often allowing caregivers to become like extended family, creating a supportive and truly impactful care experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
