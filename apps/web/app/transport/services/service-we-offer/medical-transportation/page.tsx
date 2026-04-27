"use client";
import React from "react";
import Hero from "./hero";
import WorryFree from "./worry-free";
import WhereWeTakeYou from "./where-we-take-you";
import { CTASection } from "@/app/transport/services/cta-section";
export default function MedicalTransportationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <WorryFree />
            <WhereWeTakeYou />
            <CTASection />
        </main>
    );
}
