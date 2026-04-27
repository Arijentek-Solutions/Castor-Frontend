"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-about-castor",
});

const stats = [
  {
    value: "15+",
    label: "Years of Excellence",
    className:
      "bg-[linear-gradient(152.819deg,#20A9AD_0%,#1A8B8F_100%)] text-white shadow-[0_20px_25px_rgba(0,0,0,0.1),0_8px_10px_rgba(0,0,0,0.1)]",
    labelClassName: "text-[#d5fbff]",
  },
  {
    value: "10K+",
    label: "Patients Served",
    className:
      "border-2 border-[rgba(32,169,173,0.1)] bg-white text-[#0e1b33] shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]",
    labelClassName: "text-[#6a6a67]",
  },
  {
    value: "500+",
    label: "Healthcare Professionals",
    className:
      "border-2 border-[rgba(247,200,154,0.2)] bg-white text-[#0e1b33] shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]",
    labelClassName: "text-[#6a6a67]",
  },
  {
    value: "24/7",
    label: "Support Available",
    className:
      "bg-[linear-gradient(152.819deg,#F7C89A_0%,#E5B68C_100%)] text-white shadow-[0_20px_25px_rgba(0,0,0,0.1),0_8px_10px_rgba(0,0,0,0.1)]",
    labelClassName: "text-[#ffead8]",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, // Custom quintic ease-out for premium feel
    },
  },
};

export function AboutCastorSection() {
  return (
    <section
      className={`${inter.variable} px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20`}
      style={{
        background:
          "linear-gradient(160.53deg, rgb(255, 255, 255) 0%, rgba(213, 251, 255, 0.1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1280px] font-[var(--font-inter-about-castor)]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,616px)_minmax(0,616px)] lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[616px]"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#d5fbff] px-4 py-2 text-[14px] font-bold leading-5 text-[#20a9ad]">
              <Image
                src="/icons/about-castor-icon.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />
              <span>About Castor</span>
            </div>

            <h2 className="max-w-[471px] text-[38px] font-black leading-[1.08] tracking-[-0.48px] text-[#0e1b33] sm:text-[44px] lg:text-[48px]">
              Comprehensive Healthcare Platform
            </h2>

            <p className="mt-7 max-w-[608px] text-[17px] leading-[1.625] text-[#6a6a67] sm:text-[18px] sm:leading-[1.625]">
              Castor Platform is a premier healthcare organization providing
              integrated services across home care, medical supplies,
              transportation, and professional training. Our mission is to
              deliver exceptional, patient-centered care while building the
              next generation of healthcare professionals.
            </p>

            <p className="mt-6 max-w-[615px] text-[17px] leading-[1.625] text-[#6a6a67] sm:text-[18px] sm:leading-[1.625]">
              From skilled nursing and medical equipment to workforce
              development through the Castor Health Institute, we&apos;re
              committed to improving healthcare access and quality in our
              communities.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#20a9ad] px-5 text-[18px] font-bold leading-7 text-white transition-colors duration-200 hover:bg-[#1c989c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20a9ad]"
            >
              <span>Learn More About Us</span>
              <ArrowRightIcon />
            </button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {stats.map((stat) => (
              <motion.article
                key={stat.label}
                variants={itemVariants}
                className={`rounded-[32px] px-8 py-8 ${stat.className}`}
              >
                <p className="text-[42px] font-black leading-none sm:text-[48px]">
                  {stat.value}
                </p>
                <p
                  className={`mt-3 text-[18px] leading-7 ${stat.labelClassName}`}
                >
                  {stat.label}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
