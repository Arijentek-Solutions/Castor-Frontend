"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Accreditation() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <div className="flex flex-col gap-[20px]">
          {/* IBHE Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-[#dcdcdc] p-[30px]"
            style={{
              backgroundImage:
                "linear-gradient(104.759deg, #eafdff 0.85742%, #ffffff 98.085%)",
            }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:gap-[50px]">
              {/* IBHE Logo */}
              <div className="h-[120px] w-[220px] shrink-0 overflow-hidden rounded-[10px] bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src="/images/institute/logo/ibhe.png"
                    alt="IBHE Logo"
                    width={190}
                    height={86}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* IBHE Content */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-[28px] font-black leading-[34px] text-[#0e1b33]">
                  IBHE
                </h3>
                <p className="text-[21px] leading-[35px] text-[#0e1b33]">
                  Castor Health Institute is approved and licensed to operate
                  and conduct vocational training by the Division of Private
                  Business and Vocational Schools of the Illinois Board of
                  Higher Education (IBHE). Castor Health Institute is not
                  accredited by a US Department of Education recognized
                  accreditation body.
                </p>
                <p className="mt-2 text-[17px] leading-[26px] text-[#0e1b33]">
                  For IBHE Online Complaint System, visit{" "}
                  <span className="font-semibold text-[#20a9ad]">
                    IBHE Complaint System
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* IDPH Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[32px] border border-[#dcdcdc] p-[30px]"
            style={{
              backgroundImage:
                "linear-gradient(169.143deg, #ffead8 0%, #fff5ec 50%, #ffffff 100%)",
            }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:gap-[50px]">
              {/* IDPH Logo */}
              <div className="h-[120px] w-[220px] shrink-0 overflow-hidden rounded-[10px] bg-white">
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src="/images/institute/logo/idph.png"
                    alt="IDPH Logo"
                    width={190}
                    height={86}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* IDPH Content */}
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-[28px] font-black leading-[34px] text-[#0e1b33]">
                  IDPH
                </h3>
                <p className="text-[21px] leading-[35px] text-[#0e1b33]">
                  Castor Health Institute is approved to conduct the Basic Nurse
                  Assistant Training Program (BNATP) by the Illinois Department
                  of Public Health (IDPH)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
