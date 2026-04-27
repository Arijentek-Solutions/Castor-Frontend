"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeCareAbout() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-16 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-[1.4] w-full"
          >
            <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-10 tracking-[-0.48px] max-w-[600px]">
              About Home Services Personal Care & Companionship
            </h2>

            <div className="space-y-8">
              <p className="text-[18px] leading-[1.7] text-[#6a6a67] font-normal w-full lg:max-w-[700px]">
                Castor delivers comprehensive home care services that support safety, comfort, and independence within the home environment. Our offerings address a wide range of needs, including senior support, chronic condition management, post medical recovery, and assistance for individuals with disabilities or special needs. Services are available on both a short term and long term basis and are customized to enhance each client&apos;s quality of life.
              </p>
              <p className="text-[18px] leading-[1.7] text-[#6a6a67] font-normal w-full lg:max-w-[700px]">
                As a full service home care provider, Castor offers an extensive suite of care solutions and essential products ensuring clients receive all necessary support without relying on multiple agencies. Payment options for personal care and companionship typically include private pay, long term care insurance, Medicaid, health insurance plans, veterans benefits, and worker&apos;s compensation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full lg:max-w-[576px] h-[384px] relative rounded-[32px] overflow-hidden shadow-2xl group shrink-0"
          >
            <Image
              src="/images/getcare/home-care/image1.jpg"
              alt="Personal care and companionship support"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
