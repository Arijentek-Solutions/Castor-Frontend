import { NotFound } from "@castor/ui";

export default function NotFoundPage() {
  return (
    <NotFound
      title="Page Not Found"
      description="The page you are looking for does not exist or has been moved."
      primaryButtonText="Go to Homepage"
      primaryButtonHref="/"
      secondaryButtonText="Contact Support"
      secondaryButtonHref="/contact"
    />
  );
}
