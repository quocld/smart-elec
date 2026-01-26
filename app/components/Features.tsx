import Image from "next/image";

interface FeatureCardProps {
    image: string;
    title: string;
    subtitle: string;
    className?: string;
    imageScale?: number;
}

const FeatureCard = ({ image, title, subtitle, className = "", imageScale }: FeatureCardProps) => (
    <div className={`relative rounded-[32px] overflow-hidden ${className}`}>
        <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            style={imageScale ? { transform: `scale(${imageScale})` } : undefined}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            unoptimized
        />
        <div className="absolute inset-0 p-[24px] flex flex-col justify-end">
            <h3 className="text-[32px] font-bold leading-[35px] tracking-[0.02em] text-white mb-[8px]">
                {title}
            </h3>
            <p className="text-[14px] font-medium leading-[24px] text-white/90">
                {subtitle}
            </p>
        </div>
    </div>
);

export default function Features() {
    return (
        <section className="w-full bg-white py-[100px]" style={{ minHeight: "1784px" }}>
            <div className="max-w-[1240px] mx-auto px-[20px]">
                {/* Header */}
                <div className="text-center mb-[60px]">
                    <h2 className="text-[40px] font-extrabold leading-[60px] tracking-[0.02em] text-[#1A1A1A] mb-2">
                        Fonctionnalités principales
                    </h2>
                    <p className="text-[16px] font-medium leading-[24px] text-[#4A4A4A]">
                        Tous les outils dont vous avez besoin, réunis dans une seule application.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col gap-[20px]">
                    {/* Row 1 & 2 */}
                    <div className="grid grid-cols-10 gap-[20px] h-[1034px]">
                        {/* Left Column - 6 cols */}
                        <div className="col-span-6 h-full grid grid-rows-10 gap-[20px]">
                            {/* Card 1 - IA spécialisée */}
                            <FeatureCard
                                image="/assets/card-1.png"
                                title="IA spécialisée en électricité"
                                subtitle="Réponses à toutes vos questions techniques ou pratiques. Compréhension des normes NF C 15-100. Interaction par texte ou voix."
                                className="row-span-6"
                            />
                            {/* Bottom row - 2 small cards */}
                            <div className="row-span-4 grid grid-cols-2 gap-[20px]">
                                {/* Card 4 - Formation complète */}
                                <FeatureCard
                                    image="/assets/card-3.png"
                                    title="Formation complète"
                                    subtitle="Modules de formation en génie électrique, pour les connaissances de base ou plus avancées."
                                    className="col-span-1"
                                />
                                {/* Card 5 - Aide au chiffrage */}
                                <FeatureCard
                                    image="/assets/card-4.png"
                                    title="Aide au chiffrage de vos devis"
                                    subtitle="Support pour les estimations de prix des prestations courantes."
                                    className="col-span-1"
                                />
                            </div>
                        </div>

                        {/* Right Column - 4 cols */}
                        <div className="col-span-4 grid grid-rows-10 gap-[20px]">
                            {/* Card 2 - Accès aux règles */}
                            <FeatureCard
                                image="/assets/card-2.png"
                                title="Accès aux règles du métier"
                                subtitle="Fiches d'information claires et accessibles. Explications simplifiées pour les non-experts. Mises à jour en temps réel."
                                className="row-span-4"
                                imageScale={1.05}
                            />
                            {/* Card 3 - Guides pratiques */}
                            <FeatureCard
                                image="/assets/card-5.png"
                                title="Guides pratiques et outils"
                                subtitle="Guides et cours en génie électrique. Calculatrices, listes de contrôle de sécurité. Recommandations d'équipements adaptés."
                                className="row-span-6"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-3 gap-[20px] h-[340px]">
                        {/* Card 6 - Réseautage professionnel */}
                        <FeatureCard
                            image="/assets/card-6.png"
                            title="Réseautage professionnel"
                            subtitle="Trouvez un professionnel à proximité. Gagnez en visibilité grâce à l'annuaire SmartElec."
                        />
                        {/* Card 7 - Conseil pour les entrepreneurs */}
                        <FeatureCard
                            image="/assets/card-7.png"
                            title="Conseil pour les entrepreneurs"
                            subtitle="Conseils sur les obligations, les normes, les litiges. Bien démarrer son activité pro."
                        />
                        {/* Card 8 - Notifications essentielles */}
                        <FeatureCard
                            image="/assets/card-8.png"
                            title="Notifications essentielles"
                            subtitle="Changements standards. Nouveaux guides et mises à jour techniques livrés à vous."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
