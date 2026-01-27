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

export default function ComingSoon() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="max-w-[1240px] mx-auto px-[20px]">
        <div className="text-center mb-[48px]">
          <div className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-full bg-[#0CCECD33] text-[#00B7B3] text-[17px] font-semibold leading-[29px]">
            <Image
              src="/assets/development/mingcute_ai-fill.png"
              alt="AI"
              width={22}
              height={22}
              className="object-contain"
            />
            <span>En développement</span>
          </div>

          <h2 className="mt-[18px] text-[44px] font-extrabold leading-[56px] tracking-[0.02em] text-[#1A1A1A]">
            À venir bientôt
          </h2>
          <p className="mt-[10px] text-[16px] font-medium leading-[24px] text-[#555252] max-w-[400px] mx-auto">
            SmartElec évolue constamment pour répondre à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
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
                  className="object-contain"
                />
                {it.decoratorSrc && (
                  <div className="absolute top-[5px] left-[3px]">
                    <Image
                      src={it.decoratorSrc}
                      alt="Decorator"
                      width={14}
                      height={14}
                      className="object-contain"
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



