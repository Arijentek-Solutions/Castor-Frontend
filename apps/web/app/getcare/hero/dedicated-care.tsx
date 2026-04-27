"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const values = [
  "Empathy",
  "Respect",
  "Professional Excellence",
  "Personalized Care",
];

export default function DedicatedCare() {
  return (
    <section className={`${inter.variable} font-sans py-20 px-8 bg-white overflow-hidden`}>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[400px]">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[32px] md:text-[48px] font-black text-[#0e1b33] leading-[1.1] tracking-[-0.48px] mb-6">
              Dedicated to Care with Heart
            </h2>
            
            <p className="text-[18px] text-[#6a6a67] leading-[1.6] mb-10 max-w-[550px]">
              At Castor Home Nursing, compassionate care meets clinical expertise. Our highly trained nurses, caregivers, and therapists work together to deliver patient-focused support in the comfort of your home.
            </p>

            {/* Value Tags */}
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="px-6 py-3 bg-[#dbefef] rounded-full text-[#0e1b33] font-bold text-[14px] shadow-sm whitespace-nowrap"
                >
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-[32px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] group">
              <Image
                src="/images/getcare/general/image1.jpg"
                alt="Dedicated Care"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Subtle glass effect overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[32px]" />
            </div>
            
            {/* Decorative element - subtle teal blob behind image */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#20a9ad]/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
