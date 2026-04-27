import type { Metadata } from "next";
import { Navbar, Footer } from "@castor/ui";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || "https://castor-main.vercel.app"),
  title: {
    template: "%s | GetCare by Castor",
    default: "GetCare",
  },
  description:
    "Professional in-home care services with skilled nursing, long-term support, and care coordination.",
};

export default function GetCareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar serviceContext="services" />
      {children}
      <Footer />
    </>
  );
}
