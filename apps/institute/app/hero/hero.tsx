"use client";

import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion, Variants } from "framer-motion";

const badgeIcon = "/graduationicon.svg";
const studentIcon = "/studenticon.svg";

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-40">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#132540] shadow-[var(--hero-shadow)]"
        >
          <Image
            src="/institute-hero.png"
            alt="Castor Health Institute students and clinicians"
            width={1530}
            height={630}
            priority
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,27,51,0.84)] via-[rgba(14,27,51,0.58)] to-[rgba(14,27,51,0.08)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_32%,transparent)]" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[52rem] px-7 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
              <motion.div 
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="max-w-[40rem]"
              >
                <motion.div 
                  variants={itemVariants}
                  className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] font-semibold tracking-[0.02em] text-white/85 backdrop-blur-sm"
                >
                  <Image
                    src={badgeIcon}
                    alt=""
                    width={14}
                    height={14}
                    className="opacity-85"
                    aria-hidden="true"
                  />
                  <span>Healthcare Education</span>
                </motion.div>

                <motion.h1 
                  variants={itemVariants}
                  className="max-w-[11ch] text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.45rem] md:text-[4.2rem] lg:text-[5.15rem]"
                >
                  <span className="block">Castor Health</span>
                  <span className="mt-2 block text-[#22c7d6]">Institute</span>
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="mt-7 max-w-[33rem] text-base leading-[1.85] text-white/72 sm:text-[1.07rem]"
                >
                  State-approved healthcare training, certifications, and
                  workforce upskilling. Launch your career or train your staff
                  with the region&apos;s leading institute.
                </motion.p>

                <motion.div variants={itemVariants}>
                  <HeroActions>
                    <Button href="#">View Course Schedule</Button>
                    <Button href="#" variant="secondary">
                      <Image
                        src={studentIcon}
                        alt=""
                        width={16}
                        height={16}
                        className="opacity-90"
                        aria-hidden="true"
                      />
                      <span>Student Portal Login</span>
                    </Button>
                  </HeroActions>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
