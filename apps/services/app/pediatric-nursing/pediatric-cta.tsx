"use client";

import { motion } from "framer-motion";
import { Button } from "@castor/ui";

export function PediatricCTA() {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#20a9ad] to-[#1a8b8f] px-8 py-10 lg:px-16 lg:py-12 text-center shadow-2xl"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-[32px] lg:text-[44px] xl:text-[48px] font-black text-white mb-4 tracking-tight leading-tight lg:whitespace-nowrap">
              Ready to Learn More About Pediatric Care?
            </h2>
            <p className="text-[18px] lg:text-[22px] text-white/90 mb-8 max-w-2xl mx-auto">
             Contact us today to discuss your child's care needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" className="h-14 px-10 text-[16px] bg-white text-black hover:bg-white/90">
               Get Started Today
              </Button>
            </div>
          </div>

          {/* Decorative elements to match the "glassy" premium feel */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/10 blur-[120px] -mr-[10%] -mt-[10%]" />
          <div className="absolute bottom-0 left-0 w-[30%] h-full bg-white/5 blur-[100px] -ml-[5%] -mb-[5%]" />
          
          {/* Subtle geometric overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
          />
        </motion.div>
      </div>
    </section>
  );
}
