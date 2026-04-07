"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutPediatricNursing() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1276px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#0e1b33] leading-[1.1] mb-8 tracking-tight">
              About Pediatric Nursing Services
            </h2>
            <div className="space-y-6">
              <p className="text-[17px] sm:text-[18px] text-[#6a6a67] font-medium leading-[1.625]">
                Castor specializes in Pediatric Home Nursing, delivering complex, medically necessary skilled care to children in the comfort and safety of their homes. Our highly trained RNs and LPNs provide fee for service nursing support for medically fragile and technology dependent children, with eligibility often available through private insurance or state programs.
              </p>
              <p className="text-[17px] sm:text-[18px] text-[#6a6a67] font-medium leading-[1.625]">
                As an approved provider for the Division of Specialized Care for Children (DSCC), we ensure access to high quality care regardless of family income. Our Intake Nursing Coordinator guides families through the eligibility and enrollment process, working closely with DSCC to develop a personalized care plan that meets each child&apos;s unique needs.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/about-pediatric.jpg"
                alt="Medical professional with patient"
                fill
                className="object-cover"
              />
            </div>
            {/* Subtle Accent Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[#f0f9fa]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
