"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const counties = [
  "Bureau",
  "Carroll",
  "Henry",
  "LaSalle",
  "Lee",
  "Ogle",
  "Rock Island",
  "Stephenson",
  "Whiteside",
  "Winnebago",
];

export function CountiesServe() {
  return (
    <section className="bg-white px-8 py-16 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[48px] bg-[#f0f9fa] border border-[#20a9ad]/10 p-12 lg:p-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#20a9ad] shadow-sm">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-[32px] font-bold tracking-tight text-[#0e1b33]">
              Counties We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {counties.map((county, index) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center rounded-2xl bg-white border border-[#20a9ad]/5 py-6 px-6 shadow-sm transition-all hover:shadow-md hover:border-[#20a9ad]/20"
              >
                <span className="text-[18px] font-bold text-[#0e1b33]">
                  {county}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
