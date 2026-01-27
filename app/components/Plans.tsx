import Image from "next/image";

type Plan = {
  badge?: string;
  title: string;
  subtitle: string;
  priceMonthly: string;
  priceYearly: string;
  iconSrc: string;
  iconAlt: string;
  features: string[];
  variant: "primary" | "secondary";
};

const plans: Plan[] = [
  {
    badge: "Populaire",
    title: "Professionnels",
    subtitle: "Pour les artisans et les entreprises",
    priceMonthly: "9,99 € TTC / mois",
    priceYearly: "ou 99 € TTC/an",
    iconSrc: "/assets/plan/vali.png",
    iconAlt: "Professionnels",
    features: [
      "Accès complet à l'application",
      "IA spécialisée illimitée",
      "Visibilité sur le répertoire professionnel",
      "Formation avancée en génie électrique",
      "Aide au chiffrage",
    ],
    variant: "primary",
  },
  {
    title: "Particuliers",
    subtitle: "Pour les passionnés de bricolage et les propriétaires",
    priceMonthly: "6,99 € TTC / mois",
    priceYearly: "ou 69 € TTC/an",
    iconSrc: "/assets/plan/solar_home-bold-duotone.png",
    iconAlt: "Particuliers",
    features: [
      "Accès complet à l'application",
      "IA spécialisée pour vos questions",
      "Guides pratiques et tutoriels",
      "Calculatrices et listes de contrôle",
      "Notifications de mise à jour",
    ],
    variant: "secondary",
  },
];

function ThunderIcon({ color, size = 22 }: { color: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Matches `public/assets/akar-icons_thunder.svg` */}
      <path
        d="M17.684 3.60303C18.205 2.94403 17.714 2.00003 16.848 2.00003H10.132C9.95015 1.9987 9.77101 2.04418 9.61182 2.1321C9.45263 2.22001 9.31873 2.34741 9.223 2.50203L4.141 10.958C3.74 11.624 4.244 12.455 5.049 12.455H8.478L5.248 20.52C4.781 21.54 6.043 22.473 6.891 21.735L20 9.33103H13.151L17.684 3.60303Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ variant }: { variant: Plan["variant"] }) {
  const src =
    variant === "primary"
      ? "/assets/plan/check-white.svg"
      : "/assets/plan/check-blue.svg";
  return <Image src={src} alt="Check" width={21} height={21} />;
}

export default function Plans() {
  return (
    <section
      id="pricing"
      className="w-full bg-white"
      style={{ minHeight: "1044px" }}
    >
      <div className="max-w-[1240px] mx-auto px-[20px] py-[90px]">
        <div className="text-center mb-[52px]">
          <h2 className="text-[44px] font-extrabold leading-[56px] tracking-[0.02em] text-[#1A1A1A]">
            Comptes et abonnements
          </h2>
          <p className="mt-[10px] text-[16px] font-medium leading-[24px] text-[#555252] max-w-[800px] mx-auto">
            Choisissez le plan qui correspond à vos besoins. Version gratuite
            limitée disponible.
          </p>
        </div>

        <div className="mx-auto max-w-[768px] grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {plans.map((p) => {
            const isPrimary = p.variant === "primary";
            return (
              <div
                key={p.title}
                className={[
                  "relative rounded-[24px] overflow-hidden",
                  isPrimary
                    ? "bg-[#266EF8] text-white"
                    : "bg-white text-[#1A1A1A] border border-[#DDE7F3]",
                ].join(" ")}
              >
                <div className="">
                  {p.badge && (
                    <div className="absolute top-[14px] right-[14px]">
                      <span className="inline-flex items-center px-[12px] py-[6px] rounded-full bg-[#5BE7A6] text-[#0B3B2A] text-[12px] font-bold leading-[16px]">
                        {p.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center p-[40px]">
                    <Image
                      src={p.iconSrc}
                      alt={p.iconAlt}
                      width={40}
                      height={40}
                      className="object-contain"
                    />

                    <h3 className="mt-[30px] text-[18px] font-bold leading-[30px] tracking-[0.02em]">
                      {p.title}
                    </h3>
                    <p
                      className={[
                        "mt-[2px] text-[16px] h-[48px] leading-[24px] font-medium",
                        isPrimary ? "text-white/80" : "text-[#000000B2]",
                      ].join(" ")}
                    >
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="mt-[10px] text-center">
                    <div
                      className={[
                        "text-[30px] font-bold leading-[52px] tracking-[0.02em]",
                        isPrimary ? "text-white" : "text-[#266EF8]",
                      ].join(" ")}
                    >
                      {p.priceMonthly}
                    </div>
                    <div
                      className={[
                        "mt-[6px] text-[16px] font-medium leading-[24px]",
                        isPrimary ? "text-white/80" : "text-[#6B7280]",
                      ].join(" ")}
                    >
                      {p.priceYearly}
                    </div>
                  </div>

                  <div className="mt-[52px] pl-[28px] flex flex-col gap-[12px] mb-[140px]">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-[10px]">
                        <div className="mt-[2px] shrink-0">
                          <CheckIcon variant={p.variant} />
                        </div>
                        <p
                          className={[
                            "text-[16px] font-medium leading-[24px]",
                            isPrimary ? "text-white" : "text-[#111827]",
                          ].join(" ")}
                        >
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className=" absolute bottom-[10px] left-[50%] translate-x-[-50%] px-[26px] pb-[24px]">
                  <button
                    type="button"
                    className={[
                      "w-[319px] h-[44px] rounded-[12px] p-[10px] mx-auto flex items-center justify-center gap-[10px] text-[16px] font-bold leading-[155%] tracking-[0.01em]",
                      isPrimary
                        ? "bg-white text-[#266EF8]"
                        : "bg-white text-[#266EF8] border border-[#266EF8]",
                    ].join(" ")}
                  >
                    <ThunderIcon color="#266EF8" size={22} />
                    <span>Commencer</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


