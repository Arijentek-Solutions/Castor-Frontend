"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

type StudentSectionProps = {
  onSelectAudience: (audience: "students" | "facilities") => void;
};

const programs = [
  {
    title: "Certified Nursing Assistant (CNA)",
    description:
      "Comprehensive state-approved training for a career in patient care. Includes clinical rotation.",
    badge: "Certificate Program",
    meta: [
      "6-8 weeks duration",
      "State Exam Preparation",
      "75 Clinical Hours",
      "Job Placement Support",
    ],
    icon: "stethoscope",
    href: "/courses/cna",
  },
  {
    title: "Phlebotomy Training",
    description:
      "Master the essential skills of blood collection, specimen handling, and safety procedures.",
    badge: "Certificate Program",
    meta: [
      "4-6 weeks duration",
      "Hands-on Practice",
      "CPT1 Certification Prep",
      "Externship Included",
    ],
    icon: "drop",
    href: "#",
  },
  {
    title: "CPR & First Aid",
    description:
      "American Heart Association certified life-saving skills for healthcare providers.",
    badge: "Same-Day Certification",
    meta: [
      "1-Day Workshop",
      "AHA BLS Certification",
      "Adult, Child & Infant",
      "Valid for 2 Years",
    ],
    icon: "pulse",
    href: "#",
  },
];

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M3 9.5L12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 11.5v3.4c0 .5.3 1 .8 1.3 1.2.7 2.7 1.1 4.2 1.1s3-.4 4.2-1.1c.5-.3.8-.8.8-1.3v-3.4" />
      <path d="M21 10v4" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M4 20V7.5A1.5 1.5 0 0 1 5.5 6H11v14" />
      <path d="M13 20V4.5A1.5 1.5 0 0 1 14.5 3H19a1 1 0 0 1 1 1v16" />
      <path d="M8 10h.01M8 13h.01M8 16h.01M16 8h.01M16 11h.01M16 14h.01" />
      <path d="M3 20h18" />
    </svg>
  );
}


function StethoscopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M6 4v5a4 4 0 0 0 8 0V4" />
      <path d="M6 4H4" />
      <path d="M14 4h2" />
      <path d="M10 13v2a4 4 0 0 0 8 0v-1" />
      <circle cx="18" cy="13" r="2" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M12 3c-2.8 3.6-6 6.9-6 10.3A6 6 0 1 0 18 13.3C18 9.9 14.8 6.6 12 3Z" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M3 12h4l2-4 4 8 2-4h6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3"
      aria-hidden="true"
    >
      <path d="m7 12 3 3 7-7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 transition-transform group-hover/btn:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

function ProgramIcon({ icon }: { icon: (typeof programs)[number]["icon"] }) {
  if (icon === "drop") {
    return <DropIcon />;
  }

  if (icon === "pulse") {
    return <PulseIcon />;
  }

  return <StethoscopeIcon />;
}

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30, scale: 0.94 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export function StudentSection({ onSelectAudience }: StudentSectionProps) {
  return (
    <section
      id="student-programs"
      className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[512px] rounded-full bg-[#edf7f8] p-1.5 shadow-[inset_0_0_0_1px_rgba(202,228,231,0.8)]">
            <div className="grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => onSelectAudience("students")}
                className="flex h-[45px] items-center justify-center gap-2 rounded-full bg-white px-5 text-[14px] font-semibold tracking-[-0.01em] text-[#20a9ad] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
                aria-pressed="true"
              >
                <GraduationCapIcon />
                <span>For Students</span>
              </button>
              <button
                type="button"
                onClick={() => onSelectAudience("facilities")}
                className="flex h-[45px] items-center justify-center gap-2 rounded-full px-5 text-[14px] font-semibold tracking-[-0.01em] text-[#6a6a67] transition-all duration-300"
                aria-pressed="false"
              >
                <BuildingIcon />
                <span>For Facilities (B2B)</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-7 max-w-[560px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[2rem] font-semibold tracking-[-0.04em] text-[#1b2f4b] sm:text-[2.45rem]"
          >
            Available Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-[15px] leading-7 text-[#6e7d89]"
          >
            Whether you&apos;re starting a new career or renewing a
            certification, we have a path for you.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-10 grid gap-5 lg:grid-cols-3"
        >
          {programs.map((program) => (
            <motion.article
              key={program.title}
              variants={fadeInUp}
              className="group relative flex h-full flex-col rounded-[32px] border border-transparent bg-[#edf7f8] p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)] transition-all duration-500 hover:border-[#e5e7eb] hover:bg-white hover:shadow-xl sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex size-11 items-center justify-center rounded-full bg-white text-[#22b6c2] shadow-[0_6px_18px_rgba(34,182,194,0.12)] transition-transform duration-300">
                  <ProgramIcon icon={program.icon} />
                </div>
                <span className="rounded-full border border-[#f3f4f6] bg-white px-[13px] py-[5px] text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7b8893] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
                  {program.badge}
                </span>
              </div>

              <h3 className="mt-7 max-w-[14ch] text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[#1d2f4a] transition-colors duration-300 group-hover:text-[#20a9ad] sm:text-[2rem]">
                {program.title}
              </h3>

              <p className="mt-4 max-w-[30ch] text-[14px] leading-6 text-[#6f7f8b]">
                {program.description}
              </p>

              <ul className="mt-6 flex-grow space-y-3">
                {program.meta.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="rounded-full bg-[#f0f9fa] p-[4px] text-[#20a9ad]">
                      <CheckIcon />
                    </span>
                    <span className="text-[14px] font-medium text-[#6a6a67]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={program.href}
                className="group/btn mt-8 flex h-[52px] items-center justify-center gap-2 rounded-[14px] border border-[#e5e7eb] bg-white px-4 py-[8px] text-[14px] font-medium text-[#0e1b33] transition-all duration-300 hover:border-[#20a9ad] hover:bg-[#20a9ad] hover:text-white"
              >
                <span>View Upcoming Classes</span>
                <ArrowRightIcon />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
