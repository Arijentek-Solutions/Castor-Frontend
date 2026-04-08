"use client";

import { motion } from "framer-motion";
import { Button } from "@castor/ui";

export default function GetStartedToday() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "linear-gradient(168.473deg, rgb(32, 169, 173) 0%, rgb(31, 166, 170) 9.0909%, rgb(31, 163, 167) 18.182%, rgb(30, 161, 165) 27.273%, rgb(30, 158, 162) 36.364%, rgb(29, 155, 159) 45.455%, rgb(29, 153, 157) 54.545%, rgb(28, 150, 154) 63.636%, rgb(28, 147, 151) 72.727%, rgb(27, 144, 148) 81.818%, rgb(27, 142, 146) 90.909%, rgb(26, 139, 143) 100%)"
          }}
        >
          <div className="py-14 px-10 flex flex-col items-center text-center relative z-10">
            <h2 className="text-[40px] md:text-[48px] font-black text-white mb-6 tracking-[-0.48px] leading-[1.1]">
              Ready to Learn More About Personal Care?
            </h2>
            <p className="text-[20px] text-white/90 mb-12 max-w-[672px] leading-relaxed">
              Contact us today to discuss your care needs
            </p>

            <Button
              variant="secondary"
              className="bg-white text-[rgb(30,158,162)] hover:bg-white/95 border-none px-8 py-4 h-auto text-[16px] font-bold rounded-full shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Started Today
            </Button>
          </div>

          {/* Decorative background elements if any - Figma shows a clean gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
