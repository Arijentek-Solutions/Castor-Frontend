"use client";
import React from "react";
import { SimpleHero } from "@castor/ui";

const Header = () => {
    return (
        <section className="px-4 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pt-44 xl:pt-52">
            <div className="mx-auto max-w-[1530px]">
                <SimpleHero
                    subtitle="Castor Transport"
                    title="Personalized Non-Emergency Medical Transportation (NEMT) Services"
                    description=""
                />
            </div>
        </section>
    );
};

export default Header;
