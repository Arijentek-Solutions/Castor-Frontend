"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ShieldCheck, Check, Star, HeartHandshake } from "lucide-react";
import { Button } from "@castor/ui";

const VeteransCareHero = () => {
  return (
    <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-44 xl:pt-52">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[700px] overflow-hidden rounded-[40px] bg-[#0e1b33] shadow-[var(--hero-shadow)]"
        >
          {/* Background Image */}
          <Image
            src="/images/getcare/veterans/veteranscare.png"
            alt="Veterans Care"
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
                  <div className="flex h-full items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2.66675 10C2.66675 10 3.33341 9.33334 5.33341 9.33334C7.33341 9.33334 8.66675 10.6667 10.6667 10.6667C12.6667 10.6667 13.3334 10 13.3334 10V2.00001C13.3334 2.00001 12.6667 2.66668 10.6667 2.66668C8.66675 2.66668 7.33341 1.33334 5.33341 1.33334C3.33341 1.33334 2.66675 2.00001 2.66675 2.00001V10Z" stroke="#F7C89A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.66675 14.6667V10" stroke="#F7C89A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] font-medium text-white tracking-tight">
                      Veterans Affairs Programs
                    </span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] mb-[20px] tracking-[-0.02em]"
                >
                  <span className="text-white">Veterans </span>
                  <span className="text-[#f7c89a]">Care</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-[18px] sm:text-[20px] text-[#f0f9fa] opacity-90 leading-[1.625] mb-[52px] max-w-[504px]"
                >
                  Serving those who served. We provide specialized care coordinated directly with the VA to ensure veterans receive the benefits and support they are entitled to.
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
  );
};

export default VeteransCareHero;
