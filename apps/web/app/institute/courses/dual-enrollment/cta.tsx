"use client";

import { motion } from "framer-motion";
import { Button } from "@castor/ui";

export default function DualEnrollmentCTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto w-full max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[3rem] bg-[#0E1B33] px-6 py-16 text-center shadow-[0_32px_80px_rgba(14,27,51,0.18)] sm:py-20"
        >
          <div className="relative z-10 mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Start Your Dual Enrollment Journey Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
            >
              Get a head start on your healthcare career. Apply for our dual enrollment program
              and begin earning college credits while still in high school.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="h-16 px-12 text-lg font-bold shadow-[0_20px_40px_-15px_rgba(32,169,173,0.3)] bg-[#20a9ad] hover:bg-[#1a8b8f] text-white"
              >
                Apply Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="h-16 border-white/20 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-md hover:bg-white/10"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#20a9ad]/10 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}
