"use client";

import { motion, Variants } from "framer-motion";
import { 
  Award, 
  Home, 
  Stethoscope, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingDown, 
  Heart, 
  Users, 
  Activity, 
  Smile, 
  Shield, 
  HeartHandshake 
} from "lucide-react";

const features = [
  {
    title: "Joint Commission Accreditation",
    description: "Our agency is accredited for excellence in quality and safety.",
    icon: Award,
  },
  {
    title: "Convenient Home Visits",
    description: "Receive skilled nursing care within the comfort of your home.",
    icon: Home,
  },
  {
    title: "Expert Care",
    description: "Our professionals are trained to use advanced medical equipment and administer therapies.",
    icon: Stethoscope,
  },
  {
    title: "Comprehensive Training",
    description: "Home health aides receive extensive training in fall prevention and emergency procedures.",
    icon: CheckCircle2,
  },
  {
    title: "Home Adaptations",
    description: "We make your living space safer, more comfortable, and accessible.",
    icon: ShieldCheck,
  },
  {
    title: "Cost-Effective",
    description: "More affordable than hospital or skilled nursing facility care.",
    icon: TrendingDown,
  },
  {
    title: "Personalized Services",
    description: "Tailored to meet your specific medical, personal, and emotional needs.",
    icon: Heart,
  },
  {
    title: "Support for Family Caregivers",
    description: "Provides relief from caregiving responsibilities.",
    icon: Users,
  },
  {
    title: "Reduced Hospital Visits",
    description: "Minimizes the need for frequent hospital trips.",
    icon: Activity,
  },
  {
    title: "Holistic Well-Being",
    description: "Promotes health, balance, and emotional happiness.",
    icon: Smile,
  },
  {
    title: "Peace of Mind",
    description: "Offers reassurance to patients and their families.",
    icon: Shield,
  },
  {
    title: "Comfort and Care",
    description: "Enjoy the highest quality care at home.",
    icon: HeartHandshake,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export function WhyChoose() {
  return (
    <section className="bg-white py-24 px-8 sm:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-['Inter'] text-[40px] font-black leading-[1.1] text-[#0e1b33] sm:text-[48px] tracking-tight mb-20"
        >
          Why Choose Castor Home Health?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
              className="bg-white border-2 border-[#f3f4f6] rounded-[32px] p-8 hover:border-[#20a9ad]/20 transition-all flex flex-col items-start gap-5 shadow-sm"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white"
                style={{ 
                  backgroundImage: "linear-gradient(135deg, #20a9ad 0%, #128184 100%)" 
                }}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-['Inter'] font-black text-[18px] text-[#0e1b33] mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] font-normal text-[14px] text-[#6a6a67] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
