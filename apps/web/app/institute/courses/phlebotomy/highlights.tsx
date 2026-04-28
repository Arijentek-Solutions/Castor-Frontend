"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    image: "/images/institute/courses/img1.png",
    title: "Expert-Led Instruction",
    description:
      "Learn from experienced professionals who provide in-depth guidance, real-world insights, and support to ensure you succeed in your healthcare journey.",
  },
  {
    image: "/images/institute/courses/img2.png",
    title: "Extensive Hands-On Practice",
    description:
      "Build confidence with practical blood-draw experience in a supervised environment, ensuring you\u2019re ready for real-world patient interactions.",
  },
  {
    image: "/images/institute/courses/img3.png",
    title: "Accelerated Career Readiness",
    description:
      "Complete your training in as little as 6 weeks and quickly qualify for positions in hospitals, labs, clinics, and blood donation centers.",
  },
  {
    image: "/images/institute/courses/img4.png",
    title: "Supportive Learning Environment",
    description:
      "Join a welcoming community where instructors and staff are committed to your success, offering guidance every step of the way.",
  },
];

export default function PhlebotomyHighlights() {
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
