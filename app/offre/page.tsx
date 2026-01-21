import StaggeredMenu from "@/components/StaggeredMenu";
import BackgroundVideo from "@/components/BackgroundVideo";
import AnimatedCTA from "@/components/AnimatedCTA";
import Particles from "@/components/Particles";
import AnimatedCard from "@/components/AnimatedCard";
import Image from "next/image";
import HoverImage from "@/components/HoverImage";

export default function Offre() {
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
              Un site immobilier conçu pour générer des demandes d'estimation qualifiées
          </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Je conçois des sites immobiliers pensés dès le départ comme des systèmes d'acquisition vendeurs, basés sur le SEO local et la conversion — sans publicité, sans promesses irréalistes
            </p>
            <div className="flex justify-center">
              <AnimatedCTA href="/rdv">
                Demander un diagnostic
              </AnimatedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Clarification immédiate */}
      <section id="clarification" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl font-light mb-12 text-center">
            Une offre claire, sans ambiguïté
          </h2>
          
          <div className="max-w-prose mx-auto">
            {/* Intro - Texte principal */}
            <div className="space-y-6 mb-16 sm:mb-20">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center">
                Cette offre repose sur une idée simple :<br />
                un site immobilier n'a d'intérêt que s'il participe réellement à l'acquisition de vendeurs.
              </p>
              
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center">
                Je conçois donc des sites pensés dès le départ comme des systèmes d'acquisition, et non comme de simples vitrines.
              </p>
            </div>
            
            {/* Point de rupture - Concrètement */}
            <div className="mb-12 sm:mb-16">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-px bg-white/20 mb-6"></div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white text-center">
                  Concrètement
                </h3>
                <div className="w-16 h-px bg-white/20 mt-6"></div>
              </div>
              
              {/* Comparatif - Deux colonnes */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Colonne gauche - Cette offre est (prioritaire) */}
                <div className="space-y-5">
                  <p className="text-lg sm:text-xl font-medium text-white mb-6 text-center">
                    Cette offre est :
                  </p>
                  <div className="space-y-3">
                    <div className="group relative bg-white/4 backdrop-blur-sm border border-white/30 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/6 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/50 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/60 transition-colors" aria-hidden="true">✔</span>
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed">Un dispositif orienté demandes d'estimation qualifiées</p>
                      </div>
                    </div>
                    <div className="group relative bg-white/4 backdrop-blur-sm border border-white/30 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/6 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/50 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/60 transition-colors" aria-hidden="true">✔</span>
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed">Une structure pensée pour le SEO local</p>
                      </div>
                    </div>
                    <div className="group relative bg-white/4 backdrop-blur-sm border border-white/30 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/6 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/50 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/60 transition-colors" aria-hidden="true">✔</span>
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed">Un site conçu pour accompagner un vendeur</p>
                      </div>
                    </div>
                    <div className="group relative bg-white/4 backdrop-blur-sm border border-white/30 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/6 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/50 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/60 transition-colors" aria-hidden="true">✔</span>
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed">Un système mesurable et améliorable dans le temps</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Colonne droite - Cette offre n'est pas (discrète) */}
                <div className="space-y-5 mt-8 md:mt-0">
                  <p className="text-lg sm:text-xl font-medium text-white/80 mb-6 text-center">
                    Cette offre n'est pas :
                  </p>
                  <div className="space-y-3">
                    <div className="group relative bg-white/2 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/3 hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/40 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/50 transition-colors" aria-hidden="true">✕</span>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">Une promesse de résultats immédiats</p>
                      </div>
                    </div>
                    <div className="group relative bg-white/2 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/3 hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/40 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/50 transition-colors" aria-hidden="true">✕</span>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">Une solution miracle</p>
                      </div>
                    </div>
                    <div className="group relative bg-white/2 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/3 hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/40 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/50 transition-colors" aria-hidden="true">✕</span>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">Une campagne publicitaire</p>
                      </div>
                    </div>
                    <div className="group relative bg-white/2 backdrop-blur-sm border border-white/15 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/3 hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                      <div className="flex items-start gap-3">
                        <span className="text-white/40 text-lg mt-0.5 flex-shrink-0 group-hover:text-white/50 transition-colors" aria-hidden="true">✕</span>
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">Un site "design avant tout"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Le problème terrain */}
      <section id="probleme-terrain" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-center leading-tight tracking-tight">
            Pourquoi la majorité des sites immobiliers ne génèrent pas de vendeurs
          </h2>
          
          <div className="max-w-prose mx-auto">
            {/* Sous-titre introductif */}
            <p className="text-lg sm:text-xl text-white/80 mb-12 sm:mb-16 text-center leading-relaxed">
              Dans la grande majorité des cas, les sites immobiliers :
            </p>
            
            {/* Grille des 4 causes */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20">
              <div className="group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]">
                <p className="text-base sm:text-lg font-medium text-white/95 text-center leading-relaxed">
                  Ne ciblent aucune intention vendeur précise
                </p>
              </div>
              
              <div className="group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]">
                <p className="text-base sm:text-lg font-medium text-white/95 text-center leading-relaxed">
                  Sont mal structurés pour le référencement local
                </p>
              </div>
              
              <div className="group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]">
                <p className="text-base sm:text-lg font-medium text-white/95 text-center leading-relaxed">
                  Utilisent des formulaires trop génériques
                </p>
              </div>
              
              <div className="group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]">
                <p className="text-base sm:text-lg font-medium text-white/95 text-center leading-relaxed">
                  N'accompagnent pas le vendeur dans sa prise de décision
                </p>
              </div>
            </div>
            
            {/* Conclusion - Résultat */}
            <div className="relative">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-px bg-white/20"></div>
              </div>
              <div className="bg-white/3 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 text-center">
                <p className="text-lg sm:text-xl font-medium text-white mb-3">
                  Résultat :
                </p>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  le site est en ligne, mais ne joue aucun rôle concret dans l'obtention de mandats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Ton approche */}
      <section id="approche" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <header className="mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Concevoir un site comme un outil de travail
            </h2>
          </header>
          
          <div className="max-w-prose mx-auto">
            {/* Intro - 2 phrases regroupées */}
            <div className="space-y-4 mb-12 sm:mb-16">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center">
                Un vendeur ne décide pas en une visite.<br />
                Il observe, compare, cherche des repères, puis agit.
              </p>
            </div>
            
            {/* Pivot visuel - Le rôle du site */}
            <div className="mb-10 sm:mb-12">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-px bg-white/20 mb-4"></div>
                <p className="text-lg sm:text-xl font-medium text-white text-center">
                  Le rôle du site est donc de :
                </p>
                <div className="w-16 h-px bg-white/20 mt-4"></div>
              </div>
            </div>
            
            {/* Grille des 4 points */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20">
              {[
                { number: '01', text: 'capter cette phase de réflexion' },
                { number: '02', text: 'répondre aux bonnes questions, au bon moment' },
                { number: '03', text: 'inspirer confiance sans sur-promettre' },
                { number: '04', text: 'guider naturellement vers une demande d\'estimation' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-2xl p-5 sm:p-6 min-h-[120px] flex items-center transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] focus-within:bg-white/6 focus-within:border-white/35"
                  tabIndex={0}
                  role="listitem"
                >
                  <div className="flex items-start gap-4 w-full">
                    <span 
                      className="text-white/60 text-sm sm:text-base font-light mt-0.5 flex-shrink-0 group-hover:text-white/70 transition-colors"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                    <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed text-left flex-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Conclusion */}
            <div className="relative pt-8 sm:pt-10">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-px bg-white/20"></div>
              </div>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center max-w-prose mx-auto">
                C'est cette logique qui structure chaque projet que je mets en place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Contenu de l'offre */}
      <section id="contenu-offre" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Ce que je mets concrètement en place
            </h2>
          </header>
          
          {/* Grille des 5 éléments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                number: '01',
                title: 'Structure SEO orientée vendeurs',
                description: 'Création ou refonte de pages pensées pour capter les recherches locales liées à l\'estimation et à la vente.'
              },
              {
                number: '02',
                title: 'Contenus clairs et crédibles',
                description: 'Rédaction de contenus pédagogiques, compréhensibles par tous, conçus pour faire avancer un vendeur dans sa réflexion.'
              },
              {
                number: '03',
                title: 'Parcours de conversion maîtrisé',
                description: 'CTA, formulaires et pages conçus pour qualifier les demandes, pas pour multiplier les contacts inutiles.'
              },
              {
                number: '04',
                title: 'Base technique propre et durable',
                description: 'Site rapide, lisible, structuré, conforme aux bonnes pratiques SEO.'
              },
              {
                number: '05',
                title: 'Suivi et ajustements',
                description: 'Analyse des comportements réels et optimisations progressives pour améliorer les performances.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] focus-within:bg-white/6 focus-within:border-white/35 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                tabIndex={0}
                role="article"
              >
                {/* Badge numéro */}
                <div className="mb-4">
                  <span 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 border border-white/20 text-white/80 text-sm font-light group-hover:bg-white/12 group-hover:border-white/30 group-hover:text-white/90 transition-all duration-300"
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                </div>
                
                {/* Contenu */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-medium text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section - Pour qui / pas pour qui */}
      <section id="pour-qui" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              À qui s'adresse cette offre
            </h2>
          </header>
          
          {/* Grille comparatif */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Colonne gauche - Cette offre est adaptée si */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-medium mb-6 text-center">
                Cette offre est adaptée si :
              </h3>
              <div className="space-y-4">
                {[
                  'Vous êtes agent immobilier indépendant',
                  'Vous travaillez sérieusement votre secteur local',
                  'Vous souhaitez générer plus de demandes d\'estimation qualifiées',
                  'Vous acceptez une logique de travail progressive et mesurable'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/4 backdrop-blur-sm border border-white/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] focus-within:bg-white/6 focus-within:border-white/40"
                    tabIndex={0}
                    role="listitem"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 group-hover:text-green-400 transition-colors" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-base sm:text-lg text-white/95 leading-relaxed text-center">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Colonne droite - Cette offre n'est pas adaptée si */}
            <div className="space-y-6 mt-8 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-medium mb-6 text-center">
                Cette offre n'est pas adaptée si :
              </h3>
              <div className="space-y-4">
                {[
                  'Vous recherchez des résultats immédiats',
                  'Vous attendez une solution magique',
                  'Vous ne souhaitez pas mesurer ce qui fonctionne',
                  'Vous cherchez simplement "un site de plus"'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-red-500/15 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(239,68,68,0.15)] focus-within:bg-red-500/15 focus-within:border-red-500/40"
                    tabIndex={0}
                    role="listitem"
                  >
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Tarification */}
      <section id="tarification" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre principal */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Budget et fonctionnement
            </h2>
          </header>
          
          {/* Pricing Card */}
          <div className="group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]">
            {/* Intro */}
            <div className="mb-8 sm:mb-10">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center max-w-prose mx-auto">
                L'accompagnement fonctionne sur une base mensuelle, incluant la conception, l'optimisation et le suivi du système.
              </p>
            </div>
            
            {/* Prix - Élément visuel principal */}
            <div className="mb-8 sm:mb-10 flex flex-col items-center">
              <div className="inline-flex items-baseline justify-center gap-2 bg-white/6 rounded-full px-6 sm:px-8 py-4 sm:py-5 border border-white/20">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-white text-center">
                  À partir de 300 € / mois
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/70 text-center mt-4">
                selon le périmètre et l'existant.
              </p>
            </div>
            
            {/* Séparateur */}
            <div className="w-full h-px bg-white/10 mb-8 sm:mb-10"></div>
            
            {/* Note de confiance */}
            <div className="mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-white/70 text-center font-light">
                Aucun engagement long terme imposé.
              </p>
            </div>
            
            {/* Phrase de clôture */}
            <div className="mb-8 sm:mb-10">
              <p className="text-sm sm:text-base text-white/60 text-center leading-relaxed max-w-prose mx-auto">
                L'objectif est de construire un système efficace, pas de créer une dépendance.
              </p>
            </div>
            
            {/* CTA discret */}
            <div className="flex justify-center pt-4 border-t border-white/10">
              <AnimatedCTA href="/rdv">
                Demander un diagnostic
              </AnimatedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Preuve honnête */}
      <section id="projets-en-cours" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light mb-12 text-center">
            Projets en cours
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <p className="text-lg sm:text-xl text-white/90 mb-12 text-center">
              Je travaille actuellement avec deux agences immobilières indépendantes en phase de test :
            </p>
            
            <div className="space-y-12 mb-12">
              {/* L'Agence YL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <HoverImage
                  src="/illustrationadc.png"
                  alt="L'Agence YL"
                />
                <div className="flex flex-col items-center justify-center space-y-4">
                  <p className="text-2xl sm:text-3xl font-light text-white/90 text-center">
                    L'Agence YL
                  </p>
                  <div className="text-white/80 text-base sm:text-lg space-y-2 text-center">
                    <p>Mise en place d'un site immobilier orienté acquisition vendeurs</p>
                    <p>Objectif : générer des demandes d'estimation qualifiées à Paris</p>
                    <p>Projet en phase de test et de mesure</p>
                  </div>
                </div>
              </div>
              
              {/* Séparation */}
              <div className="border-t border-white/20"></div>
              
              {/* L'Agence du Cœur */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <p className="text-2xl sm:text-3xl font-light text-white/90 text-center">
                    L'Agence du Cœur
                  </p>
                  <div className="text-white/80 text-base sm:text-lg space-y-2 text-center">
                    <p>Refonte du site avec une structure SEO locale orientée vendeurs</p>
                    <p>Objectif : transformer le site en levier d'acquisition d'estimations</p>
                    <p>Projet en phase de déploiement et d'analyse</p>
                  </div>
                </div>
                <HoverImage
                  src="/illustrationayl.png"
                  alt="L'Agence du Cœur"
                />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-lg sm:text-xl text-white/90">
                Les systèmes sont en cours de déploiement.<br />
                Les performances sont suivies et analysées dans le temps.
              </p>
              <p className="text-lg sm:text-xl text-white/90">
                Les résultats seront documentés dès qu'un recul suffisant sera atteint.
              </p>
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
            <div className="flex justify-center w-full sm:w-auto">
              <AnimatedCTA href="/rdv">
                Demander un diagnostic
              </AnimatedCTA>
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
