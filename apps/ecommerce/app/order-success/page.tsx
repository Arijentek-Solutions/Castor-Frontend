"use client";

export const dynamic = 'force-dynamic';

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Package, Truck, ShoppingBag, HelpCircle } from "lucide-react";

import { formatCartCurrency } from "@/lib/cart/cart-service";
import type { Order } from "@/types/checkout";

// Animation Variants - Cinematic, slow smooth reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

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

  useEffect(() => {
    if (mounted) {
      if (!orderId || !order) {
        router.push("/");
      }
    }
  }, [mounted, orderId, order, router]);

  if (!mounted || !order) {
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
    <main className="min-h-screen bg-[#f8fafb] px-4 pt-[110px] pb-16 sm:px-6 lg:px-8 lg:pt-[140px]">
      <motion.div 
        className="mx-auto max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Success Hero */}
        <motion.div
          variants={fadeUpVariants}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-black text-[#0e1b33] tracking-tight lg:text-6xl">
              Order Confirmed
            </h1>
            <p className="text-lg text-[#6a6a67] leading-relaxed">
              Your medical supplies are being prepared with care. We&apos;ve sent a summary to your inbox.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#00696c] mb-1">Order Id</p>
              <p className="text-xl font-bold text-[#0e1b33] tracking-tight">{order.id}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              variants={fadeUpVariants}
              className="relative overflow-hidden rounded-[2.5rem] bg-white/70 p-8 shadow-2xl shadow-[#00696c]/5 backdrop-blur-xl border border-white/40"
            >
              {/* Delivery Estimation */}
              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-px rounded-3xl bg-slate-100 p-px overflow-hidden border border-slate-100">
                <div className="flex items-center gap-4 bg-white p-6">
                  <div className="h-10 w-10 rounded-xl bg-[#00696c]/10 flex items-center justify-center text-[#00696c]">
                    <Truck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#6a6a67]">Estimated Arrival</p>
                    <p className="text-base font-bold text-[#0e1b33]">{order.estimatedDelivery}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-6">
                  <div className="h-10 w-10 rounded-xl bg-[#00696c]/10 flex items-center justify-center text-[#00696c]">
                    <Package size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#6a6a67]">Shipping Method</p>
                    <p className="text-base font-bold text-[#0e1b33]">Priority Medical Express</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-8">
                <h3 className="text-xl font-bold text-[#0e1b33] flex items-center gap-3">
                  Your Package
                  <span className="text-sm font-normal text-[#6a6a67] bg-slate-100 px-3 py-1 rounded-full">{order.items.length} items</span>
                </h3>
                
                <div className="divide-y divide-slate-100">
                  {order.items.map((item) => (
                    <div 
                      key={`${item.productId}-${item.quantity}`} 
                      className="py-6 flex gap-6 items-center group"
                    >
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 transition-transform group-hover:scale-105">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#0e1b33] mb-1">{item.name}</h4>
                        <p className="text-[#6a6a67]">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-black text-[#0e1b33]">{formatCartCurrency(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Summary */}
              <div className="mt-12 rounded-3xl bg-slate-50 p-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-[#6a6a67]">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#0e1b33]">{formatCartCurrency(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#6a6a67]">
                    <span>Shipping & Handling</span>
                    <span className="font-bold text-[#00696c]">Free</span>
                  </div>
                  <div className="flex justify-between text-[#6a6a67]">
                    <span>Medical Tax</span>
                    <span className="font-bold text-[#0e1b33]">{formatCartCurrency(order.tax)}</span>
                  </div>
                  <div className="pt-6 border-t border-slate-200 flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#6a6a67]">Total Amount</p>
                      <p className="text-4xl font-black text-[#0e1b33]">{formatCartCurrency(order.total)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-[#00696c] mb-1 flex items-center justify-end gap-1">
                        <CheckCircle size={12} /> Securely Paid
                      </p>
                      <p className="text-sm font-bold text-[#0e1b33]">
                        {order.payment.method === "cod" ? "Cash on Delivery" : order.payment.method === "upi" ? `UPI: ${order.payment.upiId}` : `Card Ending in ${order.payment.lastFour}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Support Section */}
            <motion.div 
              variants={fadeUpVariants}
              className="flex items-center justify-between p-8 rounded-[2rem] bg-[#00696c]/5 border border-[#00696c]/10"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-[#00696c] shadow-sm">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#0e1b33]">Need medical assistance with your order?</p>
                  <p className="text-sm text-[#6a6a67]">Our specialists are available 24/7</p>
                </div>
              </div>
              <a href="http://localhost:3004/contact" className="text-[#00696c] font-bold hover:underline">
                Contact Concierge
              </a>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <motion.div variants={fadeUpVariants}>
              <Link
                href="/"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#00696c] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#004f51] hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag size={20} />
                Continue Shopping
              </Link>
            </motion.div>

            {/* Address Summary */}
            <motion.div 
              variants={fadeUpVariants}
              className="rounded-3xl bg-white p-8 border border-slate-100 shadow-sm space-y-6"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#6a6a67]">Shipping Destination</h3>
              <div className="space-y-4">
                <p className="text-lg font-bold text-[#0e1b33]">{order.customer.fullName}</p>
                <div className="text-sm text-[#6a6a67] space-y-1 leading-relaxed">
                  <p>{order.shippingAddress.addressLine1}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                  <div className="pt-3 flex items-center gap-2 text-[#0e1b33] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00696c]"></span>
                    {order.customer.phone}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
