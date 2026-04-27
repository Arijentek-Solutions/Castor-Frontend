"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const testimonials = [
  {
    name: "Sarah Johnson",
    quote: "The care my mother received was exceptional. The nurses were professional, compassionate, and truly cared about her well-being.",
  },
  {
    name: "Michael Davis",
    quote: "Castor Home Nursing made a difficult time much easier for our family. We felt supported every step of the way.",
  },
  {
    name: "Jennifer Martinez",
    quote: "The personalized care plan created for my father exceeded our expectations. Highly recommend their services.",
  },
];

export default function Testimonials() {
  return (
    <section className={`${inter.variable} font-sans py-24 px-8 bg-[#fafafa]`}>
      <div className="max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[48px] font-black text-[#0e1b33] tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-[#f0f0f0] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col items-start transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-6 text-[#20a9ad]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-[17px] leading-[1.6] text-[#6a6a67] italic mb-8 flex-1">
                "{t.quote}"
              </p>
              
              <div className="font-black text-[#0e1b33] text-[18px]">
                {t.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
