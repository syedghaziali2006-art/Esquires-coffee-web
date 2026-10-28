import React from 'react';
import { ArrowUp, Phone, ArrowUpRight, ShieldCheck } from './icons';
import { CAFE_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      aria-label="Site Footer"
      className="bg-cacao-950 text-porcelain border-t border-white/10 pt-16 sm:pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-[0.18em] text-porcelain uppercase">
                Esquires
              </span>
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(229,149,57,0.8)]"></span>
            </div>
            
            <p className="font-grotesk text-xs tracking-widest text-amber-300 uppercase font-semibold">
              Artisan Bakery & Organic Coffee · Dolmen Mall Clifton, Karachi
            </p>

            <p className="text-sm text-porcelain/75 font-sans leading-relaxed max-w-sm pt-1">
              Thoughtfully crafted organic coffee, warm oven-baked pastries, and a refined coastal sanctuary worth slowing down for. Serving Clifton and the Karachi community.
            </p>

            <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/15 text-xs text-amber-100/90">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>100% Certified Organic Coffee & Fresh Daily Bakes</span>
            </div>
          </div>

          {/* Quick Links (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-grotesk text-xs uppercase tracking-widest text-tangerine font-bold">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, 'hero')}
                  className="text-porcelain/75 hover:text-tangerine transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#signature"
                  onClick={(e) => handleNavClick(e, 'signature')}
                  className="text-porcelain/75 hover:text-tangerine transition-colors"
                >
                  Our Coffee
                </a>
              </li>
              <li>
                <a
                  href="#craft"
                  onClick={(e) => handleNavClick(e, 'craft')}
                  className="text-porcelain/75 hover:text-tangerine transition-colors"
                >
                  The Craft
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="text-porcelain/75 hover:text-tangerine transition-colors"
                >
                  Menu Highlights
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => handleNavClick(e, 'story')}
                  className="text-porcelain/75 hover:text-tangerine transition-colors"
                >
                  Our Space & Story
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleNavClick(e, 'reviews')}
                  className="text-porcelain/75 hover:text-tangerine transition-colors"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  onClick={(e) => handleNavClick(e, 'visit')}
                  className="text-porcelain/75 hover:text-tangerine transition-colors"
                >
                  Visit & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="font-grotesk text-xs uppercase tracking-widest text-tangerine font-bold">
              Location & Contact
            </p>
            
            <p className="text-sm text-porcelain/80 leading-relaxed">
              Second Floor, Dolmen Mall<br />
              Marine Drive, Block 4, Clifton<br />
              Karachi, Pakistan
            </p>

            <div className="pt-1">
              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-grotesk font-semibold text-porcelain hover:text-tangerine transition-colors"
              >
                <Phone className="w-4 h-4 text-tangerine" />
                <span>{CAFE_INFO.phone}</span>
              </a>
            </div>

            <p className="text-xs text-lavender-light/90 font-sans">
              Reported hours: Open daily until 11:00 PM (Google listing snapshot)
            </p>

            <div className="pt-2">
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-grotesk uppercase tracking-wider text-tangerine hover:underline"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-lavender-light/90">
          <p>
            © {currentYear} Esquires Coffee Karachi · Frontend Showcase. Sourced branch details for Dolmen Mall Clifton.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-plum-900/60 hover:bg-tangerine-btn hover:text-white border border-lavender/15 text-porcelain transition-all"
          >
            <span className="font-grotesk uppercase tracking-widest text-[11px]">
              Back To Top
            </span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
