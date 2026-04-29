"use client";

import { motion } from "framer-motion";

export default function DualEnrollmentChatUs() {
  return (
    <section className="bg-[#f0f9fa] px-4 pt-16 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1217px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center rounded-[16px] border-t-7 border-[#68c5c7] bg-white px-6 py-10 sm:px-8 sm:py-16"
        >
          <h2 className="text-center text-xl font-bold leading-tight text-[#0e1b33] sm:text-2xl md:text-3xl lg:text-[38px] lg:leading-[51px]">
            Exclusive Offer: Phlebotomy Certification at a Discount for Castor CNA Graduates!
          </h2>
          <p className="mt-6 max-w-[1133px] text-center text-base leading-relaxed text-black sm:mt-8 sm:text-lg lg:text-[20px] lg:leading-[28.9px]">
            Already a CNA through Castor? Take the next step in your healthcare career with our discounted Phlebotomy course! As a Castor graduate, you can earn your Phlebotomy certification in less time and at a reduced cost. This is your chance to expand your skill set, increase your job opportunities, and boost your earning potential—all while building on the foundation you&apos;ve already established. Don&apos;t miss out on this exclusive offer to fast-track your career!
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 h-[52px] w-[170px] rounded-[63px] border border-[#7fc7c9] bg-white text-lg font-normal text-[#0e1b33] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#20a9ad] hover:text-white sm:mt-14 sm:h-[61px] sm:w-[186px] sm:text-[21px]"
          >
            Chat with us!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
