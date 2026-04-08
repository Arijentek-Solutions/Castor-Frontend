"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function HomeCTA() {
  return (
    <section className={`${inter.variable} font-sans py-24 px-8 bg-white`}>
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#20a9ad] rounded-[32px] p-16 text-center shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px]" />
          
          <h2 className="text-[36px] md:text-[48px] font-black text-white leading-tight mb-6 tracking-tight">
            Ready to Begin Home Healthcare?
          </h2>
          
          <p className="text-[20px] text-white opacity-90 mb-10 max-w-[600px] mx-auto">
            Contact us today for a free consultation and care assessment.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold text-[18px] transition-all duration-300 hover:bg-[#f0f9f9] hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Schedule Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
