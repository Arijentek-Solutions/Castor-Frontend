"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mariza R",
    role: "Phlebotomy Student",
    quote:
      "I think this was the best fast tracking course institute around the area I could've taken. They teach you so efficiently within the time given.",
  },
  {
    name: "Alyssa N.",
    role: "CNA Student",
    quote:
      "I definitely recommend coming to Castor for your CNA instead of anywhere else!",
  },
  {
    name: "Audri K.",
    role: "CNA Student",
    quote:
      "Such a great place to get your CNA! Very nice people . . . If you are looking for a friendly place to get your CNA, Castor is where to go.",
  },
  {
    name: "Eliana H",
    role: "Phlebotomy Student",
    quote:
      "The environment is awesome, everyone is so welcoming and kind. Would 10/10 recommend for phlebotomy school.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-[14px] w-[14px] text-[#f59e0b]"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center text-[44px] font-bold leading-[1.2] tracking-[-0.44px] text-[#0e1b33]"
        >
          What Our Students Have To Say
        </motion.h2>

        <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-[21px] rounded-[10px] border border-[#dcdcdc] p-[30px]"
              style={{
                backgroundImage:
                  "linear-gradient(157.686deg, #ffead8 0%, #fff5ec 50%, #ffffff 100%)",
              }}
            >
              <StarRating />
              <p className="text-[17px] leading-[28.9px] text-[#0e1b33]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-[16px]">
                {/* Avatar placeholder */}
                <div className="flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#20a9ad]/10 text-[20px] font-bold text-[#20a9ad]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[17px] font-bold leading-[28.9px] text-[#0e1b33]">
                    {testimonial.name}
                  </p>
                  <p className="text-[17px] leading-[28.9px] text-[#0e1b33]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
