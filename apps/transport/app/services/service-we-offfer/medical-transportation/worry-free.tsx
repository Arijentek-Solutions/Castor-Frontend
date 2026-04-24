"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WorryFree = () => {
    return (
        <section className="bg-[#f0f9fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row-reverse lg:gap-16">
                    {/* Image - shows first on mobile, right on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 lg:flex-1"
                    >
                        <div className="relative h-[280px] w-full overflow-hidden rounded-[13px] sm:h-[400px] lg:h-[552px]">
                            <Image
                                src="/images/service/NEMT/img1.png"
                                alt="Medical transportation vehicle"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Content - shows second on mobile, left on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 lg:flex-1"
                    >
                        <h2 className="text-[28px] font-black leading-[36px] tracking-[-0.3px] text-[#0e1b33] sm:text-[36px] sm:leading-[46px] lg:text-[48px] lg:leading-[58px]">
                            Experience worry-free journeys to healthcare appointments.
                        </h2>

                        <p className="mt-6 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:mt-8 sm:text-[18px] sm:leading-[29px]">
                            Castor's Non-Emergency Medical Transportation (NEMT) service
                            ensures you never miss an important healthcare appointment. We provide
                            safe, reliable, and comfortable transportation to help you access
                            essential medical care with ease.
                        </p>

                        <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:mt-6 sm:text-[18px] sm:leading-[29px]">
                            Our trained drivers follow strict safety and medical handling protocols,
                            ensuring every ride is secure, supportive, and stress-free. Whether
                            it's a simple check-up or a life-impacting treatment, we make sure
                            you arrive on time and return home safely.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorryFree;
