import React from 'react';
import { Coffee, Compass, Star, Clock, ShieldCheck, ArrowRight } from './icons';

interface HeroSectionProps {
  onOpenImage?: (src: string, alt: string, caption?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenImage }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
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
    <section
      id="hero"
      aria-label="Welcome to Esquires Coffee"
      className="relative min-h-screen flex items-center justify-center bg-plum-950 overflow-hidden pt-28 sm:pt-36 lg:pt-32 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Cinematic Ambient Lighting - Warm Cacao, Caramel & Patisserie Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm Caramel Honey Ember Glow on Right */}
        <div className="absolute top-1/4 right-0 w-[350px] sm:w-[600px] lg:w-[750px] h-[350px] sm:h-[600px] lg:h-[750px] bg-amber-500/20 rounded-full blur-[150px] -mr-32 -mt-16 pointer-events-none" />
        {/* Deep Cacao Truffle Atmosphere */}
        <div className="absolute top-1/3 left-0 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-cacao-800/60 rounded-full blur-[160px] -ml-40 pointer-events-none" />
        {/* Sweet Berry Glaze & Macaron Halo */}
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#E26A7A]/15 rounded-full blur-[130px] pointer-events-none" />
        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(18,10,7,0.92)_100%)] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Modern Luxury Typography & Narrative (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-7 text-left">
            
            {/* Elegant Brand Status Pill (Glass Badge) */}
            <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/35 shadow-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(229,149,57,0.9)] animate-pulse" />
              <span className="font-sans text-[11px] xs:text-xs tracking-wider text-amber-100/90 font-semibold uppercase">
                Artisan Bakery & Organic Coffee · Since 1993
              </span>
            </div>

            {/* Contemporary Luxury Editorial Headline - Immediate LCP Paint */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-porcelain tracking-tight leading-[1.06]">
                Artisan Coffee.
                <span className="block font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-[#FCE7C8] drop-shadow-sm pt-0.5 sm:pt-1">
                  Fresh Bakery Delights.
                </span>
              </h1>
            </div>

            {/* Editorial Narrative */}
            <p className="text-sm xs:text-base sm:text-lg text-porcelain/90 max-w-xl font-sans font-normal leading-relaxed">
              A coastal sanctuary of slow craft. Indulge in warm molten skillet cookies, freshly baked butter croissants, and certified 100% organic beans roasted to rich golden crema perfection on the 2nd floor of Dolmen Mall Clifton, Karachi.
            </p>

            {/* Primary Action Buttons (Glassical Effect) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1">
              <button
                onClick={() => handleScrollTo('menu')}
                className="glass-btn-primary group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-white rounded-full font-sans font-bold text-xs xs:text-sm tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-[0.98]"
              >
                <span>EXPLORE BAKERY & MENU</span>
                <Coffee className="w-4 h-4 group-hover:rotate-12 transition-transform text-white" />
              </button>

              <button
                onClick={() => handleScrollTo('visit')}
                className="glass-btn-secondary group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-porcelain rounded-full font-sans font-semibold text-xs xs:text-sm tracking-widest uppercase focus:outline-none active:scale-[0.98]"
              >
                <span>VISIT DOLMEN MALL</span>
                <Compass className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Modern Glassmorphic Proof Ribbon (Glass Card) */}
            <div className="glass-card w-full max-w-xl p-3 xs:p-4 sm:p-5 rounded-2xl grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 shadow-xl border border-white/15">
              {/* Stat 1 */}
              <div className="border-r border-white/10 pr-1.5 xs:pr-2">
                <div className="flex items-center gap-1 xs:gap-1.5 text-amber-400">
                  <ShieldCheck className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                  <span className="font-display font-extrabold text-base xs:text-xl sm:text-2xl text-amber-400">100%</span>
                </div>
                <span className="block text-[11px] xs:text-xs font-sans text-porcelain font-semibold pt-0.5 sm:pt-1 leading-tight">Organic Beans</span>
                <span className="text-[9px] xs:text-[10px] text-amber-200/80 block leading-tight">Fresh Bakery Bakes</span>
              </div>

              {/* Stat 2 */}
              <div className="border-r border-white/10 pr-1.5 xs:pr-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 xs:w-4 xs:h-4 fill-amber-400 text-amber-400" />
                  <span className="font-display font-extrabold text-base xs:text-xl sm:text-2xl text-porcelain">4.5</span>
                </div>
                <span className="block text-[11px] xs:text-xs font-sans text-porcelain font-semibold pt-0.5 sm:pt-1 leading-tight">730+ Reviews</span>
                <span className="text-[9px] xs:text-[10px] text-amber-200/80 block leading-tight">Google Verified</span>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="flex items-center gap-1 xs:gap-1.5 text-amber-400">
                  <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                  <span className="font-display font-extrabold text-base xs:text-xl sm:text-2xl text-porcelain">11 PM</span>
                </div>
                <span className="block text-[11px] xs:text-xs font-sans text-porcelain font-semibold pt-0.5 sm:pt-1 leading-tight">Open Daily</span>
                <span className="text-[9px] xs:text-[10px] text-amber-200/80 block leading-tight">2nd Floor Clifton</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Hero Showcase (5 cols on lg) - Immediate Image Rendering */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-2 lg:mt-0">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-none">
              {/* Decorative Ambient Aura behind image - Warm Caramel & Honey Glaze */}
              <div className="absolute -inset-3 sm:-inset-5 rounded-[2.5rem] bg-gradient-to-tr from-amber-500/35 via-[#E26A7A]/20 to-cacao-700/50 blur-2xl opacity-90" />

              {/* Main Showcase Container */}
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-white/20 bg-cacao-950 shadow-2xl group">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/coffee/hero-espresso-dark-mobile.webp" type="image/webp" />
                  <source media="(min-width: 641px)" srcSet="/images/coffee/hero-espresso-dark.webp" type="image/webp" />
                  <img
                    src="/images/coffee/hero-espresso-dark.webp"
                    alt="Artisan espresso extraction with rich golden crema at Esquires Coffee"
                    width={480}
                    height={530}
                    className="w-full h-[360px] xs:h-[420px] sm:h-[490px] lg:h-[530px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-luxury cursor-pointer"
                    loading="eager"
                    decoding="async"
                    onClick={() =>
                      onOpenImage &&
                      onOpenImage(
                        '/images/coffee/hero-espresso-dark.webp',
                        'Artisan espresso extraction with rich crema',
                        'Crafted with 100% certified organic Arabica beans at Esquires Coffee Karachi'
                      )
                    }
                  />
                </picture>

                {/* Subtle vignette over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-cacao-950/90 via-cacao-950/20 to-transparent pointer-events-none" />

                {/* Top Badge: Extraction & Fresh Bakes (Glass Badge) */}
                <div className="glass-badge absolute top-3.5 left-3.5 sm:top-5 sm:left-5 inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] xs:text-[11px] font-sans font-medium text-porcelain tracking-wide">
                    Artisan Roast & Fresh Bakes
                  </span>
                </div>

                {/* Floating Interactive Signature Card (Glass Card) */}
                <div
                  onClick={() =>
                    onOpenImage &&
                    onOpenImage(
                      '/images/branch/signature-latte-art.webp',
                      'Signature Latte Art Cup with Cinnamon and Warm Brownie at Esquires Karachi',
                      'Actual Esquires Coffee Karachi Signature Cappuccino served on wooden table'
                    )
                  }
                  className="glass-card absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-2.5 xs:p-3.5 sm:p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-amber-400/50 transition-all group/badge shadow-2xl active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2.5 xs:gap-3">
                    <img
                      src="/images/branch/signature-latte-art-thumb.webp"
                      alt="Cappuccino & Brownie pairing thumbnail"
                      width={48}
                      height={48}
                      className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl object-cover border border-amber-400/50 shadow-md group-hover/badge:scale-105 transition-transform flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] xs:text-[10px] font-sans font-bold tracking-widest text-amber-400 uppercase">
                          BAKERY SIGNATURE
                        </span>
                        <span className="text-[9px] xs:text-[10px] text-amber-300 font-bold">★ 4.9</span>
                      </div>
                      <p className="text-xs xs:text-sm font-sans font-bold text-porcelain group-hover/badge:text-amber-400 transition-colors leading-tight">
                        Cappuccino & Warm Brownie
                      </p>
                      <p className="text-[10px] xs:text-[11px] text-amber-100/70 font-sans line-clamp-1 xs:line-clamp-none">
                        Cinnamon foam · Warm Belgian chocolate
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0 pl-1">
                    <span className="text-[11px] xs:text-xs font-sans text-porcelain/90 font-medium group-hover/badge:text-amber-400 flex items-center gap-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-amber-400 group-hover/badge:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Aesthetic Seal Stamp (Glassical Gold) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 w-24 h-24 rounded-full glass-btn-primary text-white p-2.5 flex-col items-center justify-center text-center shadow-glow-caramel rotate-6 hover:rotate-0 transition-transform cursor-pointer border border-white/30">
                <span className="text-[8px] font-sans uppercase tracking-widest font-bold opacity-90">
                  SINCE
                </span>
                <span className="text-base font-display font-extrabold leading-tight">
                  1993
                </span>
                <span className="text-[8px] font-sans tracking-wider uppercase font-semibold">
                  ORGANIC
                </span>
              </div>

              {/* Bottom Sensory Chips */}
              <div className="hidden sm:flex items-center justify-center gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-plum-900/60 border border-white/10 text-[11px] font-sans text-lavender-light/95">
                  🍯 Honeyed Crema
                </span>
                <span className="px-3 py-1 rounded-full bg-plum-900/60 border border-white/10 text-[11px] font-sans text-lavender-light/95">
                  🍫 Dark Cocoa Finish
                </span>
                <span className="px-3 py-1 rounded-full bg-plum-900/60 border border-white/10 text-[11px] font-sans text-lavender-light/95">
                  🌿 100% Arabica
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Elegant Scroll Indicator */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <button
            onClick={() => handleScrollTo('intro')}
            aria-label="Scroll down to introduction section"
            className="group flex flex-col items-center gap-2 text-lavender-light/90 hover:text-tangerine transition-colors focus:outline-none"
          >
            <span className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase">
              Scroll To Experience
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-white/20 group-hover:border-tangerine flex items-start justify-center p-1 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-tangerine shadow-glow-tangerine animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
