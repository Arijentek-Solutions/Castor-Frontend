"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
} from "lucide-react";


export function StaffingWhyChoose() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Section */}
        <div className="mb-24 lg:mb-32">
          <div className="max-w-[1240px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-[40px] lg:text-[48px] font-black text-[#0e1b33] mb-8 tracking-tighter">
                Why Choose Castor Staffing?
              </h2>
              <p className="text-[18px] text-[#6a6a67] leading-relaxed max-w-[896px]">
                Partnering with Castor Staffing delivers a complete, hassle-free talent acquisition solution. We manage every step—from credentialing, background checks, and recruitment persuasion to onboarding and training—ensuring you receive qualified, compliant professionals. Our services include on demand scheduling, efficient application screening, strategic marketing and retention support, workers' compensation management, full benefits and payroll handling, and ongoing staff training, all designed to streamline operations and enhance workforce stability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[1216/384] rounded-[32px] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[#f0f9fa]"
            >
              <Image
                src="/images/Staffing Healthcare/why-choose-staffing.jpg"
                alt="Healthcare staffing team collaborate"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
