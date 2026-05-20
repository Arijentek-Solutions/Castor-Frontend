"use client";

import { useEffect } from "react";

export default function WebAuthPage() {
  useEffect(() => {
    // Detect if we are on localhost development or production domain
    const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
    
    // Choose ecommerce URL based on environment
    const ecommerceUrl = isLocalhost
      ? "http://localhost:3005"
      : (process.env.NEXT_PUBLIC_ECOMMERCE_URL || "https://castor-ecommerce.vercel.app");
      
    const currentUrl = typeof window !== "undefined" ? window.location.origin : "";
    
    // Redirect to ecommerce auth, passing the callbackUrl
    window.location.href = `${ecommerceUrl}/auth?callbackUrl=${encodeURIComponent(currentUrl)}`;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="flex flex-col items-center gap-3">
        {/* Simple elegant glass-like loader */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#20a9ad]"></div>
        <p className="text-sm font-medium text-gray-500">Redirecting to secure account management...</p>
      </div>
    </div>
  );
}
