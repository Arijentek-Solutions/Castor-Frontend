"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Users, ShieldCheck, Home } from "lucide-react";

const services = [
  {
    title: "Skilled Nursing Support",
    description: "Professional skilled nursing care for complex medical needs",
    icon: Activity,
  },
  {
    title: "Personal Care Assistance",
    description: "Help with daily activities and personal hygiene",
    icon: Heart,
  },
  {
    title: "Companion Care",
    description: "Social engagement and emotional support",
    icon: Users,
  },
  {
    title: "Medical Support Services",
    description: "Medication management and health monitoring",
    icon: ShieldCheck,
  },
  {
    title: "Home-Based Care Solutions",
    description: "Comprehensive care delivered in the comfort of home",
    icon: Home,
  },
];

export default function WhatWeProvide() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] tracking-[-0.13px]">
            What We Provide
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-[#f3f4f6] rounded-[32px] p-8 h-[320px] flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:border-[#20a9ad33] group"
            >
              {/* Icon Circle */}
              <div 
                className="size-16 rounded-full flex items-center justify-center mb-8 shrink-0"
                style={{
                  background: "linear-gradient(135deg, #20a9ad 0%, #1a8b8f 100%)",
                }}
              >
                <service.icon className="size-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-black leading-[1.4] text-[#0e1b33] mb-4 tracking-[-0.45px]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] font-normal leading-[1.6] text-[#6a6a67] tracking-[-0.15px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
