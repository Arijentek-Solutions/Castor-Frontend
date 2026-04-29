"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const };

export default function InstituteContactUsPage() {
  const [isLoading, setIsLoading] = useState(true);

  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: smoothTransition
  };

  const cardVariants = (index: number) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { ...smoothTransition, delay: index * 0.1 }
  });

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Top Header Section */}
      <section className="px-4 pb-14 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pb-20 lg:pt-48">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
            className="relative h-[400px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm flex items-center justify-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="flex flex-col gap-2 relative z-20 px-6"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-[#2dabac]">
                Contact Us
              </span>
              <h1 className="text-[48px] font-black tracking-[0.02em] text-white sm:text-[64px] md:text-[80px]">
                Let&apos;s Chat!
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Alert Box */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1000px]">
          <motion.div
            {...sectionVariants}
            className="rounded-[2rem] bg-[#ffead8] p-8 text-center sm:p-10"
          >
            <p className="text-lg font-bold leading-relaxed text-[#0e1b33] md:text-xl">
              Got a question about courses, enrollment, payment, financial assistance, and more?
              You can find answers to the most commonly asked questions on{" "}
              <Link href="/institute/faq" className="text-[#ed7d31] underline decoration-2 underline-offset-4 hover:opacity-80">
                our FAQ page
              </Link>!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Separate Form Section */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1000px]">
          <motion.div
            {...sectionVariants}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-black text-[#0e1b33] sm:text-[48px]">
              Ready to reach out?
            </h2>
            <div className="mt-8 space-y-6 text-[19px] leading-relaxed text-[#6a6a67] max-w-4xl mx-auto">
              <p>
                If you&apos;re ready to enroll online for our CNA or phlebotomy course, you&apos;re in the wrong spot! 
                This page is for inquiries about course information, requesting in-person enrollment, 
                or other general inquiries related to Castor Health Institute or Castor Home Health Solutions.
              </p>
              <p>
                To use our online enrollment system to sign up for a course now,{" "}
                <Link href="/institute/enroll-now" className="font-bold text-[#ed7d31] underline decoration-2 underline-offset-4 hover:opacity-80">
                  click here
                </Link>{" "}
                or click the &quot;Enroll Now&quot; button at the top.
              </p>
              <p className="font-bold text-[#0e1b33] text-xl">
                Otherwise, fill out the form below and we&apos;ll get back to you in a jiffy!
              </p>
            </div>
          </motion.div>

          <motion.div
            {...sectionVariants}
            className="w-full h-[1800px] bg-[#f0f9fa] relative rounded-[2rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.08)]"
          >
            <AnimatePresence>
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center pt-[400px] bg-white z-10"
                >
                  <div className="w-12 h-12 border-4 border-[#20a9ad] border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-[#0e1b33] font-medium animate-pulse">Loading Contact Form...</p>
                </motion.div>
              )}
            </AnimatePresence>

            <iframe
              id="JotFormIFrame-261182416918056"
              title="Institute Contact Form"
              onLoad={() => setIsLoading(false)}
              {...({ allowtransparency: "true" } as any)}
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/261182416918056"
              className="relative z-10 h-full w-full border-none"
              style={{
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.5s ease-in-out",
              }}
              scrolling="auto"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-50/30 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1280px]">
          <motion.div
            {...sectionVariants}
            className="mb-16 text-center"
          >
            <h2 className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e1b33] sm:text-[56px]">
              Get in <span className="text-[#20a9ad]">Touch</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6a6a67]">
              Have questions about our programs or enrollment? Reach out to us through any of the channels below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Office Locations Card */}
            <motion.div
              {...cardVariants(0)}
              className="rounded-[2rem] bg-[#ffead8] p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-sm mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ed7d31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0e1b33]">Office Locations</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-base font-bold text-[#0e1b33]">Sterling</p>
                  <p className="text-sm text-[#6a6a67]">417 E 3rd St, Ste B, Sterling, IL 61081</p>
                </div>
                <div>
                  <p className="text-base font-bold text-[#0e1b33]">Freeport</p>
                  <p className="text-sm text-[#6a6a67]">30 E. Stephenson St., Freeport, IL 61032</p>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              {...cardVariants(1)}
              className="rounded-[2rem] bg-[#d5fbff] p-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-100/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-sm mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a9ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0e1b33]">Phone</h3>
              <a href="tel:+18156223550" className="mt-4 block text-2xl font-bold text-[#20a9ad] hover:underline transition-all underline-offset-4">
                +1 815-622-3550
              </a>
              <p className="mt-2 text-sm text-[#6a6a67]">Mon-Fri 8am-5pm</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              {...cardVariants(2)}
              className="rounded-[2rem] bg-[#ffead8] p-8 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-sm mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ed7d31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0e1b33]">Email</h3>
              <a href="mailto:info@castorhealthinstitute.com" className="mt-4 block text-xl font-bold text-[#0e1b33] break-all hover:text-[#ed7d31] transition-colors hover:underline underline-offset-4">
                info@castorhealthinstitute.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Section */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* IBHE */}
            <motion.div
              {...sectionVariants}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-[#0e1b33]">Illinois Board of Higher Education</h3>
              <div className="mt-6 space-y-2 text-[#6a6a67]">
                <p className="font-medium">1 N. Old State Capital Plaza, Suite 333</p>
                <p>Springfield, IL. 62701</p>
                <a href="tel:+12177822551" className="block font-bold text-[#0e1b33] hover:text-[#20a9ad] transition-colors">
                  217-782-2551
                </a>
                <a
                  href="https://complaints.ibhe.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#20a9ad] hover:underline"
                >
                  https://complaints.ibhe.org
                </a>
              </div>
            </motion.div>

            {/* IDPH */}
            <motion.div
              {...sectionVariants}
              className="text-center md:text-left"
            >
              <h3 className="text-2xl font-bold text-[#0e1b33]">Illinois Department of Public Health</h3>
              <div className="mt-6 space-y-2 text-[#6a6a67]">
                <p className="font-bold text-[#0e1b33]">Randy Carey-Walden RN, MSN, PSA</p>
                <p className="font-medium">525 West Jefferson St. 4th Floor</p>
                <p>Springfield, IL. 62761</p>
                <a href="tel:+12177855569" className="block font-bold text-[#0e1b33] hover:text-[#20a9ad] transition-colors">
                  217-785-5569
                </a>
                <a
                  href="https://dph.illinois.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#20a9ad] hover:underline"
                >
                  https://dph.illinois.gov
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
