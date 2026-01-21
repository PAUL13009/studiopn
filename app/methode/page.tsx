'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import StaggeredMenu from "@/components/StaggeredMenu";
import BackgroundVideo from "@/components/BackgroundVideo";
import AnimatedCTA from "@/components/AnimatedCTA";
import Particles from "@/components/Particles";
import MethodeCarousel from "@/components/MethodeCarousel";

export default function Methode() {
  const menuItems = [
    { label: 'Accueil', link: '/' },
    { label: 'Offre', link: '/offre' },
    { label: 'Ma méthode', link: '/methode' },
    { label: 'Diagnostic', link: '/diagnostic' },
    { label: 'À propos', link: '/a-propos' },
    { label: 'Projets en cours', link: '/projets-en-cours' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
        {/* Staggered Menu */}
        <StaggeredMenu
          position="right"
          colors={['#000000', '#1a1a1a']}
          items={menuItems}
          displaySocials={false}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          accentColor="#fff"
          changeMenuColorOnOpen={false}
          isFixed={false}
          closeOnClickAway={true}
        />
        {/* Background Video */}
        <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
          <BackgroundVideo />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-6">
              Une méthode simple, mesurable et orientée résultats
          </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Découvrez comment votre projet sera mis en place
            </p>
            <div className="flex flex-col items-center gap-4">
              <AnimatedCTA href="/rdv">
                Programmez un appel stratégique
              </AnimatedCTA>
              <p className="text-sm sm:text-base text-white/70">
                30min - Gratuit - Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Pourquoi système d'acquisition */}
      <section id="pourquoi-systeme" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
        <Particles 
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleColors={['#ffffff']}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.5}
          cameraDistance={25}
          disableRotation={false}
          pixelRatio={1}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Titre principal */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Pourquoi je conçois des sites sous forme de système d'acquisition ?
            </h2>
          </header>
          
          {/* Sous-titre */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/80 text-center leading-relaxed">
              La plupart des agents immobiliers indépendants ont un site qui :
            </p>
          </div>
          
          {/* Grille des 4 éléments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              'Ne génère aucune demande d\'estimation régulière',
              'Dépend encore trop des portails ou de la prospection',
              'Est mal positionné sur Google, même localement',
              'N\'est pas conçu pour convertir un vendeur'
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 lg:p-8 min-h-[180px] flex flex-col transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)] focus-within:bg-white/7 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/20 focus-within:outline-none"
                tabIndex={0}
                role="article"
              >
                {/* Badge numéro */}
                <div className="mb-5">
                  <span 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-light group-hover:bg-white/12 group-hover:border-white/25 group-hover:text-white/80 transition-all duration-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Contenu */}
                <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed flex-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - Ma méthode */}
      <section id="ma-methode" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
        <Particles 
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleColors={['#ffffff']}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.5}
          cameraDistance={25}
          disableRotation={false}
          pixelRatio={1}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Titre principal */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Ma méthode en 7 étapes
            </h2>
          </header>
          
          {/* Carrousel */}
          <MethodeCarousel 
            items={[
              'Appel stratégique de 30min',
              'Analyse du contexte et de l\'existant',
              'Identification des intentions vendeurs locales',
              'Conception de la structure SEO',
              'Création des contenus et parcours',
              'Mise en ligne, indexation et tracking',
              'Analyse et ajustements continus'
            ]}
          />
        </div>
      </section>

      {/* Section - Questions fréquentes */}
      <section id="faq" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
        <Particles 
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleColors={['#ffffff']}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.5}
          cameraDistance={25}
          disableRotation={false}
          pixelRatio={1}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Titre principal */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Questions fréquentes (FAQ)
            </h2>
          </header>
          
          {/* Liste des questions/réponses */}
          <FAQAccordion 
            items={[
              {
                question: 'Combien de temps avant les premiers résultats ?',
                answer: 'Les premier résultats arrivent généralement dans les 6 semaines suivant l\'indexation sur Google'
              },
              {
                question: 'Est-ce que ça marche dans tous les secteurs ?',
                answer: 'Un métier, une méthode. Pour d\'autres secteurs de l\'immobilier, la création d\'un système similaire devra etre adaptée aux caractéristiques propres à ce secteur.'
              },
              {
                question: 'Est-ce compatible avec les portails ?',
                answer: 'Oui'
              },
              {
                question: 'Pourquoi sans publicité ?',
                answer: 'La méthode repose sur le SEO (Search Engine Optimisation), il s\'agit du référencement sur les moteurs de recherche. Le système est conçu pour apparaitre dans les résultat de recherche d\'internaute qui ont des demandes spécifique. Apparaitre dans ces résultats de recherche et conçevoir du contenu qui correspond à ce que les internaute souhaitent voir est la base pour obtenir des leads qualifiés.'
              }
            ]}
          />
        </div>
      </section>

      {/* Section - CTA final */}
      <section id="cta-final" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
        <Particles 
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleColors={['#ffffff']}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.5}
          cameraDistance={25}
          disableRotation={false}
          pixelRatio={1}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* CTA Card */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
            {/* Titre */}
            <header className="mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl font-light text-center leading-tight tracking-tight">
                Votre site peut-il réellement devenir un levier d'acquisition ?
              </h2>
            </header>
            
            {/* Texte descriptif */}
            <div className="mb-8 sm:mb-10">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center max-w-prose mx-auto">
                Je vous propose un diagnostic clair et honnête de votre site ou de votre projet,<br />
                afin d'identifier ce qui bloque et ce qui peut être amélioré.
              </p>
            </div>
            
            {/* Séparateur */}
            <div className="w-full h-px bg-white/10 mb-8 sm:mb-10"></div>
            
            {/* Bouton */}
            <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
              <AnimatedCTA href="/rdv">
                Programmez un appel stratégique
              </AnimatedCTA>
              <p className="text-sm sm:text-base text-white/70">
                30min - Gratuit - Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm sm:text-base">
            2026 - StudioPN - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    items.forEach((_, index) => {
      const ref = answerRefs.current[index];
      if (ref) {
        if (openIndex === index) {
          // Animation d'ouverture
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
          // Animation de fermeture
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
    });
  }, [openIndex, items]);

  const toggleItem = (index: number) => {
    const ref = answerRefs.current[index];
    if (ref && openIndex !== index) {
      ref.style.display = 'block';
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)] cursor-pointer"
          onClick={() => toggleItem(index)}
        >
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-medium text-white text-center">
              {item.question}
            </h3>
            
            {/* Réponse (expandable) */}
            <div
              ref={(el) => {
                answerRefs.current[index] = el;
              }}
              className="overflow-hidden"
              style={{ display: 'none', height: 0 }}
            >
              <div className="pt-4">
                <div className="w-full h-px bg-white/10 mb-4"></div>
                <p className="text-base sm:text-lg text-white/85 leading-relaxed text-center">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
