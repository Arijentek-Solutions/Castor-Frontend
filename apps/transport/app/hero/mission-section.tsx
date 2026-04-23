"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MissionSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[360px] w-full max-w-[520px] overflow-hidden rounded-[24px]"
          >
            <Image
              src="/images/hero/Image2.png"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[580px]"
          >
            <h2 className="text-[36px] font-bold tracking-tight text-[#0e1b33] sm:text-[40px]">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6a6a67]">
              Guided by compassion and excellence, our mission is to enhance lives through an integrated network of patient-centered services. We ensure safe access to medical appointments, provide personalized home care, supply essential medical products, and offer educational resources that promote confident, informed health.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
