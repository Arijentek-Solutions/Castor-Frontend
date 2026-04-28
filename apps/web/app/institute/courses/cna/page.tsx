import CNACourseHero from "./hero";
import ProgramHighlights from "./highlights";
import ChatUs from "./chatUs";
import CourseCurriculum from "./courseDetails";

export default function CNAPage() {
  return (
    <main className="min-h-screen bg-white">
      <CNACourseHero />
      <ProgramHighlights />
      <ChatUs />
      <CourseCurriculum />
    </main>
  );
}