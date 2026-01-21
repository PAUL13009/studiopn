import StaggeredMenu from "@/components/StaggeredMenu";
import BackgroundVideo from "@/components/BackgroundVideo";
import AnimatedCTA from "@/components/AnimatedCTA";
import AnimatedCard from "@/components/AnimatedCard";
import Particles from "@/components/Particles";
import AnimatedContent from "@/components/AnimatedContent";
import Image from "next/image";
import HoverImage from "@/components/HoverImage";
import SystemesCarousel from "@/components/SystemesCarousel";
import MethodeCarousel from "@/components/MethodeCarousel";

export default function Home() {
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
              Votre site immobilier peut générer des vendeurs. À condition d'être conçu pour ça.
          </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Je conçois des sites immobiliers orientés vendeurs, pensés comme de véritables systèmes d'acquisition, basés sur le SEO local et la conversion — sans publicité, sans promesses irréalistes
            </p>
            <div className="flex justify-center">
              <AnimatedCTA href="/rdv">
                Demander un diagnostic de votre site ou de votre projet
              </AnimatedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Problème Section */}
      <section id="probleme" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Header */}
          <header className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-center leading-tight tracking-tight">
              La majorité des sites immobiliers ne servent qu'à "exister"
            </h2>
          </header>
          
          {/* Sous-titre */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/80 text-center leading-relaxed">
              La plupart des agents immobiliers indépendants ont un site qui :
            </p>
          </div>
          
          {/* Grille des 4 symptômes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
            {[
              'Ne génère aucune demande d\'estimation régulière',
              'Dépend encore trop des portails ou de la prospection',
              'Est mal positionné sur Google, même localement',
              'N\'est pas conçu pour convertir un vendeur'
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 sm:p-7 lg:p-8 min-h-[160px] flex flex-col items-center justify-center transition-all duration-300 hover:bg-red-500/25 hover:border-red-500/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(239,68,68,0.15)] focus-within:bg-red-500/25 focus-within:border-red-500/40 focus-within:ring-2 focus-within:ring-red-500/30 focus-within:outline-none"
                tabIndex={0}
                role="article"
              >
                {/* Badge numéro */}
                <div className="mb-5">
                  <span 
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-light group-hover:bg-white/12 group-hover:border-white/25 group-hover:text-white/80 transition-all duration-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Contenu */}
                <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>
          
          {/* Callout Résultat */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden">
              {/* Accent subtil en haut */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-medium text-white/70 uppercase tracking-wider text-center">
                  Résultat :
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed text-center flex items-center justify-center gap-3">
                  <span className="text-red-500 text-xl sm:text-2xl lg:text-3xl flex-shrink-0" aria-hidden="true">×</span>
                  Un site en ligne, mais aucun levier réel pour signer plus de mandats
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systèmes d'acquisition Section */}
      <section id="systemes" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <header className="mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Je ne crée pas des sites<br />
              Je conçois des systèmes d'acquisition vendeurs
            </h2>
          </header>
          
          <div className="max-w-prose mx-auto">
            {/* Paragraphe explicatif */}
            <div className="mb-12 sm:mb-16">
              <p className="text-lg sm:text-xl text-white/80 text-center leading-relaxed">
                Un site immobilier performant n'est pas une question de design ou de technologie C'est une question de structure, de contenu et d'intention
              </p>
            </div>
            
            {/* Intertitre - Pivot visuel */}
            <div className="mb-10 sm:mb-12">
              <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-px bg-white/20 mb-4"></div>
                <p className="text-lg sm:text-xl font-medium text-white text-center">
                  Chaque site que je conçois est pensé pour :
                </p>
                <div className="w-16 h-px bg-white/20 mt-4"></div>
              </div>
            </div>
          </div>
            
            {/* Carrousel des 4 piliers */}
            <div className="mb-16 sm:mb-20">
              <SystemesCarousel 
                items={[
                  'capter les recherches locales de vendeurs',
                  'répondre aux vraies questions avant la prise de décision',
                  'orienter naturellement vers une demande d\'estimation',
                  'mesurer ce qui fonctionne réellement'
                ]}
              />
            </div>
            
          <div className="max-w-prose mx-auto">
            
            {/* Principes - Liste avec croix rouges */}
            <div className="mb-8 sm:mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 lg:p-8 flex items-center justify-center transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)] focus-within:bg-white/7 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/20 focus-within:outline-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500 text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">×</span>
                    <p className="text-base sm:text-lg text-white/80 text-center">
                      Pas de fonctionnalités inutiles
                    </p>
                  </div>
                </div>
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 lg:p-8 flex items-center justify-center transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.08)] focus-within:bg-white/7 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/20 focus-within:outline-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500 text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">×</span>
                    <p className="text-base sm:text-lg text-white/80 text-center">
                      Pas de discours marketing creux
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phrase finale */}
            <div className="relative pt-6 sm:pt-8">
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-px bg-white/20"></div>
              </div>
              <p className="text-base sm:text-lg text-white/90 font-medium text-center leading-relaxed">
                Uniquement ce qui sert un objectif : générer des contacts qualifiés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concrètement Section */}
      <section id="concretement" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Concrètement, ce que je mets en place :
            </h2>
          </header>
          
          {/* Grille des 4 éléments */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  number: '01',
                  title: 'Structure SEO locale',
                  description: 'Pages pensées pour Marseille, orientées intentions vendeurs, pas mots-clés génériques.'
                },
                {
                  number: '02',
                  title: 'Contenus qui convertissent',
                  description: 'Textes clairs, pédagogiques, crédibles — conçus pour faire avancer le vendeur, pas pour "faire joli".'
                },
                {
                  number: '03',
                  title: 'Parcours de conversion maîtrisé',
                  description: 'CTA, formulaires et pages conçus pour qualifier, pas pour multiplier les leads inutiles.'
                },
                {
                  number: '04',
                  title: 'Suivi & itérations',
                  description: 'Analyse des comportements réels et ajustements continus pour améliorer les résultats.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 min-h-[220px] flex flex-col transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] focus-within:bg-white/7 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/20 focus-within:outline-none"
                  tabIndex={0}
                  role="article"
                >
                  {/* Badge numéro */}
                  <div className="mb-5">
                    <span 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-light group-hover:bg-white/12 group-hover:border-white/25 group-hover:text-white/80 transition-all duration-300"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                  </div>
                  
                  {/* Contenu */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg sm:text-xl font-medium text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Flèche horizontale pour tablet et desktop */}
                  {index < 3 && (
                    <div 
                      className="hidden sm:flex lg:flex absolute right-[-1.75rem] lg:right-[-2rem] top-1/2 -translate-y-1/2 z-10 pointer-events-none items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Flèche verticale pour mobile */}
                  {index < 3 && (
                    <div 
                      className="flex sm:hidden absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 z-10 pointer-events-none items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service fait pour vous Section */}
      <section id="fait-pour-vous" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Grille comparatif */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Colonne gauche - Ce service est fait pour vous si */}
            <div className="space-y-6">
              {/* Titre colonne */}
              <header className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4 text-center">
                  Ce service est fait pour vous si…
                </h2>
                <div className="w-full h-px bg-white/10"></div>
              </header>
              
              {/* Items */}
              <div className="space-y-4">
                {[
                  'Vous êtes agent immobilier indépendant',
                  'Vous travaillez votre secteur local sérieusement',
                  'Vous voulez plus de demandes d\'estimation qualifiées',
                  'Vous cherchez une alternative durable à la prospection et aux portails'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 min-h-[80px] flex items-center gap-4 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,255,255,0.08)] focus-within:bg-white/7 focus-within:border-white/20 focus-within:ring-2 focus-within:ring-white/20 focus-within:outline-none"
                    tabIndex={0}
                    role="listitem"
                  >
                    {/* Coche verte SVG */}
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
                    <p className="text-base sm:text-lg text-white/95 leading-relaxed flex-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Colonne droite - Ce n'est pas fait pour vous si */}
            <div className="space-y-6 mt-12 md:mt-0">
              {/* Titre colonne */}
              <header className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 text-center">
                  Ce n'est pas fait pour vous si…
                </h3>
                <div className="w-full h-px bg-red-500/30"></div>
              </header>
              
              {/* Items */}
              <div className="space-y-4">
                {[
                  'Vous cherchez des résultats immédiats sans travail de fond',
                  'Vous attendez une "recette magique"',
                  'Vous voulez faire de la publicité massive',
                  'Vous ne mesurez rien'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5 sm:p-6 min-h-[80px] flex items-center justify-center transition-all duration-300 hover:bg-red-500/25 hover:border-red-500/40 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(239,68,68,0.15)] focus-within:bg-red-500/25 focus-within:border-red-500/40 focus-within:ring-2 focus-within:ring-red-500/30 focus-within:outline-none"
                    tabIndex={0}
                    role="listitem"
                  >
                    <p className="text-base sm:text-lg text-white/95 leading-relaxed text-center">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets en cours Section */}
      <section id="projets" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
            Projets en cours et phase de test
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <p className="text-lg sm:text-xl text-white/90 mb-12 text-center">
              Je travaille actuellement avec deux agences immobilières en phase de test :
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
                  {/* Badges */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <div className="px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full whitespace-nowrap">
                      <p className="text-white/90 text-xs sm:text-sm font-medium">
                        Refonte de site web
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full whitespace-nowrap">
                      <p className="text-white/90 text-xs sm:text-sm font-medium">
                        Mise en place de système d'acquisition durable
                      </p>
                    </div>
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
                  {/* Badges */}
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <div className="px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full whitespace-nowrap">
                      <p className="text-white/90 text-xs sm:text-sm font-medium">
                        Refonte de site web
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full whitespace-nowrap">
                      <p className="text-white/90 text-xs sm:text-sm font-medium">
                        Mise en place de système d'acquisition durable
                      </p>
                    </div>
                  </div>
                </div>
                <HoverImage
                  src="/illustrationayl.png"
                  alt="L'Agence du Cœur"
                />
              </div>
            </div>
            
            {/* Encadré - Contenu sur les systèmes */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)]">
                <div className="space-y-4 text-center">
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    Les systèmes sont en cours de déploiement.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    Les performances (trafic, demandes d'estimation, taux de conversion) sont mesurées et suivies dans le temps.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                    Les résultats seront documentés et publiés une fois suffisamment de recul obtenu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Méthode Section */}
      <section id="methode" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Une méthode simple, mesurable et itérative
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

      {/* Diagnostic Section */}
      <section id="diagnostic" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
                Vous voulez savoir si votre site peut réellement générer des vendeurs ?
              </h2>
            </header>
            
            {/* Texte descriptif */}
            <div className="mb-8 sm:mb-10">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center max-w-prose mx-auto">
                Je vous propose un diagnostic clair et honnête de votre site ou de votre projet,<br />
                pour identifier ce qui bloque… et ce qui peut être amélioré.
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
