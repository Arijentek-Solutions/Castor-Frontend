import { CourseSchedulesHero } from "./hero";
import { Schedules } from "./schedules";

export default function CourseSchedulesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <CourseSchedulesHero />
      <Schedules />
    </main>
  );
}
