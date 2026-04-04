"use client";

import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/hero/careers-hero.png"
                alt="Careers at Castor Health"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 1871px, 100vw"
              />
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,51,0.84)_0%,rgba(14,27,51,0.56)_36%,rgba(14,27,51,0.18)_70%,rgba(14,27,51,0.00)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%,transparent)]" />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[52rem] px-7 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
                <div className="max-w-[42rem]">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                  >
                    <Image
                      src="/icons/careers.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="opacity-90"
                      aria-hidden="true"
                    />
                    <span>Careers at Castor</span>
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-7 max-w-[12ch] text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.45rem] md:text-[4.2rem] lg:text-[5.15rem]"
                  >
                    Join Our
                    <span className="mt-2 block text-[#f2c48b]">Mission</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-7 max-w-[32rem] text-base leading-[1.85] text-white/78 sm:text-[1.07rem]"
                  >
                    Join our team of dedicated healthcare professionals and
                    make a meaningful impact in your community.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <HeroActions>
                      <Button href="#open-positions">
                        View Open Positions
                      </Button>
                    </HeroActions>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
