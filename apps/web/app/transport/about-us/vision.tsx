"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Vision = () => {
    return (
        <section className="bg-white py-[80px] px-4 sm:px-6 lg:px-[141px]" data-node-id="281:106">
            <div className="mx-auto max-w-[1280px] flex flex-col-reverse md:flex-row items-center gap-[160px]">
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 max-w-[580px]" 
                    data-node-id="281:107"
                >
                    <h2 className="text-[40px] font-bold text-[#0e1b33] mb-[32px]" data-node-id="281:108">
                        Our Vision
                    </h2>
                    <p className="text-[#6a6a67] text-[18px] leading-[30px]" data-node-id="281:109">
                        To become the leading provider of non-emergency medical transportation in Illinois and beyond—recognized for accessibility, safety, dignity, and compassionate service—while bridging the gap between healthcare and the people who need it most.
                    </p>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full md:w-[520px] h-[360px] overflow-hidden rounded-[12px] bg-[#d1e5e8] shrink-0 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300" 
                    data-node-id="281:110"
                >
                    <Image
                        src="/images/about-us/img2.png"
                        alt="Our Vision"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Vision;
