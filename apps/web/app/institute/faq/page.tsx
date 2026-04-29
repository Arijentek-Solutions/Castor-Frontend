import { FAQHero } from "./hero";
import { Enrollment } from "./enrollment";
import { Finances } from "./finances";
import { ClassInfo } from "./class-info";
import { Locations } from "./locations";

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <FAQHero />
      <Enrollment />
      <Finances />
      <ClassInfo />
      <Locations />
    </main>
  );
}
