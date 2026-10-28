import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from './icons';
import { CRAFT_STEPS } from '../data/cafeData';

interface CraftSectionProps {
  onOpenImage?: (src: string, alt: string, caption?: string) => void;
}

export const CraftSection: React.FC<CraftSectionProps> = ({ onOpenImage }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentStep = CRAFT_STEPS[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % CRAFT_STEPS.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + CRAFT_STEPS.length) % CRAFT_STEPS.length);
  };

  return (
    <section
      id="craft"
      aria-label="The Coffee Craft Experience"
      className="relative bg-espresso-950 text-porcelain py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-lavender/10"
    >
      {/* Ambient plum gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-10 w-96 h-96 bg-plum-800/25 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-tangerine/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(229,149,57,0.8)]"></span>
            <span className="font-grotesk text-xs tracking-widest text-amber-300 uppercase font-semibold">
              The Artisan Ritual
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-porcelain tracking-tight leading-[1.04]">
            SLOW ROAST.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-[#FCE7C8] mt-0.5 sm:mt-1">
              GOLDEN OVEN BAKES.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-porcelain/80 font-sans leading-relaxed">
            From certified organic single-origin farms to our warm morning pastry ovens, explore the deliberate craftsmanship behind every bakery creation and espresso pour at our Dolmen Mall Clifton bar.
          </p>
        </div>

        {/* Step Navigation Tabs (Glassical Edge-to-Edge on Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          {CRAFT_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-shrink-0 whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full font-grotesk text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 ${
                  isActive
                    ? 'glass-btn-primary text-white font-bold'
                    : 'glass-btn-secondary text-porcelain/80 hover:text-white'
                }`}
                aria-pressed={isActive}
              >
                <span>{step.stepNumber}. {step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Step Showcase (Glass Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center glass-card rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-10 lg:p-12 border border-white/15">
          
          {/* Visual Showcase (7 cols on lg) */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative w-full h-[260px] xs:h-[320px] sm:h-[420px] lg:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden bg-cacao-950 shadow-2xl group cursor-pointer border border-white/10"
              onClick={() =>
                onOpenImage &&
                onOpenImage(currentStep.image, currentStep.title, currentStep.description)
              }
            >
              <img
                key={currentStep.image}
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury animate-fade-in"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cacao-950/80 via-transparent to-transparent"></div>

              {/* View button hint (Glass Badge) */}
              <div className="glass-badge absolute bottom-4 right-4 px-3.5 py-2 rounded-full text-porcelain border border-white/20 flex items-center gap-2 text-xs font-grotesk">
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Expand Photo</span>
              </div>

              {/* Step indicator on image (Glass Badge) */}
              <div className="glass-badge absolute top-4 left-4 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-grotesk tracking-widest text-amber-300 font-bold">
                STEP {currentStep.stepNumber} / 05
              </div>
            </div>
          </div>

          {/* Text Description & Navigation (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-editorial italic text-amber-400 text-lg sm:text-xl block">
                {currentStep.tagline}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-4xl text-porcelain mt-2 leading-tight">
                {currentStep.title}
              </h3>
              <p className="text-base text-porcelain/80 font-sans leading-relaxed mt-4">
                {currentStep.description}
              </p>
            </div>

            {/* Stepper controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous craft step"
                  className="glass-btn-secondary p-3 rounded-full text-porcelain hover:text-amber-300 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next craft step"
                  className="glass-btn-secondary p-3 rounded-full text-porcelain hover:text-amber-300 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <span className="text-xs font-grotesk tracking-widest text-amber-200/80 uppercase">
                {activeStepIndex + 1} of {CRAFT_STEPS.length} Steps
              </span>
            </div>
          </div>

        </div>

        {/* Editorial Collage of 4 Secondary Authentic Moments */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div
            onClick={() => onOpenImage && onOpenImage('/images/branch/roasted-to-perfection-wall.webp', 'Roasted to perfection wall art at Esquires Coffee Clifton', 'Wall art: Roasted to perfection and ground fresh for every cup')}
            className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden bg-espresso cursor-pointer border border-lavender/15"
          >
            <img
              src="/images/branch/roasted-to-perfection-wall.webp"
              alt="Roasted to perfection wall graphic"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-3 text-xs font-grotesk tracking-wider text-porcelain font-medium">
              Fresh Ground
            </span>
          </div>

          <div
            onClick={() => onOpenImage && onOpenImage('/images/branch/great-coffee-helps-bar.webp', 'Great coffee helps counter at Esquires Coffee Karachi', 'Main espresso counter with Italian machine and barista station')}
            className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden bg-espresso cursor-pointer border border-lavender/15"
          >
            <img
              src="/images/branch/great-coffee-helps-bar.webp"
              alt="Great coffee helps counter"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-3 text-xs font-grotesk tracking-wider text-porcelain font-medium">
              Barista Counter
            </span>
          </div>

          <div
            onClick={() => onOpenImage && onOpenImage('/images/coffee/craft-extraction.webp', 'Espresso portafilter extraction', 'Precision extraction under 9 bars of pressure')}
            className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden bg-espresso cursor-pointer border border-lavender/15"
          >
            <img
              src="/images/coffee/craft-extraction.webp"
              alt="Espresso extraction"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-3 text-xs font-grotesk tracking-wider text-porcelain font-medium">
              Pure Crema
            </span>
          </div>

          <div
            onClick={() => onOpenImage && onOpenImage('/images/branch/save-the-earth-wall.webp', 'Save the Earth wall graphic at Esquires Karachi', 'Save the Earth — It\'s the only planet with coffee')}
            className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden bg-espresso cursor-pointer border border-lavender/15"
          >
            <img
              src="/images/branch/save-the-earth-wall.webp"
              alt="Save the Earth wall"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-3 text-xs font-grotesk tracking-wider text-porcelain font-medium">
              Earth & Fairtrade
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
