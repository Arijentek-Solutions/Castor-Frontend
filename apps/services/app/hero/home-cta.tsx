"use client";

import { GetStartedCTA } from "@castor/ui";

export default function HomeCTA() {
  return (
    <GetStartedCTA
      title="Ready to Begin Home Healthcare?"
      description="Contact us today for a free consultation and care assessment."
      buttonText="Schedule Free Consultation"
      buttonHref="/contact"
      className="py-24"
    />
  );
}
