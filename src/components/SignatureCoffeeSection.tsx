import React from 'react';
import { ArrowUpRight, Info, Check } from './icons';
import { SIGNATURE_COFFEE } from '../data/cafeData';

interface SignatureCoffeeSectionProps {
  onOpenImage?: (src: string, alt: string, caption?: string) => void;
}

export const SignatureCoffeeSection: React.FC<SignatureCoffeeSectionProps> = ({ onOpenImage }) => {
  const handleScrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
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
      id="signature"
      aria-label="Signature Coffee Experiences"
      className="relative bg-plum-950 text-porcelain py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-lavender/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-plum-800/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-tangerine/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 border-b border-white/10 pb-6 sm:pb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(229,149,57,0.8)]"></span>
              <span className="font-grotesk text-xs tracking-widest text-amber-300 uppercase font-semibold">
                Curated Coffee & Bakes
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-porcelain tracking-tight leading-[1.04]">
              SIGNATURE SIPS &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-[#FCE7C8] mt-0.5 sm:mt-1">
                DESSERT PAIRINGS.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-porcelain/75 font-sans leading-relaxed">
              Explore our core coffee archetypes paired with artisan bakery bakes. Each sip is crafted with 100% certified organic beans, dialed in for sweet crema, rich aroma, and silky body.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-amber-200/80 font-grotesk">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span>Category concepts. See the full café menu for current daily bakery bakes.</span>
            </div>
          </div>
        </div>

        {/* Asymmetrical 3-Column Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {SIGNATURE_COFFEE.map((drink, idx) => {
            const isCenter = idx === 1;

            return (
              <div
                key={drink.id}
                className={`lg:col-span-4 flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-500 border ${
                  isCenter
                    ? 'glass-card border-amber-400/40 shadow-glow-caramel lg:-translate-y-4'
                    : 'glass-card border-white/10 hover:border-amber-400/40'
                } group`}
              >
                <div>
                  {/* Category Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-grotesk text-xs tracking-widest text-amber-200/80 font-bold uppercase">
                      Category 0{idx + 1}
                    </span>
                    {isCenter && (
                      <span className="glass-btn-primary px-3 py-1 rounded-full text-white text-[10px] font-grotesk uppercase tracking-wider font-bold">
                        Top Bakery Pairing
                      </span>
                    )}
                  </div>

                  {/* Image with zoom effect */}
                  <div
                    className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-espresso cursor-pointer"
                    onClick={() =>
                      onOpenImage &&
                      onOpenImage(drink.image, drink.name, drink.tagline)
                    }
                  >
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-luxury"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-950/70 via-transparent to-transparent"></div>
                    
                    {/* Hover hint */}
                    <div className="absolute bottom-3 right-3 p-2 rounded-full bg-plum-950/80 text-porcelain opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-tangerine" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-porcelain group-hover:text-tangerine transition-colors">
                    {drink.name}
                  </h3>
                  <p className="font-editorial italic text-lavender-light text-sm sm:text-base mt-1">
                    {drink.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-porcelain/75 font-sans leading-relaxed mt-4">
                    {drink.description}
                  </p>

                  {/* Tasting & Craft Notes */}
                  <div className="mt-6 space-y-2 border-t border-lavender/10 pt-4">
                    <span className="block text-[11px] font-grotesk uppercase tracking-widest text-lavender-light/90 font-semibold">
                      Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {drink.notes.map((note, noteIdx) => (
                        <li key={noteIdx} className="flex items-center gap-2 text-xs text-porcelain/90">
                          <Check className="w-3.5 h-3.5 text-tangerine flex-shrink-0" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-lavender/10 flex items-center justify-between">
                  <span className="text-xs text-lavender-light/90 font-sans italic">
                    {drink.idealFor}
                  </span>
                  <a
                    href="#menu"
                    onClick={handleScrollToMenu}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-tangerine-btn text-porcelain hover:text-white transition-colors duration-200"
                    aria-label={`View menu options for ${drink.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA to View Verified Menu */}
        <div className="mt-16 text-center">
          <a
            href="#menu"
            onClick={handleScrollToMenu}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-plum-900 border border-lavender/25 text-porcelain hover:border-tangerine hover:text-tangerine font-grotesk font-semibold text-xs uppercase tracking-widest transition-all duration-300"
          >
            <span>VIEW FULL IN-BRANCH BEVERAGE MENU</span>
            <ArrowUpRight className="w-4 h-4 text-tangerine" />
          </a>
        </div>

      </div>
    </section>
  );
};
