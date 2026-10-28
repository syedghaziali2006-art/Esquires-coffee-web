import React, { useState } from 'react';
import { Utensils, Coffee, Cake, Phone, Eye, ArrowUpRight, AlertCircle } from './icons';
import { MENU_HIGHLIGHTS, CAFE_INFO } from '../data/cafeData';

interface MenuSectionProps {
  onOpenImage?: (src: string, alt: string, caption?: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenImage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'coffee' | 'savoury' | 'dessert'>('all');

  const filteredItems = activeTab === 'all'
    ? MENU_HIGHLIGHTS
    : MENU_HIGHLIGHTS.filter((item) => {
        if (activeTab === 'coffee') return item.category === 'coffee' || item.category === 'specialty';
        if (activeTab === 'savoury') return item.category === 'savoury';
        if (activeTab === 'dessert') return item.category === 'dessert';
        return true;
      });

  return (
    <section
      id="menu"
      aria-label="Food and Menu Highlights"
      className="relative bg-porcelain text-espresso py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-porcelain-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8 border-b border-porcelain-border pb-6 sm:pb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span className="font-grotesk text-xs tracking-widest text-mocha uppercase font-bold">
                Artisan Patisserie & Espresso Menu
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-espresso tracking-tight leading-[1.04]">
              ARTISAN BAKERY &
              <span className="block text-amber-deep font-editorial italic font-normal mt-0.5 sm:mt-1">
                COFFEE PATISSERIE.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm sm:text-base text-espresso-800 font-sans leading-relaxed">
              Curated highlights from our Dolmen Mall Clifton kitchen. From fresh-baked butter croissants and molten skillet cookies to decadent Belgian chocolate jars and single-origin espresso.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-mocha font-grotesk bg-porcelain-dark px-3 py-1.5 rounded-lg border border-porcelain-border">
              <AlertCircle className="w-4 h-4 text-tangerine flex-shrink-0" />
              <span>Reported highlights & price card snapshots. Subject to daily café availability.</span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs (Smooth Edge-to-Edge Swipe on Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-shrink-0 whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full font-grotesk text-xs uppercase tracking-widest transition-all duration-200 border active:scale-95 ${
              activeTab === 'all'
                ? 'bg-espresso text-porcelain border-espresso shadow-md'
                : 'bg-porcelain-light text-espresso-700 border-porcelain-border hover:border-mocha'
            }`}
          >
            All Highlights ({MENU_HIGHLIGHTS.length})
          </button>

          <button
            onClick={() => setActiveTab('coffee')}
            className={`flex-shrink-0 whitespace-nowrap flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-grotesk text-xs uppercase tracking-widest transition-all duration-200 border active:scale-95 ${
              activeTab === 'coffee'
                ? 'bg-espresso text-porcelain border-espresso shadow-md'
                : 'bg-porcelain-light text-espresso-700 border-porcelain-border hover:border-mocha'
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-tangerine" />
            <span>Coffee & Beverages</span>
          </button>

          <button
            onClick={() => setActiveTab('savoury')}
            className={`flex-shrink-0 whitespace-nowrap flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-grotesk text-xs uppercase tracking-widest transition-all duration-200 border active:scale-95 ${
              activeTab === 'savoury'
                ? 'bg-espresso text-porcelain border-espresso shadow-md'
                : 'bg-porcelain-light text-espresso-700 border-porcelain-border hover:border-mocha'
            }`}
          >
            <Utensils className="w-3.5 h-3.5 text-tangerine" />
            <span>Savoury Favourites</span>
          </button>

          <button
            onClick={() => setActiveTab('dessert')}
            className={`flex-shrink-0 whitespace-nowrap flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-grotesk text-xs uppercase tracking-widest transition-all duration-200 border active:scale-95 ${
              activeTab === 'dessert'
                ? 'bg-espresso text-porcelain border-espresso shadow-md'
                : 'bg-porcelain-light text-espresso-700 border-porcelain-border hover:border-mocha'
            }`}
          >
            <Cake className="w-3.5 h-3.5 text-tangerine" />
            <span>Desserts & Bakery</span>
          </button>
        </div>

        {/* Magazine-style Asymmetric Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl bg-porcelain-light border border-porcelain-border p-5 hover:border-tangerine/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
            >
                <div>
                  {/* Photo Container */}
                  {item.image && (
                    <div
                      className="relative w-full h-56 rounded-xl overflow-hidden bg-porcelain-dark mb-4 cursor-pointer"
                      onClick={() =>
                        onOpenImage &&
                        onOpenImage(item.image!, item.name, item.description)
                      }
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-luxury"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {item.badge && (
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-espresso/90 backdrop-blur-sm text-porcelain text-[10px] font-grotesk uppercase tracking-wider font-semibold border border-white/10">
                          {item.badge}
                        </div>
                      )}

                      <div className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-espresso opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <Eye className="w-4 h-4 text-tangerine" />
                      </div>
                    </div>
                  )}

                  {/* Category & Subcategory */}
                  <div className="flex items-center justify-between text-xs font-grotesk text-mocha mb-1 uppercase tracking-wider">
                    <span>{item.subCategory || item.category}</span>
                    {item.price && (
                      <span className="font-bold text-tangerine-deep font-grotesk">
                        {item.price}
                      </span>
                    )}
                  </div>

                  {/* Item Name */}
                  <h3 className="font-display font-bold text-xl text-espresso group-hover:text-tangerine transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-espresso-700 font-sans leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3 border-t border-porcelain-border/70 flex items-center justify-between text-xs text-mocha">
                  <span className="font-grotesk tracking-wide">
                    Dolmen Mall Clifton
                  </span>
                  <a
                    href={`tel:${CAFE_INFO.phoneRaw}`}
                    className="hover:text-tangerine-deep transition-colors flex items-center gap-1 font-grotesk font-semibold text-espresso-800"
                  >
                    <span>Check Today</span>
                    <ArrowUpRight className="w-3 h-3 text-tangerine-deep" />
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* View Actual Photo Menu Boards Action */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-card text-porcelain flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/15">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-grotesk uppercase tracking-widest text-amber-400 font-bold">
              Looking for Today’s Kitchen Offerings?
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-porcelain">
              Ask About Today's Daily Bakes & Specials
            </h3>
            <p className="text-sm text-amber-100/75 max-w-xl">
              Fresh croissants, warm cinnamon rolls, daily pasta variations, and iced brews change with our morning bakes. Contact the café directly or browse our physical boards on the 2nd floor.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={() =>
                onOpenImage &&
                onOpenImage(
                  '/images/branch/beverage-price-menu.webp',
                  'Actual Printed Esquires Karachi Beverage Menu & Price Card',
                  'In-branch Hot & Cold Coffee Menu Card with Official Prices'
                )
              }
              className="glass-btn-secondary px-6 py-3.5 rounded-full text-porcelain text-xs uppercase font-grotesk font-semibold tracking-wider flex items-center gap-2 border border-white/20"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>View On-Site Price Card</span>
            </button>

            <a
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="glass-btn-primary px-6 py-3.5 rounded-full text-white text-xs uppercase font-grotesk font-bold tracking-widest flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Café: +92 21 38897719</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
