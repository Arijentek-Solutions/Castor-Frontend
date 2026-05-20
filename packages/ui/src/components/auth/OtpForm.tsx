"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OtpFormProps {
  email: string;
  onSubmit?: (otp: string) => Promise<void> | void;
  onResend?: () => Promise<void> | void;
  isLoading?: boolean;
  errorMessage?: string | null;
  successMessage?: string | null;
}

export function OtpForm({
  email,
  onSubmit,
  onResend,
  isLoading = false,
  errorMessage = null,
  successMessage = null,
}: OtpFormProps) {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit || otp.length < 4) return; // Support 4-6 digit OTPs
    onSubmit(otp);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white p-4 pt-36 sm:pt-44 pb-12 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_32px_80px_rgba(13,24,43,0.18)] border border-gray-100 sm:p-10 relative overflow-hidden"
      >
        {/* Header */}
        <div className="mb-8 text-center relative z-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#20a9ad]/10">
            <svg
              className="h-6 w-6 text-[#20a9ad]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#171717]" id="otp-title">
            Verify your email
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            We've sent a verification code to <span className="font-semibold text-[#171717]">{email}</span>
          </p>
        </div>

        {/* Error / Success Messages */}
        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-600 border border-red-100"
              id="otp-error-msg"
            >
              {errorMessage}
            </motion.div>
          )}
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 rounded-xl bg-green-50 p-3 text-sm text-green-600 border border-green-100"
              id="otp-success-msg"
            >
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit} id="otp-form">
          <div>
            <label
              htmlFor="otp"
              className="block text-center text-sm font-medium text-[#171717] mb-4"
            >
              Enter Verification Code
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength={6}
              required
              disabled={isLoading}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              className="block w-full tracking-[1.5em] text-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-xl font-bold text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50"
              placeholder="••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading || otp.length < 4}
              id="otp-submit-btn"
              className="flex w-full justify-center rounded-full bg-[#20a9ad] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_15px_-3px_rgba(32,169,173,0.2)] transition-colors duration-200 hover:bg-[#1c989c] focus:outline-none focus:ring-2 focus:ring-[#20a9ad] focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>
          </div>
        </form>

        {/* Resend Footer */}
        {onResend && (
          <div className="mt-8 text-center text-sm text-gray-500">
            Didn't receive the code?{" "}
            <button
              type="button"
              onClick={onResend}
              disabled={isLoading}
              id="otp-resend-btn"
              className="font-medium text-[#20a9ad] transition-colors hover:text-[#1c989c] focus:outline-none disabled:opacity-50"
            >
              Resend Code
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
