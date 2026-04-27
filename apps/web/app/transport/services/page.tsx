"use client";
import React from "react";
import Header from "./header";
import Paragraph from "./pragraph";
import ServicesWeOffer from "./service-we-offer/services-we-offer";
import HowItWork from "./how-it-work";
import CTASection from "./cta-section";

export default function ServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Paragraph />
            <ServicesWeOffer />
            <HowItWork />
            <CTASection />
        </main>
    );
}
