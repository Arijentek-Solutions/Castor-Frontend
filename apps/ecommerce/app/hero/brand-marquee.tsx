"use client";

import React, { useState } from "react";
import { Pause, Play } from "lucide-react";

export function BrandMarquee() {
  const logos = [
    { src: "/brand/drivemedical.jpg", name: "Drive Medical" },
    { src: "/brand/grahamfield.jpg", name: "Graham-Field" },
    { src: "/brand/mckessonmedical.jpg", name: "McKesson" },
    { src: "/brand/medline.jpg", name: "Medline" },
    { src: "/brand/pride.jpg", name: "Pride Mobility" },
    { src: "/brand/sunrisemedical.jpg", name: "Sunrise Medical" },
  ];

  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the list of logos to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section aria-label="Trusted healthcare brand partners" className="pt-24 pb-20 bg-slate-50/40 border-y border-slate-100/80 overflow-hidden relative w-full">
      {/* Self-contained CSS for the Left-to-Right infinite marquee */}
      <style>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: marquee-ltr 25s linear infinite;
        }
        .animate-marquee-ltr:hover,
        .animate-marquee-ltr[data-paused="true"] {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-ltr {
            animation: none;
            flex-wrap: wrap;
            width: auto;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1720px] px-4 mb-10 text-center">
        <h2 className="text-[24px] font-black uppercase tracking-[0.1em] text-[#0e1b33]">
          Trusted by Leading Healthcare Brands
        </h2>
      </div>

      {/* Pause/Play button */}
      <div className="flex justify-center mb-4">
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#6a6a67] shadow-sm transition-colors hover:bg-slate-50 hover:text-[#0e1b33] focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2"
          aria-label={isPaused ? "Resume brand carousel animation" : "Pause brand carousel animation"}
        >
          {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>

      {/* Marquee Wrapper with Fade Gradients */}
      <div className="relative w-full overflow-hidden py-8">
        {/* Left Fade Gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Right Fade Gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Scrolling track */}
        <div className="animate-marquee-ltr" data-paused={isPaused || undefined}>
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-48 h-28 bg-white border border-slate-100 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#20a9ad]/20 transition-all duration-300 mx-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
