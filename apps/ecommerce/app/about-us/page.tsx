"use client";

import { Footer, SimpleHero } from "@castor/ui";
import { motion } from "framer-motion";
import { Shield, Users, Heart, Award } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <main className="w-full">
        {/* Hero Section - Following the Transport Contact Style */}
        <section className="px-4 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pt-44 xl:pt-52 bg-white">
          <div className="mx-auto max-w-[1530px]">
            <SimpleHero 
              subtitle="Castor Medical Supplies"
              title="About Us"
              description="Providing healthcare solutions tailored to your lifestyle since our inception."
            />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-[1000px] px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-[#0e1b33] sm:text-4xl">
                    A Rock Solid Reputation
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-600">
                    Our business has a rock solid reputation of providing excellent service, support and satisfaction. We pride ourselves on giving our customers the best service available, the best medical equipment and supplies, and a staff that understands all aspects of our business.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight text-[#0e1b33] sm:text-4xl">
                    Tailored Healthcare Solutions
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-600">
                    We believe healthcare solutions and medical products should be tailored to your lifestyle. With a full range of quality medical equipment, Castor Medical Supplies offers Wheelchairs, Oxygen Management, and everything in between.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-600">
                    We encourage you to browse through our detailed online catalogs and contact us if you have any questions or need assistance.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex flex-col items-center justify-center rounded-[2rem] bg-[#f0f9fa] p-8 text-center transition-transform hover:scale-105">
                  <Shield className="mb-4 h-10 w-10 text-[#2dabac]" />
                  <span className="font-bold text-[#0e1b33]">Rock Solid Reputation</span>
                </div>
                <div className="mt-8 flex flex-col items-center justify-center rounded-[2rem] bg-[#0e1b33] p-8 text-center text-white transition-transform hover:scale-105">
                  <Users className="mb-4 h-10 w-10 text-[#2dabac]" />
                  <span className="font-bold">Expert Staff</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-[2rem] bg-[#0e1b33] p-8 text-center text-white transition-transform hover:scale-105">
                  <Heart className="mb-4 h-10 w-10 text-[#2dabac]" />
                  <span className="font-bold">Quality Care</span>
                </div>
                <div className="mt-8 flex flex-col items-center justify-center rounded-[2rem] bg-[#f0f9fa] p-8 text-center transition-transform hover:scale-105">
                  <Award className="mb-4 h-10 w-10 text-[#2dabac]" />
                  <span className="font-bold">Best Service</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
