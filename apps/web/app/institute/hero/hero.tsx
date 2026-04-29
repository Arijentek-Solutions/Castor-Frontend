"use client";
import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="px-4 pb-14 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pb-20 lg:pt-48">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] sm:h-[650px] lg:h-[700px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm"
        >
          <div className="absolute inset-0 z-0 bg-[#0e1b33]">
            <Image
              src="/images/institute/hero/institute-hero.png"
              alt="Castor Health Institute students and clinicians"
              fill
              className="object-cover object-center opacity-90"
              priority
            />
            <div
              className="absolute inset-0 z-10"
              style={{
                background: "linear-gradient(90deg, rgba(14, 27, 51, 0.80) 0%, rgba(14, 27, 51, 0.00) 100%)",
              }}
            />
          </div>

          <div className="relative z-20 flex h-full items-center justify-start px-7 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            <div className="flex max-w-[42rem] flex-col gap-6 pt-6 lg:pt-0">

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                Castor Health{" "}
                <span className="relative inline-block text-[#2dabac]">
                  Institute
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl"
              >
                State-approved healthcare training, certifications, and workforce upskilling. Launch your career or train your staff with the region&apos;s leading institute.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-4"
              >
                <HeroActions>
                  <Button
                    className="min-h-[58px] min-w-[156px] px-9 text-[1.05rem] font-semibold"
                    href="#"
                  >
                    View Schedule
                  </Button>
                  <Button
                    variant="secondary"
                    className="min-h-[58px] min-w-[168px] rounded-[14px] border-white/18 bg-[#4a556b]/78 px-9 text-[1.05rem] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm hover:bg-[#566178]/84 flex items-center justify-center gap-2"
                    href="#"
                  >
                    <span>Enroll Now</span>
                  </Button>
                </HeroActions>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
