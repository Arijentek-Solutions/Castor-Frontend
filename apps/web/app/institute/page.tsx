import { Hero } from "./hero/hero";
import { CastorDifference } from "./hero/castor-difference";
import { CourseOfferings } from "./hero/course-offerings";
import { Testimonials } from "./hero/testimonials";
import { Accreditation } from "./hero/accreditation";

export default function InstitutePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Hero />
      <CastorDifference />
      <CourseOfferings />
      <Testimonials />
      <Accreditation />
    </main>
  );
}
