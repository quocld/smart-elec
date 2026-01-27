import Image from "next/image";

const ThunderIcon = () => (
    <Image
        src="/assets/akar-icons_thunder.svg"
        alt="Thunder"
        width={24}
        height={24}
    />
);

interface FeatureItemProps {
    text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => (
    <div className="flex items-center gap-3">
        <ThunderIcon />
        <span className="text-white text-[16px] leading-[24px] font-medium">
            {text}
        </span>
    </div>
);

export default function WhatIsSmartElec() {
    return (
        <section className="w-full bg-white pb-[80px] pt-[50px]">
            <div className="max-w-[1440px] mx-auto">
                {/* Header */}
                <div className="relative flex justify-between items-start mb-[43px]">
                    <div className="max-w-[600px] px-[20px]">
                        <h2
                            className="text-[40px] font-extrabold leading-[60px] tracking-[0.02em] text-[#1A1A1A] mb-1"
                        >
                            Qu&apos;est ce que SmartElec ?
                        </h2>
                        <p className="text-[16px] font-medium leading-[24px] text-[#4A4A4A]">
                            Un outil multifonction créé par des experts pour les professionnels
                            <br />
                            et particuliers travaillant dans le domaine électrique.
                        </p>
                    </div>
                    <div className="absolute right-[-20px] top-[-64px]">
                        <Image
                            src="/assets/elec-line.png"
                            alt="Electric cables"
                            width={264}
                            height={251}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="flex gap-[14px]">
                    {/* Professional Card - 800px */}
                    <div
                        className="relative w-[800px] h-[426px] overflow-hidden"
                        style={{ flexShrink: 0 }}
                    >
                        <Image
                            src="/assets/engineer-pic-2.png"
                            alt="Professionnels de l'électricité"
                            fill
                            className="object-cover"
                        />
                        {/* Blue overlay */}
                        <div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(90deg, #023282 0%, rgba(2, 50, 130, 0) 76.97%)" }}
                        />

                        {/* Content */}
                        <div className="absolute inset-0 pt-[54px] px-[25px] flex flex-col gap-[60px]">
                            <div>
                                <h3 className="text-[60px] font-extrabold leading-[60px] tracking-[0.02em] text-white mb-3">
                                    Professionnels de
                                    <br />
                                    l&apos;électricité
                                </h3>
                                <p className="text-[16px] leading-[24px] text-white">
                                    Artisans et entreprises d&apos;installation électrique
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <FeatureItem text="Soutien technique et réglementaire" />
                                <FeatureItem text="Conseils juridiques et commerciales" />
                                <FeatureItem text="Outils de calcul et de devis" />
                            </div>
                        </div>
                    </div>

                    {/* DIY Card - 626px (remaining space) */}
                    <div className="relative flex-1 h-[426px] overflow-hidden">
                        <Image
                            src="/assets/engineer-pic.png"
                            alt="Particuliers / bricolage"
                            fill
                            className="object-cover"
                        />
                        {/* Orange/brown overlay */}
                        <div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(90deg, #8E5B2B 0%, rgba(142, 91, 43, 0) 100%)" }}
                        />

                        {/* Content */}
                        <div className="absolute inset-0 p-[40px] flex flex-col gap-[60px]">
                            <div>
                                <h3 className="text-[60px] font-extrabold leading-[60px] tracking-[0.02em] text-white mb-3">
                                    Particuliers /
                                    <br />
                                    bricolage
                                </h3>
                                <p className="text-[16px] leading-[24px] text-white">
                                    Tâches simples avec autonomie et sécurité
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
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

