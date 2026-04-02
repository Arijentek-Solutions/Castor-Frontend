"use client";

import { motion, Variants } from "framer-motion";
import {
  CalendarCheck,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Request Ride",
    description: "Submit pickup/drop-off details and mobility needs online.",
    icon: <CalendarCheck className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: 2,
    title: "Review & Price",
    description: "We confirm availability and send a quote based on distance and vehicle type.",
    icon: <ShieldCheck className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: 3,
    title: "Secure Payment",
    description: "Pay via a secure link sent to your email or phone.",
    icon: <CreditCard className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: 4,
    title: "Ride Scheduled",
    description: "Driver is assigned and you receive confirmation updates.",
    icon: <CheckCircle2 className="w-8 h-8 text-[#20a9ad]" />,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="bg-[#fef5ed] rounded-[48px] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <motion.h2
              variants={fadeUp}
              className="text-[32px] md:text-[36px] font-bold text-[#0e1b33] tracking-[-0.36px] mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[18px] text-[#6a6a67] max-w-[600px] mx-auto leading-[28px]"
            >
              A simple process to get you to your appointment on time.
            </motion.p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-[rgba(247,200,154,0.4)] z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={fadeUp}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div
                    className="bg-white size-[80px] rounded-full flex items-center justify-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-6px_rgba(0,0,0,0.1)] relative z-10 cursor-pointer"
                  >
                    <div className="transition-colors duration-500 ease-in-out group-hover:text-[#1c989c]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 bg-[#0e1b33] text-white size-6 rounded-full flex items-center justify-center text-[12px] font-bold z-20 shadow-sm border-2 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-4">
                  <h3 className="text-[22px] font-bold text-[#0e1b33] tracking-tight">
                    {step.id === 2 ? (
                      <>Review & Price</>
                    ) : (
                      step.title
                    )}
                  </h3>
                  <p className="text-[15px] text-[#6a6a67] leading-[1.5] max-w-[220px] mx-auto">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-8 text-[rgba(247,200,154,0.8)]">
                    <ChevronRight className="rotate-90 size-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
