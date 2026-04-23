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
      className="relative flex h-[340px] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-[#0e1b33] text-center"
    >
      <div className="relative z-10 px-6">
        {subtitle && (
          <p className="text-[14px] font-semibold tracking-wide text-[#20a9ad] uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="mt-4 text-[42px] font-bold leading-[54px] text-white sm:text-[48px] lg:text-[52px]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-[1021px] text-[18px] font-normal text-[#f0f9fa]">
            {description}
          </p>
        )}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,169,173,0.08)_0%,transparent_70%)]" />
    </motion.div>
  );
};
