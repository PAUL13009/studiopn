'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface CardCarouselProps {
  items: string[];
}

export default function CardCarousel({ items }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Retour au début
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 1); // Aller à la fin
    }
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="card-carousel">
      {/* Carte actuelle */}
      <div ref={cardRef} key={currentIndex} className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors min-h-[120px] flex items-center justify-center text-center">
        <p className="text-white/90 text-xl sm:text-2xl">{items[currentIndex]}</p>
      </div>

      {/* Contrôles de navigation */}
      <div className="flex items-center justify-between mt-6">
        {/* Bouton précédent */}
        <button
          onClick={goToPrevious}
          className="px-4 py-2 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-colors"
          aria-label="Carte précédente"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Indicateurs */}
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
              aria-label={`Aller à la carte ${index + 1}`}
            />
          ))}
        </div>

        {/* Bouton suivant */}
        <button
          onClick={goToNext}
          className="px-4 py-2 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-colors"
          aria-label="Carte suivante"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

