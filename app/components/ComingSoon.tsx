import Image from "next/image";

type ComingSoonItem = {
  title: string;
  iconSrc: string;
  iconAlt: string;
  decoratorSrc?: string;
};

const items: ComingSoonItem[] = [
  {
    title: "Chat privé avec un expert",
    iconSrc: "/assets/development/gridicons_chat.png",
    iconAlt: "Chat",
  },
  {
    title: "Tarification préférentielle pour\nles utilisateurs",
    iconSrc: "/assets/development/mingcute_percentage-fill.png",
    iconAlt: "Pourcentage",
  },
  {
    title: "Version PC de l'application",
    iconSrc: "/assets/development/uil_desktop.png",
    iconAlt: "Desktop",
  },
  {
    title: "Formation et guide dans le\ndomaine du photovoltaïque",
    iconSrc: "/assets/development/material-symbols_sunny-outline.png",
    iconAlt: "Soleil",
  },
  {
    title: "Calculs d'énergie et\nsubventions",
    iconSrc: "/assets/development/mdi_calculator.png",
    decoratorSrc: "/assets/development/hugeicons_energy.png",
    iconAlt: "Calculatrice",
  },
  {
    title: "Reconnaissance photo\naméliorée",
    iconSrc: "/assets/development/solar_camera-bold.png",
    iconAlt: "Caméra",
  },
  {
    title: "Nouveaux guides et formations",
    iconSrc: "/assets/development/majesticons_book-line.png",
    iconAlt: "Livre",
  },
  {
    title: "Catalogues des fabricants",
    iconSrc: "/assets/development/majesticons_box-line.png",
    iconAlt: "Catalogue",
  },
];

const ComingSoonCard = ({ item, index }: { item: ComingSoonItem; index: number }) => (
  <div
    key={`${item.title}-${index}`}
    className="shrink-0 w-[225px] h-[100.5px] rounded-[13.5px] border-[0.75px] border-[#E8EDF2] bg-white pt-[13.5px] pr-[10.5px] pb-[13.5px] pl-[21px]"
  >
    <div className="relative w-[36px] h-[36px] rounded-[10px] bg-[#0CCECD33] flex items-center justify-center mb-[2px] md:mb-[12px]">
      <Image
        src={item.iconSrc}
        alt={item.iconAlt}
        width={22}
        height={22}
        className="w-[18px] h-[18px] object-contain"
      />
      {item.decoratorSrc && (
        <div className="absolute top-[4px] left-[2px]">
          <Image
            src={item.decoratorSrc}
            alt="Decorator"
            width={14}
            height={14}
            className="w-[12px] h-[12px] object-contain"
          />
        </div>
      )}
    </div>
    <p className="text-black text-[13px] font-semibold leading-[18px] whitespace-pre-line">
      {item.title}
    </p>
  </div>
);

export default function ComingSoon() {
  // Chia items thành 2 hàng: hàng 1 (0-3), hàng 2 (4-7)
  const row1 = items.slice(0, 4);
  const row2 = items.slice(4, 8);
  
  // Duplicate để tạo seamless loop
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section className="w-full bg-white py-[40px] lg:py-[90px]">
      <div className="max-w-[1240px] mx-auto px-[20px]">
        <div className="text-center mb-[30px] lg:mb-[48px]">
          <div className="inline-flex items-center gap-2 px-[14px] py-[8px] lg:px-[18px] lg:py-[10px] rounded-full bg-[#0CCECD33] text-[#00B7B3] text-[14px] lg:text-[17px] font-semibold leading-[20px] lg:leading-[29px]">
            <Image
              src="/assets/development/mingcute_ai-fill.png"
              alt="AI"
              width={22}
              height={22}
              className="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] object-contain"
            />
            <span>En développement</span>
          </div>

          <h2 className="mt-[14px] lg:mt-[18px] text-[20px] lg:text-[44px] font-extrabold leading-[36px] lg:leading-[56px] tracking-[0.02em] text-[#1A1A1A]">
            À venir bientôt
          </h2>
          <p className="mt-[8px] lg:mt-[10px] text-[14px] lg:text-[16px] font-medium leading-[20px] lg:leading-[24px] text-[#555252] max-w-full lg:max-w-[400px] mx-auto px-[20px] lg:px-0">
            SmartElec évolue constamment pour répondre à vos besoins
          </p>
        </div>

        {/* Mobile Banner - 2 hàng x 4 items tự động chạy */}
        <div className="lg:hidden overflow-x-hidden overflow-y-visible -mx-[20px] px-[20px] pb-[20px]">
          {/* Row 1 - Chạy từ phải sang trái */}
          <div className="flex gap-[12px] mb-[12px] coming-soon-scroll-left">
            {duplicatedRow1.map((item, idx) => (
              <ComingSoonCard key={`row1-${idx}`} item={item} index={idx} />
            ))}
          </div>
          
          {/* Row 2 - Chạy từ trái sang phải (ngược lại) */}
          <div className="flex gap-[12px] coming-soon-scroll-right">
            {duplicatedRow2.map((item, idx) => (
              <ComingSoonCard key={`row2-${idx}`} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-[14px]">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-[18px] border border-[#E8EDF2] bg-white px-[28px] py-[18px] min-h-[110px]"
            >
              <div className="relative w-[44px] h-[44px] rounded-[12px] bg-[#0CCECD33] flex items-center justify-center mb-[14px]">
                <Image
                  src={it.iconSrc}
                  alt={it.iconAlt}
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px] object-contain"
                />
                {it.decoratorSrc && (
                  <div className="absolute top-[5px] left-[3px]">
                    <Image
                      src={it.decoratorSrc}
                      alt="Decorator"
                      width={14}
                      height={14}
                      className="w-[14px] h-[14px] object-contain"
                    />
                  </div>
                )}
              </div>
              <p className="text-black text-[15px] font-semibold leading-[22px] whitespace-pre-line">
                {it.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



