"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, Baby, UserCircle, Flag, Check, ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface ServiceItem {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
  features: string[];
  path?: string;
}

const services: ServiceItem[] = [
  {
    title: "Home Health (Medicare)",
    description: "Skilled nursing and therapy services focused on short-term recovery or rehabilitation.",
    tag: "Medicare",
    icon: <Stethoscope className="w-7 h-7 text-[#0e1b33]" />,
    features: [
      "Physician-ordered care",
      "Skilled nursing & therapy",
      "Short-term recovery focus",
      "Time-bound services",
    ],
    path: "/homehealth",
  },
  {
    title: "Private Duty Nursing",
    description: "Long-term skilled nursing care for pediatric and adult patients with complex conditions.",
    tag: "Private/Hybrid",
    icon: <Baby className="w-7 h-7 text-[#0e1b33]" />,
    features: [
      "Pediatric PDN (Ages 0-21)",
      "Adult / Geriatric PDN",
      "Shift-based care",
      "Ventilator & Trach care",
    ],
    path: "/privateduty-nursing",
  },
  {
    title: "Personal Home Care",
    description: "Non-clinical support for daily living activities to maintain independence at home.",
    tag: "Medicare",
    icon: <UserCircle className="w-7 h-7 text-[#0e1b33]" />,
    features: [
      "Companionship",
      "Bathing & Grooming",
      "Meal preparation",
      "Light housekeeping",
    ],
    path: "/home-care",
  },
  {
    title: "Veterans Care",
    description: "Specialized services operating under VA programs for those who have served.",
    tag: "Private/Hybrid",
    icon: <Flag className="w-7 h-7 text-[#0e1b33]" />,
    features: [
      "VA-contracted services",
      "Specialized veteran support",
      "Coordination with VA benefits",
      "Service-connected care",
    ],
    path: "/veterans-care",
  },
];

export function OurServices() {
  return (
    <section className={`${inter.variable} font-sans py-24 px-4 sm:px-6 lg:px-8 bg-white`}>
      <div className="max-w-[1280px] mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[36px] font-bold text-[#0e1b33] tracking-[-0.36px] mb-4"
        >
          Understanding Our Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-[20px] text-[#6a6a67] max-w-[672px] mx-auto leading-[1.4]"
        >
          We help route you to the correct service based on your medical needs and insurance.
        </motion.p>
      </div>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-[#f0f9fa] rounded-[32px] p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] transition-all duration-500 flex flex-col h-full border border-transparent hover:border-[#e5e7eb] hover:bg-white hover:shadow-xl"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="bg-[#fef5ed] p-[14px] rounded-[24px] transition-transform duration-300">
                {service.icon}
              </div>
              <div className="bg-white px-[13px] py-[5px] rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] border border-[#f3f4f6]">
                <span className="text-[12px] font-semibold text-[#6a6a67]">
                  {service.tag}
                </span>
              </div>
            </div>

            <h3 className="text-[24px] font-bold text-[#0e1b33] mb-3 transition-colors duration-300 group-hover:text-[#20a9ad]">
              {service.title}
            </h3>
            <p className="text-[16px] text-[#6a6a67] leading-[1.6] mb-8">
              {service.description}
            </p>

            <ul className="space-y-3 mb-10 flex-grow">
              {service.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3">
                  <div className="bg-[#f0f9fa] p-[4px] rounded-full">
                    <Check className="w-3 h-3 text-[#20a9ad] stroke-[3]" />
                  </div>
                  <span className="text-[14px] text-[#6a6a67] font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={service.path ?? "/"}
              className="w-full bg-white border border-[#e5e7eb] rounded-[14px] py-[8px] px-4 flex items-center justify-center gap-2 text-[#0e1b33] text-[14px] font-medium transition-all duration-300 hover:bg-[#20a9ad] hover:text-white hover:border-[#20a9ad] group/btn"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
