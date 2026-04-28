"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Abigayle Miller",
    title: "Program Manager",
    bio: "Abby has guided the establishment and the growth of the Castor Health Institute since its inception. With over a decade of experience in the healthcare industry, she is dedicated to helping the next generation of healthcare professionals. Outside of her work life, she is a proud mother of two and enjoys engaging in photography, painting, and other artistic activities, including a hair styling business which she runs.",
    image: "/images/institute/leadership/abigayle-miller.png",
  },
  {
    name: "Yugan Sakthi",
    title: "Director of Education",
    bio: "Yugan brings experience in teaching, curriculum development, project management, and community building. He currently oversees the implementation of the Castor Health Institute's external-facing projects, including educational programs for healthcare facilities, as well as finding new ways to improve our curriculum and engage students. Yugan also enjoys playing music, reading, and travelling to new places.",
    image: "/images/institute/leadership/yugan-sakthi.png",
  },
];

export function Leadership() {
  return (
    <section className="bg-[#ffead8]/50 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[16px] font-semibold uppercase tracking-[0.4px] text-[#20a9ad]"
          >
            Meet the Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[48px] font-bold tracking-[-1.2px] text-black"
          >
            Institute Leadership
          </motion.h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col rounded-[32px] bg-white p-8 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]"
            >
              {/* Image Container */}
              <div className="relative mb-8 aspect-[1.1/1] w-full overflow-hidden rounded-[25px]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as any).style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h3 className="mb-2 text-[24px] font-bold text-[#0e1b33]">
                  {leader.name}
                </h3>
                <p className="mb-4 text-[20px] text-[#0e1b33]">
                  {leader.title}
                </p>
                <p className="text-[16px] leading-[26px] text-[#2d2d2d]">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
