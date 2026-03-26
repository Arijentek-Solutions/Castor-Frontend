"use client";

import Image from "next/image";
import { Button } from "@castor/ui";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export function MedicalSupplies() {
    const products = [
        {
            name: "Ultra-Light Transport Wheelchair",
            description: "Lightweight aluminum frame, easy to fold for transport. Ideal for travel and occasional use.",
            price: "$189.99",
            reviews: 124,
            image: "/images/medicalsupllies/product1.png",
            inStock: true,
        },
        {
            name: "Adjustable Hospital Bed",
            description: "Full-featured semi-electric bed with adjustable head and foot sections. Mattress included.",
            price: "$899.00",
            reviews: 45,
            image: "/images/medicalsupllies/product2.png",
            inStock: true,
        },
        {
            name: "Standard Aluminum Walker",
            description: "Sturdy, height-adjustable walker with comfortable hand grips and non-slip rubber tips.",
            price: "$45.50",
            reviews: 312,
            image: "/images/medicalsupllies/product3.png",
            inStock: true,
        },
    ];

    const categories = [
        {
            name: "DME",
            description: "Durabe Medical Equipment",
            icon: "/icons/medicalsupplies/dme.png",
            gradient: "linear-gradient(135deg, #D5FBFF 0%, rgba(213, 251, 255, 0.50) 100%)",
        },
        {
            name: "HME",
            description: "Home Medical Equipment",
            icon: "/icons/medicalsupplies/hme.png",
            gradient: "linear-gradient(135deg, #FFEAD8 0%, rgba(255, 234, 216, 0.50) 100%)",
        },
        {
            name: "Supplies",
            description: "Medical Supplies",
            icon: "/icons/medicalsupplies/supplies.png",
            gradient: "linear-gradient(135deg, #D5FBFF 0%, rgba(213, 251, 255, 0.50) 100%)",
        },
        {
            name: "Apparel",
            description: "Healthcare Apparel",
            icon: "/icons/medicalsupplies/apparel.png",
            gradient: "linear-gradient(135deg, #FFEAD8 0%, rgba(255, 234, 216, 0.50) 100%)",
        },
    ];

    return (
        <section className="font-inter px-4 py-16 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                        <Image
                            src="/icons/medicalsupplies/dme.png"
                            alt="Medical Supplies & Equipment"
                            width={16}
                            height={16}
                            className="w-4 h-4 mr-2"
                        />
                        Medical Supplies & Equipment
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Quality Healthcare Products
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Browse our extensive catalog of medical equipment and supplies with flexible purchasing options
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12"
                >
                    {products.map((product, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.12)] border border-[#f3f4f6]"
                        >
                            <div className="relative overflow-hidden shrink-0">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={250}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-3.5 h-3.5 ${i < Math.floor(product.reviews / 25) ? 'text-yellow-400' : 'text-gray-200'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-xs text-[#6A6A67] font-medium tracking-wide font-inter uppercase">({product.reviews} reviews)</span>
                                </div>
                                <h3 className="text-[22px] font-bold text-[#0E1B33] mb-3 leading-tight transition-colors group-hover:text-cyan-700">{product.name}</h3>
                                <p className="text-[#6A6A67] text-[15px] leading-[1.6] mb-8 font-inter">{product.description}</p>
                                <div className="flex items-center justify-between mt-auto pt-6">
                                    <span className="text-2xl font-black text-[#20A9AD] tracking-tight">{product.price}</span>
                                    <div className="transform transition-transform duration-300 group-hover:scale-105 active:scale-95">
                                        <Button 
                                            variant="primary" 
                                            size="sm"
                                            className="rounded-full px-6 py-2.5 bg-[#20A9AD] hover:bg-[#1A8B8F] text-[14px] font-bold shadow-lg shadow-cyan-100 group-hover:shadow-[#20A9AD]/20 transition-all border-none"
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Categories */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative rounded-[24px] p-6 text-center shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-all duration-300"
                            style={{ background: category.gradient }}
                        >
                            <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={category.icon}
                                    alt={category.name}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                            <p className="text-sm text-gray-600">{category.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Button 
                        href="/catalog" 
                        size="lg" 
                        variant="primary"
                        className="px-8 shadow-lg shadow-cyan-500/20"
                    >
                        Browse Full Catalog
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Button>
                    <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full font-medium transition-colors border border-gray-300">
                        Learn About Our Services
                    </button>
                </motion.div>
            </div>
        </section>
    );
}