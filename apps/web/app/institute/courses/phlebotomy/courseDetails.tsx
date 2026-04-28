"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const courseItems: { title: string; content: React.ReactNode }[] = [
  {
    title: "Overview",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p className="font-bold">Why Phlebotomy?</p>
        <p>
          Are you interested in pursuing a career in healthcare and want to develop the essential skills needed to become a phlebotomist? Look no further than Castor Health Institute&apos;s Phlebotomy Course. Our comprehensive program is designed to provide aspiring phlebotomists with the knowledge, practical training, and hands-on experience required to excel in this specialized field.
        </p>
        <p>
          Our Phlebotomy Course is structured to meet the needs of both beginners and healthcare professionals seeking to enhance their skills. Whether you are starting from scratch or looking to upgrade your existing qualifications, our course will equip you with the expertise and confidence to perform phlebotomy procedures accurately and efficiently.
        </p>
        <ol className="list-decimal pl-6 space-y-5">
          <li>
            <strong>Comprehensive Curriculum:</strong> Our course covers all aspects of phlebotomy, including theoretical knowledge, practical techniques, safety procedures, and infection control. You will learn about human anatomy, venipuncture techniques, specimen handling, laboratory testing, and much more.
          </li>
          <li>
            <strong>Experienced Instructors:</strong> Our instructors are highly qualified and experienced healthcare professionals who have extensive knowledge of phlebotomy practices. They are dedicated to providing personalized attention and guidance to ensure your success.
          </li>
          <li>
            <strong>Practical Training:</strong> We believe in the power of hands-on experience. Through our well-equipped laboratory and simulation sessions, you will have the opportunity to practice venipuncture techniques on realistic models and gain confidence in your abilities.
          </li>
          <li>
            <strong>Industry Standards:</strong> Our phlebotomy course follows industry best practices and standards. We stay up to date with the latest developments in the field and ensure that our curriculum reflects current trends and techniques.
          </li>
          <li>
            <strong>Certification:</strong> Upon successful completion of the Phlebotomy Course, you will be eligible to take the state certification examination, after which you will receive a certification from Castor Health Institute, which will validate your skills and enhance your employability in the healthcare industry. Our certification is widely recognized and demonstrates your competency in phlebotomy. It can be beneficial for both personal and professional purposes, such as meeting workplace requirements or enhancing your resume.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Upcoming Dates",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p className="font-bold">Sterling, IL</p>
        <p>July 6 – August 26</p>
        <p>
          Location: 6 E. 23rd St., Sterling IL 61081<br />
          Class Dates/Times: Mondays, Tuesdays, and Wednesdays from 5:30pm to 8:30pm<br />
          Clinical Dates/Times: Self-scheduled after class start<br />
          Instructor: Jaime Hassler
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
        <p>
          This class can also be taken as part of our dual enrollment program at a reduced cost and in a shorter amount of time. To learn more, see our{" "}
          <a href="https://castorhealthinstitute.com/dual-enrollment/" target="_blank" rel="noopener noreferrer" className="underline">
            Dual Enrollment
          </a>{" "}
          page.
        </p>

        <p className="font-bold mt-6">Freeport, IL</p>
        <p>May 25 – July 1</p>
        <p>
          Location: 30 E. Stephenson St., Freeport IL 61032<br />
          Class Dates/Times: Mondays, Tuesdays, and Wednesdays from 5:30pm – 8:30pm<br />
          Clinical Dates/Times: Self-scheduled after class start<br />
          Instructor: Falecia Smith
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
        <p>
          This class can also be taken as part of our dual enrollment program at a reduced cost and in a shorter amount of time. To learn more, see our{" "}
          <a href="https://castorhealthinstitute.com/dual-enrollment/" target="_blank" rel="noopener noreferrer" className="underline">
            Dual Enrollment
          </a>{" "}
          page.
        </p>
      </div>
    ),
  },
  {
    title: "Location",
    content: (
      <div className="space-y-4 text-[20px] leading-[33px] text-black">
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
        <p>Tuition &amp; Fees</p>
        <p>Tuition: $1,350</p>
        <p>Enrollment Fee: $175 (includes all supplies needed for course)</p>
        <p>Enrollment fee collected during in-person enrollment appointment.</p>
        <p>Financial Aid</p>
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
      <p className="text-[20px] leading-[28.9px] text-black">
        Our phlebotomy instructor is Jaime Hassler, RN. Her bio will be posted soon!
      </p>
    ),
  },
  {
    title: "Curriculum",
    content: (
      <div className="space-y-2 text-[20px] leading-[28.9px] text-black">
        <p className="font-bold">Unit 1: The Healthcare Setting</p>
        <p>Chapter 1: Phlebotomy: Past and Present &amp; the Healthcare Setting.</p>
        <p>Chapter 2: Quality Assurance &amp; Legal Issues in Healthcare</p>
        <p>Chapter 3: Infection Control, Safety, First Aid, &amp; Personal Wellness</p>

        <p className="font-bold mt-6">Unit 2: Overview of the Human Body</p>
        <p>Chapter 4: Medical Terminology</p>
        <p>Chapter 5: Human Anatomy &amp; Physiology Review</p>
        <p>Chapter 6: The Circulatory System</p>

        <p className="font-bold mt-6">Unit 3: Blood Collection Procedures</p>
        <p>Chapter 7: Blood Collection Equipment, Additives, &amp; Order of Draw</p>
        <p>Chapter 8: Venipuncture Procedures</p>
        <p>Chapter 9: Pre-Examination/Preanalytical Consideration</p>
        <p>Chapter 10: Capillary Puncture Equipment, Principles, &amp; Procedures</p>

        <p className="font-bold mt-6">Unit 4: Special Procedures</p>
        <p>Chapter 11: Special Collections &amp; Point-of-Care Testing</p>
        <p>Chapter 12: Computers &amp; Specimen Handling &amp; Tests</p>
        <p>Chapter 13: Urine and Other Non-blood Specimens &amp; Tests</p>
        <p>Chapter 14: Arterial Puncture Procedures</p>
      </div>
    ),
  },
];

export default function CourseDetails() {
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
