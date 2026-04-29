"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Stethoscope } from "lucide-react";
import { Button } from "@castor/ui";

export function PediatricNursingHero() {
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
              src="/images/getcare/pediatric-nursing/pediatric.png"
              alt="Pediatric Nursing Services"
              fill
              className="h-full w-full object-cover object-center opacity-70"
              priority
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b33]/90 to-transparent lg:from-[#0e1b33]/60 lg:to-transparent" />

            {/* Content Container (Centered Vertically) */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[1903px] px-7 sm:px-10 md:px-14 lg:px-16 xl:px-20">
                <div className="max-w-[46rem]">
                  {/* Top Row - Back Link & Badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-row flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:h-[38px]"
                  >
                    <Link 
                      href="/" 
                      className="flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to Services
                    </Link>
                    
                    <div className="flex h-10 items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 shadow-sm">
                      <Stethoscope className="w-4 h-4 text-[#20a9ad]" />
                      <span className="text-[14px] font-medium text-white tracking-tight">
                        Specialized Child Care
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-bold leading-[1.1] mb-[20px] tracking-[-0.02em]">
                    <span className="text-white">Pediatric </span>
                    <span className="text-[#20a9ad]">Nursing</span>
                    <span className="text-white"> Services</span>
                  </h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-[16px] sm:text-[18px] md:text-[20px] text-[#f0f9fa] opacity-90 leading-[1.625] mb-[52px] max-w-[504px]"
                  >
                    Expert nursing care for medically fragile children in the comfort and safety of home.
                  </motion.p>

                  {/* CTAs */}
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