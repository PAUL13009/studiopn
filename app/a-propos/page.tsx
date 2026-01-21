'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import StaggeredMenu from "@/components/StaggeredMenu";
import BackgroundVideo from "@/components/BackgroundVideo";
import AnimatedCTA from "@/components/AnimatedCTA";
import Particles from "@/components/Particles";

export default function APropos() {
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
              Pourquoi StudioPN n'est pas une agence web comme les autres ?
          </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              StudioPN est né d'un constat simple :<br />
              la majorité des sites immobiliers existent… mais ne servent à rien dans l'obtention de nouveaux mandats
            </p>
            <div className="flex justify-center">
              <AnimatedCTA href="/rdv">
                Demander un diagnostic
              </AnimatedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Ce que j'ai observé */}
      <section id="observations" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Ce que j'ai observé sur les sites immobiliers
            </h2>
          </header>
          
          {/* Paragraphe introductif */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
              En analysant de nombreux sites immobiliers, un schéma revient constamment :
            </p>
          </div>
          
          {/* Carrousel des observations */}
          <ObservationsCarousel 
            items={[
              'Des sites propres visuellement, mais sans objectif clair',
              'Peu ou pas de demandes d\'estimation générées',
              'Une forte dépendance aux portails et à la prospection',
              'Des contenus génériques, interchangeables',
              'Aucune logique de mesure réelle'
            ]}
          />

          {/* Paragraphe de contexte */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed">
              Dans la plupart des cas, le site est en ligne parce qu'il "faut en avoir un",<br />
              pas parce qu'il joue un rôle concret dans l'acquisition de vendeurs.
            </p>
          </div>

          {/* Résultat */}
          <div className="max-w-5xl mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">
                  Résultat :
                </h3>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Le site existe, mais n'aide pas réellement l'agent à signer plus de mandats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Pourquoi j'ai créé StudioPN */}
      <section id="pourquoi-studiopn" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Pourquoi j'ai créé StudioPN ?
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="space-y-8 sm:space-y-10">
            {/* Paragraphe introductif */}
            <div className="max-w-prose mx-auto">
              <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
                StudioPN est né de ce constat.
              </p>
            </div>

            {/* Séparateur */}
            <div className="flex justify-center">
              <div className="w-16 h-px bg-white/20"></div>
            </div>

            {/* Texte principal */}
            <div className="max-w-prose mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
                Plutôt que de créer des sites vitrines supplémentaires,<br />
                j'ai fait le choix de me spécialiser dans une seule chose :
              </p>
              
              {/* Encadré pour la spécialisation */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)]">
                <p className="text-xl sm:text-2xl font-medium text-white text-center leading-relaxed">
                  Concevoir des sites immobiliers pensés comme des systèmes d'acquisition de vendeurs.
                </p>
              </div>
            </div>

            {/* Séparateur */}
            <div className="flex justify-center">
              <div className="w-16 h-px bg-white/20"></div>
            </div>

            {/* Points de clarification */}
            <div className="max-w-prose mx-auto space-y-4">
              <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed flex items-center justify-center gap-3">
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Pas pour faire du volume.</span>
              </p>
              <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed flex items-center justify-center gap-3">
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Pas pour "faire du digital".</span>
              </p>
              <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed">
                Mais pour répondre à un problème très concret :
              </p>
            </div>

            {/* Conclusion */}
            <div className="max-w-prose mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)]">
                <p className="text-lg sm:text-xl font-medium text-white text-center leading-relaxed flex items-center justify-center gap-3">
                  <svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 text-green-500 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Obtenir des demandes d'estimation qualifiées de manière durable.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Comment je travaille */}
      <section id="comment-travaille" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Comment je travaille ?
            </h2>
          </header>
          
          {/* Paragraphe introductif */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
              Je ne travaille pas avec un grand nombre d'agences en parallèle.
            </p>
          </div>

          {/* Sous-titre */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-px bg-white/20 mb-6"></div>
              <p className="text-lg sm:text-xl text-white/80 text-center font-medium">
                Chaque projet implique :
              </p>
              <div className="w-16 h-px bg-white/20 mt-6"></div>
            </div>
          </div>
          
          {/* Grille des 4 points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {[
              'Une analyse approfondie du contexte',
              'Une structure pensée sur mesure',
              'Des contenus conçus pour des vendeurs réels',
              'Un suivi basé sur des données concrètes'
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 lg:p-8 min-h-[180px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)] focus-within:bg-white/7 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/20 focus-within:outline-none"
                tabIndex={0}
                role="article"
              >
                {/* Badge numéro */}
                <div className="mb-5">
                  <span 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 border border-green-500/50 text-white/70 text-xs font-light group-hover:bg-white/12 group-hover:border-green-500/70 group-hover:text-white/80 transition-all duration-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Contenu avec coche verte */}
                <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed flex-1 flex items-center justify-center gap-3">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Paragraphe de conclusion */}
          <div className="max-w-prose mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)]">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed">
                  L'objectif n'est pas de livrer rapidement.
                </p>
                <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed">
                  L'objectif est de mettre en place un système utile, mesurable et améliorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Ce que je ne fais pas */}
      <section id="ce-que-ne-fais-pas" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Ce que je ne fais pas
            </h2>
          </header>
          
          {/* Paragraphe introductif */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
              Par choix, StudioPN refuse :
            </p>
          </div>
          
          {/* Carrousel des refus */}
          <RefusCarousel 
            items={[
              'Les promesses de résultats immédiats',
              'Les "leads" non qualifiés en volume',
              'Les discours marketing creux',
              'Les sites conçus uniquement pour le design',
              'Les solutions génériques copiées-collées'
            ]}
          />

          {/* Paragraphe de conclusion */}
          <div className="max-w-prose mx-auto">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)]">
              <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed">
                Un site immobilier est un outil de travail, pas un argument commercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Qui suis-je */}
      <section id="qui-suis-je" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Qui suis-je ?
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="space-y-8 sm:space-y-10">
            {/* Présentation */}
            <div className="max-w-prose mx-auto">
              <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
                Je l'appelle Paul Nogaro et je suis le fondateur de StudioPN.
              </p>
            </div>

            {/* Séparateur */}
            <div className="flex justify-center">
              <div className="w-16 h-px bg-white/20"></div>
            </div>

            {/* Mission */}
            <div className="max-w-prose mx-auto">
              <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
                Mon rôle n'est pas de vendre du rêve,<br />
                mais d'aider des agents immobiliers indépendants<br />
                à structurer un levier d'acquisition cohérent, fiable et durable.
              </p>
            </div>

            {/* Séparateur */}
            <div className="flex justify-center">
              <div className="w-16 h-px bg-white/20"></div>
            </div>

            {/* Sous-titre */}
            <div className="mb-8 sm:mb-10">
              <p className="text-lg sm:text-xl text-white/80 text-center font-medium">
                Je travaille avec une approche simple :
              </p>
            </div>

            {/* Grille des 3 principes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {[
                'Comprendre avant de proposer',
                'Mesurer avant d\'optimiser',
                'Améliorer avant de promettre'
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 lg:p-8 min-h-[180px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)] focus-within:bg-white/7 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/20 focus-within:outline-none"
                  tabIndex={0}
                  role="article"
                >
                  {/* Badge numéro */}
                  <div className="mb-5">
                    <span 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 border border-green-500/50 text-white/70 text-xs font-light group-hover:bg-white/12 group-hover:border-green-500/70 group-hover:text-white/80 transition-all duration-300"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Contenu avec coche verte */}
                  <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed flex-1 flex items-center justify-center gap-3">
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
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
                Remplissez le formulaire et demandez votre diagnostic personnalisé
              </AnimatedCTA>
              <p className="text-sm sm:text-base text-white/70">
                Gratuit - Sans Engagement
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

function RefusCarousel({ items }: { items: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

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
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mb-12 sm:mb-16">
      {/* Conteneur avec flèches et carte */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        {/* Bouton précédent - Flèche gauche */}
        <button
          onClick={goToPrevious}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Refus précédent"
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
          {/* Badge numéro - Centré au-dessus du contenu */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/8 border border-red-500/50 text-white/70 text-xs sm:text-sm font-light group-hover:bg-white/12 group-hover:border-red-500/70 group-hover:text-white/80 transition-all duration-300">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>
          
          {/* Contenu avec croix rouge */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto flex items-center justify-center gap-3">
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>{items[currentIndex]}</span>
          </p>
        </div>

        {/* Bouton suivant - Flèche droite */}
        <button
          onClick={goToNext}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Refus suivant"
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
            aria-label={`Aller au refus ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ObservationsCarousel({ items }: { items: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

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
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mb-12 sm:mb-16">
      {/* Conteneur avec flèches et carte */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
        {/* Bouton précédent - Flèche gauche */}
        <button
          onClick={goToPrevious}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Observation précédente"
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
          {/* Badge numéro - Centré au-dessus du contenu */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs sm:text-sm font-light group-hover:bg-white/12 group-hover:border-white/25 group-hover:text-white/80 transition-all duration-300">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
          </div>
          
          {/* Contenu */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-4xl mx-auto">
            {items[currentIndex]}
          </p>
        </div>

        {/* Bouton suivant - Flèche droite */}
        <button
          onClick={goToNext}
          className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30 flex-shrink-0"
          aria-label="Observation suivante"
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
            aria-label={`Aller à l'observation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
