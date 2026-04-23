"use client";
import React from "react";
import Hero from "./hero";
import WhoAreWe from "./who-are-we";
import Provide from "./provide";
import Purpose from "./purpose";
import Mission from "./mission";
import Vision from "./vision";
import HowItWork from "./how-it-work";
import BookOnline from "./book-online";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <WhoAreWe />
            <Provide />
            <Purpose />
            <Mission />
            <Vision />
            <HowItWork />
            <BookOnline />
        </main>
    );
}
