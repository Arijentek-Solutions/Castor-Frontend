import type { Metadata } from "next";
import { Navbar } from "@castor/ui";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || "https://castor-main.vercel.app"),
  title: "Sign In | Castor Health",
  description: "Sign in to your Castor Health account.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
