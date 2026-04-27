"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const counties = [
  "Boone",
  "Bureau",
  "Carroll",
  "Cook",
  "Dekalb",
  "Dupage",
  "Grundy",
  "Henry",
  "Jo Davis",
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

export default function CountiesWeServe() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[32px] p-8 md:p-12 lg:p-[50px] border border-[#20a9ad33]"
          style={{
            background: "linear-gradient(161deg, #dbefef 0%, #ffffff 100%)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-10 w-10 items-center justify-center">
              <MapPin className="h-8 w-8 text-[#20a9ad]" />
            </div>
            <h2 className="text-[30px] font-black leading-[36px] tracking-[0.1px] text-[#0e1b33]">
              Counties We Serve
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[16px] gap-y-[16px]">
            {counties.map((county, index) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="bg-white border border-[#20a9ad33] rounded-[14px] h-[50px] flex items-center justify-center px-4 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-[16px] font-bold text-[#0e1b33] text-center leading-tight tracking-[-0.31px] group-hover:text-[#20a9ad] transition-colors">
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
