"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const services = [
  "Medication Administration",
  "Respite Care",
  "Medication Set-up",
  "Personal Care",
  "Wound Care & Management",
  "Skin Care",
  "Ventilator Care & Management",
  "Ambulation/Transfer Assistance",
  "Tracheotomy Care & Management",
  "Exercises/Range of Motion",
  "Tube Feeding Care",
  "Light Housekeeping",
  "IV Infusion Therapy",
  "Meal Preparation",
  "Bowel Management",
  "Errands",
  "Ostomy Care",
  "Transportation",
  "Catheterization",
  "Companionship",
];

export default function OurHomeNursingService() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-8 tracking-[-0.48px]">
            Our Home Nursing Services
          </h2>
          <p className="text-[18px] leading-[1.65] text-[#6a6a67] max-w-[1200px]">
            If you or a loved one needs help with ongoing medical needs due to chronic illness, injury or disability, Castor&apos;s highly skilled nurses provide the highest quality medical attention, ongoing support, and rehabilitative care to help you remain living safely at home. We take a proactive approach to caregiving, focusing on the prevention of complications that could lead to unnecessary hospitalizations. This ongoing surveillance helps to quickly identify and address adverse or preventable health triggers and situations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center gap-4 py-2"
            >
              <div className="flex-shrink-0 size-6 bg-[#20a9ad]/10 rounded-full flex items-center justify-center">
                <Check className="size-4 text-[#20a9ad] stroke-[3px]" />
              </div>
              <span className="text-[16px] font-semibold text-[#0e1b33]">{service}</span>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[320px] rounded-[32px] overflow-hidden shadow-xl"
          >
            <Image
              src="/images/getcare/private-duty-nursing/private-nusing-2.jpg"
              alt="Home Nursing Care"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[320px] rounded-[32px] overflow-hidden shadow-xl"
          >
            <Image
              src="/images/getcare/private-duty-nursing/private-nursing-3.jpg"
              alt="Medical Care"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Support Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f0f9fa] rounded-[32px] p-10 md:px-12 md:py-10"
        >
          <p className="text-[18px] leading-[1.65] text-[#0e1b33] font-medium text-center md:text-left">
            As a Castor client, you receive 24/7 on-call support and access to a wide range of home care services—including personal care, therapy, companionship, medical equipment, supplies, and home health care—ensuring you always have the right care options for your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
