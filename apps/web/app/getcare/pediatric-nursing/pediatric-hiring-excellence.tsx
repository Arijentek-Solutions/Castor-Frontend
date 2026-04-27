"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Search, 
  Stethoscope, 
  Home, 
  ClipboardEdit, 
  Heart, 
  GraduationCap, 
  BriefcaseMedical, 
  Award,
  Activity
} from "lucide-react";

const features = [
  {
    title: "Employee and Family Referrals",
    description: "We give hiring preference to nurses referred by our current employees or the families of our patients.",
    icon: Users,
  },
  {
    title: "Drug-Free Environment",
    description: "We maintain a 100% drug-free workplace. Every employee undergoes drug testing before starting employment.",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive Interviews and Validation",
    description: "Our hiring process includes multiple layers of interviews and a thorough validation of each candidate's experience.",
    icon: FileText,
  },
  {
    title: "Rigorous Reference Checks",
    description: "We enforce high standards in reference checks to ensure the reliability and professionalism of our staff.",
    icon: CheckCircle2,
  },
  {
    title: "Extensive Background and Incident Reviews",
    description: "We conduct thorough background checks and examine any negligence or incident reports before making a hiring decision.",
    icon: Search,
  },
  {
    title: "In-Depth Training",
    description: "Our nurses receive several hours of training, including specialized training with ventilator and tracheostomy technology from our vendors.",
    icon: Stethoscope,
  },
  {
    title: "On-Site Training",
    description: "Nurses are trained alongside current nurses in the home before they begin providing care independently.",
    icon: Heart,
  },
  {
    title: "Electronic Charting Training",
    description: "We ensure our nurses are proficient in electronic charting to accurately document patient conditions.",
    icon: FileText,
  },
  {
    title: "Competitive Compensation and Retention",
    description: "We offer competitive pay and retention strategies to ensure continuity of care by keeping nurses with the same families.",
    icon: Activity,
  },
  {
    title: "Ongoing Education",
    description: "Our nurses have access to over 350 online training courses to continually enhance their skill sets.",
    icon: CheckCircle2,
  },
  {
    title: "Medical Equipment Training",
    description: "Our nurses have access to Castor's medical supplies for hands-on education with medical equipment.",
    icon: Stethoscope,
  },
  {
    title: "Customized Training",
    description: "Castor's Health Institute provides custom training to all our staff as needed to meet specific care requirements.",
    icon: Award,
  },
];

export function PediatricHiringExcellence() {
  return (
    <section className="bg-white py-24 px-8 sm:px-12 lg:px-20 text-[#0e1b33]">
      <div className="mx-auto max-w-[1240px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Inter'] text-[40px] font-black leading-[1.1] tracking-tight mb-20 text-center sm:text-[48px]"
        >
          Our Hiring & Training Excellence
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-[#e2e8f0] transition-all hover:shadow-xl hover:border-[#20a9ad]/30 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#20a9ad] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white stroke-[2.5]" />
                </div>
                <h3 className="font-['Inter'] text-[24px] font-bold text-[#0e1b33] mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] text-[16px] leading-[1.625] text-[#6a6a67] font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
