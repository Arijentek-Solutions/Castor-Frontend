"use client";

import { motion } from "framer-motion";
import { Button } from "../button/button";

interface GetStartedCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonTextColor?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export function GetStartedCTA({
  title,
  description,
  buttonText = "Get Started Today",
  buttonTextColor = "rgb(30, 158, 162)",
  secondaryButtonText,
  secondaryButtonHref,
  className = "",
}: GetStartedCTAProps) {
  return (
    <section className={`py-12 bg-white overflow-hidden ${className}`}>
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] overflow-hidden shadow-2xl"
          style={{
            backgroundImage: "linear-gradient(168.473deg, rgb(32, 169, 173) 0%, rgb(31, 166, 170) 9.0909%, rgb(31, 163, 167) 18.182%, rgb(30, 161, 165) 27.273%, rgb(30, 158, 162) 36.364%, rgb(29, 155, 159) 45.455%, rgb(29, 153, 157) 54.545%, rgb(28, 150, 154) 63.636%, rgb(28, 147, 151) 72.727%, rgb(27, 144, 148) 81.818%, rgb(27, 142, 146) 90.909%, rgb(26, 139, 143) 100%)"
          }}
        >
          <div className="py-14 px-10 flex flex-col items-center text-center relative z-10">
            <h2 className="text-[40px] md:text-[48px] font-black text-white mb-6 tracking-[-0.48px] leading-[1.1]">
              {title}
            </h2>
            <p className="text-[20px] text-white/90 mb-12 max-w-[672px] leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                className="bg-white hover:bg-white/95 border-none px-8 py-4 h-auto text-[16px] font-bold rounded-full shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ color: buttonTextColor }}
              >
                {buttonText}
              </Button>

              {secondaryButtonText && (
                <Button
                  variant="primary"
                  className="px-8 py-4 h-auto text-[16px] font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-[#0e1b33] text-white border-2 border-white/20"
                  href={secondaryButtonHref || "#"}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
          
          {/* Subtle geometric overlay to match pediatric-cta style */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
          />
        </motion.div>
      </div>
    </section>
  );
}
