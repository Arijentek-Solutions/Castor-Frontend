import { Navbar, Footer } from "@castor/ui";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar serviceContext="web" />
      {children}
      <Footer />
    </>
  );
}
