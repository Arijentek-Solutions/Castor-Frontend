"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Heart } from "lucide-react";
import { Button } from "@castor/ui";

export function HomeCareHero() {
  return (
    <>
      <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-44 xl:pt-52">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[700px] overflow-hidden rounded-[40px] bg-[#0e1b33] shadow-[var(--hero-shadow)]"
          >
            {/* Background Image */}
            <Image
              src="/images/getcare/home-care/homecare.png"
              alt="Home Care"
              fill
              className="h-full w-full object-cover object-center opacity-100"
              priority
            />

            {/* Subtle Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Content Container (Centered Vertically) */}
            <div className="absolute inset-0 flex items-center">
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

                    <div className="flex h-full items-center gap-[6px] bg-white/[0.04] border border-white/20 backdrop-blur-md rounded-full px-4 shadow-sm">
                      <Heart className="w-[14px] h-[14px] text-white stroke-[2]" />
                      <span className="text-[13px] font-medium text-white tracking-wide">
                        Compassionate Support
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h1 className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] mb-[20px] tracking-[-0.02em]">
                    <span className="text-white">Personal Care &<br /></span>
                    <span className="text-[#20a9ad]">Companionship</span>
                  </h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-[18px] sm:text-[20px] text-[#f0f9fa] opacity-90 leading-[1.625] mb-[52px] max-w-[504px]"
                  >
                    Tailored home care services that support independence, comfort, and quality of life.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
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