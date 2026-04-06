"use client";

import Image from "next/image";
import { Button, HeroActions } from "@castor/ui";
import { motion } from "framer-motion";
import {
    Heart,
    ShieldCheck,
    Users,
    Globe,
    Clock,
    Star,
    Medal,
    GraduationCap,
    Truck,
    Stethoscope,
    Target,
    Sparkles,
    Handshake,
    Award,
} from "lucide-react";

const stats = [
    { value: "15+", label: "Years of Excellence", icon: Award },
    { value: "10K+", label: "Patients Served", icon: Heart },
    { value: "500+", label: "Healthcare Professionals", icon: Users },
    { value: "24/7", label: "Support Available", icon: Clock },
];

const values = [
    {
        icon: Heart,
        title: "Compassionate Care",
        description:
            "Every interaction is rooted in genuine warmth, kindness, and a deep sense of individual pride.",
        color: "bg-[#20a9ad]",
    },
    {
        icon: ShieldCheck,
        title: "Trust & Integrity",
        description:
            "We build lasting relationships through transparency, honesty, and unwavering ethical standards.",
        color: "bg-[#0e1b33]",
    },
    {
        icon: Sparkles,
        title: "Excellence",
        description:
            "We pursue the highest standards in healthcare delivery, continuously improving our services.",
        color: "bg-[#f4c695]",
    },
    {
        icon: Handshake,
        title: "Community First",
        description:
            "We are dedicated to uplifting our communities through accessible, quality healthcare for all.",
        color: "bg-[#4a5568]",
    },
];

const team = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Chief Executive Officer",
        description:
            "Leading Castor's vision with 20+ years in healthcare administration and patient advocacy.",
        initials: "SM",
        color: "bg-[#20a9ad]",
    },
    {
        name: "James Rodriguez",
        role: "Chief Medical Officer",
        description:
            "Board-certified physician overseeing clinical excellence across all service lines.",
        initials: "JR",
        color: "bg-[#0e1b33]",
    },
    {
        name: "Priya Sharma",
        role: "Director of Nursing",
        description:
            "Passionate about nursing education and delivering exceptional patient-centered care.",
        initials: "PS",
        color: "bg-[#f4c695]",
    },
    {
        name: "Michael Chen",
        role: "VP of Operations",
        description:
            "Streamlining operations to ensure seamless healthcare experiences for every patient.",
        initials: "MC",
        color: "bg-[#4a5568]",
    },
    {
        name: "Angela Brooks",
        role: "Director of Training",
        description:
            "Building the next generation of healthcare professionals through the Castor Health Institute.",
        initials: "AB",
        color: "bg-[#20a9ad]",
    },
    {
        name: "David Okafor",
        role: "Head of Transportation",
        description:
            "Ensuring safe, reliable medical transportation for patients across all communities.",
        initials: "DO",
        color: "bg-[#0e1b33]",
    },
];

