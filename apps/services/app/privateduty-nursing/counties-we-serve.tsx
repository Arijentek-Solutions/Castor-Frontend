"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const counties = [
  "Boone", "Bureau", "Carroll", "Cook", "Dekalb", "Dupage",
  "Grundy", "Henry", "Jo Davis", "Kane", "Kendall", "Knox",
  "Lake", "LaSalle", "Lee", "McHenry", "Ogle", "Peoria",
  "Rock Island", "Stark", "Stephenson", "Whiteside", "Will", "Winnebago"
];

export default function CountiesWeServe() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#f0f9fa] rounded-[32px] p-10 md:p-14"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <MapPin className="size-6 text-[#20a9ad]" />
            </div>
            <h2 className="text-[30px] font-bold text-[#0e1b33] tracking-tight">
              Counties We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {counties.map((county, index) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-white rounded-xl py-4 px-2 flex items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow border border-[#20a9ad]/10"
              >
                <span className="text-[16px] font-semibold text-[#0e1b33]">
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
