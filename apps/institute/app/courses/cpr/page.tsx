import CPRHero from "./hero";
import CPRHighlights from "./highlights";
import CPRCurriculum from "./curriculum";
import CPRWhoShouldTake from "./who-should-take";
import CPRCTA from "./cta";

export default function CPRPage() {
  return (
    <main className="min-h-screen bg-white">
      <CPRHero />
      <CPRHighlights />
      <CPRCurriculum />
      <CPRWhoShouldTake />
      <CPRCTA />
    </main>
  );
}
