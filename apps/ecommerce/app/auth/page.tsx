"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthForms, type AuthFormData } from "@castor/ui";
import axios from "axios";
import toast from "react-hot-toast";

function EcommerceAuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlMode = searchParams.get("mode") as "login" | "signup" | null;
  const defaultMode = urlMode || "signup";

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL 

  const handleAuth = async (data: AuthFormData, mode: "login" | "signup") => {
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      if (mode === "signup") {
        if (data.password !== data.confirmPassword) {
          setErrorMessage("Passwords do not match");
          toast.error("Passwords do not match");
          setIsLoading(false);
          return;
        }

        await axios.post(`${apiUrl}/auth/register`, {
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        });

        toast.success("Registration successful! Redirecting to OTP verification...");
        setSuccessMessage("Registration successful! Redirecting...");

        setTimeout(() => {
          const callbackQuery = callbackUrl ? `&callbackUrl=${encodeURIComponent(callbackUrl)}` : "";
          router.push(`/auth/verify-otp?email=${encodeURIComponent(data.email || "")}${callbackQuery}`);
        }, 1500);

      } else {
        const response = await axios.post(
          `${apiUrl}/auth/login`,
          {
            email: data.email,
            password: data.password,
          },
          {
            withCredentials: true,
          }
        );

        const result = response.data;
        if (result.user) {
          toast.success("Login successful!");
          setTimeout(() => {
            router.push("/dashboard");
          }, 1000);
        } else {
          throw new Error("No user returned from server");
        }
      }
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || err.response?.data?.message || err.message || "An unexpected error occurred";
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForms
      defaultMode={defaultMode}
      onSubmit={handleAuth}
      isLoading={isLoading}
      errorMessage={errorMessage}
      successMessage={successMessage}
    />
  );
}

export default function EcommerceAuthPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white p-4">
        <div className="text-gray-500">Loading...</div>
      </div>
    }>
      <EcommerceAuthContent />
    </Suspense>
  );
}
