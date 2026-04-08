"use client";

import { motion } from "framer-motion";

export default function LearnMore() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#20a9ad] to-[#1a8e91] rounded-[40px] py-16 px-8 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[900px] mx-auto">
            <h2 className="text-[32px] md:text-[36px] font-black leading-[1.2] mb-6 tracking-tight">
              Ready to Learn More About Private Duty Nursing?
            </h2>
            <p className="text-[18px] md:text-[20px] font-normal text-white/90 mb-10 tracking-[-0.45px]">
              Contact us today to discuss your care needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0e1b33] rounded-full px-12 py-4 font-bold text-[16px] shadow-lg hover:bg-gray-50 transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
