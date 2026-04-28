"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CNACourseHero() {
  return (
    <section className="px-4 pb-14 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pb-20 lg:pt-48">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] sm:h-[650px] lg:h-[700px] overflow-hidden rounded-[2rem]"
          style={{
            backgroundImage:
              "linear-gradient(157.646deg, rgb(14, 27, 51) 0%, rgb(16, 29, 55) 7.1429%, rgb(17, 31, 58) 14.286%, rgb(19, 34, 62) 21.429%, rgb(21, 36, 66) 28.571%, rgb(22, 38, 69) 35.714%, rgb(24, 41, 73) 42.857%, rgb(26, 43, 77) 50%, rgb(24, 41, 73) 57.143%, rgb(22, 38, 69) 64.286%, rgb(21, 36, 66) 71.429%, rgb(19, 34, 62) 78.571%, rgb(17, 31, 58) 85.714%, rgb(16, 29, 55) 92.857%, rgb(14, 27, 51) 100%)",
          }}
        >
          <div className="relative z-10 mx-auto flex h-full flex-col-reverse items-center px-8 py-16 sm:px-12 lg:flex-row lg:justify-between lg:px-16">
            <div className="max-w-[693px] lg:w-[55%]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8 flex w-fit items-center gap-2 rounded-full border border-[rgba(32,169,173,0.3)] bg-[rgba(32,169,173,0.2)] px-5 py-2"
              >
                <span className="text-[21px] font-bold tracking-[-0.43px] text-white">
                  Certified nursing assistant (cna)
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[44px] font-bold leading-[52.8px] tracking-[-0.44px] text-white"
              >
                Begin Your Healthcare Career with Confidence: The Castor{" "}
                <span className="text-[#20a9ad]">CNA Training Program</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-10 max-w-[603px] text-[22px] font-normal leading-[27.1px] tracking-[-0.47px] text-white"
              >
                Comprehensive, hands-on training designed to prepare you for success in caregiving and beyond. Start your journey today!
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative mt-16 aspect-square w-full max-w-[640px] overflow-hidden rounded-[40px] lg:mt-0 lg:w-[45%] isolate z-0"
            >
              <Image
                src="/images/institute/hero/cna.png"
                alt="Students practicing CNA skills"
                fill
                className="rounded-[36px] object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-t from-[rgba(14,27,51,0.5)] to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
