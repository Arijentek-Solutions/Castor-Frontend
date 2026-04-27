"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/getcare/veterans/veteran-image-3.jpg",
    alt: "Senior veteran receiving professional home care",
  },
  {
    src: "/images/getcare/veterans/veteran-image-4.jpg",
    alt: "Healthcare professional with veteran",
  },
];

export default function VeteransCareImages() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1216px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative h-[320px] rounded-[32px] overflow-hidden shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 592px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
