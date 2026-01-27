import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIsSmartElec from "./components/WhatIsSmartElec";
import Features from "./components/Features";
import ComingSoon from "./components/ComingSoon";
import Plans from "./components/Plans";
import ApplicationDownload from "./components/ApplicationDownload";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="bg-[#001A33]">
        <Hero />
        <Header />
      </div>
      <WhatIsSmartElec />
      <Features />
      <ComingSoon />
      <Plans />
      <ApplicationDownload />
      <Footer />
    </main>
  );
}
