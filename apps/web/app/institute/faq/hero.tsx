"use client";

import { motion } from "framer-motion";

export function FAQHero() {
  return (
    <section className="px-4 pb-14 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pb-20 lg:pt-48">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <span className="font-inter text-sm font-semibold uppercase tracking-[0.1em] text-[var(--hero-primary)]">
              FAQ
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
