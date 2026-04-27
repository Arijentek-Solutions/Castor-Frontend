"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Search, Phone, ArrowUpRight, X, Info, ShieldAlert, Award } from "lucide-react";
import Link from "next/link";
import { COUNTY_DETAILS } from "./county-data";

const COUNTIES = [
  "Boone", "Bureau", "Carroll", "Cook",
  "DeKalb", "DuPage", "Grundy", "Henry",
  "Jo Davis", "Kane", "Kendall", "Knox",
  "Lake", "LaSalle", "Lee", "McHenry",
  "Ogle", "Peoria", "Rock Island", "Stark",
  "Stephenson", "Whiteside", "Will", "Winnebago"
];

export default function CountiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  const filteredCounties = COUNTIES.filter(county => 
    county.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openDrawer = (county: string) => {
    setSelectedCounty(county);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setSelectedCounty(null);
    document.body.style.overflow = "auto";
  };

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const detail = selectedCounty ? COUNTY_DETAILS[selectedCounty] : null;

  return (
    <main className="min-h-screen bg-[#fcf9f8] selection:bg-[#20a9ad]/20 pb-32">
      {/* Drawer Overlay */}
      <AnimatePresence>
        {selectedCounty && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 bg-[#0e1b33]/40 backdrop-blur-sm z-[60] cursor-pointer"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-[640px] bg-white z-[70] shadow-2xl overflow-y-auto"
            >
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#f0f9fa] rounded-2xl text-[#20a9ad]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-[14px] font-bold text-[#6a6a67] tracking-widest uppercase">Illinois Territory</span>
                  </div>
                  <button 
                    onClick={closeDrawer}
                    className="p-4 rounded-full bg-[#f6f3f2] hover:bg-[#20a9ad] hover:text-white transition-all active:scale-90"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {detail ? (
                  <div className="space-y-16">
                    {/* Header */}
                    <div>
                      <h2 className="text-[36px] sm:text-[48px] font-bold text-[#0e1b33] leading-[1.1] tracking-tight mb-8">
                        {detail.title}
                      </h2>
                      <h3 className="text-[14px] font-bold text-[#20a9ad] tracking-widest uppercase mb-6 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Serving Locations:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {detail.servingLocations.map(loc => (
                          <span key={loc} className="px-3 py-1 bg-[#f6f3f2] rounded-lg text-[13px] font-medium text-[#6a6a67]">
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Town Details */}
                    <div>
                      <h3 className="text-[14px] font-bold text-[#20a9ad] tracking-widest uppercase mb-8 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        Community Impact
                      </h3>
                      <div className="space-y-6">
                        {detail.locationDetails.map((loc, i) => (
                          <div key={i} className="group pb-6 border-b border-[#f6f3f2] last:border-0">
                            <h4 className="text-[18px] font-bold text-[#0e1b33] mb-2">{loc.name}</h4>
                            <p className="text-[15px] text-[#6a6a67] leading-relaxed">{loc.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges */}
                    {detail.challenges.length > 0 && (
                      <div className="p-10 rounded-[40px] bg-[#0e1b33] text-white overflow-hidden relative">
                        <h3 className="text-[14px] font-bold text-[#20a9ad] tracking-widest uppercase mb-8 flex items-center gap-2 relative z-10">
                          <ShieldAlert className="w-4 h-4" />
                          Addressing Challenges
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                          {detail.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-center gap-2 text-[14px] font-medium text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#20a9ad]" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#20a9ad]/10 rounded-full blur-3xl -mr-16 -mt-16" />
                      </div>
                    )}

                    {/* Commitment */}
                    <div>
                      <h3 className="text-[14px] font-bold text-[#20a9ad] tracking-widest uppercase mb-8 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Our Commitment
                      </h3>
                      <div className="prose prose-p:text-[#6a6a67] prose-p:leading-relaxed prose-p:text-[16px]">
                        {detail.commitment.split('\n').map((line, i) => (
                          <p key={i} className="mb-4">{line}</p>
                        ))}
                      </div>
                    </div>

                    {/* Footer Contact */}
                    <div className="pt-12 border-t border-[#f6f3f2]">
                      <Link 
                        href="tel:1-800-CASTOR-1"
                        className="flex items-center justify-center gap-4 w-full py-6 bg-[#20a9ad] text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all active:scale-[0.98]"
                      >
                        <Phone className="w-5 h-5" />
                        Speak with our Intake Team
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="h-[60vh] flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-[#f6f3f2] rounded-full flex items-center justify-center mb-6">
                      <MapPin className="w-8 h-8 text-[#20a9ad] opacity-20" />
                    </div>
                    <h3 className="text-[24px] font-bold text-[#0e1b33] mb-4">Content Coming Soon</h3>
                    <p className="text-[#6a6a67] max-w-[300px]">
                      We are currently compiling the detailed regional report for {selectedCounty} County.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Editorial Hero Header */}
      <section className="relative pt-44 lg:pt-60 pb-20 overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[800px]">
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-[48px] sm:text-[64px] lg:text-[84px] font-bold text-[#0e1b33] leading-[0.94] tracking-[-0.04em] mb-12"
            >
              Connecting Illinois <br />
              <span className="text-[#20a9ad]">With Quality Care</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[18px] sm:text-[22px] text-[#6a6a67] leading-[1.6] max-w-[560px] font-medium"
            >
              We bring clinical excellence and personal supportive care directly to your doorstep across 24 local counties. 
            </motion.p>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[45%] h-full flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
           <MapPin className="w-[120%] h-[120%] text-[#0e1b33] scale-[1.5]" />
        </div>
      </section>

      {/* Interactive Search & Grid Section */}
      <section className="mt-[-2rem] relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Minimal Search Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-[700px] mb-20 group"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6a6a67] transition-colors group-focus-within:text-[#20a9ad]" />
              <input 
                type="text"
                placeholder="Search your county..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#edf0f4] rounded-full py-6 pl-16 pr-8 text-[18px] font-medium text-[#0e1b33] placeholder:text-[#6a6a67]/50 shadow-[0_12px_44px_rgba(14,27,51,0.04)] focus:shadow-xl focus:border-[#20a9ad]/20 transition-all outline-none"
              />
            </div>
          </motion.div>

          {/* Counties Grid: Editorial Design (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCounties.map((county, index) => (
                <motion.div
                  layout
                  key={county}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group"
                  onClick={() => openDrawer(county)}
                >
                  <div className="h-full p-10 rounded-[40px] bg-white border border-transparent hover:border-[#edf0f4] shadow-[0_12px_44px_rgba(14,27,51,0.03)] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#20a9ad]" />
                          <span className="text-[12px] font-bold text-[#6a6a67] tracking-[0.2em] uppercase">Illinois Region</span>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-[#edf0f4] group-hover:text-[#20a9ad] transition-colors" />
                      </div>
                      <h3 className="text-[28px] font-bold text-[#0e1b33] leading-tight tracking-tight group-hover:text-[#20a9ad] transition-colors">
                        {county}
                      </h3>
                    </div>
                    <div className="mt-12 pt-8 border-t border-[#f6f3f2]">
                      <span className="text-[14px] font-bold text-[#6a6a67] uppercase tracking-widest group-hover:text-[#20a9ad] transition-colors">View Details</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredCounties.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="text-[24px] font-bold text-[#6a6a67]">No counties found matching "{searchQuery}"</div>
                <button onClick={() => setSearchQuery("")} className="mt-4 text-[#20a9ad] font-bold hover:underline">Clear Search</button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
