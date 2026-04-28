"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const courseItems: { title: string; content: React.ReactNode }[] = [
  {
    title: "Overview",
    content: (
      <div className="space-y-4 text-[20px] leading-[40px] text-black">
        <p className="font-bold text-[20px]">Why CNA?</p>
        <p>
          If you have a passion for caregiving and aspire to make a difference in the lives of others, Castor Health Institute&apos;s CNA Course is the perfect stepping stone toward a rewarding career in the healthcare industry. Our comprehensive program is designed to provide aspiring CNAs with the knowledge, practical skills, and compassionate approach needed to excel in this vital role.
        </p>
        <p>
          Castor Health Institute understands the unique demands of being a Certified Nursing Assistant. Our CNA Course is structured to meet the needs of individuals who want to enter the healthcare field or advance their careers within it. Whether you are a beginner or a healthcare professional seeking to expand your skill set, our course will equip you with the expertise to provide quality care to patients in various healthcare settings.
        </p>
        <p>Here&apos;s what you can expect from Castor Health Institute&apos;s CNA Course:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Comprehensive Curriculum:</strong> Our course curriculum covers a wide range of topics essential for CNA practice. You will learn about basic nursing skills, vital signs monitoring, infection control, patient safety, personal care assistance, patient mobility and transfers, documentation, and communication skills. Additionally, we focus on developing your understanding of ethical and legal responsibilities as a CNA.
          </li>
          <li>
            <strong>Experienced Instructors:</strong> Our instructors are highly qualified and experienced healthcare professionals who have a vast knowledge of the CNA field. They bring real-world expertise to the classroom, ensuring that you receive the most up-to-date instruction and guidance. Our instructors are dedicated to creating a supportive and engaging learning environment to help you succeed.
          </li>
          <li>
            <strong>Hands-on Training:</strong> We believe in the importance of hands-on experience for CNAs. Through clinical rotations and practical training, you will have the opportunity to apply your knowledge and practice essential skills in a supervised setting. This practical training will help you develop confidence and proficiency in providing care to patients, including assistance with activities of daily living and other crucial tasks.
          </li>
          <li>
            <strong>Certification:</strong> Upon successful completion of the CNA Course, you will be eligible to take the state certification examination. Castor Health Institute will provide you with the necessary knowledge and skills to pass the exam and become a Certified Nursing Assistant. Our certification demonstrates your competency and validates your qualifications for employment as a CNA.
          </li>
        </ul>
        <p>
          At Castor Health Institute, we are committed to providing a nurturing and supportive environment for your CNA education. Our mission is to empower you with the knowledge and skills necessary to provide compassionate care to patients and make a positive impact in their lives.
        </p>
      </div>
    ),
  },
  {
    title: "Upcoming Dates",
    content: (
      <div className="space-y-4 text-[20px] leading-[42px] text-black">
        <p className="font-bold text-[20px]">Sterling, IL</p>
        <p className="font-bold text-[18px]">[Hybrid] April 6 – June 13 (Mondays, Wednesdays, and Saturdays)</p>
        <p>
          Location: 6 E. 23rd St., Sterling IL 61081<br />
          In-Person Class Dates/Times: Wednesdays from 4:00pm to 8:15pm<br />
          Virtual Class Dates/Times: Mondays from 4:00pm to 8:15pm<br />
          Clinical Dates/Times: Saturdays from 6:00am to 3:00pm<br />
          Instructor: Denise Pederson
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
        <p className="font-bold text-[20px]">[Hybrid] May 30 – July 25 (Tuesdays, Wednesdays, and Saturdays)</p>
        <p>
          Location: 6 E. 23rd St., Sterling IL 61081<br />
          In-Person Class Dates/Times: Saturdays &amp; Wednesdays from 9:00am to 1:15pm<br />
          Virtual Class Dates/Times: Tuesdays from 4:00pm to 8:15pm<br />
          Clinical Dates/Times: Saturdays from 6:00am to 3:00pm<br />
          Instructor: Denise Pederson
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
        <p className="font-bold text-[20px]">Freeport, IL</p>
        <p className="font-bold text-[20px]">[Hybrid] April 6 – June 13 (Mondays, Thursdays, and Saturdays)</p>
        <p>
          Location: 30 E. Stephenson St., Freeport IL 61032<br />
          In-Person Class Dates/Times: Thursdays from 4:00pm to 8:15pm<br />
          Virtual Class Dates/Times: Mondays from 4:00pm to 8:15pm<br />
          Clinical Dates/Times: Saturdays from 6:00am to 3:00pm<br />
          Instructor: Denise Pederson
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
        <p className="font-bold text-[20px]">[Hybrid] May 30 – July 25 (Tuesdays, Thursdays, and Saturdays)</p>
        <p>
          Location: 30 E. Stephenson St., Freeport IL 61032<br />
          In-Person Class Dates/Times: Saturdays &amp; Thursdays from 9:00am to 1:15pm<br />
          Virtual Class Dates/Times: Tuesdays from 4:00pm to 8:15pm<br />
          Clinical Dates/Times: Saturdays from 6:00am to 3:00pm<br />
          Instructor: Denise Pederson
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
      <div className="space-y-4 text-[20px] leading-[42px] text-black">
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
      <div className="space-y-4 text-[20px] leading-[37px] text-black">
        <p className="text-[20px]">Tuition &amp; Fees</p>
        <p>Tuition: $1,400</p>
        <p>Enrollment Fee: $150</p>
        <p>Supplies Cost: $150 (includes all supplies needed for course)</p>
        <p>Enrollment fee collected during in-person enrollment appointment.</p>
        <p className="text-[20px]">Financial Aid</p>
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
      <div className="space-y-4 text-[20px] leading-[37px] text-black">
        <p>How Do I Enroll?</p>
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
      <p className="text-[18px] font-medium text-black">Instructor bios coming soon!</p>
    ),
  },
  {
    title: "Curriculum",
    content: (
      <div className="space-y-2 text-[20px] leading-[33px] text-black">
        <p className="font-bold">Module 1</p>
        <p>Chapter 1: The Role of the Nursing Assistant</p>
        <p>Chapter 2: Working in a long term care Facility</p>
        <p>Chapter 3: Communication/Observations, and the Medical Record</p>

        <p className="font-bold mt-4">Module 2</p>
        <p>Chapter 4: Medical Terminology and Abbreviations</p>
        <p>Chapter 8: Infection Control</p>
        <p>Chapter 9: Blood-Borne Pathogens</p>

        <p className="font-bold mt-4">Module 3</p>
        <p>Chapter 11: Vital signs</p>
        <p>Chapter 14: Gastrointestinal and Urinary Systems</p>

        <p className="font-bold mt-4">Module 4</p>
        <p>Chapter 5: Safety and Emergency Procedures</p>
        <p>Chapter 6: Restraints</p>
        <p>Chapter 15: The Client&apos;s Environment</p>

        <p className="font-bold mt-4">Module 5</p>
        <p className="font-medium">Chapter 10: Assisting with Personal Care</p>

        <p className="font-bold mt-4">Module 6</p>
        <p>Chapter 7: Body Mechanics, Positioning, and Ambulating Clients</p>

        <p className="font-bold mt-4">Module 7</p>
        <p>Chapter 20: Common Health Problems – Part 1</p>

        <p className="font-bold mt-4">Module 8</p>
        <p>Chapter 12: Nutrition</p>
        <p>Chapter 13: Fluids, and Intake and Output</p>

        <p className="font-bold mt-4">Module 9</p>
        <p>Chapter 20: Common Health Problems – Part 2</p>

        <p className="font-bold mt-4">Module 10</p>
        <p>Chapter 16: Rehabilitation and Restorative Concepts</p>

        <p className="font-bold mt-4">Module 11</p>
        <p>Chapter 17: Dementia Care</p>

        <p className="font-bold mt-4">Module 12</p>
        <p>Chapter 19: Special Care and Procedures</p>

        <p className="font-bold mt-4">Module 13</p>
        <p>Chapter 18: Death, Dying, and Grieving</p>
      </div>
    ),
  },
  {
    title: "Labs",
    content: (
      <div className="space-y-2 text-[20px] leading-[39px] text-black">
        <p className="font-bold">Lab 1</p>
        <p>Skills 1 &amp; 17 (hand washing, PPE)</p>

        <p className="font-bold mt-4">Lab 2</p>
        <p>Skills 2, 3, 4, 5, 6, 7, 9 (oral care, shaving, nail care, peri-care, partial bath, shower, dressing)</p>
        <p>Skills 8, 10, 11, 12, 15 (make occupied bed, transfer to w/c w/gait belt, transfer w/mech. lift, ambulation, side-lying position)</p>

        <p className="font-bold mt-4">Lab 3</p>
        <p>Skills 2, 3, 4, 5, 6, 7, 9 (oral care, shaving, nail care, peri-care, partial bath, shower, dressing)</p>
        <p>Skills 8, 10, 11, 12, 15 (make occupied bed, transfer to w/c w/gait belt, transfer w/mech. lift, ambulation, side-lying position)</p>

        <p className="font-bold mt-4">Lab 4</p>
        <p>Skills 13 and 14 (Feeding, I&amp;O)</p>

        <p className="font-bold mt-4">Lab 5</p>
        <p>Skill 16, 20, 21 (PROM, Ht, Wt)</p>
        <p>Skills 18, 19 (TPR, BP)</p>
      </div>
    ),
  },
];

export default function CourseCurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f0f9fa] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[44px] font-bold leading-[52.8px] tracking-[-0.44px] text-[#0e1b33]"
        >
          CNA Course Details
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
