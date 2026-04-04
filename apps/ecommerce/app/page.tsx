import { Hero } from "./hero/hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white pb-20 font-sans">
      <main className="w-full px-4 sm:px-6 lg:px-8">
        <Hero />
      </main>
    </div>
  );
}
