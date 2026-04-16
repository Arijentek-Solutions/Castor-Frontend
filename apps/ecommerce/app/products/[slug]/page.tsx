"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingCart, Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { PRODUCTS } from "@/lib/products/products";
import { Navbar } from "@/components/navbar";
import { useCart } from "@/context/cart-context";
import { formatCartCurrency } from "@/lib/cart/cart-service";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addItem, itemCount, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0e1b33]">Product Not Found</h1>
          <Link href="/" className="mt-4 inline-block text-[#20a9ad] hover:underline">
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        sku: product.sku,
        name: product.name,
        slug: product.slug, // Ensure slug is passed
        price: product.price,
        image: product.image,
      });
    }
    setIsCartOpen(true);
  };

  // Mock categories list for the Navbar logic
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categories={categories}
        selectedCategory="All"
        onCategoryChange={() => { }}
      />

      <main className="mx-auto max-w-[1720px] px-4 pt-40 pb-20 sm:px-8 lg:px-12 lg:pt-48">
        {/* Breadcrumbs / Back Link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#6a6a67] transition-colors hover:text-[#20a9ad]"
        >
          <ArrowLeft size={16} />
          Back to Catalog
        </Link>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* Left: Product Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:sticky lg:top-48 lg:w-1/2"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm lg:p-16">
              <Image
                src={product.image || "/ImageWithFallback.png"}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col space-y-8">
              {/* Header Info */}
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-[#20a9ad]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#20a9ad]">
                  SKU: {product.sku}
                </div>
                <h1 className="text-3xl font-black leading-tight text-[#0e1b33] lg:text-5xl">
                  {product.name}
                </h1>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(product.rating) ? "fill-[#ffb500] text-[#ffb500]" : "text-slate-200"}
                      />
                    ))}
                    <span className="ml-2 text-sm font-bold text-[#0e1b33]">{product.rating}</span>
                  </div>
                  <div className="h-4 w-px bg-slate-200" />
                  <span className="text-sm font-bold text-[#6a6a67]">{product.reviewCount} Reviews</span>
                </div>
              </div>

              {/* Price & Quantity */}
              <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm">
                <div className="mb-8 flex items-end gap-2">
                  <span className="text-4xl font-black text-[#0e1b33]">${product.price.toFixed(2)}</span>
                  <span className="mb-1 text-sm font-bold text-[#6a6a67]">/ unit</span>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex h-14 items-center gap-4 rounded-full border border-slate-100 bg-slate-50/50 p-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0e1b33] shadow-sm transition-all hover:bg-slate-50 active:scale-95"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="w-8 text-center text-lg font-black text-[#0e1b33]">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0e1b33] shadow-sm transition-all hover:bg-slate-50 active:scale-95"
                    >
                      <Plus size={20} />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-[#20a9ad] px-8 font-black text-white shadow-lg shadow-[#20a9ad]/20 transition-all hover:bg-[#1b8e91] hover:shadow-[#20a9ad]/40 active:scale-[0.98]"
                  >
                    <ShoppingCart size={22} strokeWidth={2.5} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#0e1b33]">Product Description</h3>
                <p className="text-lg leading-relaxed text-[#6a6a67]">
                  {product.description || "No detailed description available."}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20a9ad]">Manufacturer</span>
                  <p className="mt-1 text-lg font-bold text-[#0e1b33]">{product.manufacturer}</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20a9ad]">Weight</span>
                  <p className="mt-1 text-lg font-bold text-[#0e1b33]">{product.weight}</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20a9ad]">Category</span>
                  <p className="mt-1 text-lg font-bold text-[#0e1b33]">{product.category}</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#20a9ad]">Availability</span>
                  <p className="mt-1 text-lg font-bold text-[#20a9ad]">In Stock</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:gap-12">
                <div className="flex items-center gap-3 text-[#6a6a67]">
                  <ShieldCheck className="text-[#20a9ad]" size={24} />
                  <span className="text-sm font-bold">Secure Purchase</span>
                </div>
                <div className="flex items-center gap-3 text-[#6a6a67]">
                  <Truck className="text-[#20a9ad]" size={24} />
                  <span className="text-sm font-bold">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-[#6a6a67]">
                  <RotateCcw className="text-[#20a9ad]" size={24} />
                  <span className="text-sm font-bold">30-Day Returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Mobile Sticky Add to Cart Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-100 bg-white/80 p-4 pb-8 backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#6a6a67]">Total Price</span>
            <span className="text-xl font-black text-[#0e1b33]">${(product.price * quantity).toFixed(2)}</span>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex h-12 flex-1 items-center justify-center gap-3 rounded-full bg-[#20a9ad] px-6 font-black text-white shadow-lg shadow-[#20a9ad]/20 active:scale-95"
          >
            <ShoppingCart size={20} strokeWidth={2.5} />
            Add to Cart
          </button>
        </div>
      </motion.div>
    </div>
  );
}
