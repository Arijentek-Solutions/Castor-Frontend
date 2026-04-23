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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.005, transition: { duration: 0.3 } }}
      className="relative flex h-[340px] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-[#0e1b33] text-center group"
    >
      <div className="relative z-10 px-6">
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[14px] font-semibold tracking-wide text-[#20a9ad] uppercase"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-[48px] font-bold text-white sm:text-[60px] tracking-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-[1021px] text-[18px] font-normal text-[#f0f9fa]"
          >
            {description}
          </motion.p>
        )}
      </div>
      
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,169,173,0.12)_0%,transparent_70%)]" 
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,transparent)]" />
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(32,169,173,0.05)_0%,transparent_50%)]" />
    </motion.div>
  );
};
