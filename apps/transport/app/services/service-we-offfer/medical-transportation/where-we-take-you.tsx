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
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1280px]">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
                    {/* Image - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1"
                    >
                        <div className="relative h-[557px] w-full overflow-hidden rounded-[13px]">
                            <Image
                                src="/images/service/NEMT/img2.png"
                                alt="Healthcare facility destination"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Text Content - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1"
                    >
                        <h2 className="text-[36px] font-black leading-[48px] tracking-[-0.48px] text-[#0e1b33] sm:text-[40px] lg:text-[48px]">
                            Where We Take You
                        </h2>

                        <p className="mt-8 text-[18px] font-normal leading-[29px] text-[#6a6a67]">
                            We provide transportation to a wide range of healthcare locations,
                            including:
                        </p>

                        <ul className="mt-6 space-y-0">
                            {destinations.map((destination, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 py-[3px]"
                                >
                                    <span className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#20a9ad]" />
                                    <span className="text-[18px] font-normal leading-[29px] text-[#565656]">
                                        {destination}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-8 text-[18px] font-normal leading-[29px] text-[#6a6a67]">
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
