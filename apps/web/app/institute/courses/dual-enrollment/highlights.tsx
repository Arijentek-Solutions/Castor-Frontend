"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    image: "/images/institute/courses/img1.png",
    title: "Comprehensive Dual-Skill Training",
    description:
      "Master patient care and blood-draw techniques, preparing you for versatile roles in hospitals, nursing homes, clinics, and laboratories.",
  },
  {
    image: "/images/institute/courses/img2.png",
    title: "Save Time and Money",
    description:
      "Save over $300 on tuition and fees, as well as 3 weeks of course time, when taking the combined course as opposed to getting your CNA and phlebotomist licenses separately.",
  },
  {
    image: "/images/institute/courses/img3.png",
    title: "The Only Program of its Kind",
    description:
      "No other school in the area offers an accelerated dual certification program like ours.",
  },
  {
    image: "/images/institute/courses/img4.png",
    title: "Increase your Earning Potential",
    description:
      "Dual certifications can open doors to higher-paying positions and more responsibilities, setting you apart in the competitive healthcare field.",
  },
];

export default function DualEnrollmentHighlights() {
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
