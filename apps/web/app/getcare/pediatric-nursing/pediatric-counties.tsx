"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const counties = [
  "Boone",
  "Bureau",
  "Carroll",
  "Cook",
  "DeKalb",
  "DuPage",
  "Grundy",
  "Henry",
  "Jo Daviess",
  "Kane",
  "Kendall",
  "Knox",
  "Lake",
  "LaSalle",
  "Lee",
  "McHenry",
  "Ogle",
  "Peoria",
  "Rock Island",
  "Stark",
  "Stephenson",
  "Whiteside",
  "Will",
  "Winnebago",
];

export function PediatricCounties() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1276px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] border-2 border-[#20a9ad]/20 p-8 sm:p-12 lg:p-16"
          style={{ 
            background: "linear-gradient(161deg, #dbefef 0%, #ffffff 100%)" 
          }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10 sm:mb-12">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#20a9ad] shadow-[0_2px_10px_rgba(32,169,173,0.1)]">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-black tracking-tight text-[#0e1b33]">
              Counties We Serve
            </h2>
          </div>

          {/* Counties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {counties.map((county, index) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="flex h-[54px] items-center justify-center rounded-xl bg-white border border-[#20a9ad]/20 px-4 text-center shadow-[0_2px_4px_rgba(32,169,173,0.05)] shadow-sm transition-all hover:shadow-md hover:border-[#20a9ad]/40"
              >
                <span className="text-[15px] sm:text-[16px] font-bold text-[#0e1b33]">
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
