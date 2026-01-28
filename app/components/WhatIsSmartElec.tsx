import Image from "next/image";

const ThunderIcon = () => (
    <Image
        src="/assets/akar-icons_thunder.svg"
        alt="Thunder"
        width={24}
        height={24}
        className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
    />
);

interface FeatureItemProps {
    text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => (
    <div className="flex items-center gap-2 lg:gap-3">
        <ThunderIcon />
        <span className="text-white text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] font-medium">
            {text}
        </span>
    </div>
);

export default function WhatIsSmartElec() {
    return (
        <section className="w-full bg-white pb-[40px] pt-[30px] lg:pb-[80px] lg:pt-[50px]">
            <div className="max-w-[1440px] mx-auto px-0 lg:px-0">
                {/* Header */}
                <div className="relative flex justify-between items-start mb-[20px] lg:mb-[43px] px-[20px] lg:px-0">
                    <div className="max-w-full lg:max-w-[600px]">
                        <h2
                            className="text-[20px] lg:text-[40px] font-extrabold leading-[120%] lg:leading-[60px] tracking-[0.02em] text-[#1A1A1A] mb-1"
                        >
                            Qu&apos;est ce que SmartElec ?
                        </h2>
                        <p className="text-[12px] lg:text-[16px] font-medium leading-[140%] lg:leading-[24px] text-[#4A4A4A]">
                            Un outil multifonction créé par des experts
                            <br className="lg:hidden" />
                            <span className="hidden lg:inline"> </span>
                            pour les professionnels
                            <br className="lg:hidden" />
                            <span className="hidden lg:inline"><br /></span>
                            et particuliers travaillant dans le domaine électrique.
                        </p>
                    </div>
                    {/* Desktop decor image */}
                    <div className="absolute right-[-20px] top-[-64px] hidden lg:block">
                        <Image
                            src="/assets/elec-line.png"
                            alt="Electric cables"
                            width={264}
                            height={251}
                            className="object-contain"
                        />
                    </div>
                    {/* Mobile decor image */}
                    <div className="absolute right-[-20px] top-[-34px] lg:hidden">
                        <Image
                            src="/assets/elec-line.png"
                            alt="Electric cables"
                            width={154}
                            height={147}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-[14px]">
                    {/* Professional Card */}
                    <div
                        className="relative w-full lg:w-[800px] h-[200px] lg:h-[426px] overflow-hidden"
                        style={{ flexShrink: 0 }}
                    >
                        <Image
                            src="/assets/engineer-pic-2.png"
                            alt="Professionnels de l'électricité"
                            fill
                            className="object-cover"
                        />
                        {/* Blue overlay - Mobile: vertical, Desktop: horizontal */}
                        <div
                            className="absolute inset-0 lg:hidden"
                            style={{ background: "linear-gradient(180deg, #023282 0%, rgba(2, 50, 130, 0) 100%)" }}
                        />
                        <div
                            className="absolute inset-0 hidden lg:block"
                            style={{ background: "linear-gradient(90deg, #023282 0%, rgba(2, 50, 130, 0) 76.97%)" }}
                        />

                        {/* Content */}
                        <div className="absolute inset-0 pt-[20px] px-[20px] pb-[20px] lg:pt-[54px] lg:px-[25px] lg:pb-0 flex flex-col justify-between lg:justify-start lg:gap-[60px]">
                            <div>
                                <h3 className="text-[24px] lg:text-[60px] font-extrabold leading-[28px] lg:leading-[60px] tracking-[0.02em] text-white mb-2 lg:mb-3">
                                    Professionnels de
                                    <br />
                                    l&apos;électricité
                                </h3>
                                <p className="text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-white">
                                    Artisans et entreprises d&apos;installation électrique
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 lg:gap-4">
                                <FeatureItem text="Soutien technique et réglementaire" />
                                <FeatureItem text="Conseils juridiques et commerciales" />
                                <FeatureItem text="Outils de calcul et de devis" />
                            </div>
                        </div>
                    </div>

                    {/* DIY Card */}
                    <div className="relative w-full lg:flex-1 h-[200px] lg:h-[426px] overflow-hidden">
                        <Image
                            src="/assets/engineer-pic.png"
                            alt="Particuliers / bricolage"
                            fill
                            className="object-cover"
                        />
                        {/* Orange/brown overlay - Mobile: vertical, Desktop: horizontal */}
                        <div
                            className="absolute inset-0 lg:hidden"
                            style={{ background: "linear-gradient(180deg, #8E5B2B 0%, rgba(142, 91, 43, 0) 100%)" }}
                        />
                        <div
                            className="absolute inset-0 hidden lg:block"
                            style={{ background: "linear-gradient(90deg, #8E5B2B 0%, rgba(142, 91, 43, 0) 100%)" }}
                        />

                        {/* Content */}
                        <div className="absolute inset-0 pt-[20px] px-[20px] pb-[20px] lg:p-[40px] flex flex-col justify-between lg:justify-start lg:gap-[60px]">
                            <div>
                                <h3 className="text-[24px] lg:text-[60px] font-extrabold leading-[28px] lg:leading-[60px] tracking-[0.02em] text-white mb-2 lg:mb-3">
                                    Particuliers /
                                    <br />
                                    bricolage
                                </h3>
                                <p className="text-[12px] lg:text-[16px] leading-[16px] lg:leading-[24px] text-white">
                                    Tâches simples avec autonomie et sécurité
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 lg:gap-4">
                                <FeatureItem text="Schémas de cablage pour prises, interrupteurs, éclairages" />
                                <FeatureItem text="Aide aux dépannages courants" />
                                <FeatureItem text="Projets de rénovation sécurisés" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