const services = [
    {
        icon: Stethoscope,
        title: "Home Health",
        desc: "Skilled nursing & therapy for recovery at home.",
    },
    {
        icon: ShieldCheck,
        title: "Veterans Care",
        desc: "Specialized support for our nation's heroes.",
    },
    {
        icon: Users,
        title: "Personal Care",
        desc: "Daily living assistance with compassion.",
    },
    {
        icon: Heart,
        title: "Private Duty",
        desc: "Long-term complex nursing care solutions.",
    },
    {
        icon: GraduationCap,
        title: "Health Institute",
        desc: "CNA, Phlebotomy & CPR certification programs.",
    },
    {
        icon: Truck,
        title: "Medical Transport",
        desc: "Safe, reliable non-emergency transportation.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
                <div className="mx-auto w-full max-w-[1871px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[600px] overflow-hidden rounded-[2rem] bg-[#0e1b33] shadow-sm sm:h-[650px] lg:h-[700px]"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,51,0.92)_0%,rgba(14,27,51,0.7)_35%,rgba(14,27,51,0.3)_65%,rgba(14,27,51,0.1)_100%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%,transparent)]" />

                        {/* Decorative elements */}
                        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
                            <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-[#20a9ad] blur-[100px]" />
                            <div className="absolute bottom-20 right-40 h-48 w-48 rounded-full bg-[#f4c695] blur-[80px]" />
                        </div>

                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full max-w-[52rem] px-7 py-10 sm:px-10 md:px-14 lg:px-20 xl:px-24">
                                <div className="max-w-[42rem]">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2.5 text-[0.78rem] font-medium tracking-[0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                                    >
                                        <Image
                                            src="/icons/about-castor-icon.svg"
                                            alt=""
                                            width={16}
                                            height={16}
                                            className="opacity-90"
                                            aria-hidden="true"
                                        />
                                        <span>About Castor</span>
                                    </motion.div>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="mt-7 max-w-[14ch] text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.45rem] md:text-[4.2rem] lg:text-[5.15rem]"
                                    >
                                        Our Story,
                                        <span className="mt-2 block text-[#20a9ad]">
                                            Your Care
                                        </span>
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.8 }}
                                        className="mt-7 max-w-[32rem] text-base leading-[1.85] text-white/78 sm:text-[1.07rem]"
                                    >
                                        For over 15 years, Castor has been transforming healthcare
                                        delivery across Illinois — providing integrated home care,
                                        medical supplies, transportation, and professional training
                                        under one unified platform.
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8, duration: 0.8 }}
                                    >
                                        <HeroActions>
                                            <Button href="/contact">Get in Touch</Button>
                                        </HeroActions>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className="rounded-[2rem] border border-[#edf0f4] bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
                        >
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d5fbff]">
                                <stat.icon className="h-7 w-7 text-[#20a9ad]" />
                            </div>
                            <p className="text-[36px] font-black leading-none text-[#0e1b33] sm:text-[42px]">
                                {stat.value}
                            </p>
                            <p className="mt-2 text-[15px] font-medium leading-6 text-[#6a6a67]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className="bg-[#f8fafa] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#d5fbff] px-4 py-2 text-[14px] font-bold leading-5 text-[#20a9ad]">
                                <Target className="h-4 w-4" />
                                <span>Who We Are</span>
                            </div>

                            <h2 className="text-[38px] font-black leading-[1.08] tracking-[-0.48px] text-[#0e1b33] sm:text-[44px] lg:text-[48px]">
                                A Complete Healthcare{" "}
                                <span className="text-[#20a9ad]">Solution</span>
                            </h2>

                            <div className="mt-7 space-y-5">
                                <p className="text-[17px] leading-[1.625] text-[#6a6a67] sm:text-[18px]">
                                    Castor Platform is a premier healthcare organization providing
                                    integrated services across home care, medical supplies,
                                    transportation, and professional training. Our mission is to
                                    deliver exceptional, patient-centered care while building the
                                    next generation of healthcare professionals.
                                </p>
                                <p className="text-[17px] leading-[1.625] text-[#6a6a67] sm:text-[18px]">
                                    From skilled nursing and medical equipment to workforce
                                    development through the Castor Health Institute, we're
                                    committed to improving healthcare access and quality in our
                                    communities.
                                </p>
                                <p className="text-[17px] font-bold leading-[1.625] text-[#0e1b33] sm:text-[18px]">
                                    With Castor, you experience a complete healthcare solution
                                    that covers every aspect of your wellness journey.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                        >
                            {services.map((service) => (
                                <motion.div
                                    key={service.title}
                                    variants={itemVariants}
                                    className="rounded-[2rem] border border-[#edf0f4] bg-white p-7 transition-all duration-500 hover:shadow-xl"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20a9ad]/10">
                                        <service.icon className="h-6 w-6 text-[#20a9ad]" />
                                    </div>
                                    <h4 className="mb-1.5 text-[17px] font-bold text-[#0e1b33]">
                                        {service.title}
                                    </h4>
                                    <p className="text-[14px] leading-[1.6] text-[#6a6a67]">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-[1280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#d5fbff] px-4 py-2 text-[14px] font-bold leading-5 text-[#20a9ad]">
                            <Globe className="h-4 w-4" />
                            <span>Our Purpose</span>
                        </div>
                        <h2 className="text-[38px] font-black leading-[1.08] tracking-[-0.48px] text-[#0e1b33] sm:text-[44px] lg:text-[48px]">
                            Mission & <span className="text-[#20a9ad]">Vision</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[2rem] border border-[#edf0f4] bg-white p-10 shadow-sm"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20a9ad]/10">
                                    <Heart className="h-7 w-7 text-[#20a9ad]" />
                                </div>
                                <h3 className="text-[28px] font-bold text-[#0e1b33]">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-[18px] leading-[1.8] font-medium italic text-[#6a6a67]">
                                &ldquo;Our purpose revolves around enriching lives, starting from
                                the very moment we connect with each individual. Rooted in
                                genuine warmth, kindness, and a deep sense of individual pride,
                                our unwavering commitment drives us to make a positive impact on
                                every life we touch.&rdquo;
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="rounded-[2rem] border border-[#edf0f4] bg-white p-10 shadow-sm"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c695]/20">
                                    <Globe className="h-7 w-7 text-[#f4c695]" />
                                </div>
                                <h3 className="text-[28px] font-bold text-[#0e1b33]">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-[18px] leading-[1.8] font-medium text-[#6a6a67]">
                                &ldquo;Our aspiration is to deliver exceptional, patient-centered
                                care that preserves the sense of comfort and community found
                                within one's own home. Through this vision, we strive to elevate
                                the quality of care we provide, ensuring individuals can thrive
                                in familiar surroundings while receiving the highest level of
                                attention and support.&rdquo;
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-[#0e1b33] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-[1280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[14px] font-bold leading-5 text-white/90 backdrop-blur-md">
                            <Star className="h-4 w-4" />
                            <span>What Drives Us</span>
                        </div>
                        <h2 className="text-[38px] font-black leading-[1.08] tracking-[-0.48px] text-white sm:text-[44px] lg:text-[48px]">
                            Our Core <span className="text-[#20a9ad]">Values</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={itemVariants}
                                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10"
                            >
                                <div
                                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${value.color} shadow-lg`}
                                >
                                    <value.icon className="h-7 w-7 text-white" />
                                </div>
                                <h4 className="mb-3 text-[20px] font-bold text-white">
                                    {value.title}
                                </h4>
                                <p className="text-[15px] leading-[1.7] text-white/70">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="mx-auto max-w-[1280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#d5fbff] px-4 py-2 text-[14px] font-bold leading-5 text-[#20a9ad]">
                            <Users className="h-4 w-4" />
                            <span>Leadership</span>
                        </div>
                        <h2 className="text-[38px] font-black leading-[1.08] tracking-[-0.48px] text-[#0e1b33] sm:text-[44px] lg:text-[48px]">
                            Meet Our <span className="text-[#20a9ad]">Team</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-[36rem] text-[18px] leading-[1.625] text-[#6a6a67]">
                            Our leadership team brings decades of combined experience in
                            healthcare, operations, and education — united by a shared passion
                            for improving lives.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {team.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                className="rounded-[2rem] border border-[#edf0f4] bg-white p-8 transition-shadow duration-500 hover:shadow-xl"
                            >
                                <div className="mb-6 flex items-center gap-5">
                                    <div
                                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${member.color} text-[20px] font-bold text-white shadow-lg`}
                                    >
                                        {member.initials}
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#0e1b33]">
                                            {member.name}
                                        </h4>
                                        <p className="text-[14px] font-medium text-[#20a9ad]">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[15px] leading-[1.7] text-[#6a6a67]">
                                    {member.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
                <div className="mx-auto max-w-[1280px]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0e1b33_0%,#162544_100%)] px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-24"
                    >
                        <div className="relative">
                            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#20a9ad] opacity-10 blur-[100px]" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative"
                            >
                                <h2 className="text-[34px] font-black leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]">
                                    Ready to Experience{" "}
                                    <span className="text-[#20a9ad]">Better Care</span>?
                                </h2>
                                <p className="mx-auto mt-5 max-w-[32rem] text-[17px] leading-[1.7] text-white/70">
                                    Whether you need home care, medical supplies, transportation,
                                    or professional training — Castor is here for you. One call
                                    connects you to everything we offer.
                                </p>
                                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <Button href="/contact">Contact Us Today</Button>
                                    <a
                                        href="tel:1-800-CASTOR-1"
                                        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-[16px] font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                                    >
                                        <span>1-800-CASTOR-1</span>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
