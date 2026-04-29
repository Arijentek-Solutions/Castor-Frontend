"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const };

export default function EnrollNowPage() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        ...smoothTransition
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: smoothTransition }
  };

  const locations = [
    {
      name: "Sterling",
      courses: [
        { 
          id: "cna-s", 
          title: "CNA Program", 
          openClasses: ["[Hybrid] Apr 6 – Jun 13 (M/W/Sa)", "[Hybrid] May 30 – Jul 25 (T/W/Sa)"],
          waitlists: "No waitlisted classes at this time.",
          isAvailable: true
        },
        { 
          id: "phleb-s", 
          title: "Phlebotomy", 
          openClasses: ["Jul 6 – Aug 26 (M/Tu/W)"],
          waitlists: "No waitlisted classes at this time.",
          isAvailable: true
        },
        { 
          id: "dual-s", 
          title: "Dual Enrollment", 
          openClasses: ["[Hybrid] May 30 – Aug 26"],
          waitlists: "No waitlisted classes at this time.",
          isAvailable: true
        }
      ]
    },
    {
      name: "Freeport",
      courses: [
        { 
          id: "cna-f", 
          title: "CNA Program", 
          openClasses: ["[Hybrid] Apr 6 – Jun 13 (M/Th/Sa)", "[Hybrid] May 30 – Jul 25 (T/Th/Sa)"],
          waitlists: "No waitlisted classes at this time.",
          isAvailable: true
        },
        { 
          id: "phleb-f", 
          title: "Phlebotomy", 
          openClasses: ["May 25 – Jul 1 (M/Tu/W)"],
          waitlists: "No waitlisted classes at this time.",
          isAvailable: true
        },
        { 
          id: "dual-f", 
          title: "Dual Enrollment", 
          openClasses: ["No open classes at this time."],
          waitlists: "No waitlisted classes at this time.",
          isAvailable: false
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#2dabac] selection:text-white">
      {/* Hero Section */}
      <section className="px-4 pb-14 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pb-20 lg:pt-48">
        <div className="mx-auto w-full max-w-[1871px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={smoothTransition}
            className="relative h-[400px] overflow-hidden rounded-[2.5rem] bg-[#0e1b33] shadow-sm flex items-center justify-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="flex flex-col gap-4 relative z-20 px-6 max-w-[1200px]"
            >
              <span className="text-sm font-black tracking-[0.3em] text-[#2dabac]">
                Enroll Now
              </span>
              <h1 className="text-[36px] font-black tracking-[0.01em] text-white sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1]">
                Feeling Ready To <span className="text-[#2dabac]">Kickstart</span> Your Healthcare Career?
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 pb-32">
        {/* Instructions & Waitlist Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.2 }}
          className="mb-16 rounded-[2.5rem] bg-[#ffead8] p-10 text-center md:p-14 shadow-sm border border-orange-100"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-xl font-bold leading-relaxed text-[#0e1b33] md:text-2xl">
                Click on the &quot;Click to Enroll&quot; button for the course you are interested in and you&apos;ll be taken to its respective enrollment form.
              </p>
              <p className="text-lg text-[#0e1b33]/80 font-medium">
                Enrollment takes just about 10 minutes, and you can save your progress after starting to complete later.
              </p>
              <p className="text-lg text-[#0e1b33]/80 font-medium">
                At the end of the form, you&apos;ll be asked to schedule an in-person appointment to finalize your enrollment.
              </p>
            </div>

            <div className="h-px bg-[#ed7d31]/20 w-1/2 mx-auto" />

            <div className="space-y-4">
              <h3 className="text-sm font-black tracking-[0.2em] text-[#ed7d31]">
                Waitlist Information
              </h3>
              <p className="text-lg font-bold leading-relaxed text-[#0e1b33]">
                If a class is full, it&apos;ll appear below as a waitlisted class. To be put on the waitlist, click the &quot;Click to Enroll&quot; button and fill out the form as you normally would.
              </p>
            </div>

            <div className="pt-4 border-t border-[#ed7d31]/10">
              <p className="text-[#0e1b33]/70 font-medium italic">
                If you are having difficulties with enrolling online, please{" "}
                <a href="/institute/contact" className="text-[#ed7d31] font-bold underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
                  click this link
                </a>{" "}
                to contact us and we&apos;ll reach out to get you enrolled.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Location Accordions */}
        <div className="space-y-6">
          {locations.map((loc, idx) => (
            <div key={loc.name} className="space-y-4">
              <motion.button 
                onClick={() => setActiveLocation(activeLocation === loc.name ? null : loc.name)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothTransition, delay: 0.4 + idx * 0.1 }}
                className="w-full rounded-[2rem] bg-[#ebebeb] px-10 py-8 flex items-center justify-between transition-all hover:bg-[#e2e2e2] group"
              >
                <h2 className="text-3xl font-black tracking-tight text-[#0e1b33] sm:text-4xl">
                  {loc.name}
                </h2>
                <motion.div 
                  animate={{ rotate: activeLocation === loc.name ? 90 : 0 }}
                  transition={smoothTransition}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0e1b33]"
                >
                  <ChevronRight size={24} />
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {activeLocation === loc.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={smoothTransition}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
                      {loc.courses.map((course) => (
                        <div 
                          key={course.id}
                          className="rounded-[2rem] bg-[#f5f5f5] p-8 flex flex-col justify-between border border-black/5 hover:border-[#ed7d31]/30 transition-all group"
                        >
                          <div className="space-y-6 mb-8">
                            <h3 className="text-2xl font-black text-[#0e1b33] leading-tight border-b border-black/10 pb-4">
                              {course.title}
                            </h3>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-black tracking-wider text-[#0e1b33] mb-2">
                                  Open Classes:
                                </h4>
                                <ul className="space-y-1">
                                  {course.openClasses.map((session, sIdx) => (
                                    <li key={sIdx} className="text-sm font-bold text-[#0e1b33]/80">
                                      {session}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="text-sm font-black tracking-wider text-[#0e1b33] mb-2">
                                  Waitlists:
                                </h4>
                                <p className="text-sm font-medium italic text-[#0e1b33]/60">
                                  {course.waitlists}
                                </p>
                              </div>
                            </div>
                          </div>

                          {course.isAvailable ? (
                            <button className="h-12 w-full rounded-xl bg-[#0e1b33] text-white text-sm font-black tracking-widest hover:bg-[#2dabac] transition-all active:scale-[0.98]">
                              Enroll Now
                            </button>
                          ) : (
                            <button disabled className="h-12 w-full rounded-xl bg-[#5a5a5a] text-white text-sm font-black tracking-widest cursor-not-allowed">
                              No Open Classes
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


