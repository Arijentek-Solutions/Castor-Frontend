"use client";
import React from "react";
import Hero from "./hero";
import { CTASection } from "@/app/hero/cta-section";

export default function LivingTransportationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <CTASection />
        </main>
    );
}
