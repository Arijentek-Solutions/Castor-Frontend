"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ShieldCheck, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/cart-context";

type CheckoutStep = "details" | "payment" | "success";

export default function CheckoutPage() {
  const { isEmpty, subtotal } = useCart();
  const [step, setStep] = useState<CheckoutStep>("details");
  const [shippingMethod, setShippingMethod] = useState<"standard" | "priority">("standard");

  if (isEmpty && step !== "success") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-200">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-black text-[#0e1b33]">Your cart is empty</h1>
          <p className="mt-2 text-[#6a6a67]">Please add some supplies to your cart before checking out.</p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#20a9ad] px-8 font-black text-white shadow-lg shadow-[#20a9ad]/20 transition-all hover:bg-[#1b8e91] active:scale-95"
          >
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-20 pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1720px] px-6 lg:px-12">
        {/* Header / Breadcrumbs */}
        <div className="mb-12">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#6a6a67] transition-colors hover:text-[#20a9ad]"
          >
            <ArrowLeft size={16} />
            Back to Shop
          </Link>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-3xl font-black text-[#0e1b33] lg:text-5xl">Checkout</h1>

            {/* Steps Indicator */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className={`flex items-center gap-2 text-sm font-black ${step === "details" ? "text-[#20a9ad]" : "text-[#6a6a67]"}`}>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-[10px] ${step === "details" ? "border-[#20a9ad] bg-[#20a9ad] text-white" : "border-slate-200 text-slate-400"}`}>1</span>
                Shipping
              </div>
              <ChevronRight size={14} className="text-slate-300" />
              <div className={`flex items-center gap-2 text-sm font-black ${step === "payment" ? "text-[#20a9ad]" : "text-[#6a6a67]"}`}>
                <span className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-[10px] ${step === "payment" ? "border-[#20a9ad] bg-[#20a9ad] text-white" : "border-slate-200 text-slate-400"}`}>2</span>
                Payment
              </div>
              <ChevronRight size={14} className="text-slate-300" />
              <div className={`flex items-center gap-2 text-sm font-black ${step === "success" ? "text-[#20a9ad]" : "text-[#6a6a67]"}`}>
                <CheckCircle2 size={16} className={step === "success" ? "text-[#20a9ad]" : "text-slate-300"} />
                Success
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === "success" ? (
            <Confirmation key="confirmation" />
          ) : (
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
              {/* Left Column: Forms */}
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 space-y-8"
              >
                {step === "details" && (
                  <ShippingForm
                    onNext={() => setStep("payment")}
                    method={shippingMethod}
                    onMethodChange={setShippingMethod}
                  />
                )}
                {step === "payment" && (
                  <PaymentForm
                    onBack={() => setStep("details")}
                    onComplete={() => setStep("success")}
                  />
                )}

                {/* Secure Trust Badges */}
                <div className="flex flex-wrap items-center gap-8 rounded-3xl bg-slate-50/50 p-8">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-[#20a9ad]" size={24} />
                    <div>
                      <h4 className="text-xs font-black text-[#0e1b33]">Secure Checkout</h4>
                      <p className="text-[10px] font-bold text-[#6a6a67]">256-bit SSL Encryption</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                  <div className="flex items-center gap-3">
                    <Truck className="text-[#20a9ad]" size={24} />
                    <div>
                      <h4 className="text-xs font-black text-[#0e1b33]">Tracked Delivery</h4>
                      <p className="text-[10px] font-bold text-[#6a6a67]">Real-time status updates</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Order Summary */}
              <div className="w-full shrink-0 lg:sticky lg:top-40 lg:w-[480px]">
                <OrderSummary shippingMethod={shippingMethod} />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
