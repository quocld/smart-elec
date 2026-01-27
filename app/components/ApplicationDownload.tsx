import Image from "next/image";

export default function ApplicationDownload() {
  return (
    <section
      id="download"
      className="w-full bg-white"
      style={{ height: "675px" }}
    >
      <div className="max-w-[1440px] mt-[20px] max-h-[675px] mx-auto px-[20px] h-full">
        <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#266EF8]">
          {/* Background decorations */}
          <Image
            src="/assets/application/dot-grid.png"
            alt="Dots background"
            width={774}
            height={1404.4350585937511}
            className="pointer-events-none select-none"
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
            className="pointer-events-none select-none"
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
            <div className="flex flex-col absolute top-[16%] left-[8%]">
              <h2 className="text-white font-extrabold tracking-[0.02em]">
                <span className="block leading-[64px] text-[50px]">Télécharger</span>
                <span className="block leading-[80px] text-[72px]">SmartElec</span>
              </h2>

              <p className="mt-[24px] text-white text-[16px] font-medium leading-[24px] max-w-[520px]">
                Disponible sur iOS et Android. Scannez le code QR ou cliquez sur
                les boutons ci-dessous.
              </p>

              <div className="mt-[42px] flex items-center gap-[28px]">
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

                <div className="bg-white rounded-[12px]">
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

            {/* Right phones */}
            <div className="relative w-full hidden lg:block">
            <Image
                src="/assets/application/smart-phone.png"
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
                  transform: "rotateY(180deg) rotate(-4deg)",
                }}
              />
              <Image
                src="/assets/application/smart-phone.png"
                alt="SmartElec phone 1"
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


