"use client";

import React, { useState } from "react";
import { SimpleHero } from "@castor/ui";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
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
            title="Contact Us"
            description="Whether you have questions or need assistance, we're here to help"
          />
        </div>
      </section>
      {/* Form Section */}
      <section className="px-4 pb-20 pt-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          
          <div className="w-full h-[1900px] md:h-[2100px] bg-[#f0f9fa] relative rounded-[16px] overflow-hidden shadow-[0_4_24_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.12)]">
            <AnimatePresence>
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center pt-[300px] bg-white z-10"
                >
                  <div className="w-12 h-12 border-4 border-[#20a9ad] border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-[#0e1b33] font-medium animate-pulse">Loading Contact Form...</p>
                </motion.div>
              )}
            </AnimatePresence>

            <iframe
              id="JotFormIFrame-261130843401040"
              title="Transport Contact Us Form"
              onLoad={handleLoad}
              allowFullScreen
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/261130843401040"
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
      {/* Get In Touch Details Section */}
      <section className="px-4 pb-32 pt-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1280px]"
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-[#0e1b33]"
            >
              Get in Touch Contact Details
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.4
                  }
                }
              }}
              className="space-y-8"
            >
              {[
                { label: "Phone:", value: "815-200-9096" },
                { label: "Email:", value: "book@castormedicaltransport.com", isEmail: true },
                { label: "Address:", value: "417 E 3rd St., Suite B Sterling, IL 61081" },
                { label: "Service Areas Covered:", value: "Whiteside, Lee, Ogle, Stevenson Counties" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="font-bold text-[#0e1b33] text-xl w-48 shrink-0 group-hover:text-[#20a9ad] transition-colors duration-300">
                    {item.label}
                  </div>
                  <div className={`text-[#6a6a67] text-xl ${item.isEmail ? 'break-all' : ''}`}>
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[48px] overflow-hidden group shadow-2xl border-4 border-white h-[400px] lg:h-[500px]"
            >
              <iframe
                title="Castor Medical Transport Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.821160573926!2d-89.6917244234551!3d41.7894973712526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8809b7c57a8fffff%3A0x3548007dbb1f1c18!2s417%20E%203rd%20St%20Suite%20B%2C%20Sterling%2C%20IL%2061081%2C%20USA!5e0!3m2!1sen!2sin!4v1712036495143!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
