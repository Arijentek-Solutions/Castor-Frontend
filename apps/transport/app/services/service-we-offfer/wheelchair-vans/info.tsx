"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Info = () => {
    return (
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
                    {/* Text Content - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1"
                    >
                        <h2 className="text-[28px] font-bold leading-[46px] text-[#0e1b33] sm:text-[32px] lg:text-[34px]">
                            Inclusive transportation that guarantees your comfort and safety
                        </h2>

                        <div className="mt-10 space-y-0">
                            <p className="text-[17px] font-normal leading-[30px] text-[#6a6a67]">
                                Our wheelchair vans are specifically designed to accommodate your
                                unique needs, especially when you use wheelchairs or have mobility
                                challenges. Our vans are equipped with ramps, lifts, or lowered
                                floors to accommodate wheelchair users, allowing you to enter and
                                exit the vehicle safely.
                            </p>

                            <p className="mt-4 text-[17px] font-normal leading-[30px] text-[#6a6a67]">
                                We have restraint systems that secure the wheelchair during transit,
                                ensuring your safety and comfort throughout the entire journey.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1"
                    >
                        <div className="relative h-[450px] w-full overflow-hidden rounded-[12px] bg-[#d1e5e8]">
                            <Image
                                src="/images/service/WHEEL-CHAIR/img1.png"
                                alt="Wheelchair accessible van"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Info;
