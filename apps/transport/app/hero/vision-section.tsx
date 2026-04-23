"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisionSection() {
  return (
    <section className="bg-[#f0f9fa] px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[580px]"
          >
            <h2 className="text-[36px] font-bold tracking-tight text-[#0e1b33] sm:text-[40px]">
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6a6a67]">
              To become the leading provider of non-emergency medical transportation in Illinois and beyond—recognized for accessibility, safety, dignity, and compassionate service—while bridging the gap between healthcare and the people who need it most.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[360px] w-full max-w-[520px] overflow-hidden rounded-[40px] shadow-xl lg:justify-self-end"
          >
             <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/hero/Image3.png"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
