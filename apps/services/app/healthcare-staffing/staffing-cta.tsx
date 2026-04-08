"use client";

import { motion } from "framer-motion";
import { Button } from "@castor/ui";

export function StaffingCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#0e1b33] via-[#101d37] to-[#1a2b4d] px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-[36px] lg:text-[48px] font-black text-white mb-6 tracking-tight">
               Ready to Staff Your Facility?
            </h2>
            <p className="text-[18px] lg:text-[22px] text-white/90 mb-12">
               Contact us today to discuss your staffing needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="h-14 px-10 text-[16px]">
                Contact Us
              </Button>
              <Button variant="secondary" className="h-14 px-10 text-[16px] bg-white text-black hover:bg-white/90">
                Join Our Team
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-[#20a9ad]/5 blur-[120px] -mr-[10%] -mt-[10%]" />
          <div className="absolute bottom-0 left-0 w-[30%] h-full bg-[#20a9ad]/5 blur-[100px] -ml-[5%] -mb-[5%]" />
        </motion.div>
      </div>
    </section>
  );
}
