import PhlebotomyHero from "./hero";
import PhlebotomyHighlights from "./highlights";
import PhlebotomyChatUs from "./chatUs";
import CourseDetails from "./courseDetails";

export default function PhlebotomyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PhlebotomyHero />
      <PhlebotomyHighlights />
      <PhlebotomyChatUs />
      <CourseDetails />
    </main>
  );
}
