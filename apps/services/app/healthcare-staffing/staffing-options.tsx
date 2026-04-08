"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const options = [
  { title: "Temporary Staffing (Per-Diem)" },
  { title: "Local Contract Staffing" },
  { title: "Travel Contract Staffing" }
];

export function StaffingOptions() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-[40px] lg:text-[48px] font-black text-[#0e1b33] mb-6 tracking-tight">
            Staffing Service Options
          </h2>
          <p className="text-[18px] text-[#6a6a67] max-w-2xl mx-auto">
            We offer multiple placement formats to fit your facility's needs:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1024px] mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-2 border-[#20a9ad]/20 rounded-[32px] p-8 lg:p-12 text-center bg-gradient-to-br from-[#dbefef] to-white flex flex-col items-center justify-center min-h-[188px] group hover:border-[#20a9ad]/50 transition-all shadow-sm hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#20a9ad] mb-6 mb:hidden">
                <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="text-[20px] font-black text-[#0e1b33] leading-tight">
                {option.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
