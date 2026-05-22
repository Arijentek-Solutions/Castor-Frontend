"use client";

import React from "react";
import Link from "next/link";
import { Accessibility, Bed, Activity, Plus } from "lucide-react";
import { motion } from "framer-motion";

export function RentalsBanner() {
  const categories = [
    {
      icon: <Accessibility className="h-6 w-6 text-[#20a9ad]" />,
      title: "Wheelchairs",
      description: "Manual, power, and transport wheelchairs."
    },
    {
      icon: <Bed className="h-6 w-6 text-[#20a9ad]" />,
      title: "Hospital Beds",
      description: "Fully electric and semi-electric adjustable beds."
    },
    {
      icon: <Activity className="h-6 w-6 text-[#20a9ad]" />,
      title: "Walking Aids",
      description: "Walkers, rollators, crutches, and knee scooters."
    },
    {
      icon: <Plus className="h-6 w-6 text-[#20a9ad]" />,
      title: "Other Supplies",
      description: "Patient lifts, oxygen concentrators, and more."
    }
  ];

  return (
    <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto w-full max-w-[1720px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features Grid */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#20a9ad]/20 bg-[#20a9ad]/5 px-4 py-1.5 mb-6"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#20a9ad] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#20a9ad]">
                Rental Solutions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0e1b33] leading-[1.1]"
            >
              Professional medical equipment <br className="hidden sm:inline" />
              <span className="text-[#20a9ad]">rentals made simple.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-[650px]"
            >
              Castor Medical Supplies offers a comprehensive selection of certified medical equipment rentals. Increase the ease of recovery, rehabilitation, and daily life with flexible rental terms.
            </motion.p>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mt-10">
              {categories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx + 0.3 }}
                  className="group flex gap-4 p-5 rounded-2xl bg-slate-50/60 border border-slate-100 hover:bg-[#20a9ad]/5 hover:border-[#20a9ad]/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white border border-[#20a9ad]/10 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[#20a9ad]/10">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0e1b33] transition-colors group-hover:text-[#20a9ad]">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-10"
            >
              <Link href="/rentals" className="w-full sm:w-auto">
                <button className="min-h-[54px] w-full sm:min-w-[190px] px-8 bg-[#20a9ad] hover:bg-[#1c989c] text-white font-bold rounded-xl transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm shadow-lg shadow-[#20a9ad]/20 hover:shadow-[#20a9ad]/30 active:scale-98 cursor-pointer">
                  View All Rentals
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="min-h-[54px] w-full sm:min-w-[170px] px-8 border-2 border-slate-200 hover:border-[#20a9ad]/50 hover:bg-[#20a9ad]/5 text-slate-700 hover:text-[#20a9ad] font-bold rounded-xl transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm active:scale-98 cursor-pointer">
                  Request Inquiry
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Floating Image & Details */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Background Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#20a9ad]/10 to-transparent blur-3xl opacity-60 rounded-full" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl border border-slate-100 bg-white/70 p-3 shadow-2xl backdrop-blur-md"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <img
                  src="/rental-img.png"
                  alt="Elderly couple showing medical equipment usage"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
