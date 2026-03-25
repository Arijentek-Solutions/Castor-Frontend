import Image from "next/image";

const heroStats = [
  "Skilled medical recovery",
  "Long-term nursing support",
  "Daily care coordination",
];

export function GetCareHero() {
  return (
    <section className="px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
      <div className="mx-auto w-full max-w-[1871px]">
        <div className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#0f1d35] shadow-[var(--hero-shadow)]">
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
                <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--hero-badge-border)] bg-[color:var(--hero-badge-background)] px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--hero-badge-dot)] shadow-[0_0_0_4px_rgba(240,197,147,0.14)]" />
                  <span>Professional Nursing Care</span>
                </div>

                <h1 className="mt-7 max-w-[11ch] text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--hero-title)] sm:text-[3.45rem] md:text-[4.2rem] lg:text-[5.15rem]">
                  Compassionate
                  <span className="mt-2 block text-[var(--hero-title-accent)]">Home Care</span>
                </h1>

                <p className="mt-7 max-w-[33rem] text-base leading-[1.85] text-[var(--hero-copy)] sm:text-[1.07rem]">
                  Navigating home care can be complex. We guide you to the right
                  service, whether it&apos;s skilled medical recovery, long-term
                  nursing, or daily support.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <button className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--hero-primary)] px-7 text-[0.95rem] font-medium text-white transition-colors duration-200 hover:bg-[var(--hero-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--hero-primary)]">
                    Find Care Options
                  </button>
                  <button className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[color:var(--hero-secondary-border)] bg-[color:var(--hero-secondary-background)] px-7 text-[0.95rem] font-medium text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/14 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70">
                    <PhoneIcon />
                    <span>Speak to Coordinator</span>
                  </button>
                </div>

                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--hero-secondary-copy)]">
                  {heroStats.map((stat) => (
                    <li key={stat} className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--hero-badge-dot)]" />
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1.05rem] w-[1.05rem]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.48 19.48 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.77a16 16 0 0 0 6.23 6.23l1.32-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
