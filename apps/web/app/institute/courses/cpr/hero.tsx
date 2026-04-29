"use client";

import { motion } from "framer-motion";

export default function CPRHero() {
  return (
    <section className="px-4 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pt-48">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem]"
          style={{
            backgroundImage:
              "linear-gradient(166deg, rgb(14, 27, 51) 0%, rgb(16, 29, 55) 7.1429%, rgb(17, 31, 58) 14.286%, rgb(19, 34, 62) 21.429%, rgb(21, 36, 66) 28.571%, rgb(22, 38, 69) 35.714%, rgb(24, 41, 73) 42.857%, rgb(26, 43, 77) 50%, rgb(24, 41, 73) 57.143%, rgb(22, 38, 69) 64.286%, rgb(21, 36, 66) 71.429%, rgb(19, 34, 62) 78.571%, rgb(17, 31, 58) 85.714%, rgb(16, 29, 55) 92.857%, rgb(14, 27, 51) 100%)",
          }}
        >
          <div className="flex min-h-[351px] flex-col items-center justify-center px-8 py-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[44px] font-bold leading-[52.8px] tracking-[-0.44px] text-white"
            >
              There is no situation where knowing CPR isn&apos;t vital.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 max-w-[1243px] text-[22px] font-normal leading-[27.1px] tracking-[-0.47px] text-white"
            >
              If you are interested in CPR training for yourself or your team, please contact us. There is currently no open enrollment for CPR courses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10"
            >
              <a
                href="/institute/courses/cpr#course-details"
                className="inline-flex h-14 items-center justify-center rounded-[43px] border-[3px] border-white bg-white px-8 text-[21px] font-medium text-[#0e1b33] transition-colors hover:bg-[#f0f9fa]"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
