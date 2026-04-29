import CPRHero from "./hero";
import CPRCourseDetails from "./courseDetails";

export default function CPRPage() {
  return (
    <main className="min-h-screen bg-white">
      <CPRHero />
      <CPRCourseDetails />
    </main>
  );
}
