'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface DiagnosticCarouselProps {
  items: string[];
}

interface StepDetails {
  description: string;
  points?: string[];
}

const stepDetails: Record<number, StepDetails> = {
  0: {
    description: 'Vous complétez le formulaire ci-dessous afin de me permettre de comprendre votre contexte.'
  },
  1: {
    description: 'J\'analyse les éléments fournis (site, positionnement, zone, objectifs).'
  },
  2: {
    description: 'Un échange clair pour vous expliquer :',
    points: [
      'Ce qui bloque',
      'Ce qui peut être amélioré',
      'Si la mise en place d\'un système d\'acquisition est pertinente ou non'
    ]
  }
};

function AnimatedCTALink({ href, children }: { href: string; children: React.ReactNode }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const fill = fillRef.current;
    const text = textRef.current;

    if (!button || !fill || !text) return;

    // Initialiser l'état : remplissage invisible à gauche
    gsap.set(button, { scale: 1, y: 0 });
    gsap.set(fill, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(text, { color: '#ffffff' });

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.02,
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(fill, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(text, {
        color: '#000000',
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.1
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
      gsap.to(fill, {
        scaleX: 0,
        duration: 0.4,
        ease: 'power2.in'
      });
      gsap.to(text, {
        color: '#ffffff',
        duration: 0.3,
        ease: 'power2.in'
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="pt-4 flex justify-center">
      <Link
        ref={buttonRef}
        href={href}
        className="relative px-8 py-4 border border-white text-lg font-medium transition-colors inline-block rounded-tl-lg rounded-br-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        {/* Remplissage animé */}
        <div
          ref={fillRef}
          className="absolute inset-0 bg-white z-0"
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
        />
        
        {/* Texte */}
        <span ref={textRef} className="relative z-10" style={{ color: '#ffffff' }}>
          {children}
        </span>
      </Link>
    </div>
  );
}

export default function DiagnosticCarousel({ items }: DiagnosticCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const goToNext = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setIsExpanded(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToIndex = (index: number) => {
    setIsExpanded(false);
    setCurrentIndex(index);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const ref = contentRef.current;
    if (ref) {
      if (isExpanded) {
        ref.style.display = 'block';
        gsap.fromTo(
          ref,
          {
            height: 0,
            opacity: 0,
            y: -10
          },
          {
            height: 'auto',
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
          }
        );
      } else {
        gsap.to(ref, {
          height: 0,
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            if (ref) {
              ref.style.display = 'none';
            }
          }
        });
      }
    }
  }, [isExpanded]);

  return (
    <div className="w-full">
      {/* Conteneur avec flèches et carte */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        {/* Bouton précédent - Flèche gauche */}
        <button
          onClick={goToPrevious}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Étape précédente"
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
            <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs sm:text-sm font-light group-hover:bg-white/12 group-hover:border-white/25 group-hover:text-white/80 transition-all duration-300">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>
          
          {/* Contenu */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10">
            {items[currentIndex]}
          </p>
          
          {/* Contenu détaillé (expandable) */}
          {stepDetails[currentIndex] && (
            <div
              ref={contentRef}
              className="w-full max-w-4xl mx-auto overflow-hidden"
              style={{ display: 'none', height: 0 }}
            >
              <div className="pt-6 border-t border-white/10 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                    {stepDetails[currentIndex].description}
                  </p>
                </div>
                
                {/* Points si présents */}
                {stepDetails[currentIndex].points && (
                  <div>
                    <ul className="space-y-3 text-base sm:text-lg text-white/85 leading-relaxed text-center">
                      {stepDetails[currentIndex].points!.map((point, index) => (
                        <li key={index} className="flex items-center justify-center">
                          <span className="mr-3 text-white/60">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bouton CTA pour la première carte */}
                {currentIndex === 0 && (
                  <AnimatedCTALink href="/rdv">
                    Formulaire de diagnostic
                  </AnimatedCTALink>
                )}
              </div>
            </div>
          )}
          
          {/* Flèche vers le bas/haut */}
          {stepDetails[currentIndex] && (
            <button
              onClick={toggleExpand}
              className={`group/arrow flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 mt-8 sm:mt-10 ${
                isExpanded ? '' : ''
              }`}
              aria-label={isExpanded ? "Fermer les détails" : "Voir les détails"}
            >
              <svg 
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Bouton suivant - Flèche droite */}
        <button
          onClick={goToNext}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Étape suivante"
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
            aria-label={`Aller à l'étape ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
