import DualEnrollmentHero from "./hero";
import DualEnrollmentHighlights from "./highlights";
import DualEnrollmentCurriculum from "./curriculum";
import DualEnrollmentCTA from "./cta";

export default function DualEnrollmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <DualEnrollmentHero />
      <DualEnrollmentHighlights />
      <DualEnrollmentCurriculum />
      <DualEnrollmentCTA />
    </main>
  );
}
