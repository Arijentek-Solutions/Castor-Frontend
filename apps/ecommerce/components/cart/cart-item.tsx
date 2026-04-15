"use client";

import Link from "next/link";

import { formatCartCurrency, MAX_CART_QUANTITY } from "@/lib/cart/cart-service";
import type { CartItem } from "@/types/cart";

type CartLineItemProps = {
  item: CartItem;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
  onQuantityChange: (productId: string, quantity: number) => void;
};

export function CartLineItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  onQuantityChange,
}: CartLineItemProps) {
  const itemTotal = item.price * item.quantity;

  return (
    <article className="grid gap-5 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[112px_1fr_auto] sm:p-5">
      <Link
        href={`/products/${item.slug}`}
        className="block overflow-hidden rounded-lg bg-slate-100"
      >
        <span
          role="img"
          aria-label={item.name}
          className="block h-28 w-full bg-cover bg-center sm:h-full"
          style={{ backgroundImage: `url("${item.image}")` }}
        />
      </Link>

      <div className="min-w-0 space-y-3">
        <div>
          <Link
            href={`/products/${item.slug}`}
            className="text-lg font-semibold text-slate-950 transition-colors hover:text-[#168f92]"
          >
            {item.name}
          </Link>
          <p className="mt-1 text-sm text-slate-500">
            {formatCartCurrency(item.price)} each
          </p>
        </div>

        <button
          type="button"
          onClick={() => onRemove(item.productId)}
          className="text-sm font-semibold text-slate-500 transition-colors hover:text-red-600"
        >
          Remove
        </button>
      </div>

      <div className="flex flex-col gap-4 sm:items-end sm:justify-between">
        <p className="text-lg font-bold text-slate-950">
          {formatCartCurrency(itemTotal)}
        </p>

        <div className="flex h-11 w-fit items-center overflow-hidden rounded-lg border border-slate-200 bg-white">
          <button
            type="button"
            onClick={() => onDecrease(item.productId)}
            className="h-11 w-11 text-lg font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            aria-label={`Decrease quantity for ${item.name}`}
          >
            -
          </button>

          <input
            type="number"
            min={1}
            max={MAX_CART_QUANTITY}
            value={item.quantity}
            onChange={(event) =>
              onQuantityChange(item.productId, Number(event.target.value))
            }
            className="h-11 w-14 border-x border-slate-200 text-center text-sm font-semibold text-slate-950 outline-none"
            aria-label={`Quantity for ${item.name}`}
          />

          <button
            type="button"
            onClick={() => onIncrease(item.productId)}
            className="h-11 w-11 text-lg font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            aria-label={`Increase quantity for ${item.name}`}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
