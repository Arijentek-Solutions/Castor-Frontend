"use client";

import React, { useState } from "react";
import { SimpleHero } from "@castor/ui";
import { motion, AnimatePresence } from "framer-motion";

export default function ReservationPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="px-4 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pt-44 xl:pt-52 bg-white">
        <div className="mx-auto max-w-[1530px]">
          <SimpleHero 
            subtitle="Castor Transport"
            title="Reservation"
            description="Book your ride quickly and securely"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 pb-20 pt-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="w-full h-[2400px] md:h-[1800px] bg-[#f0f9fa] relative rounded-[16px] overflow-hidden shadow-[0_4_24_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.12)]">
            <AnimatePresence>
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center pt-[400px] bg-white z-10"
                >
                  <div className="w-12 h-12 border-4 border-[#20a9ad] border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-[#0e1b33] font-medium animate-pulse">Loading Reservation Form...</p>
                </motion.div>
              )}
            </AnimatePresence>

            <iframe
              id="JotFormIFrame-261122620065040"
              title="Transport Reservation Form"
              onLoad={handleLoad}
              allowFullScreen
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/261122620065040"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                opacity: isLoading ? 0 : 1,
                transition: "opacity 0.5s ease-in-out",
                overflow: "hidden"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
