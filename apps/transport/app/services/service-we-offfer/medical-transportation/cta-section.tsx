"use client";
import React from "react";
import { GetStartedCTA } from "@castor/ui";

const CTASection = () => {
    return (
        <GetStartedCTA
            title="Need a Ride Today?"
            description="Book your medical transport now or call for immediate assistance"
            buttonText="Book Online"
            buttonHref="#"
            secondaryButtonText="Call Now"
            secondaryButtonHref="tel:1-800-CASTOR-1"
        />
    );
};

export default CTASection;
