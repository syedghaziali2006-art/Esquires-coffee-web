import React from 'react';
import { CAFE_ATMOSPHERE_HIGHLIGHTS } from '../data/cafeData';

interface StorySectionProps {
  onOpenImage?: (src: string, alt: string, caption?: string) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onOpenImage }) => {
  return (
    <section
      id="story"
      aria-label="Brand Story and Atmosphere"
      className="relative bg-plum-950 text-porcelain py-24 sm:py-32 overflow-hidden border-t border-lavender/10"
    >
      {/* Decorative ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-plum-800/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-tangerine/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage (5 cols on lg) */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Primary Atmosphere Image */}
            <div
              className="relative rounded-3xl overflow-hidden bg-espresso border border-lavender/20 shadow-luxury group cursor-pointer"
              onClick={() =>
                onOpenImage &&
                onOpenImage(
                  '/images/branch/cafe-interior-seating.webp',
                  'Esquires Coffee Dolmen Mall Clifton Café Interior and Seating',
                  'Warm café ambiance and comfortable seating inside Dolmen Mall Clifton'
                )
              }
            >
              <img
                src="/images/branch/cafe-interior-seating.webp"
                alt="Esquires Coffee Dolmen Mall Clifton interior with guests and baristas"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent"></div>
              
              <div className="glass-badge absolute bottom-4 left-4 right-4 p-3 rounded-xl border border-white/20 flex items-center justify-between text-xs">
                <span className="font-display font-semibold text-porcelain">
                  Café Lounge · Dolmen Mall 2nd Floor
                </span>
                <span className="text-amber-400 font-grotesk font-bold">Explore</span>
              </div>
            </div>

            {/* Secondary Overlapping Image: Bookshelf & Edison Bulbs */}
            <div
              className="relative rounded-2xl overflow-hidden bg-cacao-950 border border-white/15 shadow-md group cursor-pointer"
              onClick={() =>
                onOpenImage &&
                onOpenImage(
                  '/images/branch/bookshelf-edison-lights.webp',
                  'Bookshelf and warm Edison lighting at Esquires Coffee Clifton',
                  'Reading library corner with Edison lighting and coffee quotes'
                )
              }
            >
              <img
                src="/images/branch/bookshelf-edison-lights.webp"
                alt="Cozy library wall with Edison lights and coffee books at Esquires Clifton"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cacao-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-xs font-grotesk tracking-wide text-porcelain/90">
                A quiet space for warm bakery bakes & conversation
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Copy (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tag & Circular Motif */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-400 flex items-center justify-center shadow-[0_0_8px_rgba(229,149,57,0.8)]">
                <div className="w-1 h-1 rounded-full bg-white"></div>
              </div>
              <span className="font-grotesk text-xs tracking-widest text-amber-300 uppercase font-semibold">
                Our Environment
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-porcelain tracking-tight leading-[1.02]">
              YOUR SPACE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-[#FCE7C8]">
                TO PAUSE & TASTE.
              </span>
            </h2>

            {/* Short, human copy */}
            <div className="space-y-4 text-base sm:text-lg text-porcelain/80 font-sans leading-relaxed">
              <p>
                In a city that never stops moving, finding a place where you can genuinely unwind is rare. Esquires Coffee was designed around a simple human need: a comfortable, unhurried space to catch your breath.
              </p>
              <p className="text-porcelain/75 text-base">
                Whether you're stepping away from the bustling retail floors of Dolmen Mall, settling in with a book beneath our warm Edison pendants, or reconnecting with old friends over a fresh brew and warm brownie, this space is yours. No rush. No pressure. Just good coffee, fresh oven bakes, and better moments.
              </p>
            </div>

            {/* 4 Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {CAFE_ATMOSPHERE_HIGHLIGHTS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <h3 className="font-display font-bold text-sm text-porcelain">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-amber-100/75 font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Sourced quote banner */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border-l-4 border-amber-400 border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-grotesk uppercase tracking-wider text-amber-400 font-semibold block">
                  Branch Wall Note
                </span>
                <p className="font-editorial italic text-base sm:text-lg text-porcelain mt-0.5">
                  "Save the earth. It's the only planet with coffee & fresh bakes."
                </p>
              </div>
              <button
                onClick={() =>
                  onOpenImage &&
                  onOpenImage(
                    '/images/branch/save-the-earth-wall.webp',
                    'Save the Earth wall mural at Esquires Coffee Karachi',
                    'Original wall art at Esquires Coffee Dolmen Mall Clifton'
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-plum-800 text-[11px] font-grotesk text-porcelain hover:bg-tangerine-btn hover:text-white transition-colors flex-shrink-0 ml-4"
              >
                View Mural
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
