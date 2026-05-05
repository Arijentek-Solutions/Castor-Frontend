import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Filter, X } from "lucide-react";
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

  // Stable callback so CartDrawer doesn't re-run effects on every render
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="sticky top-[140px] sm:top-[148px] lg:top-[172px] z-40 w-full border-b-2 border-[#20a9ad]/15 bg-white/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-8 md:h-20 lg:h-24 lg:max-w-[1720px] lg:px-12">

          {/* MOBILE LAYOUT: [Category Icon] [Search] [Cart] */}
          <div className="flex w-full items-center justify-between md:hidden">
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
                placeholder="Search name or HCPCS..."
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

          {/* DESKTOP/TABLET LAYOUT */}
          <div className="hidden w-full items-center justify-between md:flex">
            {/* Integrated Heading - DESKTOP ONLY */}
            <div className="hidden h-12 items-center lg:flex">
              <h1 className="whitespace-nowrap text-[40px] font-black tracking-[-1.2px] text-[#0e1b33]">
                Shop <span className="text-[#20a9ad]">Medical Supplies</span>
              </h1>
            </div>

            {/* Integrated Controls (Search + Cart + Optional Tablet Filter) */}
            <div className="flex flex-1 items-center justify-end gap-3 md:gap-4 lg:flex-initial lg:gap-6">
              {/* Tablet Filter Icon - Visible only on md, hidden on mobile and desktop */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#f0f9fa] text-[#20a9ad] transition-all active:scale-95 md:flex lg:hidden"
              >
                {isMenuOpen ? <X size={20} /> : <Filter size={20} />}
              </button>

              {/* Search Bar */}
              <div className="flex h-12 flex-1 items-center overflow-hidden rounded-full border-2 border-[#20a9ad]/20 bg-white shadow-sm transition-all md:flex-1 lg:w-[384px] lg:flex-initial">
                <div className="flex h-full w-10 items-center justify-center text-slate-400 lg:w-12">
                  <Search size={20} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  placeholder="Search by product name..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="h-full flex-1 bg-transparent pr-4 text-[13px] text-slate-700 outline-none placeholder:text-[#717182] lg:text-[14px]"
                />
              </div>

              {/* Cart Button */}
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="flex h-12 items-center gap-2 rounded-full bg-[#20a9ad] px-4 text-[13px] font-bold text-white shadow-lg shadow-[#20a9ad]/20 transition-all hover:bg-[#1a8b8f] active:scale-95 lg:gap-3 lg:px-8 lg:text-[14px]"
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
              className="absolute left-4 top-[calc(100%-8px)] max-h-[60vh] w-64 overflow-y-auto rounded-2xl border border-[#20a9ad]/10 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col space-y-1">
                <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400/80">
                  Browse Categories
                </div>
                <div className="grid grid-cols-1 gap-1">
                  {["All", ...categories].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        onCategoryChange(category);
                        setIsMenuOpen(false);
                      }}
                      className={`group flex h-11 items-center px-4 text-[13px] font-bold transition-all rounded-xl ${selectedCategory === category
                        ? "bg-[#20a9ad] text-white shadow-lg shadow-[#20a9ad]/20"
                        : "text-[#4a5568] hover:bg-[#f0f9fa] hover:text-[#20a9ad] active:scale-[0.98]"
                        }`}
                    >
                      <span className="flex-1 text-left">{category}</span>
                      {selectedCategory === category && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* RENDER CART DRAWER */}
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}
