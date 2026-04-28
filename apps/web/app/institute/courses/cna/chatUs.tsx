"use client";

import { motion } from "framer-motion";

export default function ChatUs() {
  return (
    <section className="bg-[#f0f9fa] px-4 pt-16 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1217px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center rounded-[12px] border-t-7 border-[#54bdc0] bg-white px-8 py-16"
        >
          <h2 className="text-center text-[38px] font-bold leading-[28.9px] text-[#0e1b33]">
            We&rsquo;ll prepare you to thrive out there in the field.
          </h2>
          <p className="mt-8 max-w-[1094px] text-center text-[20px] leading-[28.9px] text-black">
            Certified Nursing Assistants play a vital role in healthcare, providing direct care to
            patients in hospitals, nursing homes, and assisted living facilities. From assisting
            with daily activities to offering compassionate support, CNAs make a difference every
            day. With our competitive tuition rates and financial assistance options, you can quickly
            begin a fulfilling career in high-demand settings where your work truly matters.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-14 h-[61px] w-[186px] rounded-[65px] border border-[#20a9ad] bg-white text-[21px] font-normal leading-[30.27px] text-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#20a9ad] hover:text-white"
          >
            Chat with us!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
