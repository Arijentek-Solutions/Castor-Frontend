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

const financeFAQs = [
  // ... (content remains same)
  {
    question: "How much do courses cost?",
    answer: (
      <>
        Complete cost information for each of our courses can be found on each course's respective webpage:
        <ul className="mt-4 list-none space-y-1">
          <li>• CNA</li>
          <li>• Phlebotomy</li>
          <li>• Dual Enrollment</li>
        </ul>
      </>
    ),
  },
  {
    question: "What forms of payment do you take?",
    answer: "We take card, check, or cash for all payments. For tuition payments, we also accept bank transfers (ACH). We do not accept ACH for deposit & supplies payments.",
  },
  {
    question: "Are there any hidden costs?",
    answer: (
      <>
        <span className="font-bold">No!</span> The costs displayed in our course pages cover all the fees you will be paying to us. Our supplies cost covers scrubs, textbooks, gait belts, stethoscopes, and any other equipment you will need for our course. (You will be responsible, of course, for bringing a pen, notebook, and any other supplies you may need.)
        {"\n\n"}
        If your criminal background check requires you to get a fingerprint, you may have to pay a licensed vendor in Illinois for your fingerprint. Costs vary by location. We will give you specific information on fingerprinting locations after enrollment, if you need it.
        {"\n\n"}
        For the CNA examination, taken after successfully completing our course, there is an $85 fee, paid to the State of Illinois. You will be responsible for scheduling the examination yourself, but we will guide you through this process! (There is no State examination for phlebotomy.)
      </>
    ),
  },
  {
    question: "What forms of financial assistance are available?",
    answer: (
      <>
        We have a few different forms of financial assistance available for students.
        {"\n\n"}
        1. Payment plans are available to all students – there are no eligibility requirements. To learn more about payment plans, see the “How do payment plans work?” question below in this section.
        {"\n"}
        2. We partner with local workforce development boards who help support community members in paying for vocational training. These organizations can cover up to the entire cost of the course. <span className="font-bold">To be considered for any of these, you must have submitted your online enrollment form. Eligibility is not guaranteed. We recommend submitting your enrollment form as soon as possible if you wish to be considered.</span>
        {"\n"}
        3. Facilities and employers will often choose to sponsor their employees to take a course with us. To learn more about this, please contact your employer.
      </>
    ),
  },
  {
    question: "How do payment plans work?",
    answer: `If you choose to pay for your course using a payment plan, our Program Coordinator will give you a list of options after you submit your online enrollment form. Each option allows you to split up the total cost of the course into a few installments (for example, pay in 2, pay in 3, etc.). The first of these payments will be due before class starts. Following payments will have due dates as the course progresses.

In order to graduate from our program, you must be fully paid off by your last deadline, which will always be a few weeks before the last day of class.`,
  },
  {
    question: "Do you offer student loans?",
    answer: "We do not offer any type of loan. We also do not recommend getting any kind of private loan in order to take our courses.",
  },
  {
    question: "Do you accept the FAFSA and/or 529 tuition accounts?",
    answer: "No, we do not.",
  },
];

export function Finances() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#FFEAD8] py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-[#0e1b33] sm:text-5xl md:text-6xl">
            Finances
          </h2>
        </motion.div>
        <div className="flex flex-col gap-4">
          {financeFAQs.map((faq, index) => (
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
