"use client";
import React from "react";
import { motion } from "framer-motion";

const HowItWork = () => {
  const steps = [
    {
      id: "281:115",
      number: "1",
      title: "Book Your Ride",
      description: "Call us or use our online booking system to schedule your transport"
    },
    {
      id: "281:119",
      number: "2",
      title: "Get Confirmation",
      description: "Receive immediate confirmation with driver details and pickup time"
    },
    {
      id: "281:123",
      number: "3",
      title: "Enjoy Your Ride",
      description: "Safe, comfortable transportation to and from your appointment"
    }
  ];

  return (
    <section className="bg-white py-[80px] px-4 sm:px-6 lg:px-[141px]" data-node-id="281:112">
      <div className="mx-auto max-w-[1280px] text-center">
        <h2 className="text-[44px] font-bold text-[#0e1b33] leading-[54px]" data-node-id="281:113">
          How It Works
        </h2>
        <p className="mt-4 text-[#6a6a67] text-[18px] mb-[60px]" data-node-id="281:114">
          Simple, reliable booking in three easy steps
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div 
                className="relative flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[#20a9ad] text-white text-[28px] font-bold mb-6 shadow-lg"
                data-node-id={step.id}
              >
                {step.number}
              </div>
              <h3 className="text-[20px] font-semibold text-[#0e1b33] mb-4" data-node-id={index === 0 ? "281:117" : index === 1 ? "281:121" : "281:125"}>
                {step.title}
              </h3>
              <p className="text-[#6a6a67] text-[16px] leading-[24px] max-w-[380px]" data-node-id={index === 0 ? "281:118" : index === 1 ? "281:122" : "281:126"}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
