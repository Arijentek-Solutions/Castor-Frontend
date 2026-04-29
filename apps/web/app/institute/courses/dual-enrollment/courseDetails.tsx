"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const courseItems: { title: string; content: React.ReactNode }[] = [
  {
    title: "Overview",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p className="font-semibold">The Dual CNA/Phlebotomy Course</p>
        <p>
          If you are a motivated student looking for a chance to advance your healthcare career, this course might be the perfect opportunity for you. Upon successful completion of this course, you will have two accredited certifications.
        </p>
        <p>
          The dual enrollment course saves on both time and costs as compared to taking the CNA and phlebotomy courses separately.
        </p>
        <p>
          If you have already taken a CNA or phlebotomy course through Castor, you may be eligible for a reduced price on the other course. If this applies to you, please{" "}
          <a href="https://www.castorhealthinstitute.com/contact/" target="_blank" rel="noopener noreferrer" className="underline">
            contact us
          </a>
          .
        </p>
        <p>
          To enroll now,{" "}
          <a href="https://www.castorhealthinstitute.com/enrollment/" target="_blank" rel="noopener noreferrer" className="underline">
            click here
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "Upcoming Dates",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p className="font-bold">Sterling, IL</p>
        <p>[Hybrid] May 30 – August 26</p>
        <p>
          Location: 6 E. 23rd St., Sterling IL 61081<br />
          Instructors: Denise Pederson (CNA), Jaime Hassler (phlebotomy)
        </p>
        <p>
          See full schedule breakdown{" "}
          <a href="https://castorhealthinstitute.com/schedules/" target="_blank" rel="noopener noreferrer" className="underline">
            here
          </a>
          .<br />
          Click{" "}
          <a href="https://castorhealthinstitute.com/enroll/" target="_blank" rel="noopener noreferrer" className="underline">
            here
          </a>{" "}
          to enroll online.
        </p>

        <p className="font-bold mt-6">Freeport, IL</p>
        <p>[Hybrid] January 27 – May 19</p>
        <p>
          Location: 30 E Stephenson St, Freeport IL 61032<br />
          Instructor: Denise Pederson (CNA), Falecia Smith (phlebotomy)
        </p>
        <p>
          See full schedule breakdown{" "}
          <a href="https://castorhealthinstitute.com/schedules/" target="_blank" rel="noopener noreferrer" className="underline">
            here
          </a>
          .<br />
          Click{" "}
          <a href="https://castorhealthinstitute.com/enroll/" target="_blank" rel="noopener noreferrer" className="underline">
            here
          </a>{" "}
          to enroll online.
        </p>
      </div>
    ),
  },
  {
    title: "Location",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p>
          All <span className="font-semibold">theory/lab classes</span> are either at our{" "}
          <span className="font-semibold">Sterling</span> location (6 E. 23rd St, Sterling, IL 61081) or our{" "}
          <span className="font-semibold">Freeport</span> location (30 E. Stephenson St, Freeport, IL 61032).
        </p>
        <p>
          All <span className="font-semibold">clinicals</span> are at one of our nearby partner facilities. Location varies by
          course and will be announced after course starts.
        </p>
      </div>
    ),
  },
  {
    title: "Tuition, Fees, and Aid",
    content: (
      <div className="space-y-7 text-[20px] leading-[28.9px] text-black">
        <p className="font-semibold">Tuition &amp; Fees</p>
        <p>Tuition: $2,600</p>
        <p>Enrollment Fee: $150</p>
        <p>Supplies Cost: $150 (includes all supplies needed for course)</p>
        <p>Enrollment fee collected during in-person enrollment appointment.</p>
        <p className="font-semibold">Financial Aid</p>
        <p>
          We want to make our courses as accessible to the community as possible. Payment plans and various forms of
          financial assistance are available, covering up to 100% of costs for eligible students. When you come in for your
          enrollment appointment, we will discuss these in detail. The first step is always to submit our enrollment form.
          Please do so as soon as you can to be considered for financial aid.
        </p>
        <p>
          See our{" "}
          <a href="https://castorhealthinstitute.com/faq/" target="_blank" rel="noopener noreferrer" className="underline">
            FAQ
          </a>{" "}
          for more information on financial aid and payment plans.
        </p>
      </div>
    ),
  },
  {
    title: "Enrollment",
    content: (
      <div className="space-y-6 text-[20px] leading-[28.9px] text-black">
        <p className="font-semibold">How Do I Enroll?</p>
        <p>Enrolling online is the easiest option and what we recommend.</p>
        <p>
          If you enroll online, you will need to schedule a short in-person appointment where we will finalize your
          enrollment, discuss any questions you may have, and talk about payment.
        </p>
        <p>Enrolling online does not require you to submit a payment online. Payments will be collected during our in-person appointment.</p>
        <p>
          <a href="https://www.castorhealthinstitute.com/enroll/" target="_blank" rel="noopener noreferrer" className="underline">
            Click here to enroll online
          </a>
          .
        </p>
        <p>
          If you have any difficulties enrolling online,{" "}
          <a href="https://www.castorhealthinstitute.com/contact/" target="_blank" rel="noopener noreferrer" className="underline">
            click here to contact us
          </a>{" "}
          and we&apos;ll reach out to you to get you enrolled!
        </p>
      </div>
    ),
  },
  {
    title: "Instructors",
    content: (
      <p className="text-[20px] leading-[28.9px] text-black">Instructor bios coming soon!</p>
    ),
  },
  {
    title: "Curriculum",
    content: (
      <p className="text-[20px] leading-[28.9px] text-black">
        For detailed information on curricula, see the &ldquo;curriculum&rdquo; sections on the{" "}
        <a href="https://www.castorhealthinstitute.com/cna/" target="_blank" rel="noopener noreferrer" className="underline">
          CNA
        </a>{" "}
        and{" "}
        <a href="https://www.castorhealthinstitute.com/phlebotomy/" target="_blank" rel="noopener noreferrer" className="underline">
          Phlebotomy
        </a>{" "}
        pages.
      </p>
    ),
  },
];

export default function DualEnrollmentCourseDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="course-details" className="bg-[#f0f9fa] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[44px] font-bold leading-[52.8px] tracking-[-0.44px] text-[#0e1b33]"
        >
          Course Details
        </motion.h2>

        <div className="mt-16 space-y-3">
          {courseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[19px] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-10 py-5 text-left"
              >
                <span
                  className={`text-[28px] font-semibold leading-[28.9px] transition-colors ${
                    openIndex === index ? "text-[#1c9296]" : "text-black"
                  }`}
                >
                  {item.title}
                </span>
                <ChevronDown
                  className={`h-6 w-8 transition-transform duration-300 ${
                    openIndex === index
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
                    <div className="px-10 pb-8 pt-2">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
