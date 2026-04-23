"use client";
import React from "react";
import { motion } from "framer-motion";

const Purpose = () => {
  return (
    <section className="relative w-full bg-white py-[80px] text-center" data-node-id="281:97">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[1280px] px-4"
      >
        <h2 className="text-[44px] font-bold text-[#0e1b33] leading-[54px] mb-[20px]" data-node-id="281:98">
          Our Purpose
        </h2>
        <div 
          className="mx-auto max-w-[900px] text-[#6a6a67] text-[18px] leading-[32px] font-normal"
          data-node-id="281:99"
        >
          <p className="mb-8 italic text-[#20a9ad] font-medium">
            &quot;Castor&apos;s vision is to enrich lives by unifying transportation, in-home care, medical supplies, and health education into a single, seamless support system. This integrated model allows us to offer complete, uninterrupted care that promotes wellness, independence, and peace of mind.&quot;
          </p>
          <p>
            We&apos;re committed to walking alongside every individual on their wellness journey—providing expertise, compassion, and reliable care that strengthens our community.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Purpose;
