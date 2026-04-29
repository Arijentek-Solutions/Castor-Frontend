"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Heart, ShieldCheck, Stethoscope, Baby, HandHelping, UserCheck, ArrowRight } from "lucide-react";

const services = [
  { icon: Heart, title: "Skilled Home Health", desc: "Personalized recovery support at home, covered under Medicare, promoting independence and healing.", color: "bg-[#20a9ad]", path: "/getcare/homehealth" },
  { icon: Baby, title: "Private Duty Nursing – Pediatric", desc: "Specialized in-home nursing for medically dependent children; DSCC-approved provider with multi-county coverage.", color: "bg-[#e879a0]", path: "/getcare/pediatric-nursing" },
  { icon: Stethoscope, title: "Private Duty Nursing – Adult", desc: "Full-focused nursing tailored for adult health needs, ensuring safe recovery in the comfort of home.", color: "bg-[#4a5568]", path: "/getcare/privateduty-nursing" },
  { icon: HandHelping, title: "Home Care & Companion", desc: "Non-medical support, including elderly care, Alzheimer's assistance, and daily living companionship.", color: "bg-[#0e1b33]", path: "/getcare/home-care" },
  { icon: ShieldCheck, title: "Veterans Care", desc: "Dignified, respectful care through VA partnerships designed to uplift independence and daily quality of life.", color: "bg-[#f4c695]", path: "/getcare/veterans-care" },
  { icon: UserCheck, title: "Healthcare Staffing", desc: "Certified CNAs and skilled staff trained via Castor Health Institute, available to support local medical facilities.", color: "bg-[#6366f1]", path: "/getcare/healthcare-staffing" },
];

export function AboutUsContent() {
  return (
    <main className="min-h-screen bg-white">
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

              {/* Right Side - All 6 Cards in 2-column grid */}
              <div className="grid grid-cols-2 gap-4">
                {services.map((node, i) => (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="p-6 rounded-[24px] bg-[#f8fafa] border border-[#edf0f4] hover:bg-white hover:shadow-xl transition-all duration-500 group"
                  >
                    <div className={`w-12 h-12 ${node.color} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                      <node.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-[16px] font-bold text-[#0e1b33] mb-1.5">{node.title}</h4>
                    <p className="text-[13px] text-[#6a6a67] font-medium leading-[1.5] mb-3">{node.desc}</p>
                    <Link href={node.path} className="inline-flex items-center gap-2 text-[#20a9ad] text-[13px] font-bold transition-all duration-300 hover:gap-3">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
