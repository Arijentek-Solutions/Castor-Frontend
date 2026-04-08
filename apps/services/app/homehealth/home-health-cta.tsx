"use client";

import { motion } from "framer-motion";
import { Button } from "@castor/ui";

export function HomeHealthCTA() {
  return (
    <section className="py-20 lg:py-32 bg-white px-8 lg:px-20">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative overflow-hidden rounded-[32px] px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl"
           style={{ 
             backgroundImage: "linear-gradient(168.473deg, #20a9ad 0%, #1a8b8f 100%)" 
           }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-[32px] lg:text-[40px] font-black text-white mb-6 tracking-tight font-['Inter']">
               Ready to Start Your Care Journey?
            </h2>
            <p className="text-[18px] lg:text-[20px] text-white/90 mb-10 font-['Inter']">
               Contact us today to learn more about our Medicare Home Health services
            </p>
            <div className="flex justify-center">
              <Button 
                variant="secondary" 
                className="h-14 px-10 text-[16px] bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-lg"
              >
                Get Started Today
              </Button>
            </div>
          </div>

          {/* Decorative subtle highlights */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-white/5 blur-[120px] -mr-[10%] -mt-[10%]" />
          <div className="absolute bottom-0 left-0 w-[30%] h-full bg-white/5 blur-[100px] -ml-[5%] -mb-[5%]" />
        </motion.div>
      </div>
    </section>
  );
}
