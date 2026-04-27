"use client";

import { motion } from "framer-motion";

export default function OurSkilledProfs() {
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
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-10 tracking-[-0.48px] max-w-[900px]">
            Our Skilled and Trained Professionals
          </h2>
          <div className="max-w-[1210px]">
            <p className="text-[18px] leading-[1.65] text-[#6a6a67] font-normal">
              Castor&apos;s private duty nursing team includes highly skilled RNs, LPNs, and CNAs. The agency follows strict hiring standards—employee referrals, drug-free policy with testing, multi-step interviews, thorough background and reference checks, and verified experience. All staff receive in-home training, electronic charting training, continuous education through 350+ online courses, competitive compensation for retention, and access to Castor&apos;s medical supplies and custom training from Castor&apos;s Health Institute.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
