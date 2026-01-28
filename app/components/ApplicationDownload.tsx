import Image from "next/image";

export default function ApplicationDownload() {
  return (
    <section
      id="download"
      className="w-full bg-white h-[696px] lg:h-[675px]"
    >
      <div className="max-w-[1440px] mt-[20px] max-h-[696px] lg:max-h-[675px] mx-auto px-[12px] md:px-[20px] h-full">
        <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#266EF8]">
          {/* Background decorations - Mobile */}
          <Image
            src="/assets/application/dot-grid.png"
            alt="Dots background"
            width={774}
            height={1404.4350585937511}
            className="pointer-events-none select-none lg:hidden"
            style={{
              position: "absolute",
              top: "-80px",
              left: "0px",
              opacity: 1,
              width: "400px",
              height: "auto",
              mixBlendMode: "screen",
              transform: "rotate(-90deg) translate(-100%, 0)",
              transformOrigin: "top left",
              WebkitMaskImage:
                "radial-gradient(420px 420px at calc(100% + 130px) 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 90%)",
              maskImage:
                "radial-gradient(420px 420px at calc(100% + 130px) 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 90%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskSize: "cover",
              filter: "blur(0.2px)",
              zIndex: 1,
            }}
            priority={false}
          />
          <Image
            src="/assets/application/grid.png"
            alt="Grid background"
            width={800.9999389648444}
            height={1423.0000000000014}
            className="pointer-events-none select-none lg:hidden"
            style={{
              position: "absolute",
              top: "360px",
              left: "0px",
              opacity: 0.32,
              mixBlendMode: "screen",
              transform: "translateY(400px) rotate(-90deg) scale(0.8)",
              transformOrigin: "top left",
              zIndex: 1,
            }}
            priority={false}
          />

          {/* Background decorations - Desktop */}
          <Image
            src="/assets/application/dot-grid.png"
            alt="Dots background"
            width={774}
            height={1404.4350585937511}
            className="pointer-events-none select-none hidden lg:block"
            style={{
              position: "absolute",
              top: "-9.26px",
              left: "0px",
              opacity: 1,
              width: "774px",
              height: "auto",
              mixBlendMode: "screen",
              transform: "rotate(-90deg) translate(-100%, 0)",
              transformOrigin: "top left",
              // Curved (arc) soft-cut: mask fades out along a circular arc.
              // This creates the "mờ cắt ảnh theo hình vòng cung" effect.
              WebkitMaskImage:
                "radial-gradient(820px 820px at calc(100% + 260px) 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 90%)",
              maskImage:
                "radial-gradient(820px 820px at calc(100% + 260px) 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.35) 80%, rgba(0,0,0,0) 90%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskSize: "cover",
              filter: "blur(0.2px)",
              zIndex: 1,
            }}
            priority={false}
          />
          <Image
            src="/assets/application/grid.png"
            alt="Grid background"
            width={800.9999389648444}
            height={1423.0000000000014}
            className="pointer-events-none select-none hidden lg:block"
            style={{
              position: "absolute",
              top: "188px",
              left: "-16px",
              opacity: 0.32,
              mixBlendMode: "screen",
              transform: "translateY(860px) rotate(-90deg)",
              transformOrigin: "top left",
              zIndex: 1,
            }}
            priority={false}
          />

          <div className="relative z-10 h-full">
            {/* Left content */}
            <div className="flex flex-col absolute top-[4%] md:top-[16%] lg:top-[16%] left-[5%] md:left-[8%] lg:left-[8%]">
              <h2 className="text-white font-bold lg:font-extrabold tracking-[0.02em]" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                <span className="block leading-[110%] text-[32px] lg:leading-[64px] lg:text-[50px]">Télécharger</span>
                <span className="block leading-[110%] text-[50px] lg:leading-[80px] lg:text-[72px]">SmartElec</span>
              </h2>

              <p className=" mt-[10px] md:mt-[24px] text-white text-[14px] lg:text-[16px] max-w-[320px] md:max-w-[520px] font-medium leading-[19.6px] lg:leading-[24px]" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 500, letterSpacing: '0%' }}>
                Disponible sur iOS et Android. Scannez le code QR ou cliquez sur
                les boutons ci-dessous.
              </p>

              <div className=" mt-[24px] md:mt-[42px] flex items-center gap-[14px] md:gap-[28px]">
                <div className="bg-white rounded-[12px] lg:hidden">
                  <Image
                    src="/assets/application/qrcode.png"
                    alt="QR Code"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <Image
                    src="/assets/application/applestore.png"
                    alt="App Store"
                    width={181}
                    height={52}
                    className="object-contain"
                  />
                  <Image
                    src="/assets/application/googleplay.png"
                    alt="Google Play"
                    width={182}
                    height={52}
                    className="object-contain"
                  />
                </div>

                <div className="bg-white rounded-[12px] hidden lg:block">
                  <Image
                    src="/assets/application/qrcode.png"
                    alt="QR Code"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Desktop phones - right side */}
            <div className="relative w-full hidden lg:block">
              <Image
                src="/assets/application/smart-phone-left.png"
                alt="SmartElec phone 1"
                width={414}
                height={472}
                className="object-contain"
                style={{
                  position: "absolute",
                  width: "414px",
                  height: "auto",
                  right: "240px",
                  top: "160px",
                  transform: "rotate(-4deg)",
                }}
              />
              <Image
                src="/assets/application/smart-phone.png"
                alt="SmartElec phone 2"
                width={414}
                height={472}
                className="object-contain"
                style={{
                  position: "absolute",
                  width: "414px",
                  transform: "rotate(-4deg)",
                  height: "auto",
                  right: "0px",
                  top: "36px",
                }}
              />
            </div>

            {/* Mobile phones - bottom */}
            <div className="absolute inset-0 w-full h-full lg:hidden" style={{ zIndex: 10 }}>
              <div className="relative w-full h-full">
              <Image
                src="/assets/application/smart-phone-left.png"
                alt="SmartElec phone 1"
                width={414}
                height={472}
                className="object-contain"
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "auto",
                  right: "calc(38%)",
                  bottom: "40px",
                  transform: "rotate(-4deg)",
                  zIndex: 10,
                }}
              />
              <Image
                src="/assets/application/smart-phone.png"
                alt="SmartElec phone 2"
                width={414}
                height={472}
                className="object-contain"
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "auto",
                  left: "calc(38%)",
                  bottom: "110px",
                  transform: "rotate(0deg)",
                  zIndex: 10,
                }}
              />
              </div>
            </div>
          </div>

          {/* Gentle contrast on left text */}
          <div
            className="absolute inset-0 z-5 pointer-events-none"
            style={{
              background:
                "radial-gradient(80% 80% at 0% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 60%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}


