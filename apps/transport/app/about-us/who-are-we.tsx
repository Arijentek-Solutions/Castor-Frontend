"use client";
import React from "react";
import { motion } from "framer-motion";

const WhoAreWe = () => {
    return (
        <section className="relative w-full bg-white pt-[100px] pb-[80px]" data-node-id="281:76">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-[141px]"
            >
                <h2
                    className="text-center font-bold text-[#0e1b33] text-[44px] leading-[54px]"
                    data-node-id="281:77"
                >
                    Who We Are
                </h2>
                <p
                    className="mt-[38px] text-[#6a6a67] text-[18px] leading-[32px] font-normal"
                    data-node-id="281:78"
                >
                    Castor is a comprehensive, integrated health and wellness ecosystem based in Sterling, IL, dedicated to supporting individuals through every stage of their care journey. We believe that true well-being requires a holistic approach, which is why we&apos;ve brought together four core services under one united mission: improving lives through accessible, compassionate, and complete healthcare support.
                </p>
            </motion.div>
        </section>
    );
};

export default WhoAreWe;