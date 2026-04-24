"use client";
import React from "react";
import { motion } from "framer-motion";

interface SimpleHeroProps {
  subtitle?: string;
  title: string;
  description?: string;
}

export const SimpleHero = ({ subtitle, title, description }: SimpleHeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-[24px] bg-[#0e1b33] px-4 py-10 text-center sm:min-h-[300px] sm:rounded-[32px] sm:px-6 sm:py-12 md:min-h-[340px] md:rounded-[40px] lg:py-16"
    >
      <div className="relative z-10 w-full px-2 sm:px-4">
        {subtitle && (
          <p className="text-[12px] font-semibold tracking-wide text-[#20a9ad] uppercase sm:text-[13px] md:text-[14px]">
            {subtitle}
          </p>
        )}
        <h1 className="mt-3 text-[24px] font-bold leading-[32px] text-white sm:mt-4 sm:text-[32px] sm:leading-[40px] md:text-[42px] md:leading-[54px] lg:text-[52px] lg:leading-[62px]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-[1021px] text-[14px] font-normal leading-[22px] text-[#f0f9fa] sm:mt-5 sm:text-[16px] sm:leading-[24px] md:mt-6 md:text-[18px] md:leading-[28px]">
            {description}
          </p>
        )}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,169,173,0.08)_0%,transparent_70%)]" />
    </motion.div>
  );
};
