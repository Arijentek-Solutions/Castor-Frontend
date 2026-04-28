"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const accordionItems: { title: string; content: React.ReactNode }[] = [
  {
    title: "Mission",
    content: (
      <div className="space-y-4 text-[20px] leading-[37px] text-black">
        <p>
          Our mission is to deliver, enhance, and convey a state-of-the-art hands-on education
          to empower individuals with the skills, knowledge, practical training, and experience
          needed for a successful career in the growing and rewarding healthcare field.
        </p>
      </div>
    ),
  },
  {
    title: "Objective",
    content: (
      <div className="space-y-4 text-[20px] leading-[37px] text-black">
        <p>
          Our objective is to maintain high standards by recognizing and 
          attending to the various needs of students while providing optimum intellectual, 
          emotional, social, and physical challenges and development. The institute seeks to 
          install in its students the concept that education carries with it an obligation 
          to self, family, and community, and encourages each student to become a compassionate
           and productive member of society.
        </p>
      </div>
    ),
  },
  {
    title: "Career Services",
    content: (
      <div className="space-y-4 text-[20px] leading-[37px] text-black">
        <p>
          Castor maintains an active placement service to assist students in
          locating career opportunities in the related field. Placement advisement is 
          provided to all our Institute graduates without additional cost.
        </p>
      </div>
    ),
  },
  {
    title: "For Employers",
    content: (
      <div className="space-y-4 text-[20px] leading-[37px] text-black">
        <p>
          The continued success of Castor Health Institute is mirrored in the 
          success of our graduates. Our goal is to provide the necessary tools for 
          students to acquire gainful employment in their field of study. 
          We understand that you constantly need qualified candidates working in Hospitals, 
          Nursing Homes, Doctor’s offices, Home Health Agencies, and healthcare facilities throughout IL. 
          Our institute can customize the schedule to meet your needs to provide special training or 
          help you to find qualified and motivated professionals for your success.
        </p>
      </div>
    ),
  },
];

export function WhoWeAre() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
      <div className="mx-auto max-w-[1871px]">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20 lg:pl-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[30%]"
          >
            <div className="relative aspect-[118/134] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/institute/about-us/img1.png"
                alt="Castor Health Institute team"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:flex-1"
          >
            <h2 className="mb-6 text-[40px] font-bold leading-[1.15] tracking-[-0.4px] text-[#0e1b33]">
              Who We Are
            </h2>

            <p className="mb-8 max-w-[950px] text-[18px] leading-[1.7] text-[#475569]">
              CASTOR HEALTH INSTITUTE LLC is part of the Castor group of
              companies serving in Northern Illinois. The school employs highly
              qualified instructors that excel in their own fields. Our mission
              is to prepare students so that they are ready to practice in their
              chosen careers after the completion of the training and exam. We
              offer job preparation, placement assistance, and free sessions to
              prepare for the state competency exam. Castor strives to have a
              family atmosphere to provide support and guidance needed from a
              qualified individual. We recognize the importance of constant
              quality evaluation to better serve the students.
            </p>

            <div className="max-w-[950px] space-y-3">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-[19px] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-10 py-5 text-left"
                  >
                    <span
                      className={`text-[28px] font-semibold leading-[28.9px] transition-colors ${openIndex === index ? "text-[#1c9296]" : "text-black"
                        }`}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`h-6 w-8 transition-transform duration-300 ${openIndex === index
                          ? "rotate-180 text-[#1c9296]"
                          : "text-black"
                        }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-10 pb-8 pt-2">{item.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
