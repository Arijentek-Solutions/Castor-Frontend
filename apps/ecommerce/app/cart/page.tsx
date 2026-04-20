"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { CartLineItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { EmptyCart } from "@/components/cart/empty-cart";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const {
    items,
    itemCount,
    subtotal,
    isEmpty,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
  } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client is mounted and cart is loaded from localStorage
  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#168f92]">
              Shopping cart
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Review your order
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Confirm quantities before moving into the static checkout flow.
            </p>
          </div>

          <Link
            href="/products"
            className="text-sm font-bold text-slate-700 transition-colors hover:text-[#168f92]"
          >
            Continue shopping
          </Link>
        </div>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <section className="space-y-4" aria-label="Cart items">
              {items.map((item: any) => (
                <CartLineItem
                  key={item.productId}
                  item={item}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeItem}
                  onQuantityChange={updateQuantity}
                />
              ))}
            </section>

            <CartSummary itemCount={itemCount} subtotal={subtotal} />
          </div>
        )}
      </div>
    </main>
  );
}
