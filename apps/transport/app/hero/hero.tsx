"use client";
import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion } from "framer-motion";

const transportHighlights = [
  "Wheelchair accessible",
  "Hospital discharge support",
  "Scheduled recurring trips",
];

export function Hero() {
  return (
    <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-44 xl:pt-52">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-[var(--hero-shadow)]"
        >
          <Image
            src="/transport-hero.png"
            alt="Medical staff providing transportation support"
            width={1530}
            height={630}
            priority
            className="h-full w-full object-cover object-[center_18%]"
          />

          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hero-overlay-start)_0%,var(--hero-overlay-mid)_34%,var(--hero-overlay-end)_72%,rgba(16,33,59,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,transparent)]" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[52rem] px-7 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
              <div className="max-w-[42rem]">
                
                {/* Badge Alignment */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-3 rounded-full border border-[color:var(--hero-badge-border)] bg-[color:var(--hero-badge-background)] px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--hero-badge-dot)] opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--hero-badge-dot)] shadow-[0_0_0_4px_rgba(55,197,208,0.16)]" />
                  </span>
                  <span>Medical Transportation</span>
                </motion.div>

                {/* Title Alignment */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-7 max-w-[11ch] text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--hero-title)] sm:text-[3.45rem] md:text-[4.2rem] lg:text-[5.15rem]"
                >
                  Reliable
                  <span className="mt-2 block text-[var(--hero-title-accent)]">Transportation</span>
                </motion.h1>

                {/* Paragraph Alignment */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-7 max-w-[34rem] text-base leading-[1.85] text-[var(--hero-copy)] sm:text-[1.07rem]"
                >
                  Safe, timely non-emergency medical transportation for
                  appointments, treatments, discharge transfers, and ongoing
                  care coordination across the region.
                </motion.p>

                {/* Actions Alignment */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <HeroActions>
                    <Button href="#">
                      Request A Ride
                    </Button>
                    <Button href="#" variant="secondary">
                      Partner With Us
                    </Button>
                  </HeroActions>
                </motion.div>

                {/* Highlights Alignment */}
                <motion.ul 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--hero-secondary-copy)]"
                >
                  {transportHighlights.map((stat) => (
                    <li key={stat} className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--hero-badge-dot)]" />
                      <span>{stat}</span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
