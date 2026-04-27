"use client";

import { motion } from "framer-motion";

const professionals = [
  "Registered Nurses (RN)",
  "Licensed Practical Nurses (LPN)",
  "Certified Nurse Aides (CNA)",
];

export function PediatricProfessionals() {
  return (
    <section className="bg-white py-12 px-8 sm:px-12 lg:px-20 text-[#0e1b33]">
      <div className="mx-auto max-w-[1240px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Inter'] text-[32px] sm:text-[40px] font-black leading-tight tracking-tight mb-10"
        >
          Our Skilled and Trained Professionals Include
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {professionals.map((pro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#20a9ad] text-white font-['Inter'] font-bold text-[18px] px-10 py-5 rounded-[20px] shadow-[0_10px_25px_-5px_rgba(32,169,173,0.3)] transition-transform hover:scale-105"
            >
              {pro}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
