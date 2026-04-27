import PhlebotomyHero from "./hero";
import PhlebotomyHighlights from "./highlights";
import PhlebotomyCurriculum from "./curriculum";
import PhlebotomyCTA from "./cta";

export default function PhlebotomyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PhlebotomyHero />
      <PhlebotomyHighlights />
      <PhlebotomyCurriculum />
      <PhlebotomyCTA />
    </main>
  );
}
