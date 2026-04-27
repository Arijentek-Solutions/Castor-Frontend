import HealthcareStaffingHero from "./healthcare-staffing-hero";
import { AboutHealthcareStaffing } from "./about-healthcare-staffing";
import { StaffingCounties } from "./staffing-counties";
import { StaffingServices } from "./staffing-services";
import { StaffingWhyChoose } from "./staffing-why-choose";
import { StaffingSupports } from "./staffing-supports";
import { StaffingPromise } from "./staffing-promise";
import { StaffingOptions } from "./staffing-options";
import { StaffingCTA } from "./staffing-cta";

export default function HealthcareStaffingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HealthcareStaffingHero />
      <AboutHealthcareStaffing />
      <StaffingCounties />
      <StaffingWhyChoose />
      <StaffingSupports />
      <StaffingServices />
      <StaffingPromise />
      <StaffingOptions />
      <StaffingCTA />
    </main>
  );
}
