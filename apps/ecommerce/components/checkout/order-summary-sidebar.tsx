"use client";

import { formatCartCurrency } from "@/lib/cart/cart-service";
import type { CartItem } from "@/types/cart";
import { Minus, Plus, Trash2, ShoppingBag, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";

type OrderSummarySidebarProps = {
  items: CartItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  isBuyNowMode?: boolean;
  buyNowQuantity?: number;
  onBuyNowQuantityChange?: (delta: number) => void;
};

export function OrderSummarySidebar({
  items,
  subtotal,
  shippingCost,
  tax,
  total,
  onUpdateQuantity,
  onRemoveItem,
  isBuyNowMode = false,
  buyNowQuantity = 1,
  onBuyNowQuantityChange,
}: OrderSummarySidebarProps) {
  return (
    <aside className="sticky top-48 h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:w-[380px] xl:w-[420px]">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
        <ShoppingBag size={20} className="text-[#20a9ad]" />
        <h2 className="text-xl font-bold text-slate-950">Order Summary</h2>
      </div>

      {/* Cart Items */}
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.productId} className="flex gap-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h4 className="line-clamp-2 text-sm font-bold text-[#0e1b33]">{item.name}</h4>
                <p className="mt-1 text-sm font-semibold text-[#20a9ad]">{formatCartCurrency(item.price)}</p>
              </div>

              <div className="flex items-center justify-between">
                {isBuyNowMode ? (
                  /* Buy Now Mode: Custom quantity controls */
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/50 p-1">
                    <button
                      type="button"
                      onClick={() => onBuyNowQuantityChange && onBuyNowQuantityChange(-1)}
                      disabled={buyNowQuantity <= 1}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:text-[#0e1b33] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-[#0e1b33]">{buyNowQuantity}</span>
                    <button
                      type="button"
                      onClick={() => onBuyNowQuantityChange && onBuyNowQuantityChange(1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:text-[#0e1b33] active:scale-95"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                ) : (
                  /* Cart Mode: Standard quantity controls */
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/50 p-1">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:text-[#0e1b33] active:scale-95"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-[#0e1b33]">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:text-[#0e1b33] active:scale-95"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                )}

                {/* Remove button - hidden in Buy Now mode */}
                {!isBuyNowMode && (
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.productId)}
                    className="text-slate-400 transition-colors hover:text-red-500"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price breakdown */}
      <div className="mt-6 space-y-3 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6a6a67]">Subtotal</span>
          <span className="font-semibold text-[#0e1b33]">{formatCartCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6a6a67]">Shipping</span>
          <span className="font-semibold text-[#0e1b33]">{formatCartCurrency(shippingCost)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6a6a67]">Tax (estimated)</span>
          <span className="font-semibold text-[#0e1b33]">{formatCartCurrency(tax)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-3">
          <span className="text-base font-bold text-[#0e1b33]">Total</span>
          <span className="text-xl font-black text-[#0e1b33]">{formatCartCurrency(total)}</span>
        </div>
      </div>

      {/* Promo code (optional) */}
      <details className="mt-4 group">
        <summary className="flex cursor-pointer items-center justify-center gap-2 text-sm font-bold text-[#20a9ad] hover:text-[#1b8e91]">
          <span>Have a promo code?</span>
          <span className="text-lg group-open:rotate-180 transition-transform">▾</span>
        </summary>
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20"
          />
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-[#0e1b33] transition-colors hover:bg-slate-100"
          >
            Apply
          </button>
        </div>
      </details>

      {/* Trust badges */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1 text-xs text-[#6a6a67]">
          <ShieldCheck size={14} className="text-[#20a9ad]" />
          <span>Secure</span>
        </div>
        <div className="h-3 w-px bg-slate-200" />
        <div className="flex items-center gap-1 text-xs text-[#6a6a67]">
          <Lock size={14} className="text-[#20a9ad]" />
          <span>Encrypted</span>
        </div>
      </div>
    </aside>
  );
}
