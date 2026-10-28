import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { SignatureCoffeeSection } from './components/SignatureCoffeeSection';
import { CraftSection } from './components/CraftSection';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitSection } from './components/VisitSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { MobileBottomDock } from './components/MobileBottomDock';

export const App: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    caption?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    caption: '',
  });

  const handleOpenImage = (src: string, alt: string, caption?: string) => {
    setModalState({
      isOpen: true,
      imageSrc: src,
      imageAlt: alt,
      caption,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-plum-950 text-porcelain flex flex-col selection:bg-tangerine selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Hero Section */}
        <HeroSection onOpenImage={handleOpenImage} />

        {/* 2. Editorial Intro Section (Warm Porcelain) */}
        <IntroSection onOpenImage={handleOpenImage} />

        {/* 3. Signature Coffee Experiences (Midnight Plum) */}
        <SignatureCoffeeSection onOpenImage={handleOpenImage} />

        {/* 4. The Craft Ritual (Espresso Black & Collage) */}
        <CraftSection onOpenImage={handleOpenImage} />

        {/* 5. Food & Menu Discovery (Warm Porcelain) */}
        <MenuSection onOpenImage={handleOpenImage} />

        {/* 6. Brand Story & Atmosphere (Midnight Plum) */}
        <StorySection onOpenImage={handleOpenImage} />

        {/* 7. Customer Reviews & Love (Warm Porcelain) */}
        <ReviewsSection />

        {/* 8. Visit Us & Directions (Midnight Plum) */}
        <VisitSection onOpenImage={handleOpenImage} />

        {/* 9. Final Call-to-Action */}
        <FinalCTA />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Image Lightbox */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        caption={modalState.caption}
      />

      {/* Floating Glass Mobile Dock */}
      <MobileBottomDock />
    </div>
  );
};

export default App;
