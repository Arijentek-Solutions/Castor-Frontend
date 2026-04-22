"use client";
import { Button } from "@castor/ui";
import { motion } from "framer-motion";

const serviceCards = [
  {
    title: "Self-Pay Options",
    description: "Direct purchase with secure checkout",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    title: "Insurance Billing",
    description: "We handle Medicare & insurance",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 12v6" />
        <path d="M9 15h6" />
      </svg>
    ),
  },
  {
    title: "B2B Accounts",
    description: "Bulk pricing for facilities",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4" />
        <path d="M5 21V10.85" />
        <path d="M19 21V10.85" />
        <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Free shipping on orders $100+",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="px-4 pb-14 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-28 xl:pt-32">
      <div className="mx-auto w-full max-w-[1871px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-[700px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm sm:min-h-[820px] lg:min-h-[760px] xl:min-h-[700px]"
        >
          {/* Background Gradient/Ornaments */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2dabac] blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2dabac] blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-20 lg:py-24 xl:px-32 xl:py-28">
            <div className="grid w-full max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
              
              {/* Left Content */}
              <div className="flex flex-col space-y-7 sm:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2 shadow-inner"
                >
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dabac] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dabac] shadow-[0_0_8px_#2dabac]"></span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white">
                    E-Commerce
                  </span>
                </motion.div>

                <div className="space-y-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-[3.2rem] font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
                  >
                    Medical Supplies <br />
                    <span className="text-[#2dabac]">& Equipment</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-xl text-lg leading-relaxed text-slate-200 md:text-xl"
                  >
                    Shop quality medical equipment and healthcare supplies. From DME to professional apparel, find everything you need with flexible purchasing options.
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:pt-4"
                >
                  <Button
                    className="min-h-[58px] w-full rounded-[14px] px-9 text-[1.05rem] font-semibold sm:min-w-[198px] sm:w-auto"
                  >
                    Browse Products
                  </Button>
                  <Button
                    variant="secondary"
                    className="min-h-[58px] w-full rounded-[14px] px-9 text-[1.05rem] font-semibold sm:min-w-[170px] sm:w-auto text-white"
                  >
                    B2B Inquiries
                  </Button>
                </motion.div>
              </div>

              {/* Right Cards Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:gap-6">
                {serviceCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.8 }}
                    className="group relative flex flex-col space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#2dabac]/30 hover:bg-white/10 hover:shadow-2xl sm:p-7 xl:p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2dabac] text-white shadow-lg shadow-[#2dabac]/20 transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#2dabac]">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-300/80">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
