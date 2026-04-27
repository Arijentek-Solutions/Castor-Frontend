"use client";

import { GetStartedCTA } from "@castor/ui";

export function CTASection() {
  return (
    <GetStartedCTA
      title="Need a Ride Today?"
      description="Book your medical transport now or call for immediate assistance"
      buttonText="Book Online"
      buttonHref="/booking"
      secondaryButtonText="Call Now"
      secondaryButtonHref="tel:1-800-CASTOR-1"
    />
  );
};

export default CTASection;
