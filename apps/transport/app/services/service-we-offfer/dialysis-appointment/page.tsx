"use client";
import React from "react";
import Hero from "./hero";
import Info from "./info";
import { CTASection } from "@/app/hero/cta-section";

export default function DialysisAppointmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Info />
            <CTASection />
        </main>
    );
}
