import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Filter, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/cart-context";
import { CartDrawer } from "./cart/cart-drawer";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Navbar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange
}: NavbarProps) {
  const { itemCount, isCartOpen, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="sticky top-[136px] z-40 w-full border-b-2 border-[#20a9ad]/15 bg-white/95 backdrop-blur-md transition-all duration-300 lg:top-[172px]">
        <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-8 lg:h-24 lg:max-w-[1720px] lg:px-12">

          {/* MOBILE LAYOUT: [Category Icon] [Search] [Cart] */}
          <div className="flex w-full items-center justify-between lg:hidden">
            {/* Left: Category Icon Dropdown */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f0f9fa] text-[#20a9ad] active:scale-95"
            >
              {isMenuOpen ? <X size={18} /> : <Filter size={18} />}
            </button>

            {/* Center: Search Bar */}
            <div className="mx-3 flex h-9 flex-1 items-center overflow-hidden rounded-full bg-[#f8fafc] px-3 ring-1 ring-slate-200">
              <Search size={14} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-full w-full bg-transparent px-2 text-[12px] text-slate-700 outline-none"
              />
            </div>

            {/* Right: Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[#20a9ad] text-white active:scale-95"
            >
              <ShoppingCart size={18} />
              {mounted && itemCount > 0 && (
                <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0e1b33] text-[9px] font-bold text-white shadow-sm">
                  {itemCount}
                </div>
              )}
            </button>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden w-full items-center justify-between lg:flex">
            {/* Integrated Heading */}
            <div className="flex h-12 items-center">
              <h1 className="text-[40px] font-black tracking-[-1.2px] text-[#0e1b33]">
                Shop <span className="text-[#20a9ad]">Medical Supplies</span>
              </h1>
            </div>

            {/* Integrated Controls (Search + Cart) */}
            <div className="flex items-center gap-6">
              {/* Search Bar */}
              <div className="hidden h-12 w-[384px] items-center overflow-hidden rounded-full border-2 border-[#20a9ad]/20 bg-white shadow-sm lg:flex">
                <div className="flex h-full w-12 items-center justify-center text-slate-400">
                  <Search size={20} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Search equipment, supplies..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="h-full flex-1 bg-transparent pr-4 text-[14px] text-slate-700 outline-none placeholder:text-[#717182]"
                />
              </div>

              {/* Cart Button */}
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="flex h-12 items-center gap-3 rounded-full bg-[#20a9ad] px-8 text-[14px] font-bold text-white shadow-lg shadow-[#20a9ad]/20 transition-all hover:bg-[#1a8b8f] active:scale-95"
                >
                  <ShoppingCart size={20} strokeWidth={2.5} />
                  <span>Cart</span>
                </button>
                {mounted && itemCount > 0 && (
                  <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#0e1b33] text-[12px] font-bold text-white shadow-sm">
                    {itemCount}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE CATEGORY DROPDOWN OVERLAY - Ultra Compact & Narrow */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-4 top-full w-60 rounded-b-2xl border-x border-b border-[#20a9ad]/10 bg-white shadow-2xl lg:hidden"
            >
              <div className="grid grid-cols-1 gap-0.5 p-2">
                {["All", ...categories].map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategoryChange(category);
                      setIsMenuOpen(false);
                    }}
                    className={`flex h-8 items-center px-4 text-[11px] font-bold transition-colors rounded-lg ${selectedCategory === category
                        ? "bg-[#20a9ad] text-white shadow-sm"
                        : "text-[#6a6a67] active:bg-slate-100"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* RENDER CART DRAWER */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
