"use client";

import { motion, type Variants } from "framer-motion";
import { FileText, Users, Award, GraduationCap } from "lucide-react";

const curriculumItems = [
  { id: 1, title: "Basic Nursing Skills", duration: "40 hours" },
  { id: 2, title: "Patient Care Fundamentals", duration: "32 hours" },
  { id: 3, title: "Vital Signs & Monitoring", duration: "16 hours" },
  { id: 4, title: "Safety & Infection Control", duration: "24 hours" },
  { id: 5, title: "Clinical Practice", duration: "75 hours" },
];

const featureCards = [
  {
    title: "Small Class Sizes",
    description: "We maintain a low student-to-instructor ratio to ensure personalized attention and hands-on practice.",
    icon: Users,
    variant: "teal",
  },
  {
    title: "State Certification",
    description: "Upon completion, you'll be prepared to take the state certification exam and begin your career immediately.",
    icon: Award,
    variant: "white",
  },
  {
    title: "Job Placement",
    description: "Our career services team helps connect graduates with local healthcare facilities seeking CNAs.",
    icon: GraduationCap,
    variant: "peach",
  },
];

export default function CourseCurriculum() {
  const fadeInUp: Variants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer: Variants = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[linear-gradient(154.861deg,rgba(213,251,255,0.2)_0%,rgb(255,255,255)_100%)]">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Column: Curriculum */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black tracking-tight text-[#0e1b33] sm:text-5xl">
              Course Curriculum
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6a6a67]">
              Our comprehensive curriculum covers everything you need to become a successful Certified Nursing Assistant.
            </p>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="mt-12 space-y-4"
            >
              {curriculumItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="group flex items-center justify-between rounded-[24px] border-2 border-[#20a9ad]/10 bg-white p-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all hover:border-[#20a9ad]/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#20a9ad] to-[#1a8b8f] text-base font-black text-white shadow-md shadow-[#20a9ad]/20">
                      {item.id}
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#0e1b33] transition-colors group-hover:text-[#20a9ad]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-[#6a6a67]">
                        {item.duration}
                      </p>
                    </div>
                  </div>
                  <FileText className="h-5 w-5 text-[#20a9ad]/40 group-hover:text-[#20a9ad]" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex flex-col gap-4 rounded-[32px] p-8 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 ${
                    card.variant === 'teal' 
                      ? 'bg-gradient-to-br from-[#20a9ad] to-[#1a8b8f] text-white' 
                      : card.variant === 'peach'
                      ? 'bg-[#ffead8] border-2 border-[#f7c89a]/30 text-[#0e1b33]'
                      : 'bg-white border-2 border-[#20a9ad]/10 text-[#0e1b33]'
                  }`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    card.variant === 'teal' ? 'bg-white/10' : 'bg-[#e5fbfd]'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      card.variant === 'teal' ? 'text-white' : 'text-[#20a9ad]'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${
                    card.variant === 'teal' ? 'text-[#d5fbff]' : 'text-[#6a6a67]'
                  }`}>
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
