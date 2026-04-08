"use client";

import { motion } from "framer-motion";
import { 
  Hospital, 
  Activity, 
  Home, 
  Stethoscope, 
  Syringe, 
  HeartPulse, 
  Building, 
  DoorOpen,
  UserRound
} from "lucide-react";

const facilities = [
  { name: "Acute Care Hospitals & Medical Centers", icon: <Hospital className="w-6 h-6" /> },
  { name: "Rehabilitation Hospitals & Ventilator Facilities", icon: <Activity className="w-6 h-6" /> },
  { name: "Nursing Homes & Long-Term Care Facilities", icon: <Home className="w-6 h-6" /> },
  { name: "Outpatient Clinics & Health Centers", icon: <Stethoscope className="w-6 h-6" /> },
  { name: "Surgery Centers", icon: <Syringe className="w-6 h-6" /> },
  { name: "Substance Abuse Rehabilitation Facilities", icon: <HeartPulse className="w-6 h-6" /> },
  { name: "Assisted Living Residences", icon: <Building className="w-6 h-6" /> },
  { name: "Hospice Units", icon: <DoorOpen className="w-6 h-6" /> },
  { name: "Doctor's Offices", icon: <UserRound className="w-6 h-6" /> },
];

export function StaffingServices() {
  return (
    <section className="bg-white">
      {/* Staffing Services Intro Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] p-12 lg:p-16 text-white"
          style={{ 
            background: "linear-gradient(164.095deg, rgb(32, 169, 173) 0%, rgb(31, 166, 170) 9.0909%, rgb(31, 163, 167) 18.182%, rgb(30, 161, 165) 27.273%, rgb(30, 158, 162) 36.364%, rgb(29, 155, 159) 45.455%, rgb(29, 153, 157) 54.545%, rgb(28, 150, 154) 63.636%, rgb(28, 147, 151) 72.727%, rgb(27, 144, 148) 81.818%, rgb(27, 142, 146) 90.909%, rgb(26, 139, 143) 100%)" 
          }}
        >
          <div className="max-w-[1110px]">
            <h2 className="text-[36px] font-black leading-[1.1] mb-8 tracking-tight">
              Staffing Services
            </h2>
            <div className="space-y-6">
              <p className="text-[20px] leading-[1.625] text-white/90">
                Castor provides reliable, high-quality healthcare staffing solutions designed to match your facility with the right nurses and CNAs. Our team guides you through each step of the hiring process, ensuring you receive skilled professionals who meet your clinical, operational, and cultural needs.
              </p>
              <p className="text-[20px] leading-[1.625] text-white/90">
                Through our state-approved CNA training program and extensive professional network, we supply caregivers who are well-trained, compassionate, and ready to make a positive impact from day one.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Where We Provide Staffing Section */}
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-[40px] lg:text-[48px] font-black text-[#0e1b33] mb-6 tracking-tight">
              Where We Provide Staffing
            </h2>
            <p className="text-[18px] text-[#6a6a67] max-w-3xl">
              Castor fulfills staffing needs across a wide range of healthcare environments, including:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-6 p-6 bg-white border-2 border-[#f3f4f6] rounded-[24px] hover:border-[#20a9ad]/30 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#20a9ad] to-[#1a8b8f] flex items-center justify-center text-white shadow-md">
                  {facility.icon}
                </div>
                <div className="text-[16px] font-bold text-[#0e1b33] leading-snug">
                  {facility.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
