"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  "Assistance with bathing, grooming, dressing, and toileting",
  "Meal planning, preparation, and ensuring healthy nutrition",
  "Light housekeeping, laundry, and maintaining a clean home",
  "Companionship, conversation, and social engagement",
  "Providing a safe and comfortable home environment",
  "Appointment reminders and escorting to appointments or activities",
  "Documentation of daily progress and activities",
  "Assistance with reading and maintaining calendars",
  "Making beds, changing linens, and household organization",
  "Pet care and supervision of home deliveries",
  "Managing mail, bill payments, and grocery shopping",
  "Planning visits, outings, and other recreational activities"
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-12 tracking-[-0.48px] max-w-[900px]">
            Castor Home Services Include
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center gap-4 p-5 bg-white border border-[#20a9ad]/10 rounded-2xl shadow-[0px_2px_4px_rgba(32,169,173,0.05)] hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 size-6 bg-[#20a9ad]/10 rounded-full flex items-center justify-center">
                <Check className="size-4 text-[#20a9ad] stroke-[3px]" />
              </div>
              <span className="text-[15px] font-semibold text-[#0e1b33] leading-snug">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
