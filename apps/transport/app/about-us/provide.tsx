"use client";
import { motion } from "framer-motion";

const Provide = () => {
  const services = [
    {
      id: "281:81",
      title: "Castor Non-Emergency Medical Transportation",
      description: "Reliable, safe, and comfortable transportation for all medical needs. Whether a routine appointment or a hospital discharge, we ensure patients arrive safely and on time."
    },
    {
      id: "281:85",
      title: "Castor Home Nursing Inc",
      description: "Personalized in-home care that prioritizes your safety, comfort, and independence. Our skilled nursing and therapy services provide expert support in the comfort of your own home."
    },
    {
      id: "281:89",
      title: "Castor Medical Supplies",
      description: "A complete range of essential medical equipment and supplies for home use. Every product is sourced from trusted manufacturers to help patients manage their health effectively."
    },
    {
      id: "281:93",
      title: "Castor Health Institute",
      description: "Through training programs, workshops, and healthcare resources, the institute empowers patients, families, and communities to make informed, confident healthcare decisions."
    }
  ];

  return (
    <section className="bg-[#f0f9fa] py-[60px] px-4 sm:px-6 lg:px-[141px]" data-node-id="281:79">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[1280px]"
      >
        <h2 className="text-center font-bold text-[#0e1b33] text-[44px] leading-[54px] mb-[30px]" data-node-id="281:80">
          What Castor Provides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="relative bg-white rounded-[12px] p-[24px] h-[184px] overflow-hidden shadow-sm border-t-[4px] border-[#20a9ad] cursor-default"
              data-node-id={service.id}
            >
              <h3 className="font-semibold text-[#0e1b33] text-[16px] mb-[16px]">
                {service.title}
              </h3>
              <p className="text-[#6a6a67] text-[14px] leading-[22px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Provide;
