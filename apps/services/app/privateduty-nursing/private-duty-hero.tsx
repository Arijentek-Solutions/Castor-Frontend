"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
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
            className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#0f1d35] shadow-[var(--hero-shadow)]"
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
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,51,0.9)_0%,rgba(14,27,51,0.4)_50%,rgba(0,0,0,0)_100%)]" />

            {/* Content Container */}
            <div className="absolute inset-x-0 inset-y-0 flex items-start pt-[80px]">
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
                        <path d="M6 8H6.00667" stroke="#F7C89A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 8H10.0067" stroke="#F7C89A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66675 10.6667C7.00008 10.8667 7.46675 11 8.00008 11C8.53341 11 9.00008 10.8667 9.33341 10.6667" stroke="#F7C89A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.6666 4.2C13.2706 4.95711 13.6823 5.84918 13.8666 6.8C14.092 6.90918 14.2821 7.07965 14.4152 7.29188C14.5482 7.50411 14.6187 7.74952 14.6187 8C14.6187 8.25048 14.5482 8.49589 14.4152 8.70812C14.2821 8.92035 14.092 9.09082 13.8666 9.2C13.5788 10.5423 12.8394 11.7454 11.7717 12.6084C10.7041 13.4714 9.37275 13.9421 7.99992 13.9421C6.62709 13.9421 5.29578 13.4714 4.22813 12.6084C3.16047 11.7454 2.42106 10.5423 2.13325 9.2C1.90782 9.09082 1.71771 8.92035 1.58468 8.70812C1.45166 8.49589 1.3811 8.25048 1.3811 8C1.3811 7.74952 1.45166 7.50411 1.58468 7.29188C1.71771 7.07965 1.90782 6.90918 2.13325 6.8C2.40943 5.447 3.14385 4.23068 4.2126 3.35624C5.28136 2.48181 6.61902 2.00279 7.99992 2C9.33325 2 10.3333 2.73333 10.3333 3.66667C10.3333 4.6 9.73325 5.33333 8.99992 5.33333C8.46658 5.33333 7.99992 5.06667 7.99992 4.66667" stroke="#F7C89A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[14px] font-medium text-white tracking-tight">
                        Pediatric & Adult PDN
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
                    <span className="text-white leading-[90px]">Private Duty </span>
                    <span className="text-[#f7c89a] leading-[90px]">Nursing</span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-[18px] sm:text-[20px] text-[#f0f9fa] opacity-90 leading-[1.5] mb-[52px] max-w-[504px]"
                  >
                    Specialized, long-term nursing care for medically fragile children and adults. We bring the hospital level of care to the comfort of your home.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <Button className="bg-[#20a9ad] hover:bg-[#1a8e91] text-white px-8 py-4 h-[56px] rounded-full text-[14px] font-medium shadow-[0px_10px_15px_rgba(32,169,173,0.2)] border-none">
                      Inquire About Care
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <PrivateDutyDetails />
    </>
  );
}

function PrivateDutyDetails() {
  const capabilities = [
    { text: "Ventilator & Tracheostomy Care" },
    { text: "G-Tube Feeding & Management" },
    { text: "Seizure Disorder Management" },
    { text: "Shift-based Nursing (8-12 hour shifts)" }
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
            Continuous Skilled Care
          </h2>
          <p className="text-[18px] text-[#6a6a67] leading-[1.625] mb-12">
            Private Duty Nursing (PDN) provides block-shift nursing (usually 8-16 hours per day) for patients who require continuous skilled care. This allows individuals with complex medical needs to live at home with their families rather than in a facility.
          </p>
        </motion.div>

        {/* Clinical Capabilities Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#fef5ed] border border-[#f7c89a]/20 rounded-[32px] p-[41px] mb-8"
        >
          <h3 className="text-[24px] font-bold text-[#0e1b33] mb-8">
            Clinical Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] gap-y-[16px]">
            {capabilities.map((item, index) => (
              <div key={index} className="flex items-center gap-[12px] h-[24px]">
                <div className="shrink-0 size-5 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-[#f7c89a]">
                    <circle cx="10" cy="10" r="10" fill="white" />
                    <path d="M14 7L8.5 12.5L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[16px] text-[#0e1b33] leading-none">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Promise Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#f0f9fa] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-[24px] items-start"
        >
          <div className="bg-white p-4 rounded-[24px] shadow-sm shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#20a9ad]">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="pt-2">
            <h3 className="text-[20px] font-bold text-[#0e1b33] mb-3">
              Our Promise
            </h3>
            <p className="text-[16px] text-[#6a6a67] leading-relaxed">
              We understand that inviting nurses into your home is a big decision. Our team is trained not just in clinical skills, but in respecting your family&apos;s privacy, routine, and home environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
