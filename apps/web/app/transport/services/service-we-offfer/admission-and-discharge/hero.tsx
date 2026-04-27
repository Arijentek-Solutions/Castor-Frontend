"use client";

import { SimpleHero } from "@castor/ui";

const Hero = () => {
    return (
        <section className="px-4 pt-40 sm:px-6 sm:pt-44 lg:px-8 lg:pt-44 xl:pt-52">
            <div className="mx-auto max-w-[1530px]">
                <SimpleHero
                    subtitle="Castor Transport Services"
                    title="Assistance in Admission and Discharge"
                    description=""
                />
            </div>
        </section>
    );
};

export default Hero;
