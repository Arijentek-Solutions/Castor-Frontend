"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { OtpForm } from "@castor/ui";
import axios from "axios";
import toast from "react-hot-toast";

function VerifyOtpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const callbackUrl = searchParams.get("callbackUrl");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!email) {
      toast.error("No email specified for verification. Redirecting back...");
      setTimeout(() => {
        const callbackQuery = callbackUrl ? `?callbackUrl=${encodeURIComponent(callbackUrl)}` : "";
        router.push(`/auth${callbackQuery}`);
      }, 2000);
    }
  }, [email, callbackUrl, router]);

  const handleVerifyOtp = async (otp: string) => {
    if (!email) return;

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/backend";

    try {
      await axios.post(`${apiUrl}/auth/verify-otp`, {
        email,
        otp,
      });

      toast.success("Email verified successfully! Redirecting to login...");
      setSuccessMessage("Verification successful! Redirecting to login...");

      setTimeout(() => {
        const callbackQuery = callbackUrl ? `&callbackUrl=${encodeURIComponent(callbackUrl)}` : "";
        router.push(`/auth?mode=login${callbackQuery}`);
      }, 1500);

    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.response?.data?.message || err.message || "Invalid OTP code";
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) return;

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/backend";

    try {
      await axios.post(`${apiUrl}/auth/resend-otp`, { email });

      toast.success("Verification code resent successfully!");
      setSuccessMessage("Code resent successfully!");
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.response?.data?.message || err.message || "Failed to resend code";
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  if (!email) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <div className="text-gray-500">Redirecting...</div>
      </div>
    );
  }

  return (
    <OtpForm
      email={email}
      onSubmit={handleVerifyOtp}
      onResend={handleResendOtp}
      isLoading={isLoading}
      errorMessage={errorMessage}
      successMessage={successMessage}
    />
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <div className="text-gray-500">Loading...</div>
      </div>
    }>
      <VerifyOtpContent />
    </Suspense>
  );
}
