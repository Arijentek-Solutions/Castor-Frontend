"use client";

import { motion } from "framer-motion";
import { Award, Clock, ClipboardList } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const features = [
  {
    title: "Licensed & Certified",
    description: "All our caregivers are licensed, certified, and background-checked.",
    icon: <Award className="w-8 h-8 text-white" />,
  },
  {
    title: "24/7 Availability",
    description: "Around-the-clock care and support when you need it most.",
    icon: <Clock className="w-8 h-8 text-white" />,
  },
  {
    title: "Personalized Care Plans",
    description: "Customized care solutions tailored to individual needs.",
    icon: <ClipboardList className="w-8 h-8 text-white" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className={`${inter.variable} font-sans py-24 px-4 sm:px-6 lg:px-8 bg-white`}>
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] md:text-[48px] font-black text-[#0e1b33] tracking-[-0.48px] mb-4"
          >
            Why Choose Castor Health
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[18px] md:text-[20px] text-[#6a6a67] max-w-[626px] mx-auto leading-[1.4]"
          >
            Trusted by thousands of families for compassionate, professional home healthcare
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border-2 border-[#f3f4f6] rounded-[32px] p-8 transition-all duration-300 hover:shadow-xl hover:border-[#20a9ad]/20 flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#20a9ad] to-[#1a8b8f] flex items-center justify-center mb-8 shadow-lg shadow-[#20a9ad]/20">
                {feature.icon}
              </div>
              <h3 className="text-[20px] font-black text-[#0e1b33] mb-4">
                {feature.title}
              </h3>
              <p className="text-[16px] text-[#6a6a67] leading-[1.625] max-w-[310px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
