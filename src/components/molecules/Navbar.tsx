'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeToggle from '@/components/atoms/ThemeToggle';

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Blog', href: '/blog', isPage: true },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [circleVisible, setCircleVisible] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = links.filter(l => !l.isPage).map(l => l.href.replace('#', ''));
      const scrollPos = window.scrollY + 150;

      let current = '#hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = '#' + id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      setCircleVisible(true);
      setTimeout(() => setLinksVisible(true), 200);
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      setLinksVisible(false);
      setTimeout(() => setCircleVisible(false), 300);
    }
  }, [mobileOpen]);

  const navigateToSection = (href: string) => {
    closeMenu();
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/' + href);
    }
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  const isBlogActive = pathname.startsWith('/blog');
  const isPortfolioPage = pathname.startsWith('/portfolio');

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isHome && !scrolled
          ? 'bg-transparent'
          : 'bg-dark-900/85 backdrop-blur-2xl border-b border-dark-700/40 shadow-2xl shadow-black/20 dark:bg-dark-900/85 dark:border-dark-700/40 light:bg-white/85 light:border-gray-200/40 light:shadow-gray-200/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="relative group flex-shrink-0" onClick={closeMenu}>
          <span className="text-gold-400 font-display text-2xl lg:text-3xl tracking-tight">Abdoulaye</span>
          <span className="text-white font-display text-2xl lg:text-3xl tracking-tight dark:text-white light:text-dark-900">Patawala</span>
          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent group-hover:via-gold-400 transition-all duration-500" />
        </Link>

        {/* Desktop : Liens centrés */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className="flex items-center gap-0 bg-dark-800/40 backdrop-blur-sm border border-dark-700/40 rounded-full px-1.5 py-1.5 dark:bg-dark-800/40 dark:border-dark-700/40 light:bg-gray-100/80 light:border-gray-300/50 light:backdrop-blur-xl">
            {links.map((link) => {
              const isActive = link.isPage
                ? isBlogActive || (link.href === '/portfolio' && isPortfolioPage)
                : activeSection === link.href;

              const baseClass = `relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gold-500/15 text-gold-400 dark:bg-gold-500/15 dark:text-gold-400 light:bg-gold-500/20 light:text-gold-700'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700/50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-dark-700/50 light:text-gray-600 light:hover:text-dark-900 light:hover:bg-gray-200/70'
              }`;

              if (link.isPage) {
                return (
                  <Link key={link.href} href={link.href} className={baseClass}>
                    {link.label}
                  </Link>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => navigateToSection(link.href)}
                  className={baseClass}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Desktop + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <div className="w-px h-5 bg-dark-600 dark:bg-dark-600 light:bg-gray-300" />
          <button
            onClick={() => navigateToSection('#contact')}
            className="relative px-5 py-2.5 bg-gold-500 text-dark-900 text-sm font-semibold rounded-xl overflow-hidden group/cta transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 inline-flex items-center gap-2"
          >
            <span className="relative z-10">Me contacter</span>
            <svg
              className="relative z-10 w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <div className="absolute inset-0 bg-white translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 rounded-xl" />
          </button>
        </div>

        {/* Mobile toggle + Theme Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                mobileOpen
                  ? 'bg-dark-900 rotate-45 translate-y-[7px]'
                  : 'bg-white dark:bg-white light:bg-dark-900'
              }`} />
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                mobileOpen
                  ? 'bg-dark-900 opacity-0 scale-x-0'
                  : 'bg-white dark:bg-white light:bg-dark-900'
              }`} />
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                mobileOpen
                  ? 'bg-dark-900 -rotate-45 -translate-y-[7px]'
                  : 'bg-white dark:bg-white light:bg-dark-900'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — cercle doré plein écran */}
      {circleVisible && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ height: '100dvh' }}
        >
          <div
            className={`absolute w-8 h-8 rounded-full bg-gold-400 transition-all duration-500 ease-out ${
              mobileOpen ? 'scale-[200]' : 'scale-0'
            }`}
            style={{ top: '28px', right: '20px', transformOrigin: 'center' }}
          />

          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              linksVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="space-y-2 w-full px-8 max-w-sm">
              {links.map((link, i) => {
                const isActive = link.isPage
                  ? isBlogActive
                  : activeSection === link.href;

                const Comp = link.isPage ? Link : 'button';
                const props = link.isPage
                  ? { href: link.href, onClick: closeMenu }
                  : { onClick: () => navigateToSection(link.href) };

                return (
                  <Comp
                    key={link.href}
                    {...(props as React.ComponentProps<'button'> & React.ComponentProps<typeof Link>)}
                    className={`block w-full text-center py-4 rounded-2xl text-xl font-display transition-all duration-500 ${
                      linksVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    } ${
                      isActive
                        ? 'text-dark-900 bg-white/20'
                        : 'text-dark-900/80 hover:text-dark-900 hover:bg-white/10'
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    {link.label}
                  </Comp>
                );
              })}

              <div
                className={`pt-6 transition-all duration-500 ${
                  linksVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${links.length * 80}ms` }}
              >
                <button
                  onClick={() => navigateToSection('#contact')}
                  className="w-full py-4 bg-dark-900 text-gold-400 rounded-2xl font-semibold text-lg hover:bg-dark-800 transition-colors border border-gold-400/20 inline-flex items-center justify-center gap-2"
                >
                  Me contacter
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;