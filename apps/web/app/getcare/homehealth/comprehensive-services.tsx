"use client";

import { motion, type Variants } from "framer-motion";

const comprehensiveServices = [
  {
    title: "Safety Assessment and Risk Correction",
    description: "Identifying and addressing safety risks in the home to ensure a secure environment and ease of mobility.",
  },
  {
    title: "Vital Signs Monitoring",
    description: "Regular checks of blood pressure, heart rate, temperature, and respiration.",
  },
  {
    title: "Infusion Therapy",
    description: "Administration of intravenous medications as needed.",
  },
  {
    title: "Chronic Condition Management",
    description: "Monitoring and managing chronic diseases such as diabetes, heart disease, and COPD.",
  },
  {
    title: "Infection Prevention",
    description: "Implementing measures to prevent infections.",
  },
  {
    title: "Injections and Wound Care",
    description: "Administering injections and providing specialized wound care.",
  },
  {
    title: "Pain and Medication Management",
    description: "Overseeing pain management and administering medications, along with patient education.",
  },
  {
    title: "Physical, Occupational, and Speech Therapy",
    description: "Providing therapeutic services to support rehabilitation and recovery.",
  },
  {
    title: "Disease Education and Prevention",
    description: "Offering information and strategies for managing and preventing diseases.",
  },
  {
    title: "Medical Observation and Assessment",
    description: "Conducting routine evaluations of health status.",
  },
  {
    title: "Personal Assistance",
    description: "Live-in and non-medical support such as assistance with bathing, dressing, and daily living activities.",
  },
  {
    title: "Doctor Communication",
    description: "Coordinating with your doctor to stay updated on your health.",
  },
  {
    title: "Companionship and Social Interaction",
    description: "Engaging patients in activities like reading, games, walks, and outings to provide emotional support and interaction.",
  },
];

export function ComprehensiveServices() {
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
    hidden: { opacity: 0, scale: 0.98, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-white py-24 px-8 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-['Inter'] text-[40px] font-black leading-[1.1] text-[#0e1b33] sm:text-[48px] tracking-tight mb-6">
            Comprehensive Care Services
          </h2>
          <p className="font-['Inter'] text-[18px] font-normal text-[#6a6a67]">
            Castor offers a comprehensive range of home health services, including:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {comprehensiveServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                borderColor: "rgba(32, 169, 173, 0.2)", 
                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                transition: { duration: 0.3 }
              }}
              className="bg-white border-2 border-[#f3f4f6] rounded-[24px] p-8 flex flex-col gap-4 transition-all duration-300"
            >
              <h3 className="font-['Inter'] font-black text-[22px] sm:text-[24px] leading-[1.2] text-[#0e1b33]">
                {service.title}
              </h3>
              <p className="font-['Inter'] text-[14px] leading-relaxed text-[#6a6a67]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
