"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, PhoneCall } from "lucide-react";
import { Footer } from "@castor/ui";
import { RENTAL_PRODUCTS } from "@/lib/rentals/rentals";

export default function RentalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = RENTAL_PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0e1b33]">Rental Equipment Not Found</h1>
          <Link href="/rentals" className="mt-4 inline-block text-[#20a9ad] hover:underline">
            Back to Rentals
          </Link>
        </div>
      </div>
    );
  }
  const relatedProducts = RENTAL_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans">
      <main className="mx-auto max-w-[1720px] px-4 pt-[110px] pb-20 sm:px-8 sm:pt-[120px] lg:px-12 lg:pt-[140px]">
        {/* Breadcrumbs / Back Link */}
        <Link
          href="/rentals"
          className="mb-12 inline-flex items-center gap-2 text-xs font-bold text-[#6a6a67] transition-colors hover:text-[#20a9ad]"
        >
          <ArrowLeft size={16} />
          Back to Rentals
        </Link>

        <div className="mx-auto w-full max-w-[1216px]">
          {/* Top row */}
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left: Product Image Section */}
            <div className="w-full lg:w-[584px]">
              <div
                className="relative aspect-square w-full overflow-hidden rounded-[32px] shadow-[0px_4px_25px_rgba(0,0,0,0.05)] bg-white p-12"
              >
                <div className="relative h-full w-full rounded-[24px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {product.badge && (
                    <div className="absolute left-8 top-8 rounded-full bg-[#fcd34d] px-6 py-2 text-[12px] font-black uppercase tracking-wider text-[#78350f]">
                    {product.badge}
                    </div>
                )}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex w-full flex-col gap-4 lg:w-[584px] lg:gap-6">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 rounded-[8px] border border-[rgba(32,169,173,0.2)] bg-[rgba(32,169,173,0.1)] px-[12px] py-[4px] text-xs font-bold text-[#20a9ad] w-fit uppercase tracking-widest">
                <Star className="h-3 w-3 fill-[#20a9ad]" />
                {product.category}
              </div>

              {/* Title */}
              <h1 className="text-[40px] font-black leading-[1.1] tracking-tight text-[#0e1b33] lg:text-[48px]">
                {product.title}
              </h1>

              {/* Rating Placeholder (matching products page style) */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[#ffb500]">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <span className="text-[14px] font-normal text-[#6a6a67]">
                  (Hospital Grade Equipment)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <div className="text-[32px] font-black text-[#20a9ad]">
                  {product.price}
                </div>
                <span className="text-sm font-bold text-slate-400 italic">No long-term commitment</span>
              </div>

              {/* Short Description */}
              <p className="text-lg leading-relaxed text-slate-600">
                {product.longDescription || product.description}
              </p>

              {/* Key Features */}
              <div className="mt-4">
                <h4 className="text-sm font-bold text-[#0e1b33]">Key Features:</h4>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.features?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-[14px] text-slate-600">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e6f6f7] text-[#20a9ad]">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        {feature}
                    </div>
                    ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-[#0e1b33] text-[16px] font-bold text-white transition-all hover:bg-[#1a2b4d] active:scale-[0.98] shadow-lg shadow-slate-200">
                  Request This Rental
                </button>
                <button className="flex h-14 items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 text-[16px] font-bold text-[#0e1b33] transition-all hover:bg-slate-50 active:scale-[0.98]">
                  <PhoneCall className="h-5 w-5" />
                  Call Specialist
                </button>
              </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-3xl font-black text-[#0e1b33]">Related Equipment</h2>
            <p className="mt-2 text-slate-500">Other rentals in the {product.category} category.</p>
            
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related) => (
                <Link 
                  key={related.id}
                  href={`/rentals/${related.id}`}
                  className="group flex flex-col rounded-[2rem] border border-slate-100 bg-white p-4 transition-all duration-300 hover:border-[#20a9ad]/30 hover:shadow-[0_20px_50px_rgba(32,169,173,0.1)]"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-[#f8fafc]">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 flex flex-col p-2">
                    <h4 className="text-base font-bold text-[#0e1b33] line-clamp-1 group-hover:text-[#20a9ad] transition-colors">
                      {related.title}
                    </h4>
                    <div className="mt-1 text-sm font-black text-[#20a9ad]">
                      {related.price}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
