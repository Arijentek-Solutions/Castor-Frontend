"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHomeNursing() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:max-w-[576px]"
          >
            <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-8 tracking-[-0.48px]">
              About Castor Home Nursing Services
            </h2>
            <div className="space-y-6">
              <p className="text-[18px] leading-[1.65] text-[#6a6a67] font-normal">
                Castor provides private duty nursing for patients of all ages across home settings, assisted living facilities, and more. Their team — nurses, aides, therapists, and support staff — is dedicated to delivering personalized, high-quality care with compassion. All nurses receive specialized ongoing training, 24/7 clinical support, and undergo a strict hiring process to ensure excellence.
              </p>
              <p className="text-[18px] leading-[1.65] text-[#6a6a67] font-normal">
                With over 30 years of experience across 20+ counties, Castor is a trusted provider of dependable home nursing care. Their Adult Private Duty Nursing service offers skilled, individualized medical support for adults at home, focusing on comfort, comprehensive care, and improved health outcomes.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-[576px] h-[384px] relative rounded-[32px] overflow-hidden shadow-2xl group"
          >
            <Image
              src="/images/private duty nursing/private-nursing-1.jpg"
              alt="Healthcare professional providing specialized nursing care"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
