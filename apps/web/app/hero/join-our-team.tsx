import Image from "next/image";

export function JoinOurTeam() {
  const benefits = [
    "Competitive salary and benefits",
    "Flexible scheduling options",
    "Professional development opportunities",
    "Supportive work environment",
  ];

  return (
    <section className="font-inter relative py-20 px-4 xl:px-0 flex justify-center w-full bg-white overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 lg:gap-16 items-stretch">
        {/* Left Image */}
        <div className="w-full md:w-[60%] flex">
          <div className="w-full h-full min-h-[400px] relative overflow-hidden rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <img 
              src="/images/smile.png"
              alt="Build Your Career with Castor"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[125%] max-w-none object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 md:py-6">
          <div className="space-y-4 w-full">
            <div className="inline-flex items-center gap-2 bg-[#ffead8] px-4 py-2 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="7" width="18" height="14" rx="2" stroke="#f7c89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#f7c89a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[#f7c89a] text-sm font-bold tracking-wider">Join Our Team</span>
            </div>

            <h2 className="text-[#0E1B33] text-[36px] md:text-[42px] font-black leading-tight tracking-[-0.36px]">
              Build Your Career with Castor
            </h2>
            
            <p className="text-[#6A6A67] text-lg leading-[29.25px] max-w-lg">
              We're always looking for passionate healthcare professionals to join our growing team. From nursing and caregiving to administration and training, we offer rewarding careers with competitive benefits.
            </p>
          </div>

          <ul className="space-y-4 w-full">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex gap-3 items-center text-[#6A6A67] text-base leading-6">
                <div className="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#F7C89A" fillOpacity="0.1"/>
                    <path d="M14 7L8.5 12.5L6 10" stroke="#F7C89A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {benefit}
              </li>
            ))}
          </ul>

          <button 
            className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-lg transition-transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #F7C89A 0%, #F4C598 16.67%, #F1C295 33.33%, #EEBF93 50%, #EBBC91 66.67%, #E8B98E 83.33%, #E5B68C 100%)'
            }}
          >
            View Open Positions
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
