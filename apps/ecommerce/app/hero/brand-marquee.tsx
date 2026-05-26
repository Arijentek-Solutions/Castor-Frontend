"use client";

import React from "react";

export function BrandMarquee() {
  const logos = [
    { src: "/brand/drivemedical.jpg", name: "Drive Medical" },
    { src: "/brand/grahamfield.jpg", name: "Graham-Field" },
    { src: "/brand/mckessonmedical.jpg", name: "McKesson" },
    { src: "/brand/medline.jpg", name: "Medline" },
    { src: "/brand/pride.jpg", name: "Pride Mobility" },
    { src: "/brand/sunrisemedical.jpg", name: "Sunrise Medical" },
  ];

  // Duplicate the list of logos to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="pt-24 pb-20 bg-slate-50/40 border-y border-slate-100/80 overflow-hidden relative w-full">
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
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1720px] px-4 mb-10 text-center">
        <span className="text-[24px] font-black uppercase tracking-[0.1em] text-[#0e1b33]">
          Trusted by Leading Healthcare Brands
        </span>
      </div>

      {/* Marquee Wrapper with Fade Gradients */}
      <div className="relative w-full overflow-hidden py-8">
        {/* Left Fade Gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
        
        {/* Right Fade Gradient */}
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

        {/* Scrolling track */}
        <div className="animate-marquee-ltr">
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-48 h-28 bg-white border border-slate-100 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-[#20a9ad]/20 transition-all duration-300 mx-4 cursor-pointer"
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
