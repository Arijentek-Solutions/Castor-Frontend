"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "You start by selecting a specific Course Code from our public schedule. Once you sign up, you'll gain access to a Student Dashboard where you can upload documents, view requirements, and track your enrollment progress.",
  },
  {
    question: "What is a Course Code?",
    answer:
      "A Course Code identifies a specific class session (e.g., '2024-OCT-CNA-Sterling'). It determines your schedule, location, and specific requirements. You enroll in a specific code, not just the general program.",
  },
  {
    question: "Do you offer financial aid?",
    answer:
      "Yes. We accept various forms of financial aid, including state vouchers and facility sponsorships. We also offer weekly installment plans for private-pay students.",
  },
  {
    question: "What happens if I miss a class?",
    answer:
      "Attendance is critical for state certification. We track progress based on real-world participation. If you fall behind, our staff will work with you, but excessive absences may require re-enrollment.",
  },
] as const;

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section className="px-4 pb-24 pt-2 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center text-[2.35rem] font-black tracking-[-0.04em] text-[#0e1b33] sm:text-[3rem]">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-10 max-w-[1020px] space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-[28px] border border-[#dfe5ec] bg-white transition-all duration-300 ${
                  open
                    ? "shadow-[0_12px_28px_rgba(17,40,68,0.10)]"
                    : "shadow-[0_2px_8px_rgba(17,40,68,0.03)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left sm:px-8"
                  aria-expanded={open}
                >
                  <span className="text-[1.35rem] font-black tracking-[-0.03em] text-[#001f57] sm:text-[1.6rem]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#7f8694]">
                    <ChevronIcon open={open} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[980px] px-6 pb-7 text-[1.08rem] leading-[1.85] text-[#566577] sm:px-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
