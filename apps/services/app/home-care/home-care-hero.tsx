"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ShieldCheck } from "lucide-react";
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
              src="/images/hero/homecare.png"
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
                    
                    <div className="flex h-full items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 shadow-sm">
                      <div className="size-4 shrink-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12.6667 14V12.6667C12.6667 11.9594 12.3858 11.2811 11.8857 10.781C11.3856 10.281 10.7073 10 10 10H6.00004C5.2928 10 4.61452 10.281 4.11442 10.781C3.61433 11.2811 3.33337 11.9594 3.33337 12.6667V14" stroke="#F7C89A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" stroke="#F7C89A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[14px] font-medium text-white tracking-tight">
                        Non-Medical Support
                      </span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h1 className="text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[1.1] mb-[20px] tracking-[-0.02em]">
                    <span className="text-white">Personal </span>
                    <span className="text-[#f7c89a]">Home Care</span>
                  </h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-[18px] sm:text-[20px] text-[#f0f9fa] opacity-90 leading-[1.625] mb-[52px] max-w-[504px]"
                  >
                    Compassionate assistance with daily living activities to help you or your loved one maintain independence and dignity at home.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <Button className="bg-[#20a9ad] hover:bg-[#1a8e91] text-white px-8 py-4 h-[56px] rounded-full text-[14px] font-medium shadow-[0px_10px_15px_rgba(32,169,173,0.2)] border-none">
                      Schedule Assessment
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <HomeCareDetails />
    </>
  );
}

function HomeCareDetails() {
  const helpItems = [
    { text: "Bathing, Dressing & Grooming Assistance" },
    { text: "Meal Preparation & Nutrition" },
    { text: "Light Housekeeping & Laundry" },
    { text: "Companionship & Socialization" }
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
            Support for Daily Living
          </h2>
          <p className="text-[18px] text-[#6a6a67] leading-[1.625] mb-12">
            Sometimes, a little help goes a long way. Our non-medical home care services are designed to assist seniors and adults with the tasks of everyday life, ensuring safety and comfort in their own environment.
          </p>
        </motion.div>

        {/* How We Help Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#fef5ed] border border-[#f7c89a]/20 rounded-[32px] p-[41px] mb-8"
        >
          <h3 className="text-[24px] font-bold text-[#0e1b33] mb-8">
            How We Help
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] gap-y-[16px]">
            {helpItems.map((item, index) => (
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

        {/* Peace of Mind Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#f0f9fa] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-[24px] items-start"
        >
          <div className="bg-white p-4 rounded-[24px] shadow-sm shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" fill="none">
              <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 4V8" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 40V44" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.85999 9.85999L12.68 12.68" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M35.3199 35.3199L38.1399 38.1399" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 24H8" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M40 24H44" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.68 35.3199L9.85999 38.1399" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M38.1399 9.85999L35.3199 12.68" stroke="#20A9AD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="pt-2">
            <h3 className="text-[20px] font-bold text-[#0e1b33] mb-3">
              Peace of Mind
            </h3>
            <p className="text-[16px] text-[#6a6a67] leading-[1.625]">
              We meticulously screen all our caregivers with background checks and personality matching to ensure a safe, friendly, and reliable experience for your family.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
