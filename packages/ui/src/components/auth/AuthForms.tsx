"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AuthFormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface AuthFormsProps {
  defaultMode?: "login" | "signup";
  onSubmit?: (data: AuthFormData, mode: "login" | "signup") => Promise<void> | void;
  isLoading?: boolean;
  errorMessage?: string | null;
  successMessage?: string | null;
}

export function AuthForms({
  defaultMode = "signup",
  onSubmit,
  isLoading = false,
  errorMessage = null,
  successMessage = null,
}: AuthFormsProps) {
  const [isLogin, setIsLogin] = useState(defaultMode === "login");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    const formData = new FormData(e.currentTarget);
    const data: AuthFormData = {};

    if (isLogin) {
      data.email = formData.get("email") as string;
      data.password = formData.get("password") as string;
    } else {
      data.name = formData.get("name") as string;
      data.email = formData.get("email") as string;
      data.password = formData.get("password") as string;
      data.confirmPassword = formData.get("confirm-password") as string;
    }

    onSubmit(data, isLogin ? "login" : "signup");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white p-4 pt-36 sm:pt-44 pb-12 font-sans">
      <motion.div
        layout
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-[0_32px_80px_rgba(13,24,43,0.18)] border border-gray-100 sm:p-10 relative overflow-hidden"
      >
        {/* Header */}
        <motion.div layout className="mb-8 text-center relative z-10">
          <motion.div
            layout
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#20a9ad]/10"
          >
            <svg
              className="h-6 w-6 text-[#20a9ad]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.path
                    key="login-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                ) : (
                  <motion.path
                    key="signup-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                )}
              </AnimatePresence>
            </svg>
          </motion.div>
          <motion.h1 layout className="text-2xl font-bold tracking-tight text-[#171717]" id="auth-title">
            {isLogin ? "Welcome back" : "Create an account"}
          </motion.h1>
          <motion.p layout className="mt-2 text-sm text-gray-500">
            {isLogin
              ? "Please sign in to your account to continue"
              : "Sign up to get started"}
          </motion.p>
        </motion.div>

        {/* Error / Success Messages */}
        <AnimatePresence>
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-600 border border-red-100"
              id="auth-error-msg"
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
              id="auth-success-msg"
            >
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Forms */}
        <div className="relative z-10" style={{ perspective: 1000 }}>
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.3 }}
              >
                <form className="space-y-6" onSubmit={handleSubmit} id="login-form">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#171717]"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        disabled={isLoading}
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-[#171717]"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        disabled={isLoading}
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-[#20a9ad] transition-colors hover:text-[#1c989c]"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      id="login-submit-btn"
                      className="flex w-full justify-center rounded-full bg-[#20a9ad] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_15px_-3px_rgba(32,169,173,0.2)] transition-colors duration-200 hover:bg-[#1c989c] focus:outline-none focus:ring-2 focus:ring-[#20a9ad] focus:ring-offset-2 disabled:opacity-50"
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-gray-500">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    disabled={isLoading}
                    id="switch-to-signup-btn"
                    className="font-medium text-[#20a9ad] transition-colors hover:text-[#1c989c] focus:outline-none disabled:opacity-50"
                  >
                    Sign up now
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.3 }}
              >
                <form className="space-y-6" onSubmit={handleSubmit} id="signup-form">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#171717]"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        disabled={isLoading}
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="signup-email"
                        className="block text-sm font-medium text-[#171717]"
                      >
                        Email address
                      </label>
                      <input
                        id="signup-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        disabled={isLoading}
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="signup-password"
                        className="block text-sm font-medium text-[#171717]"
                      >
                        Password
                      </label>
                      <input
                        id="signup-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        disabled={isLoading}
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50"
                        placeholder="••••••••"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="confirm-password"
                        className="block text-sm font-medium text-[#171717]"
                      >
                        Confirm Password
                      </label>
                      <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        disabled={isLoading}
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      id="signup-submit-btn"
                      className="flex w-full justify-center rounded-full bg-[#20a9ad] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_15px_-3px_rgba(32,169,173,0.2)] transition-colors duration-200 hover:bg-[#1c989c] focus:outline-none focus:ring-2 focus:ring-[#20a9ad] focus:ring-offset-2 disabled:opacity-50"
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    disabled={isLoading}
                    id="switch-to-login-btn"
                    className="font-medium text-[#20a9ad] transition-colors hover:text-[#1c989c] focus:outline-none disabled:opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
