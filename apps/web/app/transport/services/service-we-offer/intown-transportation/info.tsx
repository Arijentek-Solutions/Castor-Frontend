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
                        <div className="relative h-[280px] w-full overflow-hidden rounded-[12px] bg-[#d1e5e8] sm:h-[380px] lg:h-[500px]">
                            <Image
                                src="/images/transport/services/intown.png"
                                alt="In-town transportation"
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
                            Navigate your local area effortlessly.
                        </h2>

                        <p className="mt-6 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:mt-8 sm:text-[17px] sm:leading-[30px]">
                            If you struggle to get around on your own, independent living
                            transportation may be a good option. Our in-town transport service
                            connects you to your desired destinations within your community,
                            allowing you to make the most of your schedule. Our vehicles are
                            equipped to provide a comfortable and enjoyable ride, ensuring your
                            journey is stress-free and pleasant. Our drivers are trained to
                            navigate safely over long distances. You don't have to worry about
                            parking hassles and traffic woes; we streamline in-town travel so you
                            can focus on what truly matters – your well-being.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Info;
