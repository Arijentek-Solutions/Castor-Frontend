"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const VeteransCareDescription = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1216px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-[64px]">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:max-w-[576px]"
          >
            <h2 className="text-[#0e1b33] text-[40px] sm:text-[48px] font-black leading-[1.1] mb-10 tracking-[-0.02em]">
              Veterans Care
            </h2>
            <div className="space-y-6">
              <p className="text-[#6a6a67] text-[18px] leading-[1.625] tracking-tight">
                Castor Home Nursing provides compassionate care services tailored specifically for veterans. We proudly serve those who have served our country, ensuring they receive high-quality healthcare support in the comfort of their homes.
              </p>
              <p className="text-[#6a6a67] text-[18px] leading-[1.625] tracking-tight">
                Our team coordinates with VA programs and support systems to provide seamless, dignified care that honors your service while promoting independence and quality of life.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:max-w-[576px] relative h-[384px] rounded-[32px] overflow-hidden"
          >
            <Image
              src="/images/after hero1/Image (Veteran care at home).png"
              alt="Veteran care at home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 576px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VeteransCareDescription;
