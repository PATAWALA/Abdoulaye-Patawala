"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar } from "lucide-react";

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle
      cx="20"
      cy="20"
      r="19"
      stroke="#C5A880"
      strokeWidth="1.5"
      fill="none"
    />
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
      {/* Ligne supérieure dorée */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Nom avec marge à droite */}
          <Link href="/" className="flex items-center gap-3 mr-6 md:mr-0">
            <Logo />
            <div className="flex flex-col">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-white">
                Jacques DIBI
              </span>
              <span className="text-[9px] font-medium tracking-[0.4em] uppercase text-[#C5A880] mt-0.5">
                Cabinet & Conseil
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 group ${
                    isActive ? "text-[#C5A880]" : "text-gray-300 hover:text-[#C5A880]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-[#C5A880] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <div className="w-[1px] h-5 bg-[#C5A880]/30" />

            <Link
              href="/conferences"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C5A880] text-black font-bold text-xs uppercase tracking-widest rounded-none transition-all duration-300 hover:bg-black hover:text-[#C5A880] border border-[#C5A880]"
            >
              <Calendar size={14} />
              Réserver ma place
            </Link>
          </div>

          {/* Burger mobile avec marge à gauche */}
          <div className="lg:hidden flex items-center ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 -mr-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="lg:hidden bg-[#05070F] border-t border-[#C5A880]/10 mt-3 py-4 px-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xs font-bold uppercase tracking-widest text-gray-300 py-2 hover:text-[#C5A880]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/conferences"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#C5A880] text-black font-bold text-xs uppercase tracking-widest rounded-none hover:bg-black hover:text-[#C5A880] border border-[#C5A880]"
          >
            <Calendar size={14} />
            Réserver ma place
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;