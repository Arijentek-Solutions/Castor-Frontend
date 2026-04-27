"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Local medical appointments",
  "Hospital discharges",
  "Long-distance medical trips",
  "Dialysis center transportation",
  "Physical therapy sessions",
  "Specialist consultations",
];

export function TransportFor() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] font-bold tracking-tight text-[#0e1b33] sm:text-[44px]"
          >
            We Transport For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-[#6a6a67]"
          >
            Comprehensive coverage for all types of medical appointments and healthcare needs
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service}
              variants={itemVariants}
              className="flex items-center gap-3 rounded-2xl border border-[#20a9ad]/15 bg-[#f0f9fa] px-6 py-4 transition-all duration-300 hover:border-[#20a9ad]/30 hover:shadow-sm"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#20a9ad]">
                <CheckCircle2 className="h-full w-full" />
              </div>
              <span className="text-base font-medium text-[#0e1b33]">
                {service}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
