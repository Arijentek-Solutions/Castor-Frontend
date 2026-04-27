"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  "Medication administration",
  "Follow Plan of Care",
  "Ventilator and tracheostomy care",
  "Suctioning",
  "G/J Tube feedings",
  "Ensure equipment is running properly",
  "Order Supplies (Castor owns Medicare/Medicaid Medical Supplies to simplify the order)",
  "Colostomy care",
  "Communicate with the family and doctors",
  "Work all shifts to relieve family members to take rest",
  "Range of motion exercise",
  "Work with physician to order diagnostic tests",
  "Measure Vitals",
  "Case Management",
  "Cardiac Care",
  "Orthopedic Care",
  "Infusion Nursing",
  "Catheter Care",
  "Ostomy Care",
  "Wound vac",
  "Blood Draws",
  "Compress (Hot/Cold)",
  "Change dressings",
  "IV Therapy",
  "Bowel and Bladder training",
  "Go to doctor appointments with patient (if insurance approves)",
];

export function PediatricServicesList() {
  return (
    <section className="bg-white py-24 px-8 sm:px-12 lg:px-20 text-[#0e1b33]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 lg:gap-24">
          
          {/* Left Column: Services List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] tracking-tight mb-12 sm:text-[48px]">
              Castor Pediatric Nursing Services
            </h2>
            
            <div className="space-y-3 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white border border-[#f3f4f6] rounded-[14px] p-4 transition-all hover:shadow-md hover:border-[#20a9ad]/20"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f0f9fa] flex items-center justify-center text-[#20a9ad]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="font-['Inter'] font-semibold text-[16px] leading-tight text-[#0e1b33]">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Important Notice Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-2 border-[#20a9ad]/20 p-8 rounded-[24px]"
              style={{ 
                background: "linear-gradient(162deg, #dbefef 0%, #ffffff 100%)" 
              }}
            >
              <p className="font-['Inter'] text-[16px] leading-[1.625] text-[#0e1b33]">
                <span className="font-bold">Important:</span> If you do not see a specific service listed, please contact us at any time to inquire about the support your loved one may need. Our goal is to place you and your family at the center of a seamless care system designed to enhance quality of life and provide meaningful, reliable support.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Imagery */}
          <div className="relative">
            <div className="sticky top-48">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl">
                  <Image
                    src="/images/getcare/pediatric-nursing/pediatric-nursing-care1.png"
                    alt="Pediatric nursing care"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl">
                  <Image
                    src="/images/getcare/pediatric-nursing/pediatric-nursing-care2.png"
                    alt="Pediatric nursing support"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* Subtle Accent Graphics */}
                <div className="absolute -z-10 -right-12 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#f0f9fa] rounded-full blur-3xl opacity-60" />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
