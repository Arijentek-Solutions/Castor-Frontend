"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ChevronRight, Info, CheckCircle2 } from "lucide-react";
import { Footer } from "@castor/ui";
import { Navbar } from "@/components/navbar";
import { RENTAL_PRODUCTS } from "@/lib/rentals/rentals";

export default function RentalsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Mobility", "Beds", "Seating", "Transfer", "Accessories"];

  const filteredProducts = RENTAL_PRODUCTS.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <main className="w-full pt-[128px] lg:pt-[160px]">
        <Navbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        

        <section className="mx-auto w-full max-w-[1720px] px-4 pt-6 pb-16 sm:px-8 lg:pt-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#0e1b33] sm:text-4xl">Available Equipment</h2>
              <p className="mt-2 text-slate-500">Browse our fleet of high-quality medical rentals.</p>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#20a9ad] text-white shadow-lg shadow-[#20a9ad]/20"
                      : "bg-[#f1f5f9] text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-4 transition-all duration-300 hover:border-[#20a9ad]/30 hover:shadow-[0_20px_50px_rgba(32,169,173,0.1)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-[#f8fafc]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <div className="absolute left-4 top-4 rounded-full bg-[#fcd34d] px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#78350f] shadow-sm">
                      {product.badge}
                    </div>
                  )}
                  <Link 
                    href={`/rentals/${product.id}`}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#20a9ad] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 shadow-sm hover:bg-white active:scale-95"
                  >
                    <Info className="h-5 w-5" />
                  </Link>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#20a9ad]">
                    {product.category}
                  </div>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-[#0e1b33]">
                    {product.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-500 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between pb-6">
                      <div className="text-lg font-black text-[#20a9ad]">{product.price}</div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <button className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#0e1b33] text-[13px] font-bold text-white transition-all hover:bg-[#1a2b4d] active:scale-[0.98]">
                        Request Rental
                      </button>
                      <Link 
                        href={`/rentals/${product.id}`}
                        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-[#f1f5f9] text-[13px] font-bold text-slate-600 transition-all hover:bg-slate-200 active:scale-[0.98]"
                      >
                        More Info
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-20 flex flex-col items-center justify-center py-20 text-center">
              <div className="rounded-full bg-slate-50 p-6">
                 <Info className="h-10 w-10 text-slate-300" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">No equipment found</h3>
              <p className="mt-2 text-slate-500">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
                className="mt-6 text-sm font-bold text-[#20a9ad] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

      </main>
      <Footer />
    </div>
  );
}
