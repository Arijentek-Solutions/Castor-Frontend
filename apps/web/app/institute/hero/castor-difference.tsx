"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const bulletPoints = [
  "Hands-on clinical experience at some of the best facilities in Illinois",
  "The lowest tuition rates around",
  "Access to highly qualified instructors",
  "Post-graduation employment opportunities at Castor Home Nursing",
];

export function CastorDifference() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-[1340px] flex-col items-center gap-12 lg:flex-row lg:gap-[126px]">
        {/* Logo Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative h-[258px] w-full max-w-[456px] shrink-0 overflow-hidden"
        >
          <Image
            src="/images/institute/logo/castor-institute-logo.png"
            alt="Castor Health Logo"
            width={456}
            height={258}
            className="h-full w-full object-contain"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex max-w-[646px] flex-col gap-[39px]"
        >
          <div className="flex flex-col gap-5">
            <h2 className="text-[44px] font-bold leading-[1.2] tracking-[-0.44px] text-[#0e1b33]">
              The Castor Difference
            </h2>
            <p className="text-[22px] leading-[1.7] text-black">
              Studying at Castor means you'll have unique and unparalleled
              access to the following
            </p>
          </div>

          {/* Bullet Points Card */}
          <div
            className="rounded-[20px] border border-[#dcdcdc] px-[31px] py-[19px]"
            style={{
              backgroundImage:
                "linear-gradient(159.853deg, #ffead8 0%, #fff5ec 50%, #ffffff 100%)",
            }}
          >
            <ul className="flex flex-col gap-[11px]">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-[28px]">
                  <span className="mt-[7px] h-[11px] w-[11px] shrink-0 rounded-full bg-[#20a9ad]" />
                  <span className="text-[19px] leading-[33px] text-black">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
