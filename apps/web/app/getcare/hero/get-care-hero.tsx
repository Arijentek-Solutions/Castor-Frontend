"use client";
import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion } from "framer-motion";

export function GetCareHero() {
  return (
    <section className="px-4 pb-14 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pb-20 lg:pt-48">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] sm:h-[650px] lg:h-[700px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm"
        >
          <div className="absolute inset-0 z-0 bg-[#0e1b33]">
            <Image
              src="/images/getcare/general/getcare-hero.png"
              alt="Nurse supporting an elderly woman at home"
              fill
              priority
              className="object-cover object-center md:object-[center_20%] opacity-90"
            />
            <div
              className="absolute inset-0 z-10"
              style={{
                background: "linear-gradient(90deg, rgba(14, 27, 51, 0.80) 0%, rgba(14, 27, 51, 0.00) 100%)",
              }}
            />
          </div>

          <div className="relative z-20 flex h-full items-center justify-start px-7 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            <div className="flex max-w-[42rem] flex-col gap-6 pt-6 lg:pt-0">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
              >
                Professional Healthcare in the <br />
                <span className="relative inline-block text-[#2dabac]">
                  Comfort of Home
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-lg text-lg leading-relaxed text-slate-200 md:text-xl"
              >
                From skilled nursing to companion care, we bring compassionate, professional healthcare services directly to your home. Our team of licensed professionals provides personalized care tailored to your unique needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="-mt-2"
              >
                <HeroActions>
                  <Button
                    className="min-h-[58px] min-w-[156px] px-9 text-[1.05rem] font-semibold"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-help-modal'));
                    }}
                  >
                    Find Care
                  </Button>
                  <Button
                    variant="secondary"
                    className="min-h-[58px] min-w-[168px] rounded-[14px] border-white/18 bg-[#4a556b]/78 px-9 text-[1.05rem] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm hover:bg-[#566178]/84"
                  >
                    Request Care
                  </Button>
                </HeroActions>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
