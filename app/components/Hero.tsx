import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[822px]">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Background Texture"
          fill
          className="object-cover"
          priority
        />
        <Image
          src="/assets/hero-engineer.png"
          alt="Hero Engineer"
          width={1049}
          height={1533}
          style={{
            position: "absolute",
            top: "-103.76px",
            right: "-80px",
            transform: "scaleX(-1)",
            opacity: 1,
            width: "1048.63px",
            height: "1532.62px",
            maskImage: "linear-gradient(to left, transparent, black 50%)",
            WebkitMaskImage: "linear-gradient(to left, transparent, black 50%)",
          }}
          className="object-cover"
          priority
        />
        <Image
          src="/assets/Mask group.png"
          alt="Decorative Dots"
          width={763}
          height={429}
          style={{
            position: "absolute",
            top: "calc(822px - 419.03px)",
            left: "-120px",
            width: "763px",
            height: "429.03px",
            mixBlendMode: "screen",
            opacity: 1,
          }}
          className="object-cover"
        />
        <Image
          src="/assets/phone-mockup.png"
          alt="Phone Mockup"
          width={1920}
          height={1080}
          style={{
            position: "absolute",
            right: "220px",
            top: "110px",
            width: "auto",
            transform: "translateX(50%)",
            height: "720px",
            opacity: 1,
          }}
          className="z-20"
        />
        <div className="absolute bottom-[90px] text-end right-[400px] text-white leading-[155%] font-normal tracking-[0.01em] w-[319px] h-[87px] text-[16px]">
            Un coaching numérique pour vous<br />
            aider dans vos problèmes électriques<br />
            et répondre à vos questions.
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-start justify-center h-full px-[60px]">
        <div className="flex flex-col items-start gap-[8px] h-[389px]">
           <div className="flex items-center gap-2">
            <Image src="/assets/guard.png" alt="Icon" width={20} height={20} />
            <span className="text-white font-bold text-[17px] leading-[29px] tracking-[0.02em]">
              L&apos;application pour électriciens et passionnés de bricolage
            </span>
          </div>

          <h1 className="text-[64px] font-extrabold leading-[88px] text-white tracking-[0.02em] uppercase max-w-[1000px]">
            L&apos;EXPERTISE ÉLECTRIQUE À PORTÉE MAIN
          </h1>

          <p className="text-[18px] text-white font-medium leading-[29px] tracking-[0.02em] max-w-[600px] mb-2">
            SmartElec regroupe des outils, des normes, des guides, une IA
            spécialisée et des connexions professionnelles pour soutenir tous
            vos projets électriques.
          </p>

          <button className="bg-[#266EF8] mt-[12px] text-white w-[262px] h-[57px] rounded-[12px] p-[16px] flex items-center justify-center gap-[10px] hover:bg-[#1e5ad1] transition-all">
            <Image
              src="/assets/arrow-down.svg"
              alt="Download"
              width={20}
              height={20}
            />
            <span className="font-bold text-[16px] leading-[155%] tracking-[0.01em]">
              Télécharger l&apos;application
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

