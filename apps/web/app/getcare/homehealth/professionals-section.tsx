"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProfessionalsSection() {
  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden px-8 lg:px-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/2] w-full">
              <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/getcare/home-health/image2.jpg"
                  alt="Our Skilled and Trained Professionals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10 order-1 lg:order-2 flex flex-col gap-8"
          >
            <div>
              <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] text-[#0e1b33] sm:text-[48px] tracking-tight">
                Our Skilled and Trained Professionals
              </h2>
            </div>
            
            <p className="font-['Inter'] text-[18px] font-normal leading-[1.625] text-[#6a6a67] max-w-[600px]">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
