import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header 
      className="fixed top-0 left-0 backdrop-blur-md right-0 z-50 flex items-center justify-between px-[60px] py-[12px]"
      style={{
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.12) 100%)"
      }}
    >
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-[10px]">
        <Image
          src="/assets/logo.png"
          alt="SmartElec Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <span className="text-[18px] font-extrabold leading-[155%] tracking-[0.04em] text-white">
          SmartElec
        </span>
      </div>

      {/* Navigation Items */}
      <nav className="flex items-center gap-[40px]">
        <Link
          href="#features"
          className="text-[15px] font-medium leading-[155%] tracking-[0.01em] text-white/90 hover:text-white transition-colors"
        >
          Fonctionnalités
        </Link>
        <Link
          href="#pricing"
          className="text-[15px] font-medium leading-[155%] tracking-[0.01em] text-white/90 hover:text-white transition-colors"
        >
          Tarification
        </Link>
        <Link
          href="#download"
          className="text-[15px] font-medium leading-[155%] tracking-[0.01em] text-white/90 hover:text-white transition-colors"
        >
          Télécharger
        </Link>
        <Link
          href="#contact"
          className="text-[15px] font-medium leading-[155%] tracking-[0.01em] text-white/90 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* Contact Us Button */}
      <button className="flex items-center justify-center gap-[8px] w-[163px] h-[49px] rounded-[12px] border border-white bg-black/32 px-[20px] hover:bg-black/50 transition-all group">
        <Image
          src="/assets/contact-icon.svg"
          alt="Contact Icon"
          width={24}
          height={24}
          className="group-hover:scale-110 transition-transform"
        />
        <span className="text-[16px] font-bold leading-[155%] tracking-[0.01em] text-white">
          Contact Us
        </span>
      </button>
    </header>
  );
}

