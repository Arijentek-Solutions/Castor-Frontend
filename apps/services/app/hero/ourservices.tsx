"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface ServiceItem {
  title: string;
  description: string;
  path: string;
}

const services: ServiceItem[] = [
  {
    title: "Skilled Home Health",
    description: "Personalized recovery support at home, covered under Medicare, promoting independence and healing.",
    path: "/homehealth",
  },
  {
    title: "Private Duty Nursing - Pediatric",
    description: "Specialized in-home nursing for medically dependent children; DSCC-approved provider with multi-county coverage.",
    path: "/pediatric-nursing",
  },
  {
    title: "Private Duty Nursing - Adult",
    description: "Full-focused nursing tailored for adult health needs, ensuring safe recovery in the comfort of home.",
    path: "/privateduty-nursing",
  },
  {
    title: "Home Care & Companion Services",
    description: "Non-medical support, including elderly care, Alzheimer's assistance, and daily living companionship.",
    path: "/home-care",
  },
  {
    title: "Veterans Care",
    description: "Dignified, respectful care through VA partnerships designed to uplift independence and daily quality of life.",
    path: "/veterans-care",
  },
  {
    title: "Healthcare Staffing",
    description: "Healthcare Staffing's certified CNAs and skilled staff trained via Castor Health Institute are available to support local medical facilities.",
    path: "/healthcare-staffing",
  },
];

export function OurServices() {
  return (
    <section id="understanding-services" className={`${inter.variable} font-sans py-24 px-8 bg-white`}>
      <div className="max-w-[1240px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[32px] md:text-[48px] font-black text-[#0e1b33] tracking-[-0.48px] mb-4"
          >
            Our Home Care Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[18px] md:text-[20px] text-[#6a6a67] max-w-[672px] mx-auto leading-[1.4]"
          >
            Comprehensive healthcare solutions delivered with compassion and expertise.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[32px] p-8 border-2 border-[rgba(32,169,173,0.2)] transition-all duration-500 h-[260px] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-[#20a9ad]/30"
              style={{
                background: "linear-gradient(148deg, #FFFFFF 0%, rgba(213, 251, 255, 0.3) 100%)",
              }}
            >
              <div>
                <h3 className="text-[20px] font-black text-[#0e1b33] mb-4 leading-[1.2] tracking-[-0.2px]">
                  {service.title}
                </h3>
                <p className="text-[16px] text-[#6a6a67] leading-[1.6]">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.path}
                className="inline-flex items-center gap-2 text-[#20a9ad] text-[16px] font-bold transition-all duration-300 hover:gap-3"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
