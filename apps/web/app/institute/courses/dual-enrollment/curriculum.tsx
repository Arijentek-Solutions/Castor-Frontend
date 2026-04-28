"use client";

import { motion, type Variants } from "framer-motion";
import { FileText, Award, BookOpen, Users } from "lucide-react";

const curriculumItems = [
  { id: 1, title: "Health Sciences Fundamentals", duration: "12 weeks" },
  { id: 2, title: "Medical Terminology", duration: "8 weeks" },
  { id: 3, title: "Patient Care Basics", duration: "10 weeks" },
  { id: 4, title: "Clinical Externship", duration: "6 weeks" },
  { id: 5, title: "Healthcare Ethics & Law", duration: "6 weeks" },
];

const featureCards = [
  {
    title: "College Credit Eligible",
    description: "Earn up to 15 college credits that transfer to Castor Health Institute and partner colleges.",
    icon: Award,
    variant: "teal",
  },
  {
    title: "Hands-On Training",
    description: "Gain real-world experience through clinical rotations at Castor-affiliated healthcare facilities.",
    icon: BookOpen,
    variant: "white",
  },
  {
    title: "Career Pathways",
    description: "Fast-track your entry into healthcare careers with recognized certifications and college credits.",
    icon: Users,
    variant: "peach",
  },
];

export default function DualEnrollmentCurriculum() {
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
            <h2 className="text-4xl font-black tracking-tight text-[#0E1B33] sm:text-5xl">
              Course Curriculum
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6a6a67]">
              Our dual enrollment curriculum combines high school academics with college-level healthcare courses.
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
                      <h3 className="text-[18px] font-bold text-[#0E1B33] transition-colors group-hover:text-[#20a9ad]">
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
                      ? 'bg-[#ffead8] border-2 border-[#f7c89a]/30 text-[#0E1B33]'
                      : 'bg-white border-2 border-[#20a9ad]/10 text-[#0E1B33]'
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
