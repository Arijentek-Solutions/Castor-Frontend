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

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps & { index: number }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="w-full overflow-hidden rounded-[2rem] bg-white shadow-sm transition-colors"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-8 py-6 text-left hover:bg-[#f9f9f9] transition-colors"
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

const locationFAQs = [
  // ...
  {
    question: "Where are classes held?",
    answer: `Classes in Sterling are held at 6 E. 23rd St., Sterling IL 61081.

Classes in Freeport are held at 30 E. Stephenson St., Freeport IL 61032.`,
  },
  {
    question: "Where are clinicals held?",
    answer: "Clinical locations are local in Sterling and Freeport, and only a short drive from their respective class locations. Your specific clinicals location will be told to you after your class starts.",
  },
  {
    question: "Is there parking at classes and clinicals?",
    answer: "Yes, there is ample parking at both class and clinical sites.",
  },
  {
    question: "Do I have to pay for parking?",
    answer: "No, you do not! At our Freeport location, we may give you a pass to hang up in your car, which you will not have to pay for either.",
  },
];

export function Locations() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mb-20 w-full bg-[#dbefef] py-20 lg:mb-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-[#0e1b33] sm:text-5xl md:text-6xl">
            Locations & Parking
          </h2>
        </motion.div>
        <div className="flex flex-col gap-4">
          {locationFAQs.map((faq, index) => (
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
      </div>
    </section>
  );
}
