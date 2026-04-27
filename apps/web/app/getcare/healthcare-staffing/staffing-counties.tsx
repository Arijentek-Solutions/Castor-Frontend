"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const counties = [
  "Boone", "Bureau", "Carroll", "Cook", "Dekalb", "Dupage",
  "Grundy", "Henry", "Jo Davis", "Kane", "Kendall", "Knox",
  "Lake", "LaSalle", "Lee", "McHenry", "Ogle", "Peoria",
  "Rock Island", "Stark", "Stephenson", "Whiteside", "Will", "Winnebago"
];

export function StaffingCounties() {
  return (
    <section className="py-20 lg:py-24 bg-[#f0f9fa]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-[#20a9ad]/20 rounded-[32px] p-8 lg:p-12 shadow-sm">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-[#20a9ad]/10 rounded-lg">
              <MapPin className="w-6 h-6 text-[#20a9ad]" />
            </div>
            <h2 className="text-[30px] lg:text-[36px] font-black text-[#0e1b33] tracking-tight">
              Counties We Serve
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {counties.map((county, index) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-[#20a9ad]/10 rounded-[14px] h-[50px] flex items-center justify-center hover:border-[#20a9ad]/40 hover:shadow-md transition-all cursor-default"
              >
                <span className="text-[16px] font-bold text-[#0e1b33]">
                  {county}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
