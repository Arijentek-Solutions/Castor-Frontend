"use client";

import { motion } from "framer-motion";

export default function VeteranContact() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#0e1b33] to-[#1a2b4d] rounded-[40px] py-16 px-8 md:p-20 text-center text-white shadow-2xl overflow-hidden"
        >
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[#20a9ad]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[900px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[36px] md:text-[42px] font-black leading-[1.1] mb-6 tracking-tight"
            >
              Ready to Get Started?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[20px] md:text-[22px] font-normal leading-[1.6] text-white/90 mb-12 tracking-[-0.45px]"
            >
              Contact us today to learn more about our veterans care services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#20a9ad] text-white rounded-full px-10 py-4 font-bold text-[16px] shadow-lg hover:shadow-[#20a9ad/30] transition-all duration-300 w-full sm:w-auto"
              >
                Call Us Today
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0e1b33] rounded-full px-10 py-4 font-bold text-[16px] shadow-lg hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
              >
                Schedule Assessment
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
