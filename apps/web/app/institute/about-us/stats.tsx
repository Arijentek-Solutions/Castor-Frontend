"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
    restDelta: 0.001
  });
  
  const displayValue = useTransform(springValue, (latest) => 
    prefix + Math.round(latest) + suffix
  );

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const stats = [
  { label: "Number of students graduated", value: 200, suffix: "+" },
  { label: "Course schedules offered per year", value: 20, suffix: "+" },
  { label: "Average teacher to student ratio", value: 8, prefix: "1:" },
];

export function Stats() {
  return (
    <section className="bg-[#e0f2f1] py-12">
      <div className="mx-auto max-w-[1871px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 text-[64px] font-bold leading-none tracking-tight text-[#0e1b33]">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="mx-auto max-w-[200px] text-[18px] font-medium leading-relaxed text-[#0e1b33]/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
