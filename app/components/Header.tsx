"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header 
        className="fixed top-0 left-0 backdrop-blur-md right-0 z-50 flex items-center justify-between px-[20px] lg:px-[60px] min-h-[96px] lg:h-auto lg:py-[12px]"
        style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.12) 100%)",
          paddingTop: "max(env(safe-area-inset-top, 0px), 12px)",
          paddingBottom: "12px"
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

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-[40px]">
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

        {/* Desktop Contact Us Button */}
        <button className="hidden lg:flex items-center justify-center gap-[8px] w-[163px] h-[49px] rounded-[12px] border border-white bg-black/32 px-[20px] hover:bg-black/50 transition-all group">
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

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          style={{
            background: "linear-gradient(180deg, #266EF8 0%, #07DFC5 100%)",
            paddingTop: "140px",
          }}
        >
          <nav className="flex flex-col items-center gap-[16px] px-[20px] py-[40px]">
            <Link
              href="#features"
              className="text-[24px] font-bold leading-[155%] tracking-[0.01em] text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="#pricing"
              className="text-[24px] font-bold leading-[155%] tracking-[0.01em] text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarification
            </Link>
            <Link
              href="#download"
              className="text-[24px] font-bold leading-[155%] tracking-[0.01em] text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Télécharger
            </Link>
            <Link
              href="#contact"
              className="text-[24px] font-bold leading-[155%] tracking-[0.01em] text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Contact Us Button */}
            <button 
              className="flex items-center justify-center gap-[8px] w-[163px] h-[49px] rounded-[12px] border border-white bg-white/20 px-[20px] mt-[200px]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/assets/contact-icon.svg"
                alt="Contact Icon"
                width={24}
                height={24}
              />
              <span className="text-[16px] font-bold leading-[155%] tracking-[0.01em] text-white">
                Contact Us
              </span>
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

