"use client";

import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section className="bg-white px-8 py-24 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="w-full">
            <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] tracking-[-0.01em] text-[#0e1b33] sm:text-[48px]">
              About Medicare Home Health Services
            </h2>
          </div>
          <div className="w-full max-w-[1202px]">
            <p className="font-['Inter'] text-[18px] font-normal leading-[1.625] text-[#6a6a67]">
              Castor Home Health, a Joint Commission Accredited agency, delivers
              high quality, safe, and cost effective care in the comfort of your
              home. We support your independence by tailoring services to your
              specific needs from customized visit schedules to care for
              specific conditions and assistance with daily tasks or
              appointments. Care begins with a doctor&apos;s referral, after
              which we schedule an initial visit to understand your needs and
              coordinate with your physician. Our team provides compassionate,
              professional care with ongoing communication to ensure you receive
              the right support at home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
