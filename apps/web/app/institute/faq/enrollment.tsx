"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps & { index: number }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="w-full overflow-hidden rounded-[2rem] bg-[#ebebeb] transition-colors"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-8 py-6 text-left hover:bg-[#e2e2e2] transition-colors"
      >
        <span className="text-xl font-semibold text-black sm:text-2xl">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 text-black"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-8 pb-8 pt-2 text-lg text-gray-700 whitespace-pre-line leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ... (rest same)
const enrollmentFAQs = [
  // ...
  {
    question: "What is the enrollment process?",
    answer: `All enrollments begin with our online enrollment process. There is no fee to enroll online, and we recommend doing so as soon as you can to ensure there is ample time before the start of class to get you set up for classes. You can enroll online by clicking the "Enroll Now" button at the top of this page.

After submitting our online enrollment form, our Program Coordinator will reach out to you with next steps. You will be asked to come in for an in-person enrollment appointment during which you will complete your enrollment and get set up for class!`,
  },
  {
    question: "Who can take CNA and phlebotomy courses?",
    answer: `To take our CNA course, you must be at least 16 years of age.

To take our phlebotomy and our dual enrollment courses, you must be at least 16 years of age and have your GED or have completed high school.`,
  },
  {
    question: "A class I want to enroll in is waitlisted. What do I do?",
    answer: "Submit the online enrollment form for the waitlisted class the same as you would an open class. Waitlist spots are opened up on a first-come, first-served basis, so the earlier you fill out the form, the higher likelihood you have of getting a spot in the class!",
  },
  {
    question: "Where can I see course information and schedules?",
    answer: `See complete information for individual courses, including costs, schedule overviews, and curriculum, on their respective course pages:

• CNA
• Phlebotomy
• Dual Enrollment

See complete schedule breakdowns here.`,
  },
  {
    question: "I enrolled in the wrong course schedule. What do I do?",
    answer: "Contact the program coordinator as soon you realize the error, and notify them immediately. Please do not resubmit the enrollment form.",
  },
  {
    question: "I heard a background check is needed. How do I obtain one?",
    answer: "All information about Illinois criminal background checks will be given to you after submitting your enrollment form.",
  },
  {
    question: "I heard a tuberculosis test is needed. How do I obtain one?",
    answer: "All information about TB verification will be given to you after submitting your enrollment form.",
  },
];

export function Enrollment() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-[#0e1b33] sm:text-5xl md:text-6xl">
          Enrollment
        </h2>
      </motion.div>
      <div className="flex flex-col gap-4">
        {enrollmentFAQs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
