const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export function CTA() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 flex justify-center">
      <div className="bg-[#0e1b33] rounded-[32px] w-full max-w-5xl px-8 py-16 flex flex-col items-center text-center shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]">
        <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="text-[#d1d5dc] text-base md:text-[16px] max-w-lg mb-10 leading-relaxed font-normal">
          Contact us today to learn more about our services or<br className="hidden md:block" /> schedule a consultation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="bg-[#20a9ad] hover:bg-[#1a8d90] text-white rounded-[32px] px-8 py-3.5 text-[16px] font-semibold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto group">
            Contact Us
            <ArrowRightIcon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="bg-[#2a364b] border border-[#3e4a5e] hover:bg-[#324057] text-white rounded-[32px] px-8 py-3.5 text-[16px] font-semibold flex items-center justify-center transition-colors w-full sm:w-auto">
            Sign In to Portal
          </button>
        </div>
      </div>
    </section>
  );
}
