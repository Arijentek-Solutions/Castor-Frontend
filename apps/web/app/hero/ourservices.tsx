"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-services",
});

function ServiceIcon({ name, color }: { name: string; color: "cyan" | "peach" }) {
  const bgClass =
    color === "cyan" ? "bg-[#20a9ad]" : "bg-[#F7C89A]";
  
  const icons: Record<string, React.ReactNode> = {
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    truck: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10Z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
    package: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    graduation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 10v6M2 10l10-5 10 5-10 5Z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  };

  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgClass}`}>
      {icons[name]}
    </div>
  );
}

function CheckIcon({ color }: { color: "cyan" | "peach" }) {
  const strokeColor = color === "cyan" ? "#20a9ad" : "#F7C89A";
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">
      <path d="M20 6 9 17l-5-5" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

const services = [
  {
    title: "Home Care Services",
    description: "Professional home health, private duty nursing, non-medical care, and VA services",
    items: ["Skilled Nursing Care", "Private Duty Services", "Veterans Care"],
    icon: "heart",
    color: "cyan",
    background: "linear-gradient(135deg, #D5FBFF 0%, #D8FBFF 7.14%, #DBFCFF 14.29%, #DEFCFF 21.43%, #E1FCFF 28.57%, #E4FDFF 35.71%, #E7FDFF 42.86%, #EAFDFF 50%, #EDFDFF 57.14%, #F0FEFF 64.29%, #F3FEFF 71.43%, #F6FEFF 78.57%, #F9FEFF 85.71%, #FCFFFF 92.86%, #FFF 100%)",
    border: "2px solid rgba(32, 169, 173, 0.10)",
  },
  {
    title: "Transportation Services",
    description: "Safe, reliable medical transportation including wheelchair, stretcher, and ambulatory",
    items: ["Wheelchair Transport", "Stretcher Transport", "Ambulatory Transport"],
    icon: "truck",
    color: "peach",
    background: "linear-gradient(135deg, #FFEAD8 0%, #FFECDB 8.33%, #FFEEDF 16.67%, #FFEFE2 25%, #FFF1E5 33.33%, #FFF3E8 41.67%, #FFF5EC 50%, #FFF6EF 58.33%, #FFF8F2 66.67%, #FFFAF5 75%, #FFFCF9 83.33%, #FFFDFC 91.67%, #FFF 100%)",
    border: "2px solid rgba(247, 200, 154, 0.20)",
  },
  {
    title: "Medical Supplies & Equipment",
    description: "Quality DME, home medical equipment, supplies, and healthcare apparel",
    items: ["Durable Medical Equipment", "Medical Supplies", "Healthcare Apparel"],
    icon: "package",
    color: "cyan",
    background: "linear-gradient(135deg, #D5FBFF 0%, #D8FBFF 7.14%, #DBFCFF 14.29%, #DEFCFF 21.43%, #E1FCFF 28.57%, #E4FDFF 35.71%, #E7FDFF 42.86%, #EAFDFF 50%, #EDFDFF 57.14%, #F0FEFF 64.29%, #F3FEFF 71.43%, #F6FEFF 78.57%, #F9FEFF 85.71%, #FCFFFF 92.86%, #FFF 100%)",
    border: "2px solid rgba(32, 169, 173, 0.10)",
  },
  {
    title: "Castor Health Institute",
    description: "State-approved healthcare training and certification programs",
    items: ["CNA Certification", "Phlebotomy Training", "CPR & First Aid"],
    icon: "graduation",
    color: "peach",
    background: "linear-gradient(135deg, #FFEAD8 0%, #FFECDB 8.33%, #FFEEDF 16.67%, #FFEFE2 25%, #FFF1E5 33.33%, #FFF3E8 41.67%, #FFF5EC 50%, #FFF6EF 58.33%, #FFF8F2 66.67%, #FFFAF5 75%, #FFFCF9 83.33%, #FFFDFC 91.67%, #FFF 100%)",
    border: "2px solid rgba(247, 200, 154, 0.20)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function OurServices() {
  return (
    <section id="our-services" className={`${inter.variable} px-4 py-16 sm:px-6 lg:px-8 bg-white`}>
      <div className="mx-auto max-w-[1280px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] font-black tracking-tight text-[#0e1b33] sm:text-[48px]">
            Our Services
          </h2>
          <p className="mt-4 text-[18px] text-[#6a6a67]">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-[32px] p-8 transition-all duration-300"
              style={{
                background: service.background,
                border: service.border,
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex items-start justify-between">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <ServiceIcon name={service.icon} color={service.color as "cyan" | "peach"} />
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={service.color === "cyan" ? "#20a9ad" : "#F7C89A"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 opacity-60"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </div>

              <div className="mt-6">
                <h3 className="text-[24px] font-bold text-[#0e1b33]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-[#6a6a67] max-w-[400px]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] font-medium text-[#4b5563]">
                      <CheckIcon color={service.color as "cyan" | "peach"} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
