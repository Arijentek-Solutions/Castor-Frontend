"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Book Your Ride",
        description:
            "Call us or use our online booking system to schedule your transport",
    },
    {
        number: "2",
        title: "Get Confirmation",
        description:
            "Receive immediate confirmation with driver details and pickup time",
    },
    {
        number: "3",
        title: "Enjoy Your Ride",
        description:
            "Safe, comfortable transportation to and from your appointment",
    },
];

const HowItWork = () => {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-[1280px] text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[36px] font-bold leading-[54px] text-[#0e1b33] lg:text-[44px]"
                >
                    How It Works
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 text-[18px] font-normal leading-[28px] text-[#6a6a67]"
                >
                    Simple, reliable booking in three easy steps
                </motion.p>

                {/* Steps */}
                <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 2, delay: 0.6 + 0.4 * index, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center"
                        >
                            {/* Number Circle */}
                            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#20a9ad]">
                                <span className="text-[28px] font-bold leading-[36px] text-white">
                                    {step.number}
                                </span>
                            </div>

                            {/* Step Title */}
                            <h3 className="mt-5 text-[20px] font-semibold leading-[28px] text-[#0e1b33]">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="mt-3 max-w-[380px] text-[16px] font-normal leading-[24px] text-[#6a6a67]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWork;
