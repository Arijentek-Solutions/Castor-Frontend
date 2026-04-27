import { HomeCareHero } from "./home-care-hero";
import HomeCareAbout from "./homecare-about";
import CountiesServe from "./counties-serve";
import WhyCastor from "./why-castor";
import HomeServices from "./home-services";
import HomeCareImages from "./homecare-images";
import SpecializedCare from "./specialized-care";
import CastorSkilledProfessionals from "./castor-skilled-professionals";
import GetStartedToday from "./get-started-today";

export const metadata = {
  title: "Personal Home Care & Companionship | Castor Healthcare",
  description: "Compassionate personal home care services including bathing, meal prep, and specialized support to help you live independently at home.",
};

export default function HomeCarePage() {
  return (
    <main className="min-h-screen bg-white">
      <HomeCareHero />
      <HomeCareAbout />
      <CountiesServe />
      <WhyCastor />
      <HomeServices />
      <HomeCareImages />
      <SpecializedCare />
      <CastorSkilledProfessionals />
      <GetStartedToday />
    </main>
  );
}
