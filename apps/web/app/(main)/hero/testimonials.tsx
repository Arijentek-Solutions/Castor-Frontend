"use client";

import React from "react";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.04894 1.5273C9.34839 0.605537 10.6516 0.605536 10.9511 1.5273L12.4697 6.20127C12.6023 6.60943 12.9806 6.88427 13.41 6.88427H18.3241C19.2933 6.88427 19.6963 8.12461 18.9126 8.694L14.9366 11.583C14.5891 11.8354 14.4438 12.2827 14.5765 12.6909L16.0951 17.3648C16.3946 18.2866 15.3396 19.0531 14.5559 18.4837L10.5799 15.5947C10.2324 15.3423 9.7676 15.3423 9.42011 15.5947L5.44406 18.4837C4.66038 19.0531 3.60541 18.2866 3.90486 17.3648L5.42347 12.6909C5.55615 12.2827 5.41088 11.8354 5.06338 11.583L1.0874 8.694C0.303684 8.12461 0.706691 6.88427 1.6759 6.88427H6.58999C7.01943 6.88427 7.39766 6.60943 7.53033 6.20127L9.04894 1.5273Z"
      fill="#F8C08A"
    />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Testimonials() {
  const testimonials = [
    {
      text: "The home nursing staff from Castor have been absolutely wonderful. Professional, caring, and always on time. They've made such a difference in my mother's care.",
      name: "Sarah Johnson",
      role: "Family Member",
    },
    {
      text: "I completed my CNA training at Castor Health Institute and got hired immediately. The instructors were knowledgeable and the hands-on experience was invaluable.",
      name: "Michael Chen",
      role: "CNA Graduate",
    },
    {
      text: "Ordering medical equipment through Castor was seamless. Great prices, fast delivery, and the customer service team helped me navigate my insurance coverage.",
      name: "Emily Rodriguez",
      role: "Customer",
    },
  ];

  return (
    <section className="bg-[rgba(213,251,255,0.2)] py-20 px-4 md:px-8 lg:px-16 w-full flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex flex-col gap-4"
        >
          <h2 className="text-[#0e1b33] text-4xl md:text-[48px] font-black leading-tight md:leading-[48px] tracking-[-0.48px]">
            What Our Clients Say
          </h2>
          <p className="text-[#6a6a67] text-lg md:text-[20px] font-normal leading-relaxed md:leading-[28px]">
            Real experiences from real people
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 w-full mt-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-[32px] p-8 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] flex flex-col h-full transition-shadow duration-300 hover:shadow-[0px_20px_25px_0px_rgba(0,0,0,0.15)]"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-[#6a6a67] text-[16px] leading-[26px] mb-8 grow">
                "{testimonial.text}"
              </p>
              <div className="flex flex-col mt-auto pt-6 border-t border-gray-50 border-opacity-50">
                <p className="text-[#0e1b33] text-[16px] font-bold leading-[26px] mb-1">
                  {testimonial.name}
                </p>
                <p className="text-[#6a6a67] text-[14px] leading-[20px]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
