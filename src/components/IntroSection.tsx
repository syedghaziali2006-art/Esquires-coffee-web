import React from 'react';
import { Compass, ShieldCheck, Sparkles } from './icons';

interface IntroSectionProps {
  onOpenImage?: (src: string, alt: string, caption?: string) => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenImage }) => {
  return (
    <section
      id="intro"
      aria-label="Make Room For A Good Cup"
      className="relative bg-porcelain text-espresso py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle graphic accent - fine line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tangerine to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Typography & Copy (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small uppercase tag */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-tangerine"></span>
              <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-mocha">
                The Philosophy
              </span>
            </div>

            {/* Oversized Editorial Heading */}
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-espresso tracking-tight leading-[1.02]">
              SLOW DOWN
              <span className="block text-amber-deep font-normal italic font-editorial mt-1">
                FOR DELICATE FLAVOURS.
              </span>
            </h2>

            {/* Vertical Accent Line + Paragraph */}
            <div className="flex items-start gap-4 sm:gap-6 border-l-4 border-amber-500 pl-4 sm:pl-6 py-1">
              <p className="text-lg sm:text-xl text-espresso-800/90 font-sans leading-relaxed font-normal">
                Life in Karachi moves with unyielding momentum. Esquires Coffee was created as an antidote to the rush—a welcoming sanctuary on the second floor of Dolmen Mall where time slows down, fresh dough rises in our morning ovens, and beans are ground fresh on demand.
              </p>
            </div>

            <p className="text-base sm:text-lg text-mocha-dark font-sans leading-relaxed">
              Whether you are catching up over a velvet Spanish latte, sharing a molten chocolate skillet cookie with vanilla gelato, or savouring freshly baked butter croissants, we believe exceptional baking and artisan coffee are the foundation of better moments.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-porcelain-dark/70 border border-porcelain-border flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-espresso">
                    100% Organic
                  </h3>
                  <p className="text-xs text-espresso/80 mt-1">
                    Certified Fairtrade beans roasted to perfection.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-porcelain-dark/70 border border-porcelain-border flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-espresso">
                    Fresh Oven Bakes
                  </h3>
                  <p className="text-xs text-espresso/80 mt-1">
                    Warm skillet cookies, brownies & daily pastries.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-porcelain-dark/70 border border-porcelain-border flex items-start gap-3">
                <Compass className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-grotesk font-bold text-xs uppercase tracking-wider text-espresso">
                    Seaside Haven
                  </h3>
                  <p className="text-xs text-espresso/80 mt-1">
                    Relaxed Clifton retreat on 2nd Floor Dolmen.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Editorial Close-Up Photography (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group cursor-pointer" onClick={() => onOpenImage && onOpenImage('/images/branch/signature-latte-art.webp', 'Signature Latte Art Cappuccino at Esquires Coffee Karachi', 'Signature Cappuccino with cinnamon sprinkle and brownie bite')}>
              
              {/* Subtle offset backdrop */}
              <div className="absolute -inset-3 rounded-2xl bg-mocha/20 -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-porcelain-border shadow-xl bg-espresso">
                <img
                  src="/images/branch/signature-latte-art.webp"
                  alt="Close-up of cappuccino with delicate latte art and brownie bite at Esquires Coffee Clifton"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury"
                  loading="lazy"
                />

                {/* Corner Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-espresso/90 backdrop-blur-md text-porcelain flex items-center justify-between border border-white/10">
                  <div>
                    <span className="text-[10px] font-grotesk uppercase tracking-widest text-tangerine font-semibold block">
                      Actual Branch Cup
                    </span>
                    <span className="text-sm font-display font-bold">
                      Cappuccino with Brownie Bite
                    </span>
                  </div>
                  <span className="text-xs font-grotesk text-porcelain/70">
                    Dolmen Clifton
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
