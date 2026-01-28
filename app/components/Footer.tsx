import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const productLinks: FooterLink[] = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarification", href: "#pricing" },
  { label: "Télécharger", href: "#download" },
];

const supportLinks: FooterLink[] = [
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
  { label: "Documentation", href: "#documentation" },
];

const legalLinks: FooterLink[] = [
  { label: "Mentions Légales", href: "#legal" },
  { label: "Conditions d'utilisation", href: "#terms" },
  { label: "Politique de confidentialité", href: "#privacy" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="min-w-[140px] md:min-w-[160px]">
      <div className="text-[14px] font-bold leading-[22px] text-[#111827] mb-[14px]">
        {title}
      </div>
      <ul className="flex flex-col gap-[10px]">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[13px] font-medium leading-[20px] text-[#4B5563] hover:text-[#111827] transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E5E7EB] mt-[60px] md:mt-[100px]">
      <div className="max-w-[1240px] mx-auto px-[16px] md:px-[20px] py-[40px] md:py-0 md:h-[314px] flex items-center">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-[32px] md:gap-[28px]">
          {/* Left */}
          <div className="max-w-[420px] w-full">
            <div className="flex items-center gap-[10px] mb-[14px]">
              <Image
                src="/assets/logo.png"
                alt="SmartElec"
                width={42}
                height={42}
                className="object-contain"
              />
              <span
                className="font-extrabold text-[28px] md:text-[32px] leading-[155%] tracking-[0.04em] bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #266EF8 0%, #07DFC5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SMART ELEC
              </span>
            </div>

            <p className="text-[13px] leading-[20px] font-medium text-[#6B7280] max-w-[320px] md:max-w-[260px]">
              L&apos;application dédiée aux électriciens et aux passionnés de
              bricolage pour un travail électrique sûr et guidé.
            </p>

            <a
              href="mailto:support@smartelec.tech"
              className="inline-block mt-[14px] text-[13px] font-medium leading-[20px] text-[#5100FF] hover:underline"
            >
              support@smartelec.tech
            </a>

            <div className="mt-[18px] text-[12px] leading-[18px] text-black">
              © 2026 SmartElec. Tous droits réservés.
            </div>
          </div>

          {/* Right columns */}
          <div className="flex max-w-[200px] md:max-w-[1200px] flex-wrap gap-x-[40px] md:gap-x-[70px] gap-y-[24px]">
            <FooterColumn title="Produit" links={productLinks} />
            <FooterColumn title="Support" links={supportLinks} />
            <FooterColumn title="Légal" links={legalLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
}


