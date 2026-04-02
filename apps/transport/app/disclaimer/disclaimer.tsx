"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, CreditCard } from "lucide-react";

export function Disclaimer() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="bg-[#fef5ed] py-8 px-4 sm:px-6 lg:px-8 border-t border-[#f0e6dc]"
    >
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Main Disclaimer Text */}
        <p className="text-[14px] md:text-[15px] text-[#6a6a67] leading-relaxed mb-8 max-w-[900px] mx-auto">
          Castor Medical Transportation is a non-emergency service. Drivers are CPR certified but do not provide medical care.
        </p>

        {/* Highlighted Features */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          <div className="flex items-center gap-2.5 group">
            <ShieldCheck className="size-[18px] text-[#20a9ad] transition-transform group-hover:scale-110" />
            <span className="text-[14px] font-bold text-[#0e1b33]">Fully Insured & Licensed</span>
          </div>
          
          <div className="flex items-center gap-2.5 group">
            <Clock className="size-[18px] text-[#20a9ad] transition-transform group-hover:scale-110" />
            <span className="text-[14px] font-bold text-[#0e1b33]">Advance Scheduling Recommended</span>
          </div>
          
          <div className="flex items-center gap-2.5 group">
            <CreditCard className="size-[18px] text-[#20a9ad] transition-transform group-hover:scale-110" />
            <span className="text-[14px] font-bold text-[#0e1b33]">Secure Online Payments</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
