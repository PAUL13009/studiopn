'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface SystemesCarouselProps {
  items: string[];
}

export default function SystemesCarousel({ items }: SystemesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 1);
    }
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // Capitaliser seulement la première lettre
  const capitalizeFirst = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="w-full">
      {/* Conteneur avec flèches et carte */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        {/* Bouton précédent - Flèche gauche */}
        <button
          onClick={goToPrevious}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Carte précédente"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carte actuelle */}
        <div 
          ref={cardRef} 
          key={currentIndex} 
          className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 min-h-[200px] sm:min-h-[240px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] flex-1"
        >
          {/* Badge numéro - Centré au-dessus du titre */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs sm:text-sm font-light group-hover:bg-green-500/30 group-hover:border-green-500/60 group-hover:text-green-300 transition-all duration-300">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>
          
          {/* Contenu avec coche verte */}
          <div className="flex items-center gap-3 sm:gap-4 justify-center">
            {/* Coche verte */}
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-green-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto">
              {capitalizeFirst(items[currentIndex])}
            </p>
          </div>
        </div>

        {/* Bouton suivant - Flèche droite */}
        <button
          onClick={goToNext}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Carte suivante"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicateurs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 ${
              index === currentIndex
                ? 'bg-white w-8 sm:w-10'
                : 'bg-white/30 w-2 hover:bg-white/50'
            }`}
            aria-label={`Aller à la carte ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
