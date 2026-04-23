"use client";

import React, { useState } from "react";
import { SimpleHero } from "@castor/ui";
import { motion, AnimatePresence } from "framer-motion";

export default function FreeEstimatePage() {
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
            title="Free Estimate"
            description="Request a free estimate tailored to your needs"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 pb-20 pt-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="w-full h-[1800px] bg-white relative">
            <AnimatePresence>
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center pt-[400px] bg-white z-10"
                >
                  <div className="w-12 h-12 border-4 border-[#20a9ad] border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-[#0e1b33] font-medium animate-pulse">Loading Estimate Form...</p>
                </motion.div>
              )}
            </AnimatePresence>

            <iframe
              id="JotFormIFrame-261123389184055"
              title="Transport Free Estimate Form"
              onLoad={handleLoad}
              allowFullScreen
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/261123389184055"
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
