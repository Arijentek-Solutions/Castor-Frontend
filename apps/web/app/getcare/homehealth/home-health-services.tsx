"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const services = [
  "Skilled Nursing Care",
  "Physical Therapy",
  "Occupational Therapy",
  "Home Health Aides",
];

export function HomeHealthServices() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
  };

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden px-8 lg:px-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10 flex flex-col gap-8"
          >
            <div>
              <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] text-[#0e1b33] sm:text-[48px] tracking-tight mb-8 lg:mb-0">
                Castor Home Health Services
              </h2>
            </div>
            
            <p className="font-['Inter'] text-[18px] font-normal leading-[1.625] text-[#6a6a67] max-w-[500px]">
              Castor provides a range of home health services, including:
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                    transition: { duration: 0.2 }
                  }}
                  className="flex h-[72px] items-center justify-center rounded-[24px] shadow-[0px_10px_20px_rgba(0,0,0,0.08)] text-center px-4"
                  style={{ 
                    backgroundImage: "linear-gradient(165.379deg, #20a9ad 0%, #1a8b8f 100%)" 
                  }}
                >
                  <span className="font-['Inter'] font-bold text-[16px] text-white">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/2] w-full">
              <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <Image
                  src="/images/getcare/home-health/image1.jpg"
                  alt="Castor Home Health Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
