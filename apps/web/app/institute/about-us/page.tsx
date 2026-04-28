import { AboutUsHero } from "./hero";
import { WhoWeAre } from "./who-we-are";
import { Stats } from "./stats";
import { Locations } from "./locations";
import { Leadership } from "./leadership";
import { Instructors } from "./instructors";
import { SupportStaff } from "./support-staff";

export const metadata = {
    title: "About Us",
    description:
        "Learn about Castor Health Institute — our mission, values, and commitment to healthcare education and workforce development.",
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutUsHero />
            <WhoWeAre />
            <Stats />
            <Locations />
            <Leadership />
            <Instructors />
            <SupportStaff />
        </main>
    );
}
