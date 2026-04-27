"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const careSections = [
  {
    title: "Post-Operative Support",
    description: "Does your elderly loved one need extra care after post-operative procedure? Here are some of the many in home care services we provide:",
    items: [
      "Assist with bathing and grooming",
      "Help with proper lifting and reaching",
      "Assist with clothing selection and dressing",
      "Aid and assist with walking in and outdoors",
      "Taking detailed notes at their doctors' appointments",
      "Medication reminders"
    ]
  },
  {
    title: "Specialized Condition Care",
    description: "When your loved one needs specialized in home care, we are here to help with the following with fully trained professionals:",
    items: [
      "Alzheimer's and Dementia Care",
      "Hospice and Cancer Care",
      "Diabetes Care",
      "Incontinence Care",
      "Stroke Care",
      "Respite Care",
      "Parkinson's Care",
      "And many more conditions"
    ]
  },
  {
    title: "Post-Surgery Procedures",
    description: "We provide a thorough one-on-one assessment to provide care for some of the many post-operative procedures below:",
    items: [
      "Hip Replacements",
      "Knee Replacements",
      "Shoulder Surgery",
      "Spine Surgery",
      "Cardiac Surgery",
      "Gastrointestinal Surgery",
      "Prostate Surgery",
      "Plastic Surgery",
      "Cataract or Eye Surgery"
    ]
  }
];

export default function SpecializedCare() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-4 tracking-[-0.48px]">
            Post-Operative & Specialized Care
          </h2>
        </motion.div>

        {/* Triple column layout as per Figma */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 justify-items-center">
          {careSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-[#f0f9fa] border-2 border-[rgba(32,169,173,0.2)] rounded-[32px] p-8 min-h-[502px] flex flex-col w-full max-w-[384px]"
              style={{ 
                backgroundImage: "linear-gradient(127.414deg, rgb(219, 239, 239) 0%, rgb(255, 255, 255) 100%)" 
              }}
            >
              <h3 className="text-[24px] font-black text-[#0e1b33] mb-6 leading-tight">
                {section.title}
              </h3>
              <p className="text-[16px] leading-[1.625] text-[#6a6a67] mb-8 font-normal">
                {section.description}
              </p>
              
              <div className="space-y-3 mt-4">
                {section.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 py-0.5">
                    <div className="flex-shrink-0 size-4 bg-[#20a9ad]/10 rounded-full flex items-center justify-center">
                      <Check className="size-2.5 text-[#20a9ad] stroke-[4px]" />
                    </div>
                    {/* whitespace-nowrap ensures each point stays on one line as requested */}
                    <span className="text-[14px] font-semibold text-[#0e1b33] whitespace-nowrap overflow-hidden text-ellipsis">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
