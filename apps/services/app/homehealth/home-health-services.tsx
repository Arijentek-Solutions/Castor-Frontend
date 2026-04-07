"use client";

import { motion, Variants } from "framer-motion";

const services = [
  "Skilled Nursing Care",
  "Physical Therapy",
  "Occupational Therapy",
  "Home Health Aides",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }
  },
};

export function HomeHealthServices() {
  return (
    <section className="bg-white py-20 px-8 sm:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] text-[#0e1b33] sm:text-[48px] tracking-tight mb-6">
            Castor Home Health Services
          </h2>
          <p className="font-['Inter'] text-[18px] font-normal leading-[1.625] text-[#6a6a67] whitespace-normal">
            Castor provides a range of home health services, including:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 }
              }}
              className="relative h-[72px] flex items-center justify-center rounded-[24px] shadow-[0px_10px_15px_rgba(0,0,0,0.1)] p-1 text-center"
              style={{ 
                backgroundImage: "linear-gradient(165.87deg, #20a9ad 0%, #1a8b8f 100%)" 
              }}
            >
              <span className="font-['Inter'] font-bold text-[16px] text-white tracking-wide">
                {service}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
