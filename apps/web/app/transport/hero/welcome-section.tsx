"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WelcomeSection() {
  return (
    <section className="bg-[#f0f9fa] px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[600px]"
          >
            <span className="text-lg font-medium text-[#20a9ad]">
              Welcome to
            </span>
            <h2 className="mt-4 text-[36px] font-bold tracking-tight text-[#0e1b33] sm:text-[40px]">
              Castor Medical Transportation
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6a6a67]">
              Based in Sterling, IL, we provide reliable and affordable non-emergency medical transportation. From medical appointments and therapy visits to dialysis, chemotherapy, ophthalmology, nursing home transfers, and hospital discharges, we ensure safe, smooth, and comfortable travel for every patient.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[380px] w-full max-w-[520px] overflow-hidden rounded-[24px] lg:justify-self-end"
          >
            <Image
              src="/images/transport/hero/Image1.png"
              alt="Castor Medical Transportation Vehicle"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
