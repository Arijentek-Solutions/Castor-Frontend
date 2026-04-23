"use client";

import React from "react";
import { SimpleHero } from "@castor/ui";
import ReservationForm from "./reservation-form";

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <section className="px-4 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pt-44 xl:pt-52 bg-white">
        <div className="mx-auto max-w-[1530px]">
          <SimpleHero 
            subtitle="Castor Transport"
            title="Reservation"
            description="Book your ride quickly and securely"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 pb-20 pt-10 bg-white">
        <ReservationForm />
      </section>
    </main>
  );
}
