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
                                src="/images/service/admission-discharge.png"
                                alt="Admission and discharge transportation"
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
                            Our transportation assistance ensures a smooth admission or discharge
                            process.
                        </h2>

                        <p className="mt-6 text-[16px] font-normal leading-[26px] text-[#6a6a67] sm:mt-8 sm:text-[17px] sm:leading-[30px]">
                            Worrying about your loved one's admission and discharge? We are here to
                            offer you transportation assistance that ensures a seamless transition
                            between medical facilities. From hospital to home or vice versa, we
                            ensure you're comfortably settled and have everything you need for a
                            smooth transition. This service guarantees a compassionate and organized
                            experience, eliminating unnecessary worries and allowing you to
                            concentrate on your recovery. Our compassionate drivers are trained to
                            provide assistance and support as needed, recognizing your unique needs.
                            Our maintained vehicles are thoughtfully equipped to accommodate
                            stretchers or gurneys, providing a comfortable and secure transportation
                            option for individuals who require bedridden mobility.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Info;
