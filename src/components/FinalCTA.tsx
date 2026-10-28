import React from 'react';
import { Coffee, MapPin } from './icons';

export const FinalCTA: React.FC = () => {
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
      aria-label="Make Today A Little Better"
      className="relative bg-plum-950 text-porcelain py-24 sm:py-36 overflow-hidden border-t border-lavender/10"
    >
      {/* Cinematic Background with Coffee Photography Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <img
          src="/images/coffee/hero-espresso-dark.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950 via-plum-950/90 to-plum-950"></div>
      </div>

      {/* Radiant Caramel & Patisserie Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-8">
        
        {/* Eyebrow (Glass Badge) */}
        <div className="glass-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(229,149,57,0.8)]" />
          <span className="font-grotesk text-xs uppercase tracking-widest text-amber-300 font-semibold">
            Fresh Oven Patisserie & Artisan Coffee
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl text-porcelain tracking-tight leading-[0.98]">
          FRESH BAKES.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-[#FCE7C8] mt-1">
            SWEETER MOMENTS.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-2xl text-porcelain/90 font-editorial italic max-w-2xl mx-auto leading-relaxed">
          "Take a slow breath. Pair your favourite warm bake with an artisan roast. Make it a memory."
        </p>

        {/* CTAs (Glassical Effect) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => handleScrollTo('visit')}
            className="glass-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-white rounded-full font-grotesk font-bold text-sm tracking-widest uppercase shadow-glow-caramel"
          >
            <span>VISIT ESQUIRES CLIFTON</span>
            <MapPin className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScrollTo('menu')}
            className="glass-btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-porcelain border border-white/20 rounded-full font-grotesk font-medium text-sm tracking-widest uppercase"
          >
            <span>EXPLORE BAKERY & MENU</span>
            <Coffee className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Location note */}
        <p className="text-xs font-grotesk uppercase tracking-widest text-amber-200/80 pt-4">
          Second Floor · Dolmen Mall Clifton · Karachi, Pakistan
        </p>

      </div>
    </section>
  );
};
