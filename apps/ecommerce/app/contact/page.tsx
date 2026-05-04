"use client";

import React from "react";
import { SimpleHero, Footer } from "@castor/ui";
import { motion } from "framer-motion";

export default function ContactPage() {

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pt-44 xl:pt-52 bg-white">
        <div className="mx-auto max-w-[1530px]">
          <SimpleHero 
            subtitle="GET IN TOUCH"
            title="Contact Us"
          />
        </div>
      </section>


      {/* Contact Details Section */}
      <section className="px-4 pb-32 pt-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[1280px]"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              className="space-y-10"
            >
              {[
                { label: "Phone:", value: "(815) 957-5117" },
                { label: "Address:", value: <>Castor Medical Supplies<br />415 East 3rd Street<br />Sterling, IL 61081</> },
                { label: "Hours:", value: (
                  <div className="space-y-1">
                    <div>Mon - Fri: 9:00 a.m. - 5:00 p.m.</div>
                    <div>Sat: 9:00 a.m. - 2:00 p.m.</div>
                    <div>Sun: Closed</div>
                  </div>
                )}
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
                  <div className="text-[#6a6a67] text-xl">
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
              className="relative rounded-[48px] overflow-hidden shadow-lg border-4 border-white h-[450px] lg:h-[550px]"
            >
              <iframe
                title="Castor Medical Supplies Location Map"
                src="https://www.google.com/maps?q=415+East+3rd+Street+Sterling+IL+61081&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
