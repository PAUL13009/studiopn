'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface MethodeEtudeCasCarouselProps {
  items: string[];
}

interface StepDetails {
  objectif?: string;
  explication?: string[];
}

const stepDetails: Record<number, StepDetails> = {
  0: {
    objectif: 'Avant de refaire quoi que ce soit, l\'objectif est de comprendre ce que le site fait déjà… et surtout ce qu\'il ne fait pas.',
    explication: [
      'Concrètement, j\'analyse :',
      '',
      '• la structure du site (pages existantes, logique de navigation, clarté)',
      '• la compréhension côté vendeur : est-ce qu\'un propriétaire comprend immédiatement où il est, ce que l\'agence propose, et quoi faire ensuite ?',
      '• la cohérence des contenus : est-ce que les textes répondent aux questions d\'un vendeur, ou sont-ils trop génériques ?',
      '• la visibilité actuelle : est-ce que le site apparaît sur des recherches locales liées à l\'estimation / vente ?',
      '• la concurrence : qui ressort sur Google sur les requêtes importantes, et pourquoi eux ?',
      '',
      'L\'objectif n\'est pas de "critiquer" un site existant, mais d\'identifier :',
      '',
      '• les freins majeurs',
      '• les pages utiles à renforcer',
      '• ce qui doit être restructuré pour que le site serve un objectif : générer des demandes d\'estimation.'
    ]
  },
  1: {
    objectif: 'Le point clé, c\'est que les vendeurs ne recherchent pas "un site d\'agence". Ils recherchent des réponses concrètes, souvent très locales, parce qu\'ils sont en phase de réflexion.',
    explication: [
      'Donc cette étape consiste à identifier :',
      '',
      '• ce que tapent réellement les propriétaires du secteur',
      '• comment ils formulent leurs questions',
      '• quelles recherches indiquent une intention de vente ou une pré-intention d\'estimation',
      '',
      'Exemples d\'intentions vendeurs :',
      '',
      '• "prix m2 [quartier]"',
      '• "estimation appartement [zone]"',
      '• "vendre appartement [quartier]"',
      '• "combien vaut mon bien [secteur]"',
      '• "meilleure agence pour vendre [zone]" (quand c\'est formulé ainsi)',
      '',
      'L\'objectif ici n\'est pas de faire du trafic "pour du trafic".',
      'C\'est de capter des personnes :',
      '',
      '• localisées',
      '• concernées',
      '• et assez avancées dans leur réflexion pour passer à l\'étape suivante.'
    ]
  },
  2: {
    objectif: 'Une fois les intentions identifiées, il faut une structure de site capable de : les capter sur Google et guider la personne vers une action (demande d\'estimation).',
    explication: [
      'Cette structure consiste à définir :',
      '',
      '• quelles pages doivent exister (et lesquelles sont inutiles)',
      '• quelle est la page "pilier" (souvent la page Estimation)',
      '• quelles pages satellites servent à répondre aux questions des vendeurs',
      '• comment l\'ensemble est relié par un maillage interne logique',
      '',
      'Une bonne structure SEO :',
      '',
      '• évite le site fourre-tout',
      '• clarifie les priorités',
      '• améliore la compréhension de Google',
      '• et, surtout, améliore la compréhension du visiteur.',
      '',
      'Le résultat, ce n\'est pas "plus de pages".',
      'C\'est une architecture claire où chaque page a un rôle précis dans le système d\'acquisition.'
    ]
  },
  3: {
    objectif: 'Un vendeur ne se convertit pas parce qu\'un site est joli. Il se convertit quand : il se sent compris, il obtient des repères, il est rassuré et il sait quoi faire ensuite.',
    explication: [
      'Donc les contenus sont conçus pour :',
      '',
      '• répondre aux questions réelles d\'un vendeur',
      '• expliquer les choses simplement (sans blabla)',
      '• montrer une expertise locale crédible',
      '• éviter les promesses irréalistes',
      '• orienter naturellement vers une demande d\'estimation',
      '',
      'Ces pages ne sont pas des "pages marketing".',
      'Ce sont des pages utiles, qui servent à :',
      '',
      '• clarifier',
      '• rassurer',
      '• et faire avancer la décision.'
    ]
  },
  4: {
    objectif: 'Même un site très bien référencé peut ne rien générer si le parcours est flou. L\'objectif ici est de rendre l\'action évidente pour un vendeur : où cliquer ? à quel moment ? pour faire quoi ? avec quelles informations ?',
    explication: [
      'Le parcours de conversion comprend :',
      '',
      '• les CTA au bon endroit (pas partout)',
      '• des boutons avec un libellé clair (ex : "Demander une estimation", pas "Contact")',
      '• des pages structurées pour guider le lecteur',
      '• des formulaires pensés pour qualifier plutôt que multiplier des demandes inutiles',
      '',
      'L\'objectif est simple :',
      '👉 moins de demandes "brouillon"',
      '👉 plus de demandes sérieuses, exploitables.'
    ]
  },
  5: {
    objectif: 'Sans mesure, on navigue à l\'intuition. Et dans ce type de projet, l\'intuition ne suffit pas.',
    explication: [
      'Donc l\'installation d\'outils de suivi sert à comprendre :',
      '',
      '• d\'où viennent les visiteurs (recherches locales, pages)',
      '• quelles pages ils consultent',
      '• où ils abandonnent',
      '• ce qui génère réellement des demandes d\'estimation',
      '',
      'On met en place un suivi pour mesurer :',
      '',
      '• trafic qualifié',
      '• clics sur CTA',
      '• soumissions de formulaires',
      '• comportement utilisateur sur les pages clés',
      '',
      'L\'objectif n\'est pas d\'avoir "des stats".',
      'L\'objectif est d\'avoir des données utiles pour optimiser intelligemment.'
    ]
  },
  6: {
    objectif: 'La refonte du design n\'est jamais un but en soi. Elle doit servir un objectif : rendre le site plus clair, plus crédible, plus simple à utiliser.',
    explication: [
      'Dans ce projet, la refonte vise à :',
      '',
      '• améliorer la lisibilité (structure, hiérarchie, textes)',
      '• créer un style plus cohérent et plus rassurant',
      '• réduire le bruit visuel',
      '• renforcer l\'image professionnelle de l\'agence',
      '• guider l\'utilisateur vers les actions clés',
      '',
      'Le design est traité comme un outil :',
      '',
      '• il doit faciliter la compréhension',
      '• inspirer confiance',
      '• et rendre le parcours évident',
      '',
      '👉 Un design réussi, dans ce contexte, c\'est un design qui sert la conversion, pas un design "impressionnant".'
    ]
  }
};

