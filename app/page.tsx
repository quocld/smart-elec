import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIsSmartElec from "./components/WhatIsSmartElec";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="bg-[#001A33]">
        <Hero />
        <Header />
      </div>
      <WhatIsSmartElec />
    </main>
  );
}
