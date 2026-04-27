"use client";

import Image from "next/image";
import { Button } from "@castor/ui";
import { motion } from "framer-motion";
import { Clock, MapPin, Calendar, Droplet, ChevronRight } from "lucide-react";

export default function PhlebotomyHero() {
  return (
    <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-44 xl:pt-52">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#132540] shadow-[var(--hero-shadow)]"
        >
          <div className="relative z-10 mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row lg:h-[700px] lg:items-center lg:justify-between lg:px-20">
            {/* Content Side */}
            <div className="max-w-3xl lg:w-[55%]">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
              >
                <Droplet className="h-4 w-4 text-[#20a9ad]" />
                <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                  Clinical Certification
                </span>
              </motion.div>

              {/* Title Area */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
                >
                  Phlebotomy <br />
                  <span className="text-[#20a9ad]">Training Program</span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-white/70"
              >
                Master the art of blood collection with our comprehensive phlebotomy program.
                Gain hands-on experience and certification to excel in clinical laboratory settings.
              </motion.p>

              {/* Info Details Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10 flex flex-wrap gap-x-12 gap-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[#20a9ad]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Duration</span>
                    <span className="text-sm font-medium text-white">4-6 Weeks</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[#20a9ad]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Location</span>
                    <span className="text-sm font-medium text-white">Tampa, FL</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[#20a9ad]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Next Class</span>
                    <span className="text-sm font-medium text-white">May 1, 2026</span>
                  </div>
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <Button size="lg" className="h-14 px-10 text-base font-semibold shadow-[0_20px_40px_-15px_rgba(32,169,173,0.3)] bg-[#20a9ad] hover:bg-[#1a8b8f] text-white">
                  Enroll Now
                </Button>
                <Button variant="secondary" size="lg" className="h-14 border-white/10 bg-white/5 px-8 text-base font-semibold backdrop-blur-md hover:bg-white/10 text-white">
                  Request Info
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative mt-16 aspect-square w-full max-w-[640px] overflow-hidden rounded-[40px] lg:mt-0 lg:w-[45%] isolate z-0"
            >
              {/* Image Placeholder with provided asset logic */}
              <Image
                src="/images/institute/phlebotomy.png"
                alt="Phlebotomy training"
                fill
                className="object-cover rounded-[36px]"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,27,51,0.5)] to-transparent pointer-events-none rounded-[36px]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
