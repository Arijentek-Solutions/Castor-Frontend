import { Hero } from "../components/hero/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <main className="flex-grow">
        <Hero />

      </main>
    </div>
  );
}
