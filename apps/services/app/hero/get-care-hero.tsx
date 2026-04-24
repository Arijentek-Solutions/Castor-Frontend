"use client";
import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";


export function GetCareHero() {
  return (
    <section className="px-4 pb-14 pt-52 sm:px-6 sm:pt-64 lg:px-8 lg:pb-20">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden rounded-[2.5rem] bg-[#0f1d35] shadow-[var(--hero-shadow)]"
        >
          <Image
            src="/images/hero/getcare-hero.png"
            alt="Nurse supporting an elderly woman at home"
            fill
            priority
            className="object-cover object-center md:object-[center_20%]"
          />

          {/* Enhanced Overlay for better readability on all screens */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,29,53,0.4)_0%,rgba(15,29,53,0.8)_50%,rgba(15,29,53,0.95)_100%)] md:bg-[linear-gradient(90deg,var(--hero-overlay-start)_0%,var(--hero-overlay-mid)_35%,var(--hero-overlay-end)_70%,rgba(16,29,52,0)_100%)]" />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6 py-12 sm:px-10 md:px-16 lg:px-20 xl:px-24">
              <div className="max-w-[45rem]">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[var(--hero-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
                >
                  <Heart className="h-3.5 w-3.5 fill-current" />
                  <span>Get Care at Home</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-6 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                >
                  Professional Healthcare in the
                  <span className="mt-2 block text-[#20A9AD]">Comfort of Home</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl"
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
                  className="mt-10"
                >
                  <HeroActions className="flex-col sm:flex-row">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-help-modal'));
                      }}
                    >
                      Find Care Options
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
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

