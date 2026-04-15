import Link from "next/link";

import { formatCartCurrency } from "@/lib/cart/cart-service";

type CartSummaryProps = {
  itemCount: number;
  subtotal: number;
};

export function CartSummary({ itemCount, subtotal }: CartSummaryProps) {
  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-slate-950">Order summary</h2>
      </div>

      <dl className="space-y-4 py-5">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-sm text-slate-600">Items</dt>
          <dd className="text-sm font-semibold text-slate-950">{itemCount}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-sm text-slate-600">Subtotal</dt>
          <dd className="text-sm font-semibold text-slate-950">
            {formatCartCurrency(subtotal)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
          <dt className="text-base font-bold text-slate-950">Estimated total</dt>
          <dd className="text-base font-bold text-slate-950">
            {formatCartCurrency(subtotal)}
          </dd>
        </div>
      </dl>

      <Link
        href="/checkout"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#168f92] px-5 text-sm font-bold text-white transition-colors hover:bg-[#0f7376] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168f92]"
      >
        Continue to checkout
      </Link>
    </aside>
  );
}
