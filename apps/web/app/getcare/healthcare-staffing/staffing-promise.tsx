"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function StaffingPromise() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-[1216px]">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative border-2 border-[#20a9ad]/20 rounded-[32px] p-12 lg:px-40 lg:py-16 bg-gradient-to-br from-[#dbefef] to-white shadow-sm"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#20a9ad]/10 flex items-center justify-center text-[#20a9ad]">
               <CheckCircle2 className="w-10 h-10" />
            </div>
          </div>
          
          <h2 className="text-[30px] lg:text-[36px] font-black text-[#0e1b33] mb-6 tracking-tight">
             Our Promise
          </h2>
          
          <p className="text-[18px] lg:text-[20px] leading-relaxed text-[#6a6a67] max-w-[896px] mx-auto">
             No matter your staffing requirements—short-term, long-term, per diem, or specialized roles—Castor is committed to providing dependable, qualified talent that strengthens your team and supports exceptional patient care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
