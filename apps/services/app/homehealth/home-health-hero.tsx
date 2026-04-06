"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Stethoscope } from "lucide-react";
import { Button } from "@castor/ui";

export function HomeHealthHero() {
  return (
    <>
      <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-44 xl:pt-52">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#0f1d35] shadow-[var(--hero-shadow)]"
          >
            {/* Background Image */}
            <Image
              src="/images/hero/getcare-hero.png"
              alt="Home Health Care"
              fill
              className="h-full w-full object-cover object-center"
              priority
            />

            {/* Gradient Overlay using CSS variables */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hero-overlay-start)_0%,var(--hero-overlay-mid)_34%,var(--hero-overlay-end)_72%,rgba(16,29,52,0)_100%)]" />

            {/* Content Container (Vertically Centered) */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[52rem] px-7 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
                <div className="max-w-[40rem]">
                  {/* Top Navigation Row */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex items-center gap-6 mb-8"
                  >
                    <Link 
                      href="/" 
                      className="flex items-center gap-2 text-[14px] font-medium text-white/80 hover:text-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to Nursing Services
                    </Link>
                    
                    <div className="flex items-center gap-2 bg-[color:var(--hero-badge-background)] border border-[color:var(--hero-badge-border)] backdrop-blur-md rounded-full px-4 py-2 shadow-sm">
                      <Stethoscope className="w-4 h-4 text-[#2dbac1]" />
                      <span className="text-[12px] font-semibold text-white tracking-wide">
                        Medicare Certified
                      </span>
                    </div>
                  </motion.div>

                  {/* Hero Text Content */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] mb-6 tracking-tight"
                  >
                    <span className="text-white">Home </span>
                    <span className="text-[#2dbac1]">Health</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-[18px] sm:text-[20px] text-white/90 leading-relaxed mb-10 max-w-[560px]"
                  >
                    Skilled nursing and therapy services designed for short-term recovery, rehabilitation, and managing chronic conditions. Covered 100% by Medicare for eligible patients.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <Button className="bg-[#2dbac1] hover:bg-[#259ba1] text-white px-10 py-4 h-auto rounded-full text-[16px] font-bold shadow-xl border-none">
                      Request Eligibility Check
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <HomeHealthDetails />
    </>
  );
}

function HomeHealthDetails() {
  const items = [
    { text: "Skilled Nursing (Wound care, IV therapy, Med management)" },
    { text: "Physical, Occupational & Speech Therapy" },
    { text: "Post-surgical Recovery" },
    { text: "Chronic Disease Management (COPD, CHF, Diabetes)" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-[896px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[30px] font-bold text-[#0e1b33] mb-6 tracking-tight">
            What is Home Health?
          </h2>
          <p className="text-[18px] text-[#6a6a67] leading-[1.625] mb-12">
            Home health care includes a wide range of health care services that can be given in your home for an illness or injury. Home health care is usually less expensive, more convenient, and just as effective as care you get in a hospital or skilled nursing facility (SNF).
          </p>
        </motion.div>

        {/* Services Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#f0f9fa] border border-[#20a9ad]/20 rounded-[32px] p-10 mb-8"
        >
          <h3 className="text-[24px] font-bold text-[#0e1b33] mb-8">
            Common Services Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 bg-white/50 p-1 rounded-full">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#20a9ad]">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[16px] text-[#0e1b33] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Insurance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#fef5ed] rounded-[32px] p-10 flex flex-col md:flex-row gap-8 items-start"
        >
          <div className="bg-white p-4 rounded-[24px] shadow-sm shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#f0c593]">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-[#0e1b33] mb-3">
              Insurance Coverage
            </h3>
            <p className="text-[16px] text-[#6a6a67] leading-relaxed">
              Medicare Part A (Hospital Insurance) and/or Part B (Medical Insurance) covers eligible home health services as long as you need part-time or intermittent skilled services and you are &quot;homebound&quot; (have trouble leaving your home without help).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
