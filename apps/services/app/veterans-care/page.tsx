import VeteransCareHero from "./veterans-care-hero";

export const metadata = {
  title: "Veterans / VA Care | Castor Healthcare",
  description: "Specialized home care services for veterans coordinating directly with VA programs.",
};

export default function VeteransCarePage() {
  return (
    <main className="min-h-screen bg-white">
      <VeteransCareHero />
    </main>
  );
}
