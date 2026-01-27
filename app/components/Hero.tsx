import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[812px] h-auto md:h-[700px] lg:h-[822px] pb-8 md:pb-0">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Gradient - All screens */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #266EF8 0%, #07DFC5 100%)"
          }}
        />
        {/* Mobile Background Image */}
        <Image
          src="/assets/hero-bg-mobile.png"
          alt="Hero Background Mobile"
          width={401}
          height={559}
          style={{
            position: "absolute",
            top: "286px",
            left: "21px",
            width: "401.23px",
            height: "559px",
            opacity: 1,
            maskImage: "linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.7) 40%, black 60%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.7) 40%, black 60%)",
          }}
          className="object-cover lg:hidden"
          priority
        />
        {/* Desktop Background Image */}
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Background Texture"
          fill
          className="object-cover hidden lg:block opacity-30"
          priority
        />
        {/* Engineer Image - Desktop only */}
        <div className="absolute -top-[60px] -right-[50px] lg:-top-[103.76px] lg:-right-[80px] hidden md:block">
          <Image
            src="/assets/hero-engineer.png"
            alt="Hero Engineer"
            width={1049}
            height={1533}
            style={{
              transform: "scaleX(-1)",
              opacity: 1,
              maskImage: "linear-gradient(to left, transparent, black 50%)",
              WebkitMaskImage: "linear-gradient(to left, transparent, black 50%)",
            }}
            className="object-cover w-[600px] h-[876px] lg:w-[1048.63px] lg:h-[1532.62px]"
            priority
          />
        </div>
        {/* Decorative Dots - Hidden on mobile */}
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
          className="object-cover hidden lg:block"
        />
        {/* Phone Mockup - Responsive positioning */}
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
          className="z-20 hidden lg:block"
        />
        {/* Phone Mockup - Mobile version */}
        <Image
          src="/assets/phone-mockup.png"
          alt="Phone Mockup"
          width={1920}
          height={1080}
          unoptimized
          style={{
            position: "absolute",
            width: "420px",
            maxWidth: "none",
            left: "23%",
            bottom: "30px",
            height: "auto",
            transform: "translateX(-50%) scale(1.5)",
            transformOrigin: "center bottom",
            objectFit: "contain",
          }}
          className="z-20 block lg:hidden"
        />
        {/* Coaching Text - Mobile */}
        <div className="absolute left-[42%] bottom-[90px] text-white leading-[120%] font-normal tracking-[0.01em] text-[12px] w-[180px] block lg:hidden z-30">
            Un coaching numérique pour vous
            aider dans vos problèmes électriques
            et répondre à vos questions.
        </div>
        {/* Coaching Text - Desktop */}
        <div className="absolute bottom-[90px] text-end right-[400px] text-white leading-[155%] font-normal tracking-[0.01em] w-[319px] h-[87px] text-[16px] hidden xl:block">
            Un coaching numérique pour vous<br />
            aider dans vos problèmes électriques<br />
            et répondre à vos questions.
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-start pt-32 md:justify-center md:pt-0 min-h-[600px] md:h-[700px] lg:h-full px-5 sm:px-6 md:px-[40px] lg:px-[60px] pt-0 md:pt-20 md:pt-0">
        <div className="flex flex-col items-start sm:gap-[6px] md:gap-[8px] w-full">
           <div className="flex flex-row gap-2 flex-wrap">
            <Image 
              src="/assets/guard.png" 
              alt="Icon" 
              width={20} 
              height={20}
              className="w-auto h-[28px] sm:w-5 sm:h-5"
            />
            <span className="text-white max-w-[300px] md:max-w-full md:font-bold text-[12px] sm:text-[15px] md:text-[17px] leading-[14px] sm:leading-[26px] md:leading-[29px] tracking-[0.02em]">
              L&apos;application pour électriciens et passionnés de bricolage
            </span>
          </div>

          <h1 className="text-[26px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-extrabold leading-[38px] sm:leading-[48px] md:leading-[64px] lg:leading-[88px] text-white tracking-[0.02em] uppercase max-w-full md:max-w-[800px] lg:max-w-[1000px] mt-2 sm:mt-4">
            L&apos;EXPERTISE ÉLECTRIQUE À PORTÉE MAIN
          </h1>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white font-medium leading-[20px] sm:leading-[26px] md:leading-[29px] tracking-[0.02em] max-w-full md:max-w-[600px] mb-4 md:mb-2 mt-2 sm:mt-4">
            SmartElec regroupe des outils, des normes, des guides, une IA
            spécialisée et des connexions professionnelles pour soutenir tous
            vos projets électriques.
          </p>

          <button className="bg-[#266EF8] w-fix sm:mt-[12px] text-white sm:w-[262px] h-[50px] sm:h-[57px] rounded-[12px] p-[14px] sm:p-[16px] flex items-center justify-center gap-[8px] sm:gap-[10px] hover:bg-[#1e5ad1] transition-all">
            <Image
              src="/assets/arrow-down.svg"
              alt="Download"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="font-bold text-[14px] sm:text-[16px] leading-[155%] tracking-[0.01em]">
              Télécharger l&apos;application
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

