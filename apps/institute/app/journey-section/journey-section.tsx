const steps = [
  {
    number: "1",
    title: "Course Selection",
    description:
      "Choose a program and specific course code based on location and schedule.",
    icon: "calendar",
  },
  {
    number: "2",
    title: "Enrollment Dashboard",
    description:
      "Access your student portal to complete checklists and upload required documents.",
    icon: "student",
  },
  {
    number: "3",
    title: "In-Person Finalization",
    description:
      "Meet with our team to sign final paperwork and confirm your seat.",
    icon: "check",
  },
  {
    number: "4",
    title: "Active Training",
    description:
      "Attend classes, complete clinicals, and track your progress online.",
    icon: "book",
  },
  {
    number: "5",
    title: "Graduation & Alumni",
    description:
      "Pass your state exam, receive your certificate, and access our job board.",
    icon: "cap",
  },
] as const;

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
      <path d="M7 3v4M17 3v4M4 9h16" />
      <rect x="4" y="5" width="16" height="15" rx="2" />
    </svg>
  );
}

function StudentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19a7 7 0 0 1 14 0" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15.5A1.5 1.5 0 0 0 18.5 18H6.5A2.5 2.5 0 0 0 4 20.5v-14Z" />
      <path d="M12 6v12" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
      <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 11.5v3.2c0 .5.3.9.8 1.2 1.2.7 2.7 1.1 4.2 1.1s3-.4 4.2-1.1c.5-.3.8-.7.8-1.2v-3.2" />
      <path d="M21 10v4" />
    </svg>
  );
}

function StepIcon({ icon }: { icon: (typeof steps)[number]["icon"] }) {
  if (icon === "calendar") return <CalendarIcon />;
  if (icon === "student") return <StudentIcon />;
  if (icon === "check") return <CheckCircleIcon />;
  if (icon === "book") return <BookIcon />;
  return <CapIcon />;
}

export function JourneySection() {
  return (
    <section className="px-4 pb-24 pt-2 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1280px] rounded-[40px] bg-[#fbf1e6] px-6 py-12 sm:px-10 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="whitespace-nowrap text-[2rem] font-black tracking-[-0.04em] text-[#172744] sm:text-[2.5rem] lg:text-[3rem]">
            Your Journey to Graduation
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-[#857d75]">
            Our digital student portal guides you through every step, from
            enrollment to your first job.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-[28px] hidden border-t border-[#f0dcc9] lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step) => (
              <article key={step.number} className="group relative text-center">
                <div className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-[#e7d7c8] bg-white text-[#1db0bc] shadow-[0_8px_18px_rgba(21,39,68,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_26px_rgba(21,39,68,0.12)]">
                  <StepIcon icon={step.icon} />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-[#172744] text-[11px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mx-auto mt-5 max-w-[14ch] text-[1.15rem] font-black leading-[1.25] tracking-[-0.03em] text-[#172744] sm:text-[1.28rem]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[20ch] text-[13px] leading-6 text-[#9b9086]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
