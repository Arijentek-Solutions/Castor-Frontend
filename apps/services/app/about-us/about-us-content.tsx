"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Heart, ShieldCheck, Zap, Users, Globe, Clock, Star, Medal, Truck, GraduationCap, PackageCheck, Stethoscope } from "lucide-react";
import { Button } from "@castor/ui";

export function AboutUsContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Main Content Section: About Castor Home Nursing */}
      <section className="pt-40 sm:pt-48 lg:pt-56 pb-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-4 mb-8"
                >
                  <Link 
                    href="/" 
                    className="flex items-center gap-2 text-[14px] font-bold text-[#6a6a67] hover:text-[#20a9ad] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to Services
                  </Link>

                  {/* <div className="inline-block px-4 py-1.5 bg-[#f0f9fa] rounded-full text-[#20a9ad] text-[13px] font-bold tracking-widest uppercase">
                    Our Comprehensive Care
                  </div> */}
                </motion.div>
                <h2 className="text-[44px] sm:text-[56px] font-bold text-[#0e1b33] leading-[1.1] mb-10 tracking-tight">
                  About Castor <br />
                  <span className="text-[#20a9ad]">Home Nursing</span>
                </h2>
                
                <div className="space-y-6 text-[18px] text-[#6a6a67] leading-[1.8] font-medium">
                  <p>
                    Castor Home Nursing is a premier healthcare provider in Illinois, delivering a comprehensive range of services designed to support your well-being right at home. We go beyond standard home health care by offering personalized home services, private duty nursing, and tailored therapy solutions to meet your unique needs.
                  </p>
                  <p>
                    Our care continuum is further supported by Castor Medical Supplies, providing essential equipment and resources, and the Castor Health Institute, which offers specialized training to enhance skills and knowledge. Additionally, our Castor Medical Transportation service ensures safe and reliable mobility. 
                  </p>
                  <p className="font-bold text-[#0e1b33]">
                    With Castor, you experience a complete healthcare solution that covers every aspect of your wellness journey.
                  </p>
                </div>
              </motion.div>

              {/* Visual Grid Column - Showing the Get Care Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Heart, title: "Home Health", desc: "Skilled nursing & therapy for recovery.", color: "bg-[#20a9ad]" },
                  { icon: ShieldCheck, title: "Veterans Care", desc: "Specialized support for our heroes.", color: "bg-[#f4c695]" },
                  { icon: Users, title: "Personal Care", desc: "Support for daily living activities.", color: "bg-[#0e1b33]" },
                  { icon: Stethoscope, title: "Private Duty", desc: "Long-term complex nursing care.", color: "bg-[#4a5568]" }
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="p-8 rounded-[32px] bg-[#f8fafa] border border-[#edf0f4] hover:bg-white hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className={`w-14 h-14 ${node.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                      <node.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-[20px] font-bold text-[#0e1b33] mb-2">{node.title}</h4>
                    <p className="text-[14px] text-[#6a6a67] font-medium leading-[1.6]">{node.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#f8fafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-[#20a9ad]">
                  <div className="p-3 bg-[#20a9ad]/10 rounded-xl">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-[28px] font-bold text-[#0e1b33]">Our Mission</h3>
                </div>
                <p className="text-[18px] text-[#6a6a67] leading-[1.8] font-medium italic">
                  "Our purpose revolves around enriching lives, starting from the very moment we connect with each individual. Rooted in genuine warmth, kindness, and a deep sense of individual pride, our unwavering commitment drives us to make a positive impact on every life we touch."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-[#20a9ad]">
                  <div className="p-3 bg-[#20a9ad]/10 rounded-xl">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-[28px] font-bold text-[#0e1b33]">Our Vision</h3>
                </div>
                <p className="text-[18px] text-[#6a6a67] leading-[1.8] font-medium">
                  "Our aspiration is to deliver exceptional, patient-centered care that preserves the sense of comfort and community found within one’s own home. Through this vision, we strive to elevate the quality of care we provide, ensuring individuals can thrive in familiar surroundings while receiving the highest level of attention and support."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
