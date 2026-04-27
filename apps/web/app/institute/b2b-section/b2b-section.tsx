"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

type B2BSectionProps = {
  onSelectAudience: (audience: "students" | "facilities") => void;
};

const facilityFeatures = [
  {
    title: "Group Training",
    description: "Train your entire team at once, on-site or at our campus.",
    icon: "group",
  },
  {
    title: "Consolidated Billing",
    description:
      "Single invoice for all participants. No individual payments needed.",
    icon: "billing",
  },
  {
    title: "Flexible Scheduling",
    description: "We work around your shift schedules to minimize disruption.",
    icon: "clock",
  },
  {
    title: "Custom Certifications",
    description:
      "Tailored programs to meet your facility's specific compliance needs.",
    icon: "badge",
  },
] as const;

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="size-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M4 20V7.5A1.5 1.5 0 0 1 5.5 6H11v14" />
      <path d="M13 20V4.5A1.5 1.5 0 0 1 14.5 3H19a1 1 0 0 1 1 1v16" />
      <path d="M8 10h.01M8 13h.01M8 16h.01M16 8h.01M16 11h.01M16 14h.01" />
      <path d="M3 20h18" />
    </svg>
  );
}

function BuildingToggleIcon() {
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

function GroupIcon() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 4.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BillingIcon() {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
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
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}

function BadgeCheckIcon() {
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
      <path d="M12 3 8.5 4.5 5 8l1.5 3.5L5 15l3.5 3.5L12 20l3.5-1.5L19 15l-1.5-3.5L19 8l-3.5-3.5L12 3Z" />
      <path d="m9.5 12 1.7 1.7 3.3-3.4" />
    </svg>
  );
}

function FacilityIcon({
  icon,
}: {
  icon: (typeof facilityFeatures)[number]["icon"];
}) {
  if (icon === "group") return <GroupIcon />;
  if (icon === "billing") return <BillingIcon />;
  if (icon === "clock") return <ClockIcon />;
  return <BadgeCheckIcon />;
}

export function B2BSection({ onSelectAudience }: B2BSectionProps) {
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

  return (
    <section id="b2b-training" className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1320px]">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[32px] bg-[#edf7f8] border border-[#d1e8ea] px-6 py-8 text-[#1b2f4b] shadow-[0_24px_60px_rgba(32,169,173,0.08)] sm:px-8 sm:py-10 lg:px-9 lg:py-12"
        >
          <div className="max-w-[610px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex size-12 items-center justify-center rounded-[18px] bg-white text-[#20a9ad] shadow-[0_4px_12px_rgba(32,169,173,0.12)]"
            >
              <BuildingIcon />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#1b2f4b] sm:text-[2.5rem]"
            >
              Workforce Training Solutions
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 max-w-[34ch] text-[16px] leading-8 text-[#6e7d89]"
            >
              Partner with Castor Health Institute to upskill your staff. We
              offer on-site group training, customized curriculum, and
              consolidated billing for healthcare organizations.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {facilityFeatures.map((feature) => (
                <motion.article
                  key={feature.title}
                  variants={fadeInUp}
                  className="rounded-[20px] border border-[#e5e7eb] bg-white p-5 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                >
                  <div className="text-[#20a9ad]">
                    <FacilityIcon icon={feature.icon} />
                  </div>
                  <h3 className="mt-4 text-[1.05rem] font-semibold text-[#1b2f4b]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-[24ch] text-[13px] leading-6 text-[#6e7d89]">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="#"
                className="mt-8 inline-flex h-[54px] items-center justify-center rounded-full bg-[#2db1bc] px-8 text-[16px] font-semibold text-white transition hover:bg-[#25a1ab]"
              >
                Request Corporate Training
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
