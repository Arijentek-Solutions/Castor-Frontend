"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const courseItems: { title: string; content: React.ReactNode }[] = [
  {
    title: "Overview",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p>
          If you&apos;re looking to acquire life-saving skills and gain confidence in emergency situations, Castor Health Institute&apos;s CPR Course is the perfect choice. Our comprehensive program is designed to equip individuals from various backgrounds with the knowledge and practical training needed to perform Cardio-Pulmonary Resuscitation (CPR) effectively.
        </p>
        <p>
          At Castor Health Institute, we understand that CPR skills are essential for anyone, whether you&apos;re a healthcare professional, a teacher, a parent, or simply someone who wants to be prepared to respond in emergency situations. Our CPR Course is structured to meet the diverse needs of our students, offering the flexibility to accommodate beginners and experienced individuals alike.
        </p>
        <p>Here&apos;s what you can expect from Castor Health Institute&apos;s CPR Course:</p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Comprehensive Curriculum:</strong> Our course covers a wide range of topics related to CPR, including basic life support techniques, assessing the scene and victims, performing chest compressions, providing rescue breaths, utilizing automated external defibrillators (AEDs), and responding to choking emergencies. You will also learn about the importance of early recognition and activation of emergency medical services (EMS).
          </li>
          <li>
            <strong>Experienced Instructors:</strong> Our instructors are highly qualified and experienced healthcare professionals who specialize in CPR training. They bring real-world expertise and knowledge to the classroom, ensuring that you receive the most accurate and up-to-date instruction. Our instructors are dedicated to providing a supportive and engaging learning environment.
          </li>
          <li>
            <strong>Hands-on Training:</strong> We believe in the power of practical training. During our CPR Course, you will have ample opportunities to practice CPR techniques on mannequins, allowing you to develop the necessary muscle memory and confidence. Through realistic scenarios and simulation exercises, you will gain valuable experience in responding to different emergency situations.
          </li>
          <li>
            <strong>Certification:</strong> Upon successful completion of the course, you will receive a CPR certification from the American Heart Association. This certification is widely recognized and demonstrates your competency in performing CPR. It can be beneficial for both personal and professional purposes, such as meeting workplace requirements or enhancing your resume.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: "Upcoming Dates",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p className="font-bold">Sterling</p>
        <p>Tuesday, March 10 from 9:00am to 1:00pm</p>
        <p>
          Classes held at 6 E. 23rd St., Sterling IL 61081<br />
          <a href="https://castorhealthinstitute.com/contact/" target="_blank" rel="noopener noreferrer" className="underline">
            Contact us
          </a>{" "}
          to sign up.
        </p>

        <p className="font-bold mt-6">Freeport</p>
        <p>Thursday, March 12 from 9:00am to 1:00pm</p>
        <p>
          Classes held at 30 E. Stephenson St., Freeport IL 61032<br />
          <a href="https://castorhealthinstitute.com/contact/" target="_blank" rel="noopener noreferrer" className="underline">
            Contact us
          </a>{" "}
          to sign up.
        </p>
      </div>
    ),
  },
  {
    title: "Enrollment",
    content: (
      <div className="space-y-4 text-[20px] leading-[28.9px] text-black">
        <p className="font-semibold">How Do I Enroll?</p>
        <p>
          Please use the{" "}
          <a href="https://castorhealthinstitute.com/contact/" target="_blank" rel="noopener noreferrer" className="underline">
            contact us
          </a>{" "}
          page to enroll!
        </p>
      </div>
    ),
  },
  {
    title: "Curriculum",
    content: (
      <div className="space-y-2 text-[20px] leading-[28.9px] text-black">
        <p className="font-semibold">CPR Curriculum</p>

        <p className="font-semibold mt-4">Module 1: Introduction</p>
        <p>Introduction to the AHA and its mission</p>
        <p>Overview of CPR and its importance</p>
        <p>Understanding the chain of survival</p>
        <p>Legal and ethical considerations in providing CPR</p>

        <p className="font-semibold mt-4">Module 2: Adult CPR</p>

        <p className="font-semibold mt-4">Module 3: Child &amp; Infant CPR</p>
        <p>Identifying cardiac arrest in children and infants</p>
        <p>Assessing the pediatric patient and calling for help</p>
        <p>Performing pediatric chest compressions</p>
        <p>Delivering rescue breaths to children and infants</p>
        <p>Proper use of pediatric AED pads (if available)</p>
        <p>Child and infant CPR skills practice</p>

        <p className="font-semibold mt-4">Module 4: Team Dynamics &amp; Communication</p>
        <p>Understanding the importance of effective team dynamics during CPR</p>
        <p>Roles and responsibilities within a resuscitation team</p>
        <p>Clear and concise communication techniques</p>
        <p>Resolving conflicts and maintaining focus under pressure</p>
        <p>Team-based CPR skills practice and simulations</p>

        <p className="font-semibold mt-4">Module 5: Special Considerations &amp; Advanced Techniques</p>
        <p>CPR techniques for pregnant women</p>
        <p>Modifications for patients with physical limitations</p>
        <p>CPR in special settings (e.g., drowning, choking)</p>
        <p>Introduction to advanced CPR techniques (e.g., two-rescuer CPR, pulse checks)</p>
        <p>Case studies and scenario-based training</p>

        <p className="font-semibold mt-4">Module 6: Certification Exam</p>
        <p>Comprehensive assessment of CPR knowledge and skills</p>
        <p>Written exam to evaluate theoretical understanding</p>
        <p>Practical skills evaluation on adult, child, and infant manikins</p>
        <p>Review of results and certification awarding</p>
      </div>
    ),
  },
];

export default function CPRCourseDetails() {
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
