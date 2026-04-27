"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Info = () => {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
                        <div className="relative h-[250px] w-full overflow-hidden rounded-[12px] bg-[#d1e5e8] sm:h-[350px] lg:h-[450px]">
                            <Image
                                src="/images/transport/services/wheel-chair.png"
                                alt="Wheelchair accessible van"
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
                        <h2 className="text-[24px] font-bold leading-[34px] text-[#0e1b33] sm:text-[30px] sm:leading-[42px] lg:text-[34px] lg:leading-[46px]">
                            Inclusive transportation that guarantees your comfort and safety
                        </h2>

                        <div className="mt-6 space-y-0 sm:mt-10">
                            <p className="text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:text-[17px] sm:leading-[30px]">
                                Our wheelchair vans are specifically designed to accommodate your
                                unique needs, especially when you use wheelchairs or have mobility
                                challenges. Our vans are equipped with ramps, lifts, or lowered
                                floors to accommodate wheelchair users, allowing you to enter and
                                exit the vehicle safely.
                            </p>

                            <p className="mt-4 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:text-[17px] sm:leading-[30px]">
                                We have restraint systems that secure the wheelchair during transit,
                                ensuring your safety and comfort throughout the entire journey.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Info;
