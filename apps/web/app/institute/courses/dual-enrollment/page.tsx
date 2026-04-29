import DualEnrollmentHero from "./hero";
import DualEnrollmentHighlights from "./highlights";
import DualEnrollmentChatUs from "./chatUs";
import DualEnrollmentCourseDetails from "./courseDetails";

export default function DualEnrollmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <DualEnrollmentHero />
      <DualEnrollmentHighlights />
      <DualEnrollmentChatUs />
      <DualEnrollmentCourseDetails />
    </main>
  );
}
