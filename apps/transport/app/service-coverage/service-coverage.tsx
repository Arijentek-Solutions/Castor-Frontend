"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Check, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export function ServiceCoverage() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch min-h-[600px]">
          
          {/* Left Column: Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5 bg-[#f0f9fa] rounded-[48px] p-10 md:p-14 flex flex-col justify-between border border-[#e0f2f1]"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white p-2.5 rounded-xl shadow-sm text-[#20a9ad]">
                  <MapPin className="size-6" />
                </div>
                <span className="text-[14px] font-bold text-[#20a9ad] uppercase tracking-wider">Sterling Office</span>
              </div>

              <h2 className="text-[42px] leading-[1.1] font-bold text-[#0e1b33] mb-8 tracking-tight">
                Serving <br />
                <span className="text-[#20a9ad]">Northern Illinois</span>
              </h2>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 mb-12"
              >
                {[
                  "Hospital-to-Hospital Transfers",
                  "Direct Clinic Admissions",
                  "Skilled Nursing Support",
                  "Dialysis & Treatment Center Care"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeUp}
                    className="flex items-center gap-4"
                  >
                    <div className="size-6 rounded-full bg-white flex items-center justify-center text-[#20a9ad] shadow-sm transition-transform duration-300 hover:scale-110">
                      <Check className="size-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[16px] text-[#6a6a67] font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button className="w-full sm:w-auto bg-[#0e1b33] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#20a9ad] hover:shadow-xl flex items-center justify-center gap-3 group">
                Check Availability
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7 relative rounded-[48px] overflow-hidden group shadow-2xl border-4 border-white h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.821160573926!2d-89.6917244234551!3d41.7894973712526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8809b7c57a8fffff%3A0x3548007dbb1f1c18!2s417%20E%203rd%20St%20Suite%20B%2C%20Sterling%2C%20IL%2061081%2C%20USA!5e0!3m2!1sen!2sin!4v1712036495143!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
