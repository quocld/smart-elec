import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatIsSmartElec from "./components/WhatIsSmartElec";
import Features from "./components/Features";
import ComingSoon from "./components/ComingSoon";
import Plans from "./components/Plans";
import ApplicationDownload from "./components/ApplicationDownload";
import Footer from "./components/Footer";
import Reveal from "./components/motion/Reveal";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="bg-[#001A33]">
        <Hero />
        <Header />
      </div>
      <Reveal as="section" animation="slideLeft">
        <WhatIsSmartElec />
      </Reveal>
      <Reveal as="section" animation="fadeScale">
        <Features />
      </Reveal>
      <Reveal as="section" animation="fadeUp">
        <ComingSoon />
      </Reveal>
      <Reveal as="section" animation="slideIn">
        <Plans />
      </Reveal>
      <Reveal as="section" animation="fadeScale">
        <ApplicationDownload />
      </Reveal>
      <Reveal as="section" animation="fadeOnly">
        <Footer />
      </Reveal>
    </main>
  );
}
