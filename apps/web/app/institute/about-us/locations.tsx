"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const campuses = [
  {
    name: "Sterling",
    address: "(Offices) 417 E. 3rd St, Sterling IL 61081 | (Classes) 6 E. 23rd St, Sterling IL 61081",
    description: "Sterling is where our journey started. Our classrooms feature a warm, comfortable environment combined with the latest technology and resources to ensure you get a top-notch vocational education.",
    image: "/images/institute/map/sterling.png", // Assuming these will be added or I can use placeholders
  },
  {
    name: "Freeport",
    address: "30 E. Stephenson St, Freeport IL 61032",
    description: "Located in the heart of downtown Freeport, we're located within walking distance to a variety of shops, cafes, boutiques, and restaurants. Within just five miles of over 10 facilities and hospitals, we're well positioned within a thriving healthcare industry.",
    image: "/images/institute/map/freeport.png",
  },
];

export function Locations() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[16px] font-semibold uppercase tracking-[0.4px] text-[#20a9ad]"
          >
            Our Locations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[48px] font-bold tracking-[-1.2px] text-black"
          >
            Visit our Campuses
          </motion.h2>
        </div>

        {/* Campuses Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {campuses.map((campus, index) => (
            <motion.div
              key={campus.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col"
            >
              {/* Image Container */}
              <div className="relative mb-8 aspect-[608/342] w-full overflow-hidden rounded-[32px] bg-[#dbefef]">
                <Image
                  src={campus.image}
                  alt={`${campus.name} Campus Map`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback to a styled div if image is missing
                    (e.target as any).style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col text-center lg:text-left">
                <h3 className="mb-4 text-[36px] font-bold text-[#0e1b33]">
                  {campus.name}
                </h3>
                <p className="mb-4 text-[18px] leading-[28px] text-[#6a6a67]">
                  <span className="font-semibold text-[#0e1b33]">Address: </span>
                  {campus.address}
                </p>
                <p className="text-[18px] leading-[28px] text-[#6a6a67]">
                  {campus.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
