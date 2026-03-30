"use client";

import { ClipboardList, MapPin, ShieldCheck, Activity } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const steps = [
  {
    id: 1,
    title: "Guided Triage",
    description: "Answer a few questions about age, location, and needs to match with the right service.",
    icon: <ClipboardList className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: 2,
    title: "Eligibility Check",
    description: "We verify county coverage and service availability instantly.",
    icon: <MapPin className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: 3,
    title: "Secure Intake",
    description: "Complete a HIPAA-compliant form. We never store sensitive medical data on this site.",
    icon: <ShieldCheck className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: 4,
    title: "Review & Care",
    description: "Our team reviews your request and coordinates care fulfillment.",
    icon: <Activity className="w-8 h-8 text-[#20a9ad]" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HowToRequestCare() {
  return (
    <>
      {/* Steps Section */}
      <section className={`${inter.variable} font-sans py-24 px-4 sm:px-6 lg:px-8 bg-[#fef5ed] overflow-hidden`}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[32px] sm:text-[40px] font-bold text-[#0e1b33] tracking-tight mb-4"
            >
              How to Request Care
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-[18px] text-[#6a6a67] max-w-[672px] mx-auto leading-relaxed"
            >
              A secure, guided process ensures you get the right help without administrative headaches.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#0e1b33] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-[20px] font-bold text-[#0e1b33] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#6a6a67] leading-[1.6] max-w-[240px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ready to Get Started CTA Section */}
      <section className={`${inter.variable} font-sans py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden`}>
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[30px] font-bold text-[#0e1b33] mb-8 tracking-tight"
          >
            Ready to get started?
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-[#0e1b33] text-white px-10 py-4 rounded-full text-[18px] font-medium shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#1a2d4d]"
          >
            Start Guided Request
          </motion.button>
        </div>
      </section>
    </>
  );
}
