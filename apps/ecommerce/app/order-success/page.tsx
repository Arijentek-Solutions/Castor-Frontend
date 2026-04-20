"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Package, Truck, RotateCcw, ShoppingBag, Home, HelpCircle } from "lucide-react";

import { formatCartCurrency } from "@/lib/cart/cart-service";
import type { Order } from "@/types/checkout";

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f7faf9]">Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");

  // Initialize order from localStorage (client-only to prevent hydration mismatch)
  const [order, setOrder] = useState<Order | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!orderId) return;
    try {
      const stored = localStorage.getItem(`castor:ecommerce:order:${orderId}`);
      if (stored) {
        setOrder(JSON.parse(stored));
      }
    } catch {
      // Ignore errors
    }
  }, [orderId]);

  // Don't render until mounted
  if (!mounted) {
    return (
      <main className="min-h-screen bg-[#f7faf9] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-6 h-16 w-16"
          >
            <Package size={64} className="text-[#20a9ad]" />
          </motion.div>
          <p className="text-lg font-bold text-[#0e1b33]">Loading order details...</p>
        </div>
      </main>
    );
  }

  // Redirect if no orderId or order not found
  useEffect(() => {
    if (!orderId) {
      router.push("/");
      return;
    }
    if (!order) {
      router.push("/");
    }
  }, [orderId, order, router]);

  if (!order) {
    return (
      <main className="min-h-screen bg-[#f7faf9] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-6 h-16 w-16"
          >
            <Package size={64} className="text-[#20a9ad]" />
          </motion.div>
          <p className="text-lg font-bold text-[#0e1b33]">Loading order details...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Success Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm lg:p-12"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#20a9ad]/10">
            <CheckCircle size={48} className="text-[#20a9ad]" />
          </div>
          <h1 className="mb-2 text-4xl font-black text-[#0e1b33] lg:text-5xl">
            Order Confirmed!
          </h1>
          <p className="text-lg text-[#6a6a67]">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <div className="mx-auto mt-6 max-w-md rounded-full bg-slate-100 px-6 py-3">
            <p className="text-sm font-semibold text-slate-600">Order Number</p>
            <p className="text-xl font-black text-[#0e1b33] tracking-wider">{order.id}</p>
          </div>
        </motion.div>

        {/* Order Details */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Delivery Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <Truck className="text-[#20a9ad]" size={24} />
                <h2 className="text-lg font-bold text-[#0e1b33]">Estimated Delivery</h2>
              </div>
              <p className="text-lg font-bold text-[#0e1b33]">{order.estimatedDelivery}</p>
              <p className="text-sm text-[#6a6a67]">Standard shipping (5-7 business days)</p>
            </motion.div>

            {/* Shipping Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-lg font-bold text-[#0e1b33]">Shipping Address</h2>
              <div className="space-y-1 text-[#6a6a67]">
                <p className="font-bold text-[#0e1b33]">{order.customer.fullName}</p>
                <p>{order.shippingAddress.addressLine1}</p>
                {order.shippingAddress.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                </p>
                <p>{order.shippingAddress.country}</p>
                <p className="pt-2">{order.customer.phone}</p>
                <p>{order.customer.email}</p>
              </div>
            </motion.div>

            {/* Payment Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-lg font-bold text-[#0e1b33]">Payment</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#6a6a67]">Method</span>
                  <span className="font-bold text-[#0e1b33]">
                    {order.payment.method === "cod" ? "Cash on Delivery" : order.payment.method === "upi" ? "UPI" : "Card"}
                  </span>
                </div>
                {order.payment.lastFour && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#6a6a67]">Card ending in</span>
                    <span className="font-bold text-[#0e1b33]">•••• {order.payment.lastFour}</span>
                  </div>
                )}
                {order.payment.upiId && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#6a6a67]">UPI ID</span>
                    <span className="font-bold text-[#0e1b33]">{order.payment.upiId}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-[#0e1b33]">Payment Status</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      order.payment.status === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {order.payment.status === "paid" ? "Paid" : "Pending (COD)"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Order Items */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-lg font-bold text-[#0e1b33]">Order Items ({order.items.length})</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={`${item.productId}-${item.quantity}`} className="flex gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
                      {/* Placeholder for image */}
                      <div className="flex h-full items-center justify-center">
                        <ShoppingBag size={24} className="text-slate-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#0e1b33]">{item.name}</h4>
                      <p className="text-sm text-[#6a6a67]">
                        Qty: {item.quantity} × {formatCartCurrency(item.price)}
                      </p>
                    </div>
                    <div className="font-bold text-[#0e1b33]">
                      {formatCartCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6a6a67]">Subtotal</span>
                  <span className="font-semibold text-[#0e1b33]">{formatCartCurrency(order.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6a6a67]">Shipping</span>
                  <span className="font-semibold text-[#0e1b33]">{formatCartCurrency(order.shippingCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6a6a67]">Tax</span>
                  <span className="font-semibold text-[#0e1b33]">{formatCartCurrency(order.tax)}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2">
                  <span className="text-base font-bold text-[#0e1b33]">Total</span>
                  <span className="text-xl font-black text-[#0e1b33]">{formatCartCurrency(order.total)}</span>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 text-lg font-bold text-[#0e1b33]">What&apos;s Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#20a9ad]/10 text-[#20a9ad]">
                    <Package size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0e1b33]">Order Confirmation Email</p>
                    <p className="text-sm text-[#6a6a67]">
                      We&apos;ve sent a confirmation to {order.customer.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#20a9ad]/10 text-[#20a9ad]">
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0e1b33]">Shipping Update</p>
                    <p className="text-sm text-[#6a6a67]">
                      You&apos;ll receive tracking info once your order ships
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#20a9ad]/10 text-[#20a9ad]">
                    <RotateCcw size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0e1b33]">Easy Returns</p>
                    <p className="text-sm text-[#6a6a67]">
                      30-day hassle-free returns. No questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/products"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#20a9ad] px-8 py-4 font-black text-white shadow-lg shadow-[#20a9ad]/20 transition-all hover:bg-[#1b8e91] hover:shadow-[#20a9ad]/40 active:scale-98"
              >
                <ShoppingBag size={20} />
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-black text-[#0e1b33] transition-colors hover:bg-slate-50"
              >
                <Home size={20} />
                Back to Home
              </Link>
            </motion.div>

            {/* Help */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#6a6a67]">
              <HelpCircle size={16} />
              <span>Questions about your order?</span>
              <Link href="/contact" className="font-bold text-[#20a9ad] hover:underline">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
