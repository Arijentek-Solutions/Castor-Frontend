"use client";

import { motion } from "framer-motion";
import { CreditCard, Truck, Lock, ShieldCheck } from "lucide-react";

type PaymentOption = "cod" | "card" | "insurance";

type PaymentSelectorProps = {
  selected: PaymentOption;
  onChange: (method: PaymentOption) => void;
  hasInsuranceItems?: boolean;
};

export function PaymentSelector({ selected, onChange, hasInsuranceItems = false }: PaymentSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-[#0e1b33]">Payment Method</h3>

      <div className={`grid gap-4 ${hasInsuranceItems ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {/* Cash on Delivery */}
        <motion.button
          type="button"
          onClick={() => onChange("cod")}
          className={`flex items-center gap-4 rounded-2xl border-2 p-5 transition-all ${
            selected === "cod"
              ? "border-[#20a9ad] bg-[#20a9ad]/5"
              : "border-slate-200 hover:border-slate-300"
          }`}
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${
              selected === "cod" ? "bg-[#20a9ad] text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            <Truck size={24} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-bold text-[#0e1b33]">Cash on Delivery</div>
            <div className="text-sm text-[#6a6a67]">Pay when your order arrives</div>
          </div>
          <div
            className={`h-5 w-5 rounded-full border-2 ${
              selected === "cod" ? "border-[#20a9ad] bg-[#20a9ad]" : "border-slate-300"
            } flex items-center justify-center`}
          >
            {selected === "cod" && (
              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </motion.button>

        {/* Card / UPI */}
        <motion.button
          type="button"
          onClick={() => onChange("card")}
          className={`flex items-center gap-4 rounded-2xl border-2 p-5 transition-all ${
            selected === "card"
              ? "border-[#20a9ad] bg-[#20a9ad]/5"
              : "border-slate-200 hover:border-slate-300"
          }`}
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${
              selected === "card" ? "bg-[#20a9ad] text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            <CreditCard size={24} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-bold text-[#0e1b33]">Card / UPI</div>
            <div className="text-sm text-[#6a6a67]">Visa, UPI, Netbanking</div>
          </div>
          <div
            className={`h-5 w-5 rounded-full border-2 ${
              selected === "card" ? "border-[#20a9ad] bg-[#20a9ad]" : "border-slate-300"
            } flex items-center justify-center`}
          >
            {selected === "card" && (
              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </motion.button>

        {/* With Insurance - only shown when cart has insurance-covered items */}
        {hasInsuranceItems && (
          <motion.button
            type="button"
            onClick={() => onChange("insurance")}
            className={`flex items-center gap-4 rounded-2xl border-2 p-5 transition-all ${
              selected === "insurance"
                ? "border-[#008236] bg-[#f0fdf4]"
                : "border-slate-200 hover:border-slate-300"
            }`}
            whileHover={{ scale: 0.99 }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                selected === "insurance" ? "bg-[#008236] text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              <ShieldCheck size={24} />
            </div>
            <div className="flex-1 text-left">
              <div className="font-bold text-[#0e1b33]">With Insurance</div>
              <div className="text-sm text-[#6a6a67]">Submit insurance claim</div>
            </div>
            <div
              className={`h-5 w-5 rounded-full border-2 ${
                selected === "insurance" ? "border-[#008236] bg-[#008236]" : "border-slate-300"
              } flex items-center justify-center`}
            >
              {selected === "insurance" && (
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </motion.button>
        )}
      </div>

      {/* Trust indicator */}
      <div className="flex items-center gap-2 text-sm text-[#6a6a67]">
        <Lock size={16} className="text-[#20a9ad]" />
        <span>Secure encrypted payment</span>
      </div>
    </div>
  );
}
