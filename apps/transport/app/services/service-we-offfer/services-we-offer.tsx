"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Non-Emergency Medical Transportation",
        image: "/images/service/img1.png",
        href: "/services/service-we-offfer/medical-transportation",
    },
    {
        title: "Wheelchair Vans",
        image: "/images/service/img2.png",
        href: "/services/service-we-offfer/wheelchair-vans",
    },
    {
        title: "Independent Living Transportation",
        image: "/images/service/img3.png",
        href: "/services/service-we-offfer/living-transportation",
    },
    {
        title: "Doctor's Appointment",
        image: "/images/service/img4.png",
        href: "/services/service-we-offfer/doctor-appointment",
    },
    {
        title: "Assistance in Admission and Discharge",
        image: "/images/service/img5.png",
        href: "/services/service-we-offfer/admission-and-discharge",
    },
    {
        title: "In-Town Transport",
        image: "/images/service/img6.png",
        href: "/services/service-we-offfer/intown-transportation",
    },
    {
        title: "Dialysis Appointment",
        image: "/images/service/img7.png",
        href: "/services/service-we-offfer/dialysis-appointment",
    },
    {
        title: "Local and Long-Distance Transportation",
        image: "/images/service/img8.png",
        href: "/services/service-we-offfer/local-transportation",
    },
];

const ServicesWeOffer = () => {
    return (
        <section className="bg-[#f0f9fa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-[1280px]">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center text-[36px] font-bold leading-tight text-[#0e1b33] sm:text-[40px] lg:text-[44px]"
                >
                    Services We Offer
                </motion.h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex flex-col overflow-hidden rounded-[12px] bg-white"
                        >
                            <div className="relative h-[193px] overflow-hidden rounded-t-[8px] bg-[#d1e5e8]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-1 flex-col items-center gap-4 px-4 py-4">
                                <p className="text-center text-[14px] font-semibold leading-[20px] text-[#0e1b33]">
                                    {service.title}
                                </p>
                                <Link
                                    href={service.href}
                                    className="mt-auto inline-flex items-center rounded-full bg-[#20a9ad] px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a8f92]"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesWeOffer;
