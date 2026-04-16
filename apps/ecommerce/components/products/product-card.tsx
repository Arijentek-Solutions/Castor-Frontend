"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import { useCart } from "@/context/cart-context";
import { formatCartCurrency } from "@/lib/cart/cart-service";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, setIsCartOpen } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      slug: product.slug,
      sku: product.sku,
      name: product.name,
      image: product.image,
      price: product.price,
      workflowType: product.workflowType,
    });
    setIsCartOpen(true);
  };

  return (
    <Link href={`/products/${product.slug}`} className="block">
      <motion.div
        className="group relative flex flex-row gap-3 overflow-hidden rounded-[1.25rem] border border-slate-100 bg-white p-3 shadow-sm transition-all hover:border-[#20a9ad]/30 hover:shadow-xl lg:flex-col lg:rounded-[2rem] lg:p-6"
      >
        {/* Product Image - Smaller on mobile */}
        <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-slate-50 lg:mb-6 lg:w-full lg:rounded-2xl">
          <Image
            src={product.image || "/ImageWithFallback.png"}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-110 lg:p-4"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col space-y-0.5 lg:space-y-4">
            {/* SKU */}
            <div className="flex items-center text-[9px] font-bold uppercase tracking-[0.3px] text-[#20a9ad] lg:text-[12px]">
              {product.sku}
            </div>

            {/* Title */}
            <h3 className="line-clamp-1 text-[13px] font-black leading-tight text-[#0e1b33] lg:line-clamp-2 lg:min-h-[56px] lg:text-lg lg:leading-[28px]">
              {product.name}
            </h3>

            {/* Review Stars & Basic Details - Now shown on mobile with smaller size */}
            <div className="flex flex-col gap-1 lg:gap-4">
              {/* Rating */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-3 w-3 lg:h-4 lg:w-4 ${i < Math.floor(product.rating) ? "fill-[#ffb500] text-[#ffb500]" : "text-slate-200"
                        }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-medium text-[#6a6a67] lg:text-[12px]">({product.reviewCount})</span>
              </div>

              {/* Manufacturer Mini-details */}
              <div className="text-[10px] text-[#6a6a67] lg:text-[12px]">
                <span className="font-semibold">{product.manufacturer}</span> &bull; <span>{product.weight}</span>
              </div>
            </div>

            {/* Desktop Only Description - Hidden on mobile for extreme compactness */}
            <p className="hidden line-clamp-2 min-h-[40px] text-[14px] leading-[20px] text-[#6a6a67] lg:block">
              {product.description}
            </p>
          </div>

          {/* Footer: Price & Add Button */}
          <div className="mt-1 flex items-center justify-between lg:mt-auto lg:border-t lg:border-[rgba(32,169,173,0.1)] lg:pt-5">
            <div className="text-[16px] font-black text-[#0e1b33] lg:text-2xl">
              {formatCartCurrency(product.price)}
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#20a9ad] text-white shadow-lg shadow-[#20a9ad]/20 transition-all duration-300 hover:scale-110 hover:shadow-[#20a9ad]/40 active:scale-95 lg:h-12 lg:w-12"
              aria-label={`Add ${product.name} to cart`}
            >
              <Plus size={16} className="lg:hidden" strokeWidth={2.5} />
              <Plus size={24} className="hidden lg:block" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
