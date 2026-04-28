"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const staff = [
  {
    name: "Amber Johnson",
    role: "Financial Coordinator",
    bio: "Bio coming soon!",
    image: "/images/institute/leadership/demmy.png",
  },
  {
    name: "Raj Majumder",
    role: "Enrollment Coordinator",
    bio: "Raj is the Intake and Enrollment Coordinator at Castor Health Institute, where he supports prospective students by answering their questions and guiding them as they begin their chosen programs. Outside of work, Raj enjoys traveling and staying fit, bringing the same energy and positivity to both his professional and personal life.",
    image: "/images/institute/leadership/demmy.png",
  },
];

export function SupportStaff() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1286px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] font-bold tracking-[-1.2px] text-black"
          >
            Support Staff
          </motion.h2>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {staff.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 rounded-[25px] bg-[#20a9ad]/10 p-[18px] h-full"
            >
              {/* Image Container */}
              <div className="relative h-[259px] w-[202px] shrink-0 overflow-hidden rounded-[19.5px] bg-[#dbefef]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as any).style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold leading-[28px] text-[#0e1b33]">
                  {member.name}
                </h3>
                <p className="text-[18px] font-normal leading-[28px] text-[#0e1b33]">
                  {member.role}
                </p>
                <p className="text-[14px] font-normal leading-[22.75px] text-[#2d2d2d]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
