import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)]">
      <section className="px-4 pb-14 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="mx-auto w-full max-w-[1871px]">
          <div className="relative h-[700px] overflow-hidden rounded-[2rem] bg-[#10213b] shadow-[var(--hero-shadow)]">
            <Image
              src="/transport-hero.png"
              alt="Medical staff providing transportation support"
              width={1530}
              height={630}
              priority
              className="h-full w-full object-cover object-[center_18%]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,30,54,0.72)_0%,rgba(15,30,54,0.44)_32%,rgba(15,30,54,0.14)_60%,rgba(15,30,54,0.04)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,transparent)]" />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full max-w-[52rem] px-7 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
                <div className="max-w-[42rem]">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/10 px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#37c5d0] opacity-70" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#37c5d0] shadow-[0_0_0_4px_rgba(55,197,208,0.16)]" />
                    </span>
                    <span>Medical Transportation</span>
                  </div>

                  <h1 className="mt-7 max-w-[11ch] text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.45rem] md:text-[4.2rem] lg:text-[5.15rem]">
                    Reliable
                    <span className="mt-2 block text-[#37c5d0]">Transportation</span>
                  </h1>

                  <p className="mt-7 max-w-[34rem] text-base leading-[1.85] text-white/78 sm:text-[1.07rem]">
                    Safe, timely non-emergency medical transportation for
                    appointments, treatments, discharge transfers, and ongoing
                    care coordination across the region.
                  </p>

                  <HeroActions>
                    <Button href="#">
                      Request A Ride
                    </Button>
                    <Button href="#" variant="secondary">
                      Partner With Us
                    </Button>
                  </HeroActions>

                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/70">
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#37c5d0]" />
                      Wheelchair accessible
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#37c5d0]" />
                      Hospital discharge support
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#37c5d0]" />
                      Scheduled recurring trips
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
