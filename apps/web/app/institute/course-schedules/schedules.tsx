"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const locationSchedules = [
  {
    name: "Sterling",
    schedules: [
      {
        course: "Certified Nursing Assistant (CNA)",
        note: "Includes four self-scheduled clinicals not shown in the schedules below.",
        sessions: [
          { text: "[Hybrid] December 20 – March 30 (Mondays & Saturdays)" }
        ]
      },
      {
        course: "Phlebotomy",
        sessions: [
          { text: "December 2 – January 16 (Tu/Th/F evenings)" },
          { text: "January 20 – March 19 (Tu/Th evenings)" }
        ]
      },
      {
        course: "Dual Enrollment",
        sessions: [
          { text: "November 5 – March 19" }
        ]
      }
    ]
  },
  {
    name: "Freeport",
    schedules: [
      {
        course: "Certified Nursing Assistant (CNA)",
        note: "Includes four self-scheduled clinicals not shown in the schedules below.",
        sessions: [
          { text: "[Hybrid] December 20 – March 30 (Mondays & Saturdays)" }
        ]
      },
      {
        course: "Phlebotomy",
        sessions: [
          { text: "December 2 – January 16 (Tu/Th/F evenings)" },
          { text: "January 20 – March 19 (Tu/Th evenings)" }
        ]
      },
      {
        course: "Dual Enrollment",
        sessions: [
          { text: "November 5 – March 19" }
        ]
      }
    ]
  }
];

export function Schedules() {
  const [openLocation, setOpenLocation] = useState<string | null>(null);

  const toggleLocation = (name: string) => {
    setOpenLocation(openLocation === name ? null : name);
  };

  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px] space-y-4">
        {locationSchedules.map((location, lIdx) => (
          <div key={location.name} className="space-y-4">
            <motion.button 
              onClick={() => toggleLocation(location.name)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: lIdx * 0.1, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-[2rem] bg-[#ebebeb] px-8 py-8 flex items-center justify-between transition-colors"
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#0e1b33] sm:text-4xl">
                {location.name}
              </h2>
              <motion.div 
                animate={{ rotate: openLocation === location.name ? 90 : 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0e1b33]"
              >
                 <ChevronRight size={20} />
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {openLocation === location.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-12 py-8">
                    {location.schedules.map((group, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                      >
                        <h3 className="text-3xl font-bold text-black">
                          {group.course}
                        </h3>
                        {group.note && (
                          <p className="text-xl text-black leading-relaxed">
                            {group.note}
                          </p>
                        )}
                        <div className="space-y-4">
                          {group.sessions.map((session, sIdx) => (
                            <motion.div
                              key={sIdx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: (idx * 0.1) + (sIdx * 0.05), duration: 0.6 }}
                              className="rounded-2xl bg-[#ebebeb] p-6 flex items-center justify-between transition-colors"
                            >
                              <p className="text-xl text-black">
                                {session.text}
                              </p>
                              <ChevronRight className="text-black" size={24} />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
