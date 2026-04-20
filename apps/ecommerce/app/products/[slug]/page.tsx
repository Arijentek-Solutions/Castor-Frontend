"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Star, Check, ShieldCheck } from "lucide-react";

import { PRODUCTS } from "@/lib/products/products";
import { useCart } from "@/context/cart-context";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.slug === slug);
   const { addItem } = useCart();

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
    addItem({
      productId: product.id,
      sku: product.sku,
      name: product.name,
      slug: product.slug,
      price: product.price,
      image: product.image,
      workflowType: product.workflowType,
      insuranceCovered: product.insuranceCovered,
    });
  };

  const handleBuyNow = () => {
    // Redirect directly to checkout with this product only (no cart)
    const params = new URLSearchParams({
      id: product.id,
      slug: product.slug,
      sku: product.sku,
      name: product.name,
      image: product.image,
      price: product.price.toString(),
      workflowType: product.workflowType,
    });
    window.location.href = `/checkout?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <main className="mx-auto max-w-[1720px] px-4 pt-[160px] pb-20 sm:px-8 sm:pt-[168px] lg:px-12 lg:pt-[192px]">
        {/* Breadcrumbs / Back Link */}
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-xs font-bold text-[#6a6a67] transition-colors hover:text-[#20a9ad]"
        >
          <ArrowLeft size={16} />
          Back to Catalog
        </Link>

        <div className="mx-auto w-full max-w-[1216px]">
          {/* Top row */}
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left: Product Image Gallery */}
            <div className="w-full lg:w-[584px]">
              <div
                className="relative h-[410.438px] w-full overflow-hidden rounded-[32px] shadow-[0px_4px_13.9px_0px_rgba(0,0,0,0.17)] pt-8 px-8"
                style={{
                  background:
                    "linear-gradient(144.9deg, rgb(213, 251, 255) 0%, rgb(216, 251, 255) 7.1429%, rgb(219, 252, 255) 14.286%, rgb(222, 252, 255) 21.429%, rgb(225, 252, 255) 28.571%, rgb(228, 253, 255) 35.714%, rgb(231, 253, 255) 42.857%, rgb(234, 253, 255) 50%, rgb(237, 253, 255) 57.143%, rgb(240, 254, 255) 64.286%, rgb(243, 254, 255) 71.429%, rgb(246, 254, 255) 78.571%, rgb(249, 254, 255) 85.714%, rgb(252, 255, 255) 92.857%, rgb(255, 255, 255) 100%)",
                }}
              >
                <div className="relative h-[346.438px] w-full rounded-[24px] overflow-hidden">
                  <Image
                    src={product.image || "/ImageWithFallback.png"}
                    alt={product.name}
                    fill
                    className="object-contain rounded-[24px]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex w-full flex-col gap-4 lg:w-[584px] lg:gap-6">
              {/* Badge - Manufacturer */}
              <div className="inline-flex items-center rounded-[8px] border border-[rgba(32,169,173,0.2)] bg-[rgba(32,169,173,0.1)] px-[9px] py-[3px] text-xs font-medium text-[#20a9ad] w-fit">
                {product.manufacturer}
              </div>

              {product.insuranceCovered && (
                <div className="inline-flex items-center gap-1.5 rounded-[8px] border border-[rgba(0,130,54,0.2)] bg-[#f0fdf4] px-[9px] py-[3px] text-xs font-medium text-[#008236] w-fit">
                  <ShieldCheck size={14} />
                  Insurance Covered
                </div>
              )}

              {/* Title */}
              <h1 className="text-[36px] font-black leading-[40px] tracking-[-0.72px] text-[#0e1b33]">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-[#ffb500] text-[#ffb500]"
                          : "text-slate-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-[14px] font-normal text-[#6a6a67]">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="text-[30px] font-black leading-[36px] text-[#20a9ad]">
                ${product.price.toFixed(2)}
              </div>

              {/* Mobile Only: Key Details Grid (HCPCS, Weight, Description) */}
              <div className="flex flex-col gap-3 lg:hidden">
                {product.hcpcs && (
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-normal text-[#6a6a67] w-24">HCPCS</span>
                    <span className="text-[14px] font-bold text-[#0e1b33]">{product.hcpcs}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-normal text-[#6a6a67] w-24">Weight</span>
                  <span className="text-[14px] font-bold text-[#0e1b33]">{product.weight}</span>
                </div>
                {product.description && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-normal text-[#6a6a67]">Description</span>
                    <span className="text-[14px] font-bold text-[#0e1b33] leading-relaxed">{product.description}</span>
                  </div>
                )}
              </div>

              {/* Part Number / SKU */}
              <div className="text-[16px] font-normal uppercase leading-[26px] text-[#6a6a67]">
                Part Number - {product.sku}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row gap-2">
                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-[#20a9ad] px-3 font-bold text-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:bg-[#1b8e91] transition-colors"
                >
                  <ShoppingCart size={18} strokeWidth={2} />
                  <span className="text-sm">Add to Cart</span>
                </button>

                {/* Buy Now Button */}
                <button
                  onClick={handleBuyNow}
                  className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-[#0e1b33] px-3 font-bold text-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:bg-[#1a1a1a] transition-colors"
                >
                  <span className="text-sm">Buy Now</span>
                </button>
              </div>

              {/* Active Badge */}
              {product.status === "ACTIVE" && (
                <div className="flex h-[22px] w-fit">
                  <div className="flex items-center rounded-[8px] border border-[#b9f8cf] bg-[#f0fdf4] px-2 py-1">
                    <Check size={12} className="mr-1 text-[#008236]" />
                    <span className="text-[12px] font-medium text-[#008236]">
                      ACTIVE
                    </span>
                  </div>
                </div>
              )}

              {product.insuranceCovered && (
                <div className="rounded-2xl border border-[rgba(0,130,54,0.15)] bg-[#f0fdf4] p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={20} className="mt-0.5 text-[#008236] shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#0e1b33]">Eligible for Insurance Coverage</p>
                      <p className="mt-1 text-xs text-[#6a6a67]">
                        This product can be purchased through insurance. Select &quot;With Insurance&quot; at checkout and complete the insurance claim form.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Cards - Hidden on mobile, shown on desktop */}
          <div className="mt-12 hidden flex-col gap-6 lg:flex-row lg:flex">
            {/* Product Details Card */}
            <div className="lg:w-[802.656px] rounded-[32px] border-2 border-[rgba(32,169,173,0.1)] bg-white px-[34px] pt-[34px] pb-2 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
              <h2 className="mb-6 text-[24px] font-black tracking-[-0.24px] text-[#0e1b33]">
                Product Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-[14px] font-normal text-[#6a6a67]">
                    Manufacturer
                  </span>
                  <span className="text-[16px] font-bold text-[#0e1b33]">
                    {product.manufacturer}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-normal text-[#6a6a67]">
                    SKU
                  </span>
                  <span className="text-[16px] font-bold text-[#0e1b33]">
                    {product.sku}
                  </span>
                </div>
                {product.partNumber && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      Part Number
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.partNumber}
                    </span>
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-[14px] font-normal text-[#6a6a67]">
                    Weight
                  </span>
                  <span className="text-[16px] font-bold text-[#0e1b33]">
                    {product.weight}
                  </span>
                </div>
                {product.category && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      Category
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.category}
                    </span>
                  </div>
                )}
                {product.group && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      Group
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.group}
                    </span>
                  </div>
                )}
                <div className="col-span-2 flex flex-col">
                  <span className="text-[14px] font-normal text-[#6a6a67]">
                    Description
                  </span>
                  <span className="text-[16px] font-bold text-[#0e1b33]">
                    {product.description}
                  </span>
                </div>
                {product.hcpcs && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      HCPCS
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.hcpcs}
                    </span>
                  </div>
                )}
                {product.billingUomUnits && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      Billing UOM Units
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.billingUomUnits}
                    </span>
                  </div>
                )}
                {product.uomSetName && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      UOM Set Name
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.uomSetName}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Specifications Card */}
            <div className="lg:w-[389.344px] rounded-[32px] border-2 border-[rgba(32,169,173,0.1)] bg-white px-[34px] pt-[34px] pb-2 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
              <h2 className="mb-6 text-[24px] font-black tracking-[-0.24px] text-[#0e1b33]">
                Specifications
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-[14px] font-normal text-[#6a6a67]">
                    Category
                  </span>
                  <span className="text-[16px] font-bold text-[#0e1b33]">
                    {product.category || "N/A"}
                  </span>
                </div>
                {product.group && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      Group
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.group}
                    </span>
                  </div>
                )}
                {product.billingUomUnits && (
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-[#6a6a67]">
                      Billing UOM Units
                    </span>
                    <span className="text-[16px] font-bold text-[#0e1b33]">
                      {product.billingUomUnits}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
