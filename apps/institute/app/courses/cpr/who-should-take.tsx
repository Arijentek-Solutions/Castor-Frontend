"use client";

import { motion, Variants } from "framer-motion";
import { Users, GraduationCap, Award, Activity } from "lucide-react";

const targetAudience = [
  {
    title: "Healthcare Workers",
    description: "Nurses, CNAs, EMTs, and medical staff",
    icon: Users,
    bgColor: "bg-[#e5fbfd]",
    iconColor: "text-[#20a9ad]",
    iconBg: "bg-[#20a9ad]",
  },
  {
    title: "Healthcare Students",
    description: "Nursing and medical school students",
    icon: GraduationCap,
    bgColor: "bg-[#ffead8]",
    iconColor: "text-[#f7c89a]",
    iconBg: "bg-[#f7c89a]",
  },
  {
    title: "Fitness Professionals",
    description: "Personal trainers and gym staff",
    icon: Award,
    bgColor: "bg-[#e5fbfd]",
    iconColor: "text-[#20a9ad]",
    iconBg: "bg-[#20a9ad]",
  },
  {
    title: "General Public",
    description: "Parents, caregivers, and community members",
    icon: Activity,
    bgColor: "bg-[#ffead8]",
    iconColor: "text-[#f7c89a]",
    iconBg: "bg-[#f7c89a]",
  },
];

const popIn: Variants = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1
    }
  }
};

export default function CPRWhoShouldTake() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1300px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-black tracking-tight text-[#0E1B33] sm:text-5xl"
        >
          Who Should Take This Course?
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {targetAudience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={popIn}
                className={`flex flex-col items-center rounded-[32px] ${item.bgColor} p-8 text-center transition-transform duration-300 hover:-translate-y-2 shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-xl`}
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${item.iconBg} text-white shadow-lg shadow-black/5`}
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <h3 className="mb-3 text-[1.25rem] font-bold text-[#0E1B33]">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-[#6a6a67]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
