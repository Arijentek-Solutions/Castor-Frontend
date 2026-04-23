"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Mission = () => {
    return (
        <section className="bg-[#f0f9fa] py-[80px] px-4 sm:px-6 lg:px-[141px]" data-node-id="281:100">
            <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row items-center gap-[84px]">
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="w-full md:w-[520px] h-[360px] overflow-hidden rounded-[12px] bg-[#d1e5e8] shrink-0 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300" 
                    data-node-id="281:101"
                >
                    <img
                        src="/images/about-us/img1.png"
                        alt="Our Mission"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 max-w-[580px]" 
                    data-node-id="281:103"
                >
                    <h2 className="text-[40px] font-bold text-[#0e1b33] mb-[32px]" data-node-id="281:104">
                        Our Mission
                    </h2>
                    <p className="text-[#6a6a67] text-[18px] leading-[30px]" data-node-id="281:105">
                        Guided by compassion and excellence, our mission is to enhance lives through an integrated network of patient-centered services. We ensure safe access to medical appointments, provide personalized home care, supply essential medical products, and offer educational resources that promote confident, informed health.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
