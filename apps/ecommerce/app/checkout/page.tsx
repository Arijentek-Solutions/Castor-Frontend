"use client";

import { useState, useMemo, Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, CheckCircle, ArrowLeft, ShieldCheck, Truck, RotateCcw, AlertCircle, CreditCard, Smartphone } from "lucide-react";
import Link from "next/link";

import { useCart } from "@/context/cart-context";
import { PaymentSelector } from "@/components/checkout/payment-selector";
import { ContactAddressForm } from "@/components/checkout/contact-address-form";
import { OrderSummarySidebar } from "@/components/checkout/order-summary-sidebar";
import { InsuranceJotform } from "@/components/checkout/insurance-jotform";
import type { CheckoutFormData, PaymentMethod, Order } from "@/types/checkout";
import { formatCartCurrency, calculateShipping, calculateTax } from "@/lib/cart/cart-service";
import { PRODUCTS } from "@/lib/products/products";
import type { Product } from "@/types/product";

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, subtotal, clearCart, updateQuantity, removeItem } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get product from URL query params (Buy Now flow)
  const productFromUrl: Product | null = (() => {
    const id = searchParams.get("id");
    if (!id) return null;
    return PRODUCTS.find((p) => p.id === id) || null;
  })();

  // Local quantity state for Buy Now product (not in cart)
  const [buyNowQuantity, setBuyNowQuantity] = useState(1);

  // Determine items to display: if productFromUrl exists, show only that product; otherwise show cart items
  const displayItems = productFromUrl
    ? [{
      productId: productFromUrl.id,
      slug: productFromUrl.slug,
      sku: productFromUrl.sku,
      name: productFromUrl.name,
      image: productFromUrl.image,
      price: productFromUrl.price,
      quantity: buyNowQuantity,
    }]
    : items;

  const displaySubtotal = productFromUrl ? productFromUrl.price * buyNowQuantity : subtotal;

  const hasInsuranceItems = useMemo(() => {
    if (productFromUrl) return productFromUrl.insuranceCovered;
    return items.some((item) => {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      return product?.insuranceCovered ?? false;
    });
  }, [productFromUrl, items]);

  const [step, setStep] = useState<"form" | "review" | "processing" | "success">("form");
  const [paymentGroup, setPaymentGroup] = useState<"cod" | "card" | "insurance">("cod");
  const [isUpi, setIsUpi] = useState(false);
  const [insuranceFormSubmitted, setInsuranceFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Derived: final payment method
  const paymentMethod: PaymentMethod = paymentGroup === "cod" ? "cod" : paymentGroup === "insurance" ? "insurance" : isUpi ? "upi" : "card";

  // Form state
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    paymentMethod: "cod",
    saveInfo: false,
    termsAccepted: false,
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    cardName: "",
    upiId: "",
  });

  const shippingCost = useMemo(() => calculateShipping(displaySubtotal), [displaySubtotal]);
  const tax = useMemo(() => calculateTax(displaySubtotal), [displaySubtotal]);
  const total = useMemo(() => displaySubtotal + shippingCost + tax, [displaySubtotal, shippingCost, tax]);
  const handleBuyNowQuantityChange = (delta: number) => {
    setBuyNowQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleBuyNowRemove = () => {
    router.back();
  };
  const handleFormChange = (field: keyof CheckoutFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (paymentGroup === "card") {
      if (isUpi) {
        if (!formData.upiId?.trim()) newErrors.upiId = "UPI ID is required";
      } else {
        if (!formData.cardNumber?.trim()) newErrors.cardNumber = "Card number is required";
        if (!formData.cardExpiry?.trim()) newErrors.cardExpiry = "Expiry date is required";
        if (!formData.cardCvv?.trim()) newErrors.cardCvv = "CVV is required";
        if (!formData.cardName?.trim()) newErrors.cardName = "Cardholder name is required";
      }
    }
    if (paymentGroup === "insurance" && !insuranceFormSubmitted) {
      newErrors.insuranceForm = "Please submit the insurance claim form before continuing";
    }
    if (!formData.termsAccepted) newErrors.terms = "You must accept the terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueToReview = () => {
    if (validateForm()) {
      setStep("review");
    }
  };
  const handlePlaceOrder = () => {
    setStep("processing");
    setTimeout(() => {
      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      });

      const order: Order = {
        id: orderId,
        customer: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        },
        shippingAddress: {
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country,
        },
        payment: {
          method: paymentMethod,
          status: paymentMethod === "cod" || paymentMethod === "insurance" ? "pending" : "paid",
          ...(paymentMethod === "card" && !isUpi
            ? { lastFour: formData.cardNumber?.slice(-4) }
            : {}),
          ...(isUpi ? { upiId: formData.upiId } : {}),
        },
        items: displayItems.map((item) => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal: displaySubtotal,
        shippingCost,
        tax,
        total,
        createdAt: new Date().toISOString(),
        estimatedDelivery,
      };
      const orderKey = `castor:ecommerce:order:${orderId}`;
      localStorage.setItem(orderKey, JSON.stringify(order));
      if (formData.saveInfo) {
      }
      clearCart();
      router.push(`/order-success?orderId=${orderId}`);
    }, 2000);
  };
  if (!mounted) {
    return null;
  }
  return (
    <main className="min-h-screen bg-[#f7faf9] px-4 pt-48 pb-10 sm:px-6 lg:px-8 lg:pt-48 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        {/* Back to cart link */}
        <Link
          href="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#6a6a67] transition-colors hover:text-[#20a9ad]"
        >
          <ArrowLeft size={16} />
          Back to cart
        </Link>

        {/* Processing state overlay */}
        {step === "processing" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-2xl bg-white p-10 text-center shadow-2xl max-w-sm mx-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mx-auto mb-6 h-16 w-16"
              >
                <ShoppingBag size={64} className="text-[#20a9ad]" />
              </motion.div>
              <h2 className="text-2xl font-black text-[#0e1b33]">Processing your order...</h2>
              <p className="mt-2 text-[#6a6a67]">Please do not close this window</p>
            </motion.div>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Left: Checkout Form */}
          <div className="space-y-8">

            {/* Step 1: Form */}
            <AnimatePresence mode="wait">
              {(step === "form" || step === "review") && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {/* Contact & Address */}
                  <ContactAddressForm
                    defaultValues={{
                      ...(formData.saveInfo ? formData : {}),
                    }}
                    onChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
                  />

                  {/* Payment Method */}
                  <section className="space-y-4">
                    <PaymentSelector
                      selected={paymentGroup}
                      onChange={(m) => setPaymentGroup(m)}
                      hasInsuranceItems={hasInsuranceItems}
                    />

                    {/* Card/UPI Form (conditional) */}
                    <AnimatePresence>
                      {paymentGroup === "card" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            {/* Toggle: Card vs UPI */}
                            <div className="flex rounded-full bg-white p-1 shadow-sm">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsUpi(false);
                                  handleFormChange("paymentMethod", "card");
                                }}
                                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${!isUpi ? "bg-[#20a9ad] text-white shadow-md" : "text-slate-600 hover:text-[#0e1b33]"
                                  }`}
                              >
                                <CreditCard size={18} />
                                Card
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setIsUpi(true);
                                  handleFormChange("paymentMethod", "upi");
                                }}
                                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${isUpi ? "bg-[#20a9ad] text-white shadow-md" : "text-slate-600 hover:text-[#0e1b33]"
                                  }`}
                              >
                                <Smartphone size={18} />
                                UPI
                              </button>
                            </div>

                            {isUpi ? (
                              /* UPI Fields */
                              <div className="space-y-4">
                                <div>
                                  <label htmlFor="upiId" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                    UPI ID
                                  </label>
                                  <input
                                    type="text"
                                    id="upiId"
                                    name="upiId"
                                    value={formData.upiId}
                                    onChange={(e) => handleFormChange("upiId", e.target.value)}
                                    placeholder="yourname@paytm"
                                    className={`w-full rounded-xl border ${errors.upiId ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                  />
                                  {errors.upiId && <p className="mt-1 text-sm text-red-500">{errors.upiId}</p>}
                                  <p className="mt-1 text-xs text-[#6a6a67]">Enter your UPI ID (e.g., name@okaxis, name@paytm)</p>
                                </div>
                              </div>
                            ) : (
                              /* Card Fields */
                              <div className="space-y-4">
                                {/* Card Number */}
                                <div>
                                  <label htmlFor="cardNumber" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                    Card Number
                                  </label>
                                  <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    inputMode="numeric"
                                    value={formData.cardNumber}
                                    onChange={(e) => handleFormChange("cardNumber", e.target.value)}
                                    placeholder="1234 5678 9012 3456"
                                    maxLength={19}
                                    className={`w-full rounded-xl border ${errors.cardNumber ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                  />
                                  {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
                                </div>

                                {/* Expiry & CVV */}
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label htmlFor="cardExpiry" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                      Expiry Date
                                    </label>
                                    <input
                                      type="text"
                                      id="cardExpiry"
                                      name="cardExpiry"
                                      inputMode="numeric"
                                      value={formData.cardExpiry}
                                      onChange={(e) => handleFormChange("cardExpiry", e.target.value)}
                                      placeholder="MM/YY"
                                      maxLength={5}
                                      className={`w-full rounded-xl border ${errors.cardExpiry ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                    />
                                    {errors.cardExpiry && <p className="mt-1 text-sm text-red-500">{errors.cardExpiry}</p>}
                                  </div>
                                  <div>
                                    <label htmlFor="cardCvv" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                      CVV
                                    </label>
                                    <input
                                      type="text"
                                      id="cardCvv"
                                      name="cardCvv"
                                      inputMode="numeric"
                                      value={formData.cardCvv}
                                      onChange={(e) => handleFormChange("cardCvv", e.target.value)}
                                      placeholder="123"
                                      maxLength={4}
                                      className={`w-full rounded-xl border ${errors.cardCvv ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                    />
                                    {errors.cardCvv && <p className="mt-1 text-sm text-red-500">{errors.cardCvv}</p>}
                                  </div>
                                </div>

                                {/* Cardholder Name */}
                                <div>
                                  <label htmlFor="cardName" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                    Cardholder Name
                                  </label>
                                  <input
                                    type="text"
                                    id="cardName"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={(e) => handleFormChange("cardName", e.target.value)}
                                    placeholder="As shown on card"
                                    className={`w-full rounded-xl border ${errors.cardName ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                  />
                                  {errors.cardName && <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>}
                                </div>

                                {/* Card Icons */}
                                <div className="flex items-center gap-3 pt-2">
                                  <span className="text-xs font-bold text-[#6a6a67]">We accept:</span>
                                  <div className="flex gap-2">
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      VISA
                                    </div>
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      MC
                                    </div>
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      AMEX
                                    </div>
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      UPI
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Security badge */}
                            <div className="flex items-center justify-center gap-2 pt-2 text-sm text-[#6a6a67]">
                              <ShieldCheck size={16} className="text-[#20a9ad]" />
                              <span>256-bit SSL encrypted payment</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Card/UPI Form (conditional) */}
                    <AnimatePresence>
                      {paymentGroup === "card" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            {/* Toggle: Card vs UPI */}
                            <div className="flex rounded-full bg-white p-1 shadow-sm">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsUpi(false);
                                  handleFormChange("paymentMethod", "card");
                                }}
                                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${!isUpi ? "bg-[#20a9ad] text-white shadow-md" : "text-slate-600 hover:text-[#0e1b33]"
                                  }`}
                              >
                                <CreditCard size={18} />
                                Card
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setIsUpi(true);
                                  handleFormChange("paymentMethod", "upi");
                                }}
                                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${isUpi ? "bg-[#20a9ad] text-white shadow-md" : "text-slate-600 hover:text-[#0e1b33]"
                                  }`}
                              >
                                <Smartphone size={18} />
                                UPI
                              </button>
                            </div>

                            {isUpi ? (
                              /* UPI Fields */
                              <div className="space-y-4">
                                <div>
                                  <label htmlFor="upiId" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                    UPI ID
                                  </label>
                                  <input
                                    type="text"
                                    id="upiId"
                                    name="upiId"
                                    value={formData.upiId}
                                    onChange={(e) => handleFormChange("upiId", e.target.value)}
                                    placeholder="yourname@paytm"
                                    className={`w-full rounded-xl border ${errors.upiId ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                  />
                                  {errors.upiId && <p className="mt-1 text-sm text-red-500">{errors.upiId}</p>}
                                  <p className="mt-1 text-xs text-[#6a6a67]">Enter your UPI ID (e.g., name@okaxis, name@paytm)</p>
                                </div>
                              </div>
                            ) : (
                              /* Card Fields */
                              <div className="space-y-4">
                                {/* Card Number */}
                                <div>
                                  <label htmlFor="cardNumber" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                    Card Number
                                  </label>
                                  <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    inputMode="numeric"
                                    value={formData.cardNumber}
                                    onChange={(e) => handleFormChange("cardNumber", e.target.value)}
                                    placeholder="1234 5678 9012 3456"
                                    maxLength={19}
                                    className={`w-full rounded-xl border ${errors.cardNumber ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                  />
                                  {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
                                </div>

                                {/* Expiry & CVV */}
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label htmlFor="cardExpiry" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                      Expiry Date
                                    </label>
                                    <input
                                      type="text"
                                      id="cardExpiry"
                                      name="cardExpiry"
                                      inputMode="numeric"
                                      value={formData.cardExpiry}
                                      onChange={(e) => handleFormChange("cardExpiry", e.target.value)}
                                      placeholder="MM/YY"
                                      maxLength={5}
                                      className={`w-full rounded-xl border ${errors.cardExpiry ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                    />
                                    {errors.cardExpiry && <p className="mt-1 text-sm text-red-500">{errors.cardExpiry}</p>}
                                  </div>
                                  <div>
                                    <label htmlFor="cardCvv" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                      CVV
                                    </label>
                                    <input
                                      type="text"
                                      id="cardCvv"
                                      name="cardCvv"
                                      inputMode="numeric"
                                      value={formData.cardCvv}
                                      onChange={(e) => handleFormChange("cardCvv", e.target.value)}
                                      placeholder="123"
                                      maxLength={4}
                                      className={`w-full rounded-xl border ${errors.cardCvv ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                    />
                                    {errors.cardCvv && <p className="mt-1 text-sm text-red-500">{errors.cardCvv}</p>}
                                  </div>
                                </div>

                                {/* Cardholder Name */}
                                <div>
                                  <label htmlFor="cardName" className="mb-2 block text-sm font-bold text-[#0e1b33]">
                                    Cardholder Name
                                  </label>
                                  <input
                                    type="text"
                                    id="cardName"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={(e) => handleFormChange("cardName", e.target.value)}
                                    placeholder="As shown on card"
                                    className={`w-full rounded-xl border ${errors.cardName ? "border-red-500" : "border-slate-200"} bg-white px-4 py-3 text-[#0e1b33] placeholder:text-slate-400 focus:border-[#20a9ad] focus:outline-none focus:ring-2 focus:ring-[#20a9ad]/20`}
                                  />
                                  {errors.cardName && <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>}
                                </div>

                                {/* Card Icons */}
                                <div className="flex items-center gap-3 pt-2">
                                  <span className="text-xs font-bold text-[#6a6a67]">We accept:</span>
                                  <div className="flex gap-2">
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      VISA
                                    </div>
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      MC
                                    </div>
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      AMEX
                                    </div>
                                    <div className="rounded-md bg-white px-2 py-1 text-xs font-bold text-[#0e1b33] shadow-sm border border-slate-200">
                                      UPI
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Security badge */}
                            <div className="flex items-center justify-center gap-2 pt-2 text-sm text-[#6a6a67]">
                              <ShieldCheck size={16} className="text-[#20a9ad]" />
                              <span>256-bit SSL encrypted payment</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Insurance JotForm (conditional) */}
                    <AnimatePresence>
                      {paymentGroup === "insurance" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <InsuranceJotform
                            items={displayItems
                              .filter((item) => {
                                const product = PRODUCTS.find((p) => p.id === item.productId);
                                return product?.insuranceCovered;
                              })
                              .map((item) => ({
                                productId: item.productId,
                                name: item.name,
                                sku: item.sku,
                                price: item.price,
                                quantity: item.quantity,
                              }))}
                            onFormSubmitted={() => {
                              setInsuranceFormSubmitted(true);
                              clearCart();
                            }}
                          />
                          {errors.insuranceForm && (
                            <p className="mt-3 flex items-center gap-2 text-sm text-red-500">
                              <AlertCircle size={16} />
                              {errors.insuranceForm}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </section>

                  {/* Terms & Save Info */}
                  {paymentGroup !== "insurance" && (
                    <>
                      <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.saveInfo}
                            onChange={(e) => handleFormChange("saveInfo", e.target.checked)}
                            className="mt-1 h-5 w-5 rounded border-slate-300 text-[#20a9ad] focus:ring-[#20a9ad]"
                          />
                          <span className="text-sm text-[#0e1b33]">
                            Save my information for faster checkout next time
                          </span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.termsAccepted}
                            onChange={(e) => handleFormChange("termsAccepted", e.target.checked)}
                            className="mt-1 h-5 w-5 rounded border-slate-300 text-[#20a9ad] focus:ring-[#20a9ad]"
                          />
                          <span className="text-sm text-[#0e1b33]">
                            I agree to the{" "}
                            <Link href="/terms" className="text-[#20a9ad] hover:underline">
                              Terms & Conditions
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-[#20a9ad] hover:underline">
                              Privacy Policy
                            </Link>
                          </span>
                        </label>

                        {errors.terms && (
                          <p className="flex items-center gap-2 text-sm text-red-500">
                            <AlertCircle size={16} />
                            {errors.terms}
                          </p>
                        )}
                      </section>

                      {/* Continue Button */}
                      <motion.button
                        onClick={handleContinueToReview}
                        className="w-full rounded-2xl bg-[#20a9ad] py-5 font-black text-white shadow-lg shadow-[#20a9ad]/20 transition-all hover:bg-[#1b8e91] hover:shadow-[#20a9ad]/40 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Continue to Review
                      </motion.button>
                    </>
                  )}

                  {step === "review" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h3 className="mb-4 text-lg font-bold text-[#0e1b33]">Review Your Order</h3>

                        {/* Shipping summary */}
                        <div className="space-y-2 border-b border-slate-100 pb-4">
                          <p className="text-sm font-bold text-[#20a9ad] uppercase tracking-wide">Shipping to</p>
                          <p className="font-bold text-[#0e1b33]">{formData.fullName}</p>
                          <p className="text-sm text-[#6a6a67]">
                            {formData.addressLine1}
                            {formData.addressLine2 && `, ${formData.addressLine2}`}
                          </p>
                          <p className="text-sm text-[#6a6a67]">
                            {formData.city}, {formData.state} {formData.zipCode}
                          </p>
                          <p className="text-sm text-[#6a6a67]">{formData.country}</p>
                          <p className="mt-1 text-sm text-[#6a6a67]">{formData.phone}</p>
                        </div>

                        {/* Payment summary */}
                        <div className="mt-4 space-y-2 border-b border-slate-100 pb-4">
                          <p className="text-sm font-bold text-[#20a9ad] uppercase tracking-wide">Payment Method</p>
                          <p className="font-bold text-[#0e1b33]">
                            {paymentMethod === "cod"
                              ? "Cash on Delivery"
                              : paymentMethod === "insurance"
                                ? "Insurance Claim"
                                : isUpi
                                  ? `UPI: ${formData.upiId}`
                                  : `Card ending in ${formData.cardNumber?.slice(-4)}`}
                          </p>
                        </div>
                      </div>

                      {/* Edit buttons */}
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep("form")}
                          className="flex-1 rounded-xl border border-slate-200 bg-white px-6 py-3 font-bold text-[#0e1b33] transition-colors hover:bg-slate-50"
                        >
                          Edit Details
                        </button>
                      </div>

                      {/* Place Order button */}
                      <motion.button
                        onClick={handlePlaceOrder}
                        className="w-full rounded-2xl bg-[#168f92] py-5 font-black text-white shadow-lg shadow-[#168f92]/20 transition-all hover:bg-[#0f7376] hover:shadow-[#168f92]/40 active:scale-98"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Place Order â€” {formatCartCurrency(total)}
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Order Summary Sidebar */}
          <OrderSummarySidebar
            items={displayItems}
            subtotal={displaySubtotal}
            shippingCost={shippingCost}
            tax={tax}
            total={total}
            onUpdateQuantity={
              productFromUrl
                ? () => { }
                : updateQuantity
            }
            onRemoveItem={
              productFromUrl
                ? () => router.back()
                : (productId: string) => {
                  const willBeEmpty = items.length === 1;
                  removeItem(productId);
                  if (willBeEmpty) {
                    router.push("/");
                  }
                }
            }
            isBuyNowMode={!!productFromUrl}
            buyNowQuantity={buyNowQuantity}
            onBuyNowQuantityChange={handleBuyNowQuantityChange}
          />
        </div>

        {/* Trust signals */}
        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-8 border-t border-slate-200 pt-8 text-sm text-[#6a6a67]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-[#20a9ad]" />
            <span className="font-bold">Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck size={20} className="text-[#20a9ad]" />
            <span className="font-bold">Free Shipping over $50</span>
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw size={20} className="text-[#20a9ad]" />
            <span className="font-bold">30-Day Returns</span>
          </div>
        </div>
      </div>
    </main>
  );
}
