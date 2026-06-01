"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AuthFormData {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface FieldErrors {
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

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function AuthForms({
  defaultMode = "signup",
  onSubmit,
  isLoading = false,
  errorMessage = null,
  successMessage = null,
}: AuthFormsProps) {
  const [isLogin, setIsLogin] = useState(defaultMode === "login");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const clearFieldError = useCallback((field: keyof FieldErrors) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validateSignupForm = useCallback((data: AuthFormData): FieldErrors => {
    const errors: FieldErrors = {};
    if (!data.name?.trim()) {
      errors.name = "Name is required.";
    }
    if (!data.email?.trim()) {
      errors.email = "Email is required.";
    } else if (!validateEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!data.password) {
      errors.password = "Password is required.";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    return errors;
  }, []);

  const validateLoginForm = useCallback((data: AuthFormData): FieldErrors => {
    const errors: FieldErrors = {};
    if (!data.email?.trim()) {
      errors.email = "Email is required.";
    } else if (!validateEmail(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!data.password) {
      errors.password = "Password is required.";
    }
    return errors;
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;

    const formData = new FormData(e.currentTarget);
    const data: AuthFormData = {};

    if (isLogin) {
      data.email = formData.get("email") as string;
      data.password = formData.get("password") as string;
      const errors = validateLoginForm(data);
      setFieldErrors(errors);
      if (Object.keys(errors).length > 0) return;
    } else {
      data.name = formData.get("name") as string;
      data.email = formData.get("email") as string;
      data.password = formData.get("password") as string;
      data.confirmPassword = formData.get("confirm-password") as string;
      const errors = validateSignupForm(data);
      setFieldErrors(errors);
      if (Object.keys(errors).length > 0) return;
    }

    onSubmit(data, isLogin ? "login" : "signup");
  };

  const inputErrorClass = "border-red-400 focus:border-red-500 focus:ring-red-500";
  const fieldErrorClass = "mt-1 text-xs text-red-600";

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
              aria-hidden="true"
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
          <motion.p layout className="mt-2 text-sm text-gray-600">
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
              role="alert"
              aria-live="assertive"
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
              role="status"
              aria-live="polite"
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
                <form className="space-y-6" onSubmit={handleSubmit} id="login-form" noValidate>
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
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "login-email-error" : undefined}
                        className={`mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50 ${fieldErrors.email ? inputErrorClass : "border-gray-200"}`}
                        placeholder="you@example.com"
                        onChange={() => clearFieldError("email")}
                      />
                      {fieldErrors.email && (
                        <p id="login-email-error" className={fieldErrorClass} role="alert">{fieldErrors.email}</p>
                      )}
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
                        aria-invalid={!!fieldErrors.password}
                        aria-describedby={fieldErrors.password ? "login-password-error" : undefined}
                        className={`mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50 ${fieldErrors.password ? inputErrorClass : "border-gray-200"}`}
                        placeholder="••••••••"
                        onChange={() => clearFieldError("password")}
                      />
                      {fieldErrors.password && (
                        <p id="login-password-error" className={fieldErrorClass} role="alert">{fieldErrors.password}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <button
                        type="button"
                        className="font-medium text-[#0e7f82] transition-colors hover:text-[#0a6b6e] focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2"
                      >
                        Forgot password?
                      </button>
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
                <div className="mt-8 text-center text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setIsLogin(false); setFieldErrors({}); }}
                    disabled={isLoading}
                    id="switch-to-signup-btn"
                    className="font-medium text-[#0e7f82] transition-colors hover:text-[#0a6b6e] focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2 disabled:opacity-50"
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
                <form className="space-y-6" onSubmit={handleSubmit} id="signup-form" noValidate>
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
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? "signup-name-error" : undefined}
                        className={`mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50 ${fieldErrors.name ? inputErrorClass : "border-gray-200"}`}
                        placeholder="John Doe"
                        onChange={() => clearFieldError("name")}
                      />
                      {fieldErrors.name && (
                        <p id="signup-name-error" className={fieldErrorClass} role="alert">{fieldErrors.name}</p>
                      )}
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
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "signup-email-error" : undefined}
                        className={`mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50 ${fieldErrors.email ? inputErrorClass : "border-gray-200"}`}
                        placeholder="you@example.com"
                        onChange={() => clearFieldError("email")}
                      />
                      {fieldErrors.email && (
                        <p id="signup-email-error" className={fieldErrorClass} role="alert">{fieldErrors.email}</p>
                      )}
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
                        aria-invalid={!!fieldErrors.password}
                        aria-describedby={fieldErrors.password ? "signup-password-error" : undefined}
                        className={`mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50 ${fieldErrors.password ? inputErrorClass : "border-gray-200"}`}
                        placeholder="••••••••"
                        onChange={() => clearFieldError("password")}
                      />
                      {fieldErrors.password && (
                        <p id="signup-password-error" className={fieldErrorClass} role="alert">{fieldErrors.password}</p>
                      )}
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
                        aria-invalid={!!fieldErrors.confirmPassword}
                        aria-describedby={fieldErrors.confirmPassword ? "signup-confirm-error" : undefined}
                        className={`mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#171717] transition-colors focus:border-[#20a9ad] focus:outline-none focus:ring-1 focus:ring-[#20a9ad] disabled:opacity-50 ${fieldErrors.confirmPassword ? inputErrorClass : "border-gray-200"}`}
                        placeholder="••••••••"
                        onChange={() => clearFieldError("confirmPassword")}
                      />
                      {fieldErrors.confirmPassword && (
                        <p id="signup-confirm-error" className={fieldErrorClass} role="alert">{fieldErrors.confirmPassword}</p>
                      )}
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
                <div className="mt-8 text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setIsLogin(true); setFieldErrors({}); }}
                    disabled={isLoading}
                    id="switch-to-login-btn"
                    className="font-medium text-[#0e7f82] transition-colors hover:text-[#0a6b6e] focus-visible:outline-2 focus-visible:outline-[#20a9ad] focus-visible:outline-offset-2 disabled:opacity-50"
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
