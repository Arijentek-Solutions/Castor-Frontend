import VeteransCareHero from "./veterans-care-hero";
import VeteransCareDescription from "./veterans-care-description";
import VeteranImage from "./veteran-image";
import WhatWeProvide from "./what-we-provide";
import CountiesWeServe from "./counties-we-serve";
import VeteransCareServices from "./veterans-care-services";
import VeteransCareImages from "./veterans-care-images";
import VeteranSpecialized from "./veteran-specialzed";
import VeteranPromise from "./veteran-promise";
import VeteranTrainProfs from "./vetarn-train-profs";
import VeteranContact from "./vetarn-contact";

export const metadata = {
  title: "Veterans / VA Care | Castor Healthcare",
  description: "Specialized home care services for veterans coordinating directly with VA programs.",
};

export default function VeteransCarePage() {
  return (
    <main className="min-h-screen bg-white">
      <VeteransCareHero />
      <VeteransCareDescription />
      <CountiesWeServe />
      <WhatWeProvide />
      <VeteranImage />
      <VeteransCareServices />
      <VeteransCareImages />
      <VeteranSpecialized />
      <VeteranPromise />
      <VeteranTrainProfs />
      <VeteranContact />
    </main>
  );
}
