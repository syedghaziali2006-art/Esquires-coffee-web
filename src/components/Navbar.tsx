import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, ArrowUpRight, Coffee } from './icons';
import { CAFE_INFO } from '../data/cafeData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Coffee', href: '#signature' },
  { name: 'The Craft', href: '#craft' },
  { name: 'Menu', href: '#menu' },
  { name: 'Our Story', href: '#story' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Find Us', href: '#visit' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll state and section observation without forced reflow
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Efficient IntersectionObserver for active section tracking (zero layout thrashing)
    const sections = ['hero', 'signature', 'craft', 'menu', 'story', 'reviews', 'visit'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 sm:py-3.5 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] border-b border-white/15'
            : 'glass-nav py-4 sm:py-4.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark & Emblem */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
              aria-label="Esquires Coffee Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cacao-800 via-cacao-900 to-cacao-950 border border-amber-400/50 flex items-center justify-center text-amber-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_4px_16px_rgba(229,149,57,0.3)] group-hover:border-amber-400 group-hover:scale-105 group-hover:shadow-glow-caramel transition-all">
                <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.14em] text-porcelain group-hover:text-amber-400 transition-colors uppercase leading-none">
                    Esquires
                  </span>
                  <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(229,149,57,0.9)] animate-pulse" />
                </div>
                <span className="font-sans text-[10px] tracking-[0.22em] text-amber-200/80 uppercase font-medium mt-1">
                  Bakery · Patisserie · Coffee
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Glass Pill) */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-1.5 glass-pill px-3.5 py-1.5 rounded-full"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-1.5 text-xs font-sans tracking-wider transition-all duration-300 rounded-full ${
                      isActive
                        ? 'text-white glass-btn-primary font-bold shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_6px_20px_rgba(229,149,57,0.5)]'
                        : 'text-porcelain/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Buttons (Glassical Effect) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="glass-btn-secondary flex items-center gap-2 px-4 py-2 text-xs font-sans font-medium tracking-wider text-porcelain/90 rounded-full"
                title={`Call ${CAFE_INFO.phone}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden xl:inline">{CAFE_INFO.phone}</span>
              </a>

              <a
                href="#visit"
                onClick={(e) => handleNavClick(e, '#visit')}
                className="glass-btn-primary group relative inline-flex items-center gap-2 px-5 py-2 text-xs uppercase font-sans font-bold tracking-widest text-white rounded-full"
              >
                <span>Visit Us</span>
                <MapPin className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button (Glassical) */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#visit"
                onClick={(e) => handleNavClick(e, '#visit')}
                className="glass-btn-primary px-3.5 py-1.5 text-[11px] uppercase font-sans font-bold tracking-wider text-white rounded-full"
              >
                Visit
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Close main navigation menu' : 'Open main navigation menu'}
                className="glass-btn-secondary p-2.5 rounded-full text-porcelain hover:text-amber-400 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden bg-cacao-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fadeIn"
        >
          {/* Header row with close button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cacao-900 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-black text-xl tracking-[0.14em] text-porcelain uppercase">
                  Esquires
                </div>
                <span className="font-sans text-[10px] tracking-[0.22em] text-amber-200/80 uppercase">
                  Bakery · Patisserie · Coffee
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="glass-btn-secondary p-2.5 rounded-full text-porcelain hover:text-amber-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <nav className="my-auto py-6 flex flex-col gap-3">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group flex items-center justify-between text-2xl font-display font-bold text-porcelain hover:text-amber-400 transition-colors tracking-wide py-1.5"
              >
                <span>{item.name}</span>
                <span className="text-xs font-sans tracking-widest text-amber-300/60 group-hover:text-amber-400 transition-colors">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Footer CTAs (Glassical) */}
          <div className="border-t border-white/10 pt-6 space-y-3">
            <a
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="glass-btn-secondary w-full flex items-center justify-center gap-2.5 py-3 rounded-xl text-porcelain font-sans text-sm tracking-wider"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Café: {CAFE_INFO.phone}</span>
            </a>

            <a
              href={CAFE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-primary w-full flex items-center justify-center gap-2.5 py-3 rounded-xl text-white font-sans font-bold text-sm tracking-wider"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions to Dolmen Mall</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>

            <p className="text-[11px] text-center text-amber-200/70 pt-2 font-sans">
              2nd Floor, Dolmen Mall Clifton · Open until 11:00 PM
            </p>
          </div>
        </div>
      )}
    </>
  );
};
