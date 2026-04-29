"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="w-full overflow-hidden rounded-[2rem] bg-[#ebebeb] transition-colors">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-8 py-6 text-left hover:bg-[#e2e2e2] transition-colors"
      >
        <span className="text-xl font-semibold text-black sm:text-2xl">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 text-black"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8 pt-2 text-lg text-gray-700 whitespace-pre-line leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const classFAQs = [
  {
    question: "How many classes am I allowed to miss?",
    answer: (
      <>
        You are allowed to miss <span className="font-bold">at most one</span> theory/lab class and <span className="font-bold">at most one</span> clinical. You will be able to make this up at a later date, as scheduled by your instructor.
        {"\n\n"}
        Being late for class may count as an absence. As such, we always recommend
        {"\n\n"}
        Any further accommodations will need to be prearranged before the first day of class, and agreed upon by the program coordinator. Accommodations must have a valid, preapproved reason, and are not guaranteed approval.
        {"\n\n"}
        Any emergencies that arise during the course will be accommodated on a case-by-case basis.
      </>
    ),
  },
  {
    question: "How many hours are your courses?",
    answer: "CNA is 120 hours, phlebotomy is 70 hours, and dual enrollment is 175 hours.",
  },
  {
    question: "What do I need to wear to class?",
    answer: `Information on the class dress code will be given to you after enrollment. For theory/lab courses, you are expected to dress in a way appropriate for any professional setting. For clinicals, you are required to wear your scrubs.
For all situations, close-toed shoes are required.`,
  },
  {
    question: "Do I need to buy anything extra for class?",
    answer: `We recommend a notebook and a couple good pens and pencils. Bringing a water bottle is always a good idea, as well as a sweatshirt if you get cold. A laptop or tablet is optional.

We provide all class-related supplies including the textbook, scrubs, gait belts, stethoscopes, and more.`,
  },
  {
    question: "Do I need to take a test before I get my license?",
    answer: (
      <>
        To receive your CNA license, you must take the INACE, an exam given by the Illinois Department of Public Health. To take the exam, you must have successfully graduated from our course with a passing grade. We will give you all information about the exam, how to register for it, and how to prepare for it, after you start class.
        {"\n\n"}
        There is no examination for phlebotomy. Once you successfully graduate from our course, you will be certified as a phlebotomist!
      </>
    ),
  },
];

export function ClassInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#0e1b33] sm:text-5xl md:text-6xl">
          Class Information
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {classFAQs.map((faq, index) => (
          <FAQItem
            key={index}
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
