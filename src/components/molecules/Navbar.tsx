"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";

const Logo = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // Très petit sur mobile, taille normale sur desktop
    className="w-7 h-7 md:w-10 md:h-10 shrink-0"
  >
    <circle cx="20" cy="20" r="19" stroke="#C5A880" strokeWidth="1.5" fill="none" />
    <text
      x="20"
      y="26"
      textAnchor="middle"
      fill="#C5A880"
      fontFamily="serif"
      fontSize="18"
      fontWeight="bold"
      letterSpacing="0.05em"
    >
      JD
    </text>
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Conférences", href: "/conferences" },
    { name: "Formations", href: "/formations" },
    { name: "Boutique", href: "/boutique" },
    { name: "AUPROHADA", href: "/engagements" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#05070F]/90 backdrop-blur-xl border-b border-[#C5A880]/10 py-3 shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-[#05070F]/60 backdrop-blur-lg border-b border-transparent py-5"
      }`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + nom : réduction de la largeur en mobile */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 max-w-[60%] md:max-w-none">
            <Logo />
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white truncate">
                Jacques DIBI
              </span>
              <span className="text-[8px] md:text-[9px] font-medium tracking-[0.3em] uppercase text-[#C5A880] truncate">
                Cabinet & Conseil
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* ... mêmes liens ... */}
            <div className="w-[1px] h-5 bg-[#C5A880]/30" />
            <Link
              href="/conferences"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C5A880] text-black font-bold text-xs uppercase tracking-widest rounded-none transition-all duration-300 hover:bg-black hover:text-[#C5A880] border border-[#C5A880]"
            >
              <Calendar size={14} />
              Réserver ma place
            </Link>
          </div>

          {/* Burger mobile : marge à gauche suffisante */}
          <div className="lg:hidden flex items-center ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="lg:hidden bg-[#05070F] border-t border-[#C5A880]/10 mt-3 py-4 px-4 space-y-3">
          {/* ... même menu ... */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;