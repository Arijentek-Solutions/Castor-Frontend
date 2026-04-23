"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Book Your Ride",
    description: "Call us or use our online booking system to schedule your transport",
  },
  {
    id: 2,
    title: "Get Confirmation",
    description: "Receive immediate confirmation with driver details and pickup time",
  },
  {
    id: 3,
    title: "Enjoy Your Ride",
    description: "Safe, comfortable transportation to and from your appointment",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function HowItWorksSection() {
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
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-[#6a6a67]"
          >
            Simple, reliable booking in three easy steps
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="flex flex-col items-center rounded-3xl bg-[#f0f9fa] px-8 py-12 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#20a9ad] text-3xl font-bold text-white">
                {step.id}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#0e1b33]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#6a6a67]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
