"use client";

import { motion } from "framer-motion";
import { 
  Accessibility, 
  Ambulance, 
  User, 
  Building2, 
  Check, 
  ArrowRight,
  CarFront
} from "lucide-react";
import Link from "next/link";

const fleetCapabilities = [
  {
    id: "wheelchair",
    title: "Wheelchair Transport",
    description: "Vehicles equipped with hydraulic lifts and securement systems for patients who remain in their wheelchairs.",
    icon: <Accessibility className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: "stretcher",
    title: "Stretcher Transport",
    description: "Specialized vehicles for patients who must remain in a supine position (non-emergency only).",
    icon: <Ambulance className="w-8 h-8 text-[#20a9ad]" />,
  },
  {
    id: "ambulatory",
    title: "Ambulatory Transport",
    description: "Standard sedan or van service for patients who can walk but need reliable assistance.",
    icon: <User className="w-8 h-8 text-[#20a9ad]" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function FleetSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-[36px] font-bold text-[#0e1b33] tracking-[-0.36px] mb-4"
          >
            Our Fleet Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            className="text-[18px] text-[#6a6a67] max-w-[672px] mx-auto leading-[28px]"
          >
            We offer specialized transport tailored to your mobility needs.
          </motion.p>
        </div>

        {/* Fleet Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {fleetCapabilities.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-[#f0f9fa] rounded-[32px] p-8 h-[270px] flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:bg-white hover:border-[#e5e7eb] border border-transparent"
            >
              <div className="flex flex-col gap-6">
                <div className="bg-white size-[64px] rounded-[24px] flex items-center justify-center shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-[20px] font-bold text-[#0e1b33]">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#6a6a67] leading-[26px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
