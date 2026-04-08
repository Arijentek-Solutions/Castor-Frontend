"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutHealthcareStaffing() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden bg-white">
      <div className="mx-auto max-w-[1276px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-8 tracking-tight">
              About Castor Staffing
            </h2>
            <div className="space-y-6">
              <p className="text-[17px] sm:text-[18px] text-[#6a6a67] font-medium leading-[1.625] max-w-[600px] mx-auto lg:mx-0">
                At Castor Staffing, we provide flexible and efficient staffing solutions tailored to each facility's unique needs. We accommodate all communication methods—phone, fax, email, third-party services, or online portals—and can manage lead times from a month to just an hour, including last-minute requests.
              </p>
              <p className="text-[17px] sm:text-[18px] text-[#6a6a67] font-medium leading-[1.625] max-w-[600px] mx-auto lg:mx-0">
                Our services are fully customizable, and our team is committed to adapting to your specific preferences and technical requirements, ensuring a seamless and professional staffing experience.
              </p>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[600px] mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/Staffing-Healthcare/about-staffing-healthcare.png"
                alt="Healthcare Staffing Collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Subtle Accent Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[#f0f9fa] hidden sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
