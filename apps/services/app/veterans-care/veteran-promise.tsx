"use client";

import { motion } from "framer-motion";

export default function VeteranPromise() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#20a9ad] to-[#1a8b8f] rounded-[32px] py-16 px-8 md:p-20 text-center text-white overflow-hidden"
        >
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-black/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[900px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[36px] md:text-[42px] font-black leading-[1.1] mb-8 tracking-tight"
            >
              Our Promise
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[20px] md:text-[22px] font-normal leading-[1.6] text-white/90 tracking-[-0.45px]"
            >
              We are committed to providing quality, dignified, and veteran-focused care that honors your service. 
              Our dedicated team ensures every veteran receives the respect, compassion, and professional 
              support they deserve in the comfort of their own home.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
