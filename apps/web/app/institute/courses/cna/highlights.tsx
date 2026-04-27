"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "State-approved curriculum",
  },
  {
    title: "Clinical training hours",
  },
  {
    title: "Exam preparation included",
  },
  {
    title: "Job placement assistance",
  },
  {
    title: "Flexible scheduling options",
  },
  {
    title: "Experienced instructors",
  },
];

export default function ProgramHighlights() {
  const fadeInUp: Variants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-[#0E1B33] sm:text-5xl"
          >
            Program Highlights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-500"
          >
            Our CNA program combines classroom instruction with hands-on clinical experience
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative flex items-center gap-4 rounded-[24px] border border-gray-100 bg-[#f9fcfc] p-7 transition-all duration-300 hover:border-[#20a9ad]/30 hover:bg-white hover:shadow-[0_20px_40px_-12px_rgba(32,169,173,0.12)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#20a9ad] shadow-sm transition-colors group-hover:bg-[#20a9ad] group-hover:text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#0E1B33] transition-colors group-hover:text-[#20a9ad]">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
