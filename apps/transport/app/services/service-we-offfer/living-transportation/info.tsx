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
                                src="/images/service/LIVING=TRANSPORTATION/img1.png"
                                alt="Independent living transportation"
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
                            Navigate your appointments with ease and independence.
                        </h2>

                        <p className="mt-6 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:mt-8 sm:text-[17px] sm:leading-[30px]">
                            Our independent living transportation helps individuals live
                            independently in the community. This transportation solution is tailored
                            to your needs, preferences, and schedule. Our independent living
                            transportation service seamlessly facilitates your journey from medical
                            appointments to grocery shopping and personal trips. Count on us to be
                            your steadfast companion on every journey, ensuring you reach your
                            destinations promptly and with ease. Our dedicated drivers provide safe
                            transit and a supportive presence, making each trip a comfortable and
                            enjoyable experience.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Info;
