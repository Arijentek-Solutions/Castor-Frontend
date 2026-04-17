"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight, Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { formatCartCurrency } from "@/lib/cart/cart-service";
import { useEffect, useRef } from "react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { 
    items, 
    itemCount, 
    subtotal, 
    removeItem, 
    increaseQuantity, 
    decreaseQuantity,
    isEmpty 
  } = useCart();
  
  const drawerRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle click outside to close cart
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Drawer Panel */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[101] h-screen w-full max-w-[480px] border-l border-white/20 bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20a9ad]/10 text-[#20a9ad]">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#0e1b33]">Your Cart</h2>
                    <p className="text-sm font-bold text-[#6a6a67]">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-[#6a6a67] transition-all hover:bg-slate-100 active:scale-95"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-200">
                {isEmpty ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 text-slate-200">
                      <ShoppingBag size={48} />
                    </div>
                    <h3 className="mb-2 text-xl font-black text-[#0e1b33]">Your cart is empty</h3>
                    <p className="mb-8 max-w-[240px] text-sm font-bold text-[#6a6a67]">
                      Looks like you haven&apos;t added any medical supplies to your cart yet.
                    </p>
                    <button
                      onClick={onClose}
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#20a9ad] px-8 text-sm font-black text-white shadow-lg shadow-[#20a9ad]/20 transition-all hover:bg-[#1b8e91] active:scale-95"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={item.productId}
                        className="flex gap-4"
                      >
                        {/* Item Image */}
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-2">
                          <Image
                            src={item.image || "/ImageWithFallback.png"}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>

                        {/* Item Details */}
                        <div className="flex flex-1 flex-col justify-between py-1">
                          <div className="space-y-1">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="line-clamp-2 text-sm font-black text-[#0e1b33]">
                                {item.name}
                              </h4>
                              <button
                                onClick={() => removeItem(item.productId)}
                                className="text-slate-300 transition-colors hover:text-red-500"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#20a9ad]">
                              SKU: {item.sku}
                            </p>
                          </div>

                          <div className="flex items-end justify-between">
                            <div className="flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50/50 p-1">
                              <button
                                onClick={() => decreaseQuantity(item.productId)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0e1b33] shadow-sm transition-all hover:bg-slate-50 active:scale-90"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-4 text-center text-xs font-black text-[#0e1b33]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => increaseQuantity(item.productId)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0e1b33] shadow-sm transition-all hover:bg-slate-50 active:scale-90"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <span className="text-sm font-black text-[#0e1b33]">
                              {formatCartCurrency(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {!isEmpty && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-8 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
                  <div className="mb-6 space-y-3">
                    <div className="flex justify-between text-sm font-bold text-[#6a6a67]">
                      <span>Subtotal</span>
                      <span className="text-[#0e1b33]">{formatCartCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-[#6a6a67]">
                      <span>Shipping</span>
                      <span className="text-[#20a9ad]">Free</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-slate-200 text-lg font-black text-[#0e1b33]">
                      <span>Total Amount</span>
                      <span>{formatCartCurrency(subtotal)}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={onClose}
                    className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#0e1b33] px-8 font-black text-white shadow-xl shadow-[#0e1b33]/10 transition-all hover:bg-[#15294d] active:scale-[0.98]"
                  >
                    Proceed to Checkout
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </Link>

                  <p className="mt-4 text-center text-[11px] font-bold text-[#6a6a67]">
                    Taxes and discounts calculated at checkout
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
