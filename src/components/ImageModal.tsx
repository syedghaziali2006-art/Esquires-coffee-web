import React, { useEffect } from 'react';
import { X } from './icons';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-plum-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-plum-900 border border-lavender/20 rounded-2xl p-3 sm:p-5 shadow-2xl overflow-hidden flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-espresso/80 text-porcelain hover:bg-tangerine-btn hover:text-white transition-colors duration-200 border border-lavender/20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full flex-1 overflow-auto rounded-xl flex items-center justify-center bg-espresso/40">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[75vh] w-auto object-contain rounded-lg"
          />
        </div>

        {caption && (
          <div className="mt-3 text-center">
            <p className="text-sm sm:text-base font-medium text-porcelain/90">
              {caption}
            </p>
            <p className="text-xs text-lavender-light mt-0.5">
              Esquires Coffee · Dolmen Mall Clifton, Karachi
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
