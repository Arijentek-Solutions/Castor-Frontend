import type { Metadata } from "next";
import { Navbar, Footer } from "@castor/ui";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || "https://castor-main.vercel.app"),
  title: {
    template: "%s | Castor Health Institute",
    default: "Castor Health Institute | CNA, Phlebotomy & CPR Training",
  },
  description:
    "Healthcare training, certifications, and workforce upskilling. CNA, Phlebotomy, and CPR programs.",
};

export default function InstituteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar serviceContext="institute" />
      {children}
      <Footer />
    </>
  );
}
