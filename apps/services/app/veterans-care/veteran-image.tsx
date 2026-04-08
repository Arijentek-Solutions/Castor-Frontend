"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VeteranImage() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1216px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[480px] w-full rounded-[32px] overflow-hidden shadow-lg"
        >
          <Image
            src="/images/after hero1/Image (Veteran with caregiver).png"
            alt="Veteran receiving compassionate care from a caregiver"
            fill
            className="object-cover"
            sizes="(max-width: 1216px) 100vw, 1216px"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
