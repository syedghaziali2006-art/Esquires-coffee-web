import React from 'react';
import { Star, ArrowUpRight, MessageSquareQuote, CheckCircle2 } from './icons';
import { CAFE_INFO, REVIEW_THEMES } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Customer Reviews and Community Feedback"
      className="relative bg-porcelain text-espresso py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-porcelain-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Rating Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-end mb-12 sm:mb-20 border-b border-porcelain-border pb-8 sm:pb-12">
          
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-tangerine"></span>
              <span className="font-grotesk text-xs tracking-widest text-mocha uppercase font-bold">
                Guest Impressions
              </span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-espresso tracking-tight leading-[1.04]">
              COMMUNITY
              <span className="block text-tangerine-deep font-editorial italic font-normal mt-0.5 sm:mt-1">
                WORDS & FAVOURITES.
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-espresso-800 font-sans leading-relaxed max-w-xl">
              Authentic feedback reflected across hundreds of visits to our Dolmen Mall Clifton café. Sourced from Google Maps listing data.
            </p>
          </div>

          {/* Sourced Snapshot Rating Box (5 cols on lg) */}
          <div className="lg:col-span-5 glass-card text-porcelain p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col justify-between border border-white/15">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-display font-extrabold text-5xl sm:text-7xl text-amber-400 tracking-tighter leading-none">
                  {CAFE_INFO.rating}
                </span>
                <span className="text-xl sm:text-2xl text-porcelain/60 font-grotesk ml-1">
                  / 5.0
                </span>
              </div>
              <div className="flex gap-1 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400 fill-amber-400/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-1">
              <div className="flex items-center justify-between text-xs font-grotesk">
                <span className="text-porcelain/90 font-bold uppercase tracking-wider">
                  {CAFE_INFO.reviewCount}+ Verified Reviews
                </span>
                <span className="text-amber-400 font-semibold">Google Listing</span>
              </div>
              <p className="text-[11px] text-amber-100/70 leading-normal pt-1">
                {CAFE_INFO.curatedSnapshotNote}
              </p>
            </div>
          </div>

        </div>

        {/* 4 Thematic Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {REVIEW_THEMES.map((theme) => (
            <div
              key={theme.id}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-porcelain-light border border-porcelain-border p-5 sm:p-9 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(theme.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-amber-400/40 text-amber-400'
                        }`}
                      />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-mocha/40 group-hover:text-amber-500 transition-colors" />
                </div>

                <h3 className="font-display font-bold text-lg sm:text-2xl text-espresso group-hover:text-amber-deep transition-colors">
                  {theme.title}
                </h3>

                <blockquote className="mt-2.5 sm:mt-3 text-sm sm:text-lg font-editorial italic text-espresso-800 leading-relaxed">
                  "{theme.quote}"
                </blockquote>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-porcelain-border/80 flex items-center justify-between text-xs font-grotesk text-mocha">
                <span className="flex items-center gap-1.5 text-mocha-dark font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>{theme.authorNote}</span>
                </span>
                <span className="uppercase tracking-wider">Dolmen Clifton</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Google Maps Reviews */}
        <div className="mt-10 sm:mt-14 text-center">
          <a
            href={CAFE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-grotesk font-bold text-xs uppercase tracking-widest shadow-glow-caramel active:scale-95 text-center"
          >
            <span>READ ALL CUSTOMER REVIEWS ON GOOGLE MAPS</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
