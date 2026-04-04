"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[450px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/hero/contact-hero.png"
                alt="Contact Castor"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 1871px, 100vw"
              />
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,51,0.82)_0%,rgba(14,27,51,0.45)_40%,rgba(14,27,51,0.08)_74%,rgba(14,27,51,0)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%,transparent)]" />

            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="flex max-w-[40rem] flex-col items-center text-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                >
                  <Image
                    src="/icons/phone.png"
                    alt=""
                    width={16}
                    height={16}
                    className="opacity-90"
                    aria-hidden="true"
                  />
                  <span>We&apos;re here to help</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-6 text-[2.6rem] font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-[3.1rem] md:text-[3.6rem]"
                >
                  Get in <span className="text-[#33c3cf]">Touch</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-4 max-w-[34rem] text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
                >
                  Whether you need home care, medical supplies, transportation,
                  or training, one number connects you to everything Castor
                  offers.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
