import React, { useState, useEffect } from 'react';
import { Coffee, Utensils, MapPin, Phone } from './icons';
import { CAFE_INFO } from '../data/cafeData';

export const MobileBottomDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show dock after scrolling down a little bit so it doesn't clutter initial hero view
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track active section
    const sections = ['hero', 'signature', 'menu', 'visit'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-3 left-3 right-3 z-40 max-w-sm mx-auto md:hidden animate-fade-in transition-all"
    >
      <div className="glass-nav rounded-full p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.2)] border border-white/20 flex items-center justify-between gap-1">
        
        {/* Menu Action */}
        <a
          href="#menu"
          onClick={(e) => handleNavClick(e, 'menu')}
          className={`flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-full transition-all duration-200 active:scale-95 ${
            activeSection === 'menu'
              ? 'glass-btn-primary text-white shadow-glow-caramel'
              : 'text-porcelain/80 hover:text-white hover:bg-white/5'
          }`}
          aria-label="Browse bakery & coffee menu"
        >
          <Utensils className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider leading-none">
            Menu
          </span>
        </a>

        {/* Signature Coffee & Bakery */}
        <a
          href="#signature"
          onClick={(e) => handleNavClick(e, 'signature')}
          className={`flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-full transition-all duration-200 active:scale-95 ${
            activeSection === 'signature'
              ? 'glass-btn-primary text-white shadow-glow-caramel'
              : 'text-porcelain/80 hover:text-white hover:bg-white/5'
          }`}
          aria-label="Signature coffee and bakery pairings"
        >
          <Coffee className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider leading-none">
            Pairings
          </span>
        </a>

        {/* Find Us */}
        <a
          href="#visit"
          onClick={(e) => handleNavClick(e, 'visit')}
          className={`flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-full transition-all duration-200 active:scale-95 ${
            activeSection === 'visit'
              ? 'glass-btn-primary text-white shadow-glow-caramel'
              : 'text-porcelain/80 hover:text-white hover:bg-white/5'
          }`}
          aria-label="Visit us at Dolmen Mall Clifton"
        >
          <MapPin className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider leading-none">
            Find Us
          </span>
        </a>

        {/* Call Café (Direct phone tap) */}
        <a
          href={`tel:${CAFE_INFO.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-2 rounded-full text-amber-300 hover:text-amber-200 hover:bg-white/5 transition-all duration-200 active:scale-95"
          aria-label={`Call café at ${CAFE_INFO.phone}`}
        >
          <div className="relative">
            <Phone className="w-4 h-4 mb-0.5" />
            <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider leading-none">
            Call
          </span>
        </a>

      </div>
    </aside>
  );
};
