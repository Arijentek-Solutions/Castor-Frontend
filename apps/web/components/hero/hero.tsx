"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#0e1b33] mt-40 rounded-[1.5rem] mx-auto max-w-[1871px] shadow-sm"
      style={{ height: "700px" }}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-[#0e1b33]">
        <Image
          src="/images/hero/healthcare-hero.png"
          alt="Healthcare hero"
          fill
          className="object-cover object-bottom opacity-90 scale-110"
          priority
        />
        {/* Precise Figma Gradient: 90deg, rgba(14, 27, 51, 0.80) to transparent */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: "linear-gradient(90deg, rgba(14, 27, 51, 0.80) 0%, rgba(14, 27, 51, 0.00) 100%)"
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto h-full px-6 lg:px-24 flex items-center justify-start">
        {/* Content Section - Reverted to clean full-bleed style but moved further down */}
        <div className="flex flex-col gap-6 max-w-2xl pt-32 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
          
          {/* Badge */}
          <div 
            className="flex items-center justify-center gap-[8px] rounded-full border border-white/30 bg-white/20 backdrop-blur-sm shadow-inner"
            style={{ width: "fit-content", minWidth: "193.844px", padding: "9px 17px" }}
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dabac] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dabac] shadow-[0_0_8px_#2dabac]"></span>
            </div>
            <span className="text-white text-[13px] font-bold uppercase tracking-widest text-left leading-tight">
              24/7 Service <br /> Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            Care for a <br />
            <span className="text-[#2dabac] relative inline-block">
              Healthy Life
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-lg">
            We connect home nursing, medical supplies, and transportation into a single, trusted healthcare experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="px-8 py-4 bg-[#2dabac] hover:bg-[#269798] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_10px_20px_-10px_rgba(45,171,172,0.5)]">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all duration-300">
              Our Services
            </button>
          </div>
        </div>

        {/* Floating Trust Badge */}
        <div className="hidden lg:flex absolute top-48 right-12 animate-in fade-in zoom-in duration-1000 delay-500 ease-out">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#2dabac] text-2xl">⭐</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Top Rated</p>
              <p className="text-slate-300 text-[10px] uppercase tracking-tighter">TrustScore 4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
