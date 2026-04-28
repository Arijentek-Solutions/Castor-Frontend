"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const instructors = [
  {
    name: "Dr. Denise Pederson, PhD, BSN",
    specialty: "CNA",
    bio: "Denise has worked in healthcare since 1995. She began her career as a CNA. Since then, she has worked in every level of nursing, up to obtaining her PhD in Nursing Education. Denise has worked in memory care, long term care, and post-acute care. She has a strong emphasis on getting to know each patient to meet their holistic needs through interdisciplinary collaboration.",
    image: "/images/institute/leadership/denise-pederson.png",
  },
  {
    name: "Jane Gassman, BSN",
    specialty: "CNA",
    bio: "Jane graduated from Clarke University. While in school worked as CNA at Mount Carmel Infirmary and at the Finley Hospital. After graduating with her BSN, she started at CGH Medical Center, where she worked as a float nurse for almost 10 years before working pediatrics for 18 tears. She then worked for 7 years at the Whiteside County Community Health Clinic. Jane now works at Shepherd’s Premier (formerly Avonlea Cottage). With her extensive experience as a CNA, as well as working with CNAs, she understands what is needed to be a great instructor.",
    image: "/images/institute/leadership/jane-gassman.png",
  },
  {
    name: "Falecia Smith",
    specialty: "Phlebotomy",
    bio: "Falecia’s phlebotomy journey started 20 years ago, while working as a CNA, in 2003, she saw what the phlebotomy technician was doing and was instantly intrigued. She knew from that moment she wanted to be a phlebotomist. During her career she has worked in hospitals, clinics, and nursing homes; gaining invaluable information that has formed her into the instructor she is today. She is the mother of 5 AMAZING children and 2 grandchildren, as well a dog, Reese.",
    image: "/images/institute/leadership/falecia-smith.png",
  },
  {
    name: "Jaime Hassler",
    specialty: "Phlebotomy",
    bio: "Bio coming soon!",
    image: "/images/institute/leadership/demmy.png",
  },
  {
    name: "Breana Meade, BSN",
    specialty: "CNA",
    bio: "Breana earned her EMT-B in 2007, CNA in 2008, ADN in 2014, and BSN in 2021. Breana worked as a CNA and an RN in nursing homes, skilled care, critical access, hospitals (including a Level One Trauma Center), and Meditech EHR implementation. Breana currently works in home health as a hospice RN. Healthcare has been her life since graduating high school and she was introduced to it even prior to that with family members with increased needs. Breana is excited to jump into the education field of healthcare! Breana has 3 kids: John (12), Elliott (4), and Annie (8 months).",
    image: "/images/institute/leadership/breana-meade.png",
  },
  {
    name: "Elizabeth Priller, MSN-TL, MBA",
    specialty: "CNA",
    bio: "Elizabeth is an award-winning educator, nurse leader, and published author with 25+ years in healthcare and 15 years of teaching. She has worked in ICU, wound care, public health, and compliance, and has led enterprise-wide initiatives to advance healthcare quality. Elizabeth is passionate about creating welcoming, engaging, and practical learning environments that foster confidence and leadership. She is a former volunteer firefighter, a lifelong community advocate, serves on many organizations’ boards, and is a member of Sigma Theta Tau International Honor Society of Nursing. Elizabeth is an avid artist and hiker who draws inspiration from nature, creativity, and time with family.",
    image: "/images/institute/leadership/elizabeth-priller.png",
  },
];

export function Instructors() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1286px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[48px] font-bold tracking-[-1.2px] text-black"
          >
            Instructors
          </motion.h2>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 rounded-[25px] bg-[#20a9ad]/10 p-[18px] h-full"
            >
              {/* Image Container */}
              <div className="relative h-[259px] w-[202px] shrink-0 overflow-hidden rounded-[19.5px] bg-[#dbefef]">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as any).style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold leading-[28px] text-[#0e1b33]">
                  {instructor.name}
                </h3>
                <p className="text-[18px] font-normal leading-[28px] text-[#0e1b33]">
                  {instructor.specialty}
                </p>
                <p className="text-[14px] font-normal leading-[22.75px] text-[#2d2d2d]">
                  {instructor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
