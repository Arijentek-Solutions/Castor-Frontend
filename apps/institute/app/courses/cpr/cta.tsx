"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@castor/ui";

const containerVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 40 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const textReveal: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function CPRCTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto w-full max-w-[1300px]">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="relative overflow-hidden rounded-[3rem] bg-[#0E1B33] px-6 py-16 text-center shadow-[0_32px_80px_rgba(14,27,51,0.18)] sm:py-24"
        >
          <div className="relative z-10 mx-auto max-w-4xl">
            <motion.h2 
              variants={textReveal}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Get CPR Certified Today
            </motion.h2>
            
            <motion.p 
              variants={textReveal}
              transition={{ delay: 0.3 }}
              className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
            >
              Join our next class and learn the skills that can save a life. <br className="hidden sm:block" />
              Same-day certification available.
            </motion.p>

            <motion.div 
              variants={textReveal}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col justify-center gap-6 sm:flex-row sm:items-center"
            >
              <Button 
                size="lg" 
                className="h-16 px-12 text-lg font-bold shadow-[0_20px_40px_-15px_rgba(32,169,173,0.3)] bg-[#20a9ad] hover:bg-[#1a8b8f] text-white transition-transform hover:scale-105"
              >
                Enroll Now
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="h-16 border-white/20 bg-white/5 px-10 text-lg font-bold text-white backdrop-blur-md hover:bg-white/10 transition-transform hover:scale-105"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Background Decorative Pulsing Element */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#20a9ad] blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#20a9ad] blur-[100px]" 
          />
        </motion.div>
      </div>
    </section>
  );
}
