import Link from "next/link";

export function EmptyCart() {
  return (
    <section className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#168f92]">
        Cart is empty
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        Start with the products your team needs.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
        Self-pay products added from the catalog will appear here. Insurance and
        pricing-request products use their own request flows.
      </p>
      <Link
        href="/products"
        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#168f92] px-6 text-sm font-bold text-white transition-colors hover:bg-[#0f7376] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168f92]"
      >
        Browse products
      </Link>
    </section>
  );
}
