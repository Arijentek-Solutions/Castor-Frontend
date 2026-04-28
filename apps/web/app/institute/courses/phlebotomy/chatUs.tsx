"use client";

import { motion } from "framer-motion";

export default function PhlebotomyChatUs() {
  return (
    <section className="bg-[#f0f9fa] px-4 pt-16 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1217px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center rounded-[12px] border-t-7 border-[#54bdc0] bg-white px-6 py-10 sm:px-8 sm:py-16"
        >
          <h2 className="text-center text-xl font-bold leading-tight text-[#0e1b33] sm:text-2xl md:text-3xl lg:text-[38px] lg:leading-[46px]">
            The need for qualified phlebotomists is higher than ever.
          </h2>
          <p className="mt-6 max-w-[1094px] text-center text-base leading-relaxed text-black sm:mt-8 sm:text-lg lg:text-[20px] lg:leading-[30px]">
            Phlebotomists are key members of healthcare teams, skilled in drawing blood for tests,
            donations, and research. You&apos;ll work in hospitals, labs, clinics, or blood donation
            centers, ensuring accurate results and patient comfort. With our accelerated program,
            you can earn your certification in as few as six weeks and begin a rewarding, in-demand
            career where your expertise makes a difference every day.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 h-[52px] w-[170px] rounded-[67px] border border-[#54bdc0] bg-white text-lg font-normal text-[#0e1b33] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#20a9ad] hover:text-white sm:mt-14 sm:h-[61px] sm:w-[186px] sm:text-[21px]"
          >
            Chat with us!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
