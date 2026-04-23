"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="px-4 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pt-44 xl:pt-52">
      <div className="mx-auto max-w-[1530px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex h-[340px] flex-col items-center justify-center overflow-hidden rounded-[40px] bg-[#0e1b33] text-center"
        >
          <div className="relative z-10 px-6">
            <p className="text-[14px] font-semibold tracking-wide text-[#20a9ad] uppercase">Castor Transport</p>
            <h1 className="mt-4 text-[48px] font-bold text-white sm:text-[60px]">About Us</h1>
            <p className="mt-6 max-w-[1021px] text-[18px] font-normal text-[#f0f9fa]">
              Your Trusted Companion for Dependable Transportation Solutions
            </p>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,169,173,0.08)_0%,transparent_70%)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
