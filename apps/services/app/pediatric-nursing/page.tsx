import { PediatricNursingHero } from "./pediatric-nursing-hero";
import { AboutPediatricNursing } from "./about-pediatric-nursing";
import { PediatricCounties } from "./pediatric-counties";
import { PediatricWhyChoose } from "./pediatric-why-choose";
import { PediatricServicesList } from "./pediatric-services-list";
import { PediatricHiringExcellence } from "./pediatric-hiring-excellence";
import { PediatricProfessionals } from "./pediatric-professionals";

export default function PediatricNursingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PediatricNursingHero />
      <AboutPediatricNursing />
      <PediatricWhyChoose />
      <PediatricCounties />
      <PediatricServicesList />
      <PediatricProfessionals />
      <PediatricHiringExcellence />
    </main>
  );
}
