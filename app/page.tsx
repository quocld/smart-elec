import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-[#001A33]">
      <Hero />
      <Header />
    </main>
  );
}
