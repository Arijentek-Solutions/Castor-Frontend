"use client";
import React from "react";
import { motion } from "framer-motion";

const Paragraph = () => {
    return (
        <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto max-w-[1090px] text-center"
            >
                <p className="text-[20px] font-normal leading-[30px] text-[#6a6a67]">
                    CASTOR offers a wide array of Non-Emergency Medical Transportation
                    (NEMT) services, catering to the needs of individuals with
                    transportation difficulties. Our NEMT services are tailor-made to
                    accommodate your unique challenges, ensuring you reach your destination
                    safely and comfortably.
                </p>
            </motion.div>
        </section>
    );
};

export default Paragraph;
