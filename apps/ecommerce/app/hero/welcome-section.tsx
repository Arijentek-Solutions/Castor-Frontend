"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function WelcomeSection() {
  return (
    <section className="px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-36 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Doctor Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[480px] lg:max-w-[580px] aspect-[4/3]"
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl group">
                <img
                  src="/welcome-doctor.png"
                  alt="Welcome to Castor Medical Supplies"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title and Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col mb-4"
            >
              <span className="text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#0e1b33] mb-1">
                Welcome to
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-extrabold tracking-tight text-slate-700 leading-tight">
                Castor Medical Supplies
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify max-w-[720px]"
            >
              At Castor Medical Supplies in Sterling, IL, we provide quality medical products for all your healthcare needs. It takes a team effort and tremendous amount of dedication to provide effective and compassionate care, and our staff is dedicated to serving those who need it. We offer the personal attention you deserve and we strive to ensure your daily life is made easier on your journey toward your health milestone.
            </motion.p>

            {/* Read More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Link href="/about-us">
                <button className="min-h-[50px] px-10 bg-[#20a9ad] hover:bg-[#1c989c] text-white font-bold rounded-lg transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-md shadow-[#20a9ad]/20 hover:shadow-[#20a9ad]/30 active:scale-98 cursor-pointer">
                  Read More
                </button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
