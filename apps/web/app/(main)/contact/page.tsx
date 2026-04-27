"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[450px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm"
          >
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/main/contact-hero.png"
                alt="Contact Castor"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 1024px) 1871px, 100vw"
              />
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,51,0.82)_0%,rgba(14,27,51,0.45)_40%,rgba(14,27,51,0.08)_74%,rgba(14,27,51,0)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%,transparent)]" />

            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="flex max-w-[40rem] flex-col items-center text-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                >
                  <Image
                    src="/icons/phone.png"
                    alt=""
                    width={16}
                    height={16}
                    className="opacity-90"
                    aria-hidden="true"
                  />
                  <span>We&apos;re here to help</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-6 text-[2.6rem] font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-[3.1rem] md:text-[4.5rem]"
                >
                  Get in <span className="text-[#20a9ad]">Touch</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-4 max-w-[34rem] text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
                >
                  Whether you need home care, medical supplies, transportation,
                  or training, one number connects you to everything Castor
                  offers.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left Column: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-[30px] font-bold tracking-[-0.01em] text-[#0e1b33]">
                Contact Information
              </h2>

              <div className="mt-8 space-y-6">
                {/* Phone Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] bg-[#d5fbff] p-8 transition-shadow hover:shadow-lg hover:shadow-cyan-100/50"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-white shadow-sm">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a9ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e1b33]">Phone</h3>
                      <p className="mt-1 text-sm font-medium text-[#6a6a67]">Centralized Support Line</p>
                      <p className="mt-4 text-2xl font-bold text-[#20a9ad]">1-800-CASTOR-1</p>
                    </div>
                  </div>
                </motion.div>

                {/* Email Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] bg-[#ffead8] p-8 transition-shadow hover:shadow-lg hover:shadow-orange-100/50"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-white shadow-sm">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ed7d31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e1b33]">Email</h3>
                      <p className="mt-1 text-sm font-medium text-[#6a6a67]">General Inquiries</p>
                      <p className="mt-4 text-xl font-bold text-[#0e1b33]">info@castorhealth.com</p>
                    </div>
                  </div>
                </motion.div>

                {/* Office Hours Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] bg-[#d5fbff] p-8 transition-shadow hover:shadow-lg hover:shadow-cyan-100/50"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-white shadow-sm">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a9ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0e1b33]">Office Hours</h3>
                      <div className="mt-3 space-y-1.5">
                        <div className="flex justify-between text-base">
                          <span className="font-medium text-[#6a6a67]">Mon - Fri:</span>
                          <span className="text-[#6a6a67]">8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="font-medium text-[#6a6a67]">Saturday:</span>
                          <span className="text-[#6a6a67]">9:00 AM - 1:00 PM</span>
                        </div>
                      </div>
                      <div className="mt-5 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#20a9ad]" />
                        <p className="text-sm font-bold text-[#20a9ad]">
                          24/7 On-Call Support for Active Patients
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Locations Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[2rem] bg-[#ffead8] p-8 transition-shadow hover:shadow-lg hover:shadow-orange-100/50"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-white shadow-sm">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ed7d31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0e1b33]">Main Locations</h3>
                      <p className="mt-1 text-sm font-medium text-[#6a6a67]">Serving Northern Illinois</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-[#6a6a67]">Rockford, IL</span>
                        <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-[#6a6a67]">Sterling, IL</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Assistance & Legal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              {/* Emergency Box */}
              <div className="overflow-hidden rounded-[2.5rem] border border-[#b83e2d]/20 bg-[#b83e2d]/5 p-10 text-center">
                <h3 className="text-2xl font-bold text-[#0e1b33]">Need Immediate Assistance?</h3>
                <p className="mt-4 text-base leading-relaxed text-[#6a6a67]">
                  For medical emergencies, please dial <span className="font-bold text-[#b83e2d]">911</span> immediately.
                  For urgent care needs related to existing services, call our 24/7 line.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 flex w-full justify-center rounded-full bg-[#b83e2d] px-8 py-4 text-lg font-medium text-white shadow-[0_10px_15px_-3px_rgba(184,62,45,0.2),0_4px_6px_-2px_rgba(184,62,45,0.2)]"
                >
                  Call Emergency Line
                </motion.button>
              </div>

              {/* Compliance & Legal */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0e1b33]">Compliance & Legal</h2>
                <div className="mt-6 space-y-4">
                  {[
                    { title: "Privacy Policy", desc: "How we collect and protect your data." },
                    { title: "HIPAA Notice", desc: "Your rights regarding medical information." },
                    { title: "Terms & Conditions", desc: "Rules for using our services." },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 8 }}
                      className="group flex cursor-pointer items-center justify-between rounded-[2rem] border border-gray-100 p-6 transition-colors hover:border-gray-200 hover:bg-gray-50/50"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-[#0e1b33]">{item.title}</h4>
                        <p className="mt-1 text-sm text-[#6a6a67]">{item.desc}</p>
                      </div>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 transition-colors group-hover:text-[#20a9ad]">
                        <path d="M5 12h14m-7-7 7 7-7 7" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
