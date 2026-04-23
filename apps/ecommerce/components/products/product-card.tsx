"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { useCart } from "@/context/cart-context";
import { formatCartCurrency } from "@/lib/cart/cart-service";
import type { Product } from "@/types/product";
import { PricingModal } from "./pricing-modal";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const router = useRouter();
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

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
      insuranceCovered: product.insuranceCovered,
    });
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const params = new URLSearchParams({
      id: product.id,
      slug: product.slug,
      sku: product.sku,
      name: product.name,
      image: product.image,
      price: product.price.toString(),
      workflowType: product.workflowType,
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <Link href={`/products/${product.slug}`} className="block">
      <motion.div
        className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-slate-100 bg-white p-3 shadow-sm transition-all hover:border-[#20a9ad]/30 hover:shadow-xl lg:rounded-[2rem] lg:p-6"
      >
        {/* Product Image - Smaller on mobile */}
        <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-slate-50 lg:mb-4 lg:w-full lg:rounded-2xl">
          <Image
            src={product.image || "/ImageWithFallback.png"}
            alt={product.name}
            fill
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-110 lg:p-4"
          />
          {product.insuranceCovered && (
            <div className="absolute top-1 left-1 flex items-center gap-0.5 rounded-md bg-[#f0fdf4] border border-[rgba(0,130,54,0.2)] px-1.5 py-0.5 lg:top-2 lg:left-2 lg:px-2 lg:py-1">
              <ShieldCheck size={10} className="text-[#008236] lg:hidden" />
              <ShieldCheck size={14} className="text-[#008236] hidden lg:block" />
              <span className="text-[8px] font-medium text-[#008236] lg:text-[10px]">Insurance</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col space-y-0.5 lg:space-y-4">
            {/* SKU + HCPCS row */}
            <div className="flex items-center justify-between min-h-6">
              <div className="text-[9px] font-bold uppercase tracking-[0.3px] text-[#20a9ad] lg:text-[12px]">
                {product.sku}
              </div>
              {product.hcpcs && (
                <div className="rounded-[8px] bg-[rgba(32,169,173,0.1)] border border-[rgba(32,169,173,0.2)] px-2 py-0.5">
                  <span className="text-[9px] font-medium text-[#20a9ad] lg:text-[11px]">
                    HCPCS
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="line-clamp-1 text-[13px] font-semibold leading-tight text-[#0e1b33] lg:line-clamp-2 lg:min-h-[56px] lg:text-lg lg:leading-[28px]">
              {product.name}
            </h3>

            {/* Review Stars */}
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

            {/* Desktop Only Description */}
            <p className="hidden line-clamp-2 min-h-[40px] text-[14px] leading-[20px] text-[#6a6a67] lg:block">
              {product.description}
            </p>
          </div>

          {/* Footer: Cart, Price & Action Button */}
          <div className="mt-1 flex items-center justify-between gap-2 lg:mt-auto lg:border-t lg:border-[rgba(32,169,173,0.1)] lg:pt-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#20a9ad] text-white shadow-lg shadow-[#20a9ad]/20 transition-all duration-300 hover:scale-110 hover:shadow-[#20a9ad]/40 active:scale-95 lg:h-12 lg:w-12"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart size={16} className="lg:hidden" strokeWidth={2.5} />
                <ShoppingCart size={24} className="hidden lg:block" strokeWidth={2.5} />
              </button>

              <div className="text-[14px] font-bold text-[#0e1b33] lg:text-xl">
                {product.workflowType !== "pricing-request" && formatCartCurrency(product.price)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {product.workflowType === "pricing-request" ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsPricingModalOpen(true);
                  }}
                  className="flex h-8 items-center rounded-full bg-[#F7C89A] px-6 text-[10px] font-bold text-[#0e1b33] shadow-lg shadow-[#F7C89A]/20 transition-all duration-300 hover:scale-105 hover:bg-[#eeb67a] hover:shadow-[#F7C89A]/40 active:scale-95 lg:h-12 lg:px-10 lg:text-[13px]"
                >
                  Call for Pricing
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex h-8 items-center rounded-full bg-[#0e1b33] px-6 text-[10px] font-bold text-white shadow-lg shadow-[#0e1b33]/20 transition-all duration-300 hover:scale-105 hover:bg-[#0e1b33]/90 hover:shadow-[#0e1b33]/40 active:scale-95 lg:h-12 lg:px-10 lg:text-[13px]"
                  aria-label={`Buy ${product.name} now`}
                >
                  Buy
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        productName={product.name}
        productId={product.id}
      />
    </Link>
  );
}
