"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ShieldCheck, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

const JOTFORM_BASE_URL = "https://form.jotform.com/261063439018050";

type InsuranceItem = {
  readonly productId: string;
  readonly name: string;
  readonly sku: string;
  readonly price: number;
  readonly quantity: number;
};

type InsuranceJotformProps = {
  readonly items: readonly InsuranceItem[];
  readonly onFormSubmitted: () => void;
};

export function InsuranceJotform({ items, onFormSubmitted }: InsuranceJotformProps) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const jotformUrl = useMemo(() => {
    const params = new URLSearchParams();

    const productDetails = items.length === 1 
      ? `${items[0].name} (Qty: ${items[0].quantity})`
      : items.map((i, index) => `${index + 1}. ${i.name} (Qty: ${i.quantity})`).join("\n");

    const productNames = items.map((i) => i.name).join("; ");
    const productSkus = items.map((i) => i.sku).join("; ");
    const productPrices = items.map((i) => `$${i.price.toFixed(2)}`).join("; ");
    const productIds = items.map((i) => i.productId).join("; ");
    const productQuantities = items.map((i) => i.quantity).join("; ");
    const totalAmount = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    params.set("product", productDetails);
    params.set("productName", productNames);
    params.set("productSku", productSkus);
    params.set("productPrice", productPrices);
    params.set("productId", productIds);
    params.set("productQuantity", productQuantities);
    params.set("totalAmount", `$${totalAmount.toFixed(2)}`);
    params.set("itemCount", items.length.toString());
    return `${JOTFORM_BASE_URL}?${params.toString().replaceAll("+", "%20")}`;
  }, [items]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const expectedOrigin = new URL(JOTFORM_BASE_URL).origin;
      if (event.origin !== expectedOrigin) {
        return;
      }
      if (typeof event.data === "string" && event.data.includes("submission-completed")) {
        setIsFormSubmitted(true);
        onFormSubmitted();
        return;
      }

      if (event.data && typeof event.data === "object") {
        if (
          event.data.action === "submission-completed" ||
          event.data.type === "jotform:submission:complete"
        ) {
          setIsFormSubmitted(true);
          onFormSubmitted();
          return;
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onFormSubmitted]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border-2 border-[rgba(0,130,54,0.15)] bg-[#f0fdf4] p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008236]/10">
            <ShieldCheck size={22} className="text-[#008236]" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#0e1b33]">Insurance Claim Form</h4>
            <p className="text-sm text-[#6a6a67]">
              Complete the form below to submit your insurance claim for this order
            </p>
          </div>
        </div>

        <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-[#0e1b33] mb-3">Products in this claim:</p>
          <ul className="space-y-0">
            {items.map((item) => (
              <li key={item.productId} className="flex items-start justify-between text-xs text-[#6a6a67] py-3 border-b border-slate-100 last:border-0 last:pb-0 first:pt-0">
                <div className="pr-4">
                  <span className="block font-bold text-[#0e1b33] mb-1">{item.name}</span>
                  <span className="text-[11px] text-slate-500">SKU: {item.sku}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="block font-bold text-[#0e1b33]">${(item.price * item.quantity).toFixed(2)}</span>
                  <span className="text-[11px] text-slate-500 pt-0.5">Qty: {item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {mounted ? (
          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-[2px]">
                <Loader2 className="h-10 w-10 animate-spin text-[#20a9ad]" />
                <p className="mt-4 text-sm font-medium text-[#6a6a67]">Loading insurance form...</p>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={jotformUrl}
              title="Insurance Claim Form"
              className="h-[600px] w-full border-0"
              onLoad={() => setIsLoading(false)}
              allow="camera; microphone; geolocation"
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-slate-200 h-[600px] flex items-center justify-center bg-slate-50">
            <div className="text-center">
              <Loader2 className="h-10 w-10 animate-spin text-[#20a9ad] mx-auto mb-3" />
              <p className="text-sm text-[#6a6a67]">Loading insurance form...</p>
            </div>
          </div>
        )}

        {isFormSubmitted && (
          <div className="mt-6 flex items-start gap-4 rounded-xl bg-[#dcfce7] p-5">
            <CheckCircle size={24} className="shrink-0 text-[#008236] mt-0.5" />
            <div>
              <p className="text-base font-bold text-[#008236] sm:text-lg">
                Insurance form submitted successfully
              </p>
              <p className="mt-1 text-sm text-[#008236]/90">
                Our team will review your application and contact you soon.
              </p>
            </div>
          </div>
        )}
      </div>

      {!isFormSubmitted && (
        <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
          <AlertCircle size={16} className="mt-0.5 text-amber-600 shrink-0" />
          <span className="text-xs text-amber-700">
            Please complete and submit the insurance form above before placing your order.
          </span>
        </div>
      )}
    </div>
  );
}
