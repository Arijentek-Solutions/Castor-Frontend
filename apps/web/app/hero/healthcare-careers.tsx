import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export function HealthcareCareers() {
    const services = [
        {
            title: "CNA Program",
            description: "6-8 weeks comprehensive training",
            icon: "/icons/healthcare/cna.svg",
            color: "teal",
        },
        {
            title: "Phlebotomy Training",
            description: "4-6 weeks hands-on practice",
            icon: "/icons/healthcare/Phlebotomy.svg",
            color: "teal",
        },
        {
            title: "CPR & First Aid",
            description: "1-day certification",
            icon: "/icons/healthcare/cpr.svg",
            color: "teal",
        },
    ];

    return (
        <section className={`${inter.variable} px-4 py-16 sm:px-6 lg:px-8 bg-slate-800`}>
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Start Your Healthcare Career
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Professional training programs to launch or advance your career
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 bg-slate-700 border border-slate-600"
                        >
                            <div className="flex items-start">
                                <div className="transition-transform duration-300 group-hover:scale-110">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={24}
                                            height={24}
                                            className="h-6 w-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-2xl font-bold text-white">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-base leading-relaxed text-gray-300">
                                    {service.description}
                                </p>

                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                                    >
                                        Learn More
                                        <svg
                                            className="ml-2 h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}