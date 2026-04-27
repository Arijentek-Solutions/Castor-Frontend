"use client";

import Image from "next/image";
import { Button } from "@castor/ui";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-40">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm"
        >
          <div className="absolute inset-0 z-0 bg-[#0e1b33]">
            <Image
              src="/images/hero/healthcare-hero.png"
              alt="Healthcare hero"
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

          <div className="relative z-20 flex h-full items-center justify-start px-6 lg:px-24">
            <div className="flex max-w-2xl flex-col gap-6 pt-6 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center justify-center gap-[8px] rounded-full border border-white/30 bg-white/20 backdrop-blur-sm shadow-inner"
                style={{ width: "fit-content", minWidth: "193.844px", padding: "9px 17px" }}
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dabac] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2dabac] shadow-[0_0_8px_#2dabac]"></span>
                </div>
                <span className="text-left text-[13px] font-bold leading-tight tracking-widest text-white uppercase">
                  24/7 Service <br /> Available
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
              >
                Care for a <br />
                <span className="relative inline-block text-[#2dabac]">
                  Healthy Life
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-lg text-lg leading-relaxed text-slate-200 md:text-xl"
              >
                We connect home nursing, medical supplies, and transportation into a single, trusted healthcare experience.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-4 flex flex-wrap gap-4"
              >
                <Button
                  className="min-h-[58px] min-w-[156px] px-9 text-[1.05rem] font-semibold"
                >
                  Get Started
                </Button>
                <Button
                  variant="secondary"
                  className="min-h-[58px] min-w-[168px] rounded-[14px] border-white/18 bg-[#4a556b]/78 px-9 text-[1.05rem] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm hover:bg-[#566178]/84"
                >
                  Our Services
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-48 right-12 hidden lg:flex"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
