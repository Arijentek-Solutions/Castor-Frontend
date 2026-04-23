"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productId: string;
  quantity?: number;
}

export function PricingModal({ isOpen, onClose, productName, productId, quantity = 1 }: PricingModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const jotformUrl = `https://form.jotform.com/261111682493051?productName=${encodeURIComponent(
    productName
  )}&productId=${encodeURIComponent(productId)}&quantity=${quantity}&source=Call%20for%20Pricing`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0E1B33]/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative h-[90vh] w-full max-w-[800px] overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-4 sm:px-8">
              <div>
                <h2 className="text-xl font-black text-[#0E1B33] sm:text-2xl">
                  Request Pricing
                </h2>
                <p className="text-sm text-[#6A6A67]">
                  {productName}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#6A6A67] hover:bg-[#F3F4F6] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Jotform Embed */}
            <div className="relative h-[calc(90vh-80px)] w-full overflow-hidden bg-slate-50">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                  <Loader2 className="h-10 w-10 animate-spin text-[#20a9ad]" />
                  <p className="mt-4 text-sm font-medium text-[#6A6A67]">Loading pricing form...</p>
                </div>
              )}
              <iframe
                src={jotformUrl}
                title="Pricing Request Form"
                className="h-full w-full border-none"
                onLoad={() => setIsLoading(false)}
                allow="geolocation; microphone; camera"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
