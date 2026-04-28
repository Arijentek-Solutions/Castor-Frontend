"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "CNA",
    description:
      "The heroes of the healthcare world, Certified Nursing Assistants (CNAs) make life worth living for millions of people.",
    image: "/images/institute/course-offering/cna-course-offering.png",
    alt: "CNA training student",
  },
  {
    title: "Phlebotomy",
    description:
      "Becoming a phlebotomy technician opens many pathways for students looking for a rewarding career.",
    image: "/images/institute/course-offering/phlebotomy-course-offering.png",
    alt: "Phlebotomy training",
  },
  {
    title: "Dual Enrollment",
    description:
      "This one-of-a-kind program can only be found at Castor. Receive your CNA and phlebotomy licenses in one course.",
    image: "/images/institute/course-offering/dual-enrollment-course-offering.png",
    alt: "Dual enrollment students",
  },
  {
    title: "CPR",
    description:
      "There is not a situation where knowing CPR will not come in handy. Castor offers CPR classes to care staff and businesses.",
    image: "/images/institute/course-offering/cpr-course-offering.png",
    alt: "CPR training",
  },
];

export function CourseOfferings() {
  return (
    <section className="bg-[#f0f9fa] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-[36px] font-bold leading-[1.2] tracking-[-0.44px] text-[#0e1b33]"
        >
          Our Course Offerings
        </motion.h2>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-[8px] border border-[#DCDCDC] bg-white"
            >
              <div className="relative aspect-[5/3] w-full shrink-0">
                <Image
                  src={course.image}
                  alt={course.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-4 pb-4 pt-2.5 text-center">
                <h3 className="mb-1 text-[20px] font-bold leading-[26px] text-[#122645]">
                  {course.title}
                </h3>
                <p className="mx-auto max-w-[360px] text-[15px] leading-[22px] text-[#0e1b33]">
                  {course.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
