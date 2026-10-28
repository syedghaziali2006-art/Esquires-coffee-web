import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, Navigation, Sparkles, AlertCircle } from './icons';
import { CAFE_INFO } from '../data/cafeData';

interface VisitSectionProps {
  onOpenImage?: (src: string, alt: string, caption?: string) => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenImage }) => {
  return (
    <section
      id="visit"
      aria-label="Location and Visit Information"
      className="relative bg-plum-950 text-porcelain py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-lavender/10"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-tangerine/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-plum-800/30 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-tangerine animate-pulse"></span>
            <span className="font-grotesk text-xs tracking-widest text-lavender uppercase font-semibold">
              Find Us In Clifton
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-porcelain tracking-tight leading-[1.04]">
            YOUR NEXT CUP
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tangerine to-lavender-light mt-0.5 sm:mt-1">
              IS WAITING.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-porcelain/80 font-sans leading-relaxed">
            Located on the second floor of Dolmen Mall Clifton, Karachi. Stop by for an unhurried artisan coffee, comforting food, and seaside hospitality.
          </p>
        </div>

        {/* Content Grid: Contact Details & Storefront Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Details Card (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Address Block (Glass Card) */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/15 space-y-3 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-400">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="font-grotesk text-xs uppercase tracking-widest font-bold">
                  Dolmen Mall Clifton
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-porcelain">
                Esquires Coffee & Bakery
              </h3>
              <p className="text-base text-porcelain/80 font-sans leading-relaxed">
                Second Floor, Dolmen Mall<br />
                Marine Drive, Block 4, Clifton<br />
                Karachi, Pakistan
              </p>
              <div className="pt-2 text-xs text-amber-200/80 font-grotesk flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Easily accessible via main mall escalators & central elevators</span>
              </div>
            </div>

            {/* Hours Block (Glass Card) */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-3 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-400">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="font-grotesk text-xs uppercase tracking-widest font-bold">
                  Reported Operating Hours
                </span>
              </div>
              <p className="font-display font-semibold text-xl text-porcelain">
                Open Daily until 11:00 PM
              </p>
              <div className="flex items-start gap-2 pt-1 text-xs text-amber-100/75 font-sans">
                <AlertCircle className="w-4 h-4 text-amber-400/90 flex-shrink-0 mt-0.5" />
                <span>
                  According to the supplied Google listing snapshot. Not a permanently guaranteed daily schedule; please check with the café during holidays and special mall events.
                </span>
              </div>
            </div>

            {/* Direct Mobile & Desktop Action Buttons (Glassical Effect) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-primary flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-white font-grotesk font-bold text-xs uppercase tracking-widest shadow-glow-caramel text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="glass-btn-secondary flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-porcelain font-grotesk font-semibold text-xs uppercase tracking-widest text-center border border-white/20"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>CALL THE CAFÉ</span>
              </a>
            </div>

          </div>

          {/* Storefront Photography & Map Direction Visual (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Storefront Image */}
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-espresso border border-lavender/20 shadow-luxury group cursor-pointer"
              onClick={() =>
                onOpenImage &&
                onOpenImage(
                  '/images/branch/dolmen-storefront.webp',
                  'Esquires Coffee Storefront at Dolmen Mall Clifton, Karachi',
                  'Actual storefront exterior at Dolmen Mall Clifton with luminous sign'
                )
              }
            >
              <img
                src="/images/branch/dolmen-storefront.webp"
                alt="Actual Esquires Coffee Storefront at Dolmen Mall Clifton"
                className="w-full h-64 xs:h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-plum-950/85 backdrop-blur-md border border-lavender/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-grotesk uppercase tracking-widest text-tangerine font-bold block">
                    Actual Branch Storefront
                  </span>
                  <span className="font-display font-bold text-sm text-porcelain">
                    Second Floor Entrance
                  </span>
                </div>
                <span className="text-xs font-grotesk text-lavender-light flex items-center gap-1">
                  <span>View</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-tangerine" />
                </span>
              </div>
            </div>

            {/* Quick Map Directions Card with Interactive Link */}
            <a
              href={CAFE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl bg-plum-900/50 border border-lavender/15 hover:border-tangerine transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tangerine/20 border border-tangerine flex items-center justify-center text-tangerine group-hover:bg-tangerine-btn group-hover:text-white transition-colors">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-porcelain group-hover:text-tangerine transition-colors">
                      Open in Google Maps
                    </p>
                    <p className="text-xs text-lavender-light/90">
                      Navigate directly to Dolmen Mall Clifton
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-lavender group-hover:text-tangerine group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
