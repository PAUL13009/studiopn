'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface MethodeCarouselProps {
  items: string[];
}

interface StepDetails {
  objectif: string;
  explication: string[];
}

const stepDetails: Record<number, StepDetails> = {
  0: {
    objectif: 'Comprendre votre situation réelle avant de proposer quoi que ce soit.',
    explication: [
      'Tout commence par un échange simple et direct.',
      'Cet appel me permet de comprendre :',
      '• Votre activité (indépendant, structure, secteur travaillé)',
      '• Votre manière actuelle d\'obtenir des mandats',
      '• Votre site existant (ou votre projet)',
      '• Vos attentes réelles, pas idéales',
      '',
      'Ce n\'est pas un appel commercial.',
      'Je ne vends rien à ce stade.',
      '',
      'L\'objectif est de vérifier une chose essentielle :',
      'Est-ce que la mise en place d\'un système d\'acquisition via votre site est pertinente dans votre cas ?',
      '',
      'Si ce n\'est pas le cas, je vous le dis.'
    ]
  },
  1: {
    objectif: 'Identifier ce qui fonctionne, ce qui bloque, et ce qui manque.',
    explication: [
      'Avant de construire quoi que ce soit, j\'analyse votre situation actuelle :',
      '',
      '• Votre site (s\'il existe) : structure, contenus, clarté, parcours',
      '• Votre positionnement local',
      '• Votre concurrence directe sur Google',
      '• La façon dont un vendeur arrive aujourd\'hui sur votre site (s\'il y arrive)',
      '',
      'Cette étape permet de répondre à des questions simples mais essentielles :',
      '',
      '• Votre site est-il compréhensible pour un vendeur ?',
      '• Est-il visible localement ?',
      '• Joue-t-il un rôle dans l\'obtention de mandats ?',
      '',
      'On ne repart jamais de zéro sans raison.',
      'On corrige avant d\'ajouter.'
    ]
  },
  2: {
    objectif: 'Capter les recherches réelles des vendeurs, pas des mots-clés génériques.',
    explication: [
      'Un vendeur ne tape pas "agence immobilière" au hasard.',
      'Il cherche des réponses à des questions très précises, souvent locales :',
      '',
      '• Estimation dans son quartier',
      '• Prix au m²',
      '• Moment pour vendre',
      '• Comparaison d\'agences',
      '• Crédibilité d\'un professionnel',
      '',
      'J\'identifie donc :',
      '',
      '• Ce que recherchent réellement les vendeurs',
      '• Comment ils formulent leurs questions',
      '• A quel moment de leur réflexion ils se trouvent',
      '',
      'Le but n\'est pas de faire du trafic.',
      'Le but est d\'attirer les bonnes personnes, au bon moment.'
    ]
  },
  3: {
    objectif: 'Créer une architecture claire, lisible par Google et par les vendeurs.',
    explication: [
      'Une fois les intentions identifiées, je construis la structure du site :',
      '',
      '• Quelles pages sont nécessaires',
      '• Quel rôle joue chaque page',
      '• Comment elles sont liées entre elles',
      '• Où placer les points de conversion',
      '',
      'Cette structure permet :',
      '',
      '• D\'être compris par Google (SEO local)',
      '• De guider naturellement un vendeur',
      '• D\'éviter les sites confus ou trop généralistes',
      '',
      'Un bon site n\'est pas un empilement de pages.',
      'C\'est une structure logique avec un objectif clair.'
    ]
  },
  4: {
    objectif: 'Transformer un visiteur en demande d\'estimation qualifiée.',
    explication: [
      'Les contenus ne sont pas écrits pour "faire du texte".',
      'Ils sont conçus pour :',
      '',
      '• Répondre aux questions d\'un vendeur',
      '• Rassurer sans sur-promettre',
      '• Expliquer simplement',
      '• Orienter vers l\'action au bon moment',
      '',
      'En parallèle, je conçois les parcours :',
      '',
      '• CTA',
      '• Formulaires',
      '• Pages intermédiaires',
      '',
      'L\'objectif n\'est pas de multiplier les contacts.',
      'L\'objectif est de qualifier les demandes.'
    ]
  },
  5: {
    objectif: 'S\'assurer que le site est visible, mesurable et exploitable.',
    explication: [
      'Une fois le site prêt :',
      '',
      '• Il est mis en ligne proprement',
      '• Indexé correctement par Google',
      '• Relié aux outils de mesure',
      '',
      'Je mets en place le suivi de :',
      '',
      '• Trafic',
      '• Pages consultées',
      '• Formulaires',
      '• Comportements utilisateurs',
      '',
      'Sans données, impossible de savoir ce qui fonctionne.',
      'Cette étape transforme le site en outil mesurable, pas en vitrine passive.'
    ]
  },
  6: {
    objectif: 'Améliorer le système dans le temps, de façon rationnelle.',
    explication: [
      'Un système d\'acquisition n\'est jamais figé.',
      'Il évolue en fonction :',
      '',
      '• Des comportements réels des visiteurs',
      '• Des performances des pages',
      '• Des demandes reçues',
      '• Du contexte local',
      '',
      'J\'analyse régulièrement :',
      '',
      '• Ce qui attire',
      '• Ce qui convertit',
      '• Ce qui bloque',
      '',
      'Puis j\'ajuste :',
      '',
      '• Les contenus',
      '• Les parcours',
      '• Les points de friction',
      '',
      'Pas de refonte permanente.',
      'Des améliorations ciblées, basées sur des données réelles.'
    ]
  }
};

export default function MethodeCarousel({ items }: MethodeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  useEffect(() => {
    // Réinitialiser l'état d'expansion quand on change de carte
    setIsExpanded(false);
  }, [currentIndex]);

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        // Animation d'ouverture : de haut en bas
        gsap.fromTo(
          contentRef.current,
          {
            height: 0,
            opacity: 0,
            y: -20
          },
          {
            height: 'auto',
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
          }
        );
      } else {
        // Animation de fermeture
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            if (contentRef.current) {
              contentRef.current.style.display = 'none';
            }
          }
        });
      }
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    if (contentRef.current && !isExpanded) {
      contentRef.current.style.display = 'block';
    }
    setIsExpanded(!isExpanded);
  };

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
          <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs sm:text-sm font-light group-hover:bg-green-500/30 group-hover:border-green-500/60 group-hover:text-green-300 transition-all duration-300">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
        </div>
        
        {/* Contenu */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10">
          {items[currentIndex]}
        </p>
        
        {/* Contenu détaillé (expandable) */}
        {(() => {
          const currentStepDetails = stepDetails[currentIndex];
          if (!currentStepDetails) return null;
          
          const explication = currentStepDetails.explication;
          
          return (
            <div
              ref={contentRef}
              className="w-full max-w-4xl mx-auto overflow-hidden"
              style={{ display: 'none', height: 0 }}
            >
              <div className="pt-6 border-t border-white/10 space-y-6">
                {/* Objectif */}
                {currentStepDetails.objectif && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-3">
                      Objectif
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      {currentStepDetails.objectif}
                    </p>
                  </div>
                )}
                
                {/* Explication */}
                {explication && explication.length > 0 && (
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-3">
                      Explication
                    </h3>
                    <div className="space-y-3 text-base sm:text-lg text-white/85 leading-relaxed">
                      {explication.map((line, index) => (
                        <p key={index}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
        
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
