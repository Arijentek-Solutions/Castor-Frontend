"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cards = [
  {
    title: "Our Mission",
    description: "Castor exists to enrich lives through genuine compassion and hands-on care. Their mission emphasizes human connection — offering warmth, individual respect, and emotional support from the first interaction through continued care.",
    icon: <Target className="w-8 h-8 text-[#20a9ad]" />,
    bg: "bg-[#20a9ad]",
    textColor: "text-white",
  },
  {
    title: "Our Vision",
    description: "Their core vision is to maintain the sense of home, comfort, community, and identity while delivering healthcare. Patients are encouraged to remain in familiar surroundings where healing is most natural, while still receiving high-level clinical support.",
    icon: <Eye className="w-8 h-8 text-[#0e1b33]" />,
    bg: "bg-[#0e1b33]",
    textColor: "text-white",
  },
];

export default function MissionVision() {
  return (
    <section className={`${inter.variable} font-sans py-24 px-8 bg-white`}>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`${card.bg} rounded-[32px] p-12 flex flex-col items-start shadow-xl relative overflow-hidden group`}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-lg">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className={`text-[32px] font-black ${card.textColor} mb-6 tracking-tight`}>
                {card.title}
              </h3>

              {/* Description */}
              <p className={`text-[18px] leading-[1.6] ${card.textColor} opacity-90 max-w-[480px]`}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
