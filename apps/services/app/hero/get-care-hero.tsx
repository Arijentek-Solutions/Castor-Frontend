"use client";
import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";


export function GetCareHero() {
  return (
    <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-44 xl:pt-52">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#0f1d35] shadow-[var(--hero-shadow)]"
        >
          <Image
            src="/images/hero/getcare-hero.png"
            alt="Nurse supporting an elderly woman at home"
            width={1530}
            height={630}
            priority
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hero-overlay-start)_0%,var(--hero-overlay-mid)_34%,var(--hero-overlay-end)_72%,rgba(16,29,52,0)_100%)]" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[52rem] px-7 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
              <div className="max-w-[40rem]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[color:var(--hero-badge-border)] bg-[color:var(--hero-badge-background)] px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                >
                  <Heart className="h-4 w-4 text-[var(--hero-primary)] fill-[var(--hero-primary)]" />
                  <span>Get Care at Home</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-7 max-w-[15ch] text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--hero-title)] sm:text-[3.45rem] md:text-[4.2rem] lg:text-[5.15rem]"
                >
                  Professional Healthcare in the
                  <span className="mt-2 block text-[#20A9AD]">Comfort of Home</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-7 max-w-[38rem] text-base leading-[1.85] text-[var(--hero-copy)] sm:text-[1.07rem]"
                >
                  From skilled nursing to companion care, we bring compassionate,
                  professional healthcare services directly to your home. Our team
                  of licensed professionals provides personalized care tailored to
                  your unique needs.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <HeroActions>
                    <Button
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-help-modal'));
                      }}
                    >
                      Find Care Options
                    </Button>
                    <Button variant="secondary">
                      <span>Request Care</span>
                    </Button>
                  </HeroActions>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

