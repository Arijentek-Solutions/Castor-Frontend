"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
    "Clinics",
    "Hospitals",
    "Assisted living homes",
    "Nursing homes",
    "Cancer treatment centers",
    "Rehabilitation centers",
    "And many other medical facilities",
];

const WhereWeTakeYou = () => {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:gap-16">
                    {/* Image - shows first on mobile, left on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 lg:flex-1"
                    >
                        <div className="relative h-[280px] w-full overflow-hidden rounded-[13px] sm:h-[400px] lg:h-[557px]">
                            <Image
                                src="/images/service/nemt-2.png"
                                alt="Healthcare facility destination"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Content - shows second on mobile, right on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-1/2 lg:flex-1"
                    >
                        <h2 className="text-[28px] font-black leading-[36px] tracking-[-0.3px] text-[#0e1b33] sm:text-[36px] sm:leading-[46px] lg:text-[48px] lg:leading-[58px]">
                            Where We Take You
                        </h2>

                        <p className="mt-6 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:mt-8 sm:text-[18px] sm:leading-[29px]">
                            We provide transportation to a wide range of healthcare locations,
                            including:
                        </p>

                        <ul className="mt-4 space-y-0 sm:mt-6">
                            {destinations.map((destination, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 py-[3px]"
                                >
                                    <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#20a9ad]" />
                                    <span className="text-[16px] font-normal leading-[26px] text-[#565656] sm:text-[18px] sm:leading-[29px]">
                                        {destination}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:mt-8 sm:text-[18px] sm:leading-[29px]">
                            Castor's NEMT service is designed to remove transportation barriers,
                            support your independence, and make your healthcare journey smoother and
                            more accessible.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhereWeTakeYou;
