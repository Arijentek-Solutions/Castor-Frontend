import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@castor/ui";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Castor Medical Supplies",
  description: "Castor Medical Equipments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for WCAG 2.4.1 compliance */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-[#20a9ad] focus:px-4 focus:py-2 focus:text-white focus:font-bold"
        >
          Skip to main content
        </a>
        <CartProvider>
          <Navbar serviceContext="ecommerce" />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#0f172a',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '14px',
                fontWeight: '500',
                marginTop: '80px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              },
              success: {
                style: {
                  border: '1px solid #d1fae5',
                  background: '#fff',
                  color: '#0f172a',
                },
                iconTheme: {
                  primary: '#20a9ad',
                  secondary: '#fff',
                },
              },
              error: {
                style: {
                  border: '1px solid #fee2e2',
                  background: '#fff',
                  color: '#dc2626',
                },
                iconTheme: {
                  primary: '#dc2626',
                  secondary: '#fff',
                },
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
