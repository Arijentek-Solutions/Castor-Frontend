"use client";
import React from "react";
import Hero from "./hero";
import Info from "./info";
import { CTASection } from "@/app/transport/services/cta-section";

export default function DoctorAppointmentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Info />
            <CTASection />
        </main>
    );
}
