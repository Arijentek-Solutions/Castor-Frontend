"use client";

import { motion } from "framer-motion";

export default function CastorSkilledProfessionals() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-8 sm:px-12 lg:px-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[48px] font-black leading-[1.1] text-[#0e1b33] mb-12 tracking-[-0.48px] max-w-[996px]">
            Castor Home Services – Skilled and Trained Professionals
          </h2>

          <div className="bg-white border-2 border-[#f3f4f6] rounded-[32px] p-10 md:p-14 space-y-8">
            <p className="text-[18px] leading-[1.7] text-[#6a6a67] font-normal">
              Staff includes Certified Nursing Assistants (CNA) and Homemakers/Caregivers with high hiring standards, including preference for referrals from current employees or patients&apos; families. We maintain a 100% drug-free workplace with mandatory drug testing (including random tests).
            </p>
            <p className="text-[18px] leading-[1.7] text-[#6a6a67] font-normal">
              Our team goes through multiple interview rounds, thorough experience validation, comprehensive reference, background, and incident checks. All staff receive pre-service training alongside experienced staff in the home, electronic charting training for accurate documentation, and access to over 350 online training courses to update skills. We offer competitive compensation and retention strategies to maintain consistent caregiver-family assignments, provision of medical supplies and equipment training, and custom training offered through Castor&apos;s Health Institute as needed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