export default function MethodeEtudeCasCarousel({ items }: MethodeEtudeCasCarouselProps) {
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
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentStepDetails = stepDetails[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Carte principale */}
      <div className="relative mb-8">
        <div
          ref={cardRef}
          className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 min-h-[300px] flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]"
        >
          {/* Badge numéro */}
          <div className="mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/8 border border-green-500/50 text-green-500 text-sm sm:text-base font-light group-hover:bg-white/12 group-hover:border-green-500/70 group-hover:text-green-400 transition-all duration-300">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>
          
          {/* Contenu */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-xl sm:text-2xl font-light text-white/90 text-center leading-relaxed">
              {items[currentIndex]}
            </p>
          </div>

          {/* Contenu détaillé (expandable) */}
          {(() => {
            if (!currentStepDetails) return null;
            
            const explication: string[] = currentStepDetails.explication || [];
            
            return (
              <div
                ref={contentRef}
                className="w-full max-w-4xl mx-auto overflow-hidden"
                style={{ display: 'none', height: 0 }}
              >
                <div className="pt-6 border-t border-white/10 space-y-6">
                  {/* Objectif */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-3">
                      Objectif
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                      {currentStepDetails.objectif}
                    </p>
                  </div>
                  
                  {/* Explication */}
                  {explication.length > 0 && (
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
          {currentStepDetails && (
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

        {/* Flèches de navigation */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-x-12 sm:-translate-x-16 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center group"
          aria-label="Étape précédente"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 translate-x-12 sm:translate-x-16 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center group"
          aria-label="Étape suivante"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicateurs de points */}
      <div className="flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Aller à l'étape ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
