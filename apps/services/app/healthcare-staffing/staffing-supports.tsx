"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  SearchCheck,
  Users,
  BriefcaseMedical,
  CheckCircle2,
  Wallet,
  GraduationCap
} from "lucide-react";

const supports = [
  {
    title: "On-Demand Scheduling",
    description: "Flexible staffing solutions to meet fluctuating patient volumes and operational needs",
    icon: <CalendarClock className="w-7 h-7" />
  },
  {
    title: "Streamlined Application Screening",
    description: "Efficient vetting processes that save time and ensure qualified candidates",
    icon: <SearchCheck className="w-7 h-7" />
  },
  {
    title: "Marketing & Employee Retention",
    description: "Reducing turnover and retaining skilled staff through targeted strategies",
    icon: <Users className="w-7 h-7" />
  },
  {
    title: "Workers' Compensation Management",
    description: "We handle compensation cases, reducing administrative burden on your facility",
    icon: <BriefcaseMedical className="w-7 h-7" />
  },
  {
    title: "Credential & Compliance Assurance",
    description: "Every candidate is verified to meet required certifications and standards",
    icon: <CheckCircle2 className="w-7 h-7" />
  },
  {
    title: "Benefits & Payroll Management",
    description: "We manage employee pay, benefits, and paperwork completely stress-free for your team",
    icon: <Wallet className="w-7 h-7" />
  },
  {
    title: "Comprehensive Staff Training",
    description: "Our professionals receive ongoing training to maintain skills and excellence",
    icon: <GraduationCap className="w-7 h-7" />
  }
];

export function StaffingSupports() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
           <h2 className="text-[26px] lg:text-[32px] font-black text-[#0e1b33] mb-4 tracking-tight">
              How Castor Staffing Supports You
           </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supports.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-[#f3f4f6] rounded-[32px] p-8 hover:border-[#20a9ad]/30 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#20a9ad] to-[#1a8b8f] flex items-center justify-center text-white mb-8 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-[20px] font-black text-[#0e1b33] mb-4">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#6a6a67] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
