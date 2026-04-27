"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const specializedServices = [
  {
    title: "Personal & Mobility Assistance",
    items: [
      "Bathing assistance",
      "Dressing support",
      "Walking assistance",
    ],
  },
  {
    title: "Medical & Routine Management",
    items: [
      "Medication reminders",
      "Monitoring recovery progress",
      "Coordination with physicians",
    ],
  },
  {
    title: "Specialized Condition-Based Care",
    items: [
      "Alzheimer's & Dementia Care",
      "Chronic condition support",
      "Rehabilitation care",
      "Long-term care support",
    ],
  },
  {
    title: "Post-Surgery Expertise",
    items: [
      "Hip replacement",
      "Knee replacement",
      "Cardiac procedures",
      "General surgery recovery",
    ],
  },
];

export default function VeteranSpecialized() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-8 sm:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] tracking-[-0.13px]">
            Post-Operative Care & Specialized Care
          </h2>
        </motion.div>

        {/* Specialized Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specializedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#dbf2f2] to-white border-2 border-[#20a9ad33] rounded-[32px] p-8 flex flex-col items-start transition-all duration-300 hover:shadow-xl group"
            >
              {/* Card Title */}
              <h3 className="text-[20px] font-black leading-[1.4] text-[#0e1b33] mb-8 tracking-[-0.45px] h-[56px] flex items-center">
                {service.title}
              </h3>

              {/* Items List */}
              <ul className="space-y-4 w-full">
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
                    className="flex items-start gap-2 w-full"
                  >
                    <div className="flex-shrink-0 mt-1 size-[16px] flex items-center justify-center">
                      <Check className="size-4 text-[#20a9ad] stroke-[3px]" />
                    </div>
                    <span className="text-[14px] font-semibold leading-[1.4] text-[#0e1b33] tracking-[-0.15px]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
