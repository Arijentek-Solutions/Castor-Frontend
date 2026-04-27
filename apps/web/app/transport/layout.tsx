import type { Metadata } from "next";
import { Navbar, Footer } from "@castor/ui";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || "https://castor.com"),
  title: {
    template: "%s | Castor Transportation",
    default: "Castor Medical Transportation | Safe & Reliable NEMT",
  },
  description:
    "Safe and reliable non-emergency medical transportation services. Book a ride for medical appointments.",
};

export default function TransportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar serviceContext="transport" />
      {children}
      <Footer />
    </>
  );
}
