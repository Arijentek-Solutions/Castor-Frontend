"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Stethoscope } from "lucide-react";
import { Button } from "@castor/ui";

export function PrivateDutyHero() {
  return (
    <>
      <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-44 xl:pt-52">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] sm:h-[700px] overflow-hidden rounded-[2rem] bg-[#0f1d35] shadow-[var(--hero-shadow)]"
          >
            {/* Background Image */}
            <Image
              src="/images/hero/privateduty-nursing.png"
              alt="Private Duty Nursing"
              fill
              className="h-full w-full object-cover object-center opacity-60"
              priority
            />

            {/* Gradient Overlay matching Figma */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,51,0.9)_0%,rgba(14,27,51,0.6)_50%,rgba(14,27,51,0.2)_100%)]" />

            {/* Content Container */}
            <div className="absolute inset-x-0 inset-y-0 flex items-center">
              <div className="w-full max-w-[1903px] px-7 sm:px-10 md:px-14 lg:px-16 xl:px-20">
                <div className="max-w-[42rem]">
                  {/* Top Row - Back Link & Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-row items-center gap-6 mb-8 h-[38px]"
                  >
                    <Link
                      href="/"
                      className="flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors h-full"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to Nursing Services
                    </Link>

                    <div className="flex h-full items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 shadow-sm">
                      <Stethoscope className="w-4 h-4 text-[#f7c89a]" />
                      <span className="text-[14px] font-medium text-white tracking-tight">
                        Professional Medical Care
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] mb-[20px] tracking-[-0.02em]"
                  >
                    <span className="text-white">Private Duty </span>
                    <span className="text-[#20a9ad]">Nursing</span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-[18px] sm:text-[20px] text-[#f0f9fa] opacity-90 leading-[1.5] mb-[52px] max-w-[504px]"
                  >
                    Skilled nursing care for adults at home, delivering compassionate support and improved health outcomes.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button variant="primary">
                      Request Care
                    </Button>
                    <Button variant="secondary">
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
