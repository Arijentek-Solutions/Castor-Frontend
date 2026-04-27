"use client";

import { GetStartedCTA } from "@castor/ui";

export function CTASection() {
  return (
    <GetStartedCTA
      title="Need a Ride Today?"
      description="Book your medical transport now or call for immediate assistance"
      buttonText="Book Online"
      buttonHref="#"
      secondaryButtonText="Call Now"
      secondaryButtonHref="#"
      className="!py-20"
    />
  );
}
