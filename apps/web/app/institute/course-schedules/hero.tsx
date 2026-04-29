"use client";

import { motion } from "framer-motion";

export function CourseSchedulesHero() {
  return (
    <section className="px-4 pb-14 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pb-20 lg:pt-48">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <span className="font-inter text-sm font-semibold uppercase tracking-[0.1em] text-[#20a9ad]">
              SCHEDULES
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Course Schedules
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
