import { NotFound } from "@castor/ui";

export default function NotFoundPage() {
  return (
    <NotFound
      title="Product Not Found"
      description="The product or page you are looking for does not exist or has been removed."
      primaryButtonText="Browse Products"
      primaryButtonHref="/"
      secondaryButtonText="Contact Us"
      secondaryButtonHref="/contact"
    />
  );
}
