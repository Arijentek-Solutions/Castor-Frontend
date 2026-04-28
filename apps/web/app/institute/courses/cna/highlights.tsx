"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    image: "/images/institute/courses/img1.png",
    title: "Job Placement Assistance",
    description:
      "We help connect you with local employers, offering resume workshops and interview prep to kickstart your healthcare career with confidence.",
  },
  {
    image: "/images/courses/img2.png",
    title: "Hands-On Clinical Training",
    description:
      "Gain practical experience in real healthcare settings, building the skills and confidence needed to deliver exceptional patient care from day one.",
  },
  {
    image: "/images/courses/img3.png",
    title: "Flexible Class Schedules",
    description:
      "With courses running year-round, and with full-day or evening options, you\u2019re bound to find a class that works with your schedule.",
  },
  {
    image: "/images/courses/img4.png",
    title: "Affordable Rates & Financial Support",
    description:
      "Take advantage of competitive rates and flexible payment options, including financial assistance, to make your education accessible and worry-free.",
  },
];

export default function ProgramHighlights() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-[273px] w-full overflow-hidden rounded-[18px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-7 min-h-[48px] text-[22px] font-semibold leading-[24px] text-black">
                {card.title}
              </h3>
              <p className="mt-5 text-[16px] leading-[1.4] text-black">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
