"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    title: "Care & Living Assistance Support",
    items: [
      "Help with daily activities",
      "Personal care",
      "Mobility assistance",
    ],
  },
  {
    title: "Home Safety & Comfort",
    items: [
      "Safe home environment",
      "Fall prevention",
      "Accessibility support",
    ],
  },
  {
    title: "Medical Support Services",
    items: [
      "Medication management",
      "Health monitoring",
      "Coordination with healthcare providers",
    ],
  },
  {
    title: "Home Preparation & Support",
    items: [
      "Meal preparation",
      "Household assistance",
      "Daily routine support",
    ],
  },
  {
    title: "Nutrition Support",
    items: [
      "Meal planning",
      "Dietary support",
      "Nutritional guidance",
    ],
  },
];

export default function VeteransCareServices() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] tracking-[-0.13px]">
            Our Veterans Care Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-[#f3f4f6] rounded-[32px] p-8 md:p-10 flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:border-[#20a9ad33] group"
            >
              {/* Card Title */}
              <h3 className="text-[22px] font-black leading-[1.3] text-[#0e1b33] mb-8 tracking-[-0.45px]">
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
                    className="flex items-center gap-3 w-full"
                  >
                    <div className="flex-shrink-0 size-5 flex items-center justify-center rounded-full bg-[#20a9ad1a]">
                      <Check className="size-3.5 text-[#20a9ad] stroke-[4px]" />
                    </div>
                    <span className="text-[16px] font-medium leading-[1.5] text-[#6a6a67] tracking-[-0.15px]">
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
