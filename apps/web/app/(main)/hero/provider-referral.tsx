"use client";

import { Button } from "@castor/ui";
import { motion, type Variants } from "framer-motion";

export function ProviderReferral() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const features = [
    "Fast, streamlined referral process",
    "Real-time status tracking",
    "Direct communication channel",
    "Dedicated provider support team",
  ];

  const highlightCards = [
    {
      title: "Quick Referrals",
      description: "Submit in under 2 minutes",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 8V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 11H23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "24/7 Access",
      description: "Refer patients anytime",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "HIPAA Compliant",
      description: "Secure patient data",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section 
      className="font-inter relative py-20 px-4 md:px-0 flex justify-center w-full overflow-hidden bg-white"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full bg-white rounded-[48px] border-2 border-[#20A9AD1A] shadow-[0_25px_50px_rgba(0,0,0,0.25)] p-6 md:p-12.5 flex flex-col md:flex-row gap-12 items-center"
      >
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#D5FBFF] px-4 py-2 rounded-full"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#20A9AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="#20A9AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="#20A9AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#20A9AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#20A9AD] text-sm font-bold uppercase tracking-wider">For Healthcare Providers</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#0E1B33] text-[36px] md:text-[42px] font-black leading-tight tracking-[-0.36px]"
            >
              Provider Referral Portal
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#6A6A67] text-lg leading-[29.25px] max-w-lg"
            >
              Doctors, hospitals, clinics, and care coordinators can refer patients directly to our services through our secure provider portal.
            </motion.p>
          </div>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {features.map((feature, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-3 items-start text-[#6A6A67] text-base leading-6"
              >
                <div className="mt-1 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#20A9AD" fillOpacity="0.1"/>
                        <path d="M14 7L8.5 12.5L6 10" stroke="#20A9AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button 
              href="/provider-portal"
              size="lg"
              variant="primary"
              className="shadow-lg shadow-[#20A9AD40]"
            >
              Create Provider Account
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </motion.div>
        </div>

        {/* Right Feature Panel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-[480px] rounded-[32px] p-8 flex flex-col gap-6"
          style={{
            background: 'linear-gradient(146.2deg, #0E1B33 0%, #1A2B4D 100%)'
          }}
        >
          {highlightCards.map((card, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              className="group flex items-center gap-4 bg-white/10 transition-all p-4 rounded-[24px] border border-white/5 cursor-default"
            >
              <div className="flex-shrink-0 bg-[#20A9AD] rounded-[14px] p-3 shadow-inner shadow-white/20">
                {card.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-bold text-[16px]">
                  {card.title}
                </h3>
                <p className="text-[#D5FBFF] text-sm opacity-80">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
