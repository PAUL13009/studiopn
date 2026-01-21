import StaggeredMenu from "@/components/StaggeredMenu";
import Particles from "@/components/Particles";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedCTA from "@/components/AnimatedCTA";
import MethodeEtudeCasCarousel from "@/components/MethodeEtudeCasCarousel";
import Image from "next/image";

export default function EtudeDeCasAgenceDuCoeur() {
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
          <Image
            src="/Skyline_Marina_Bay_Singapore.jpg"
            alt="Skyline Marina Bay Singapore"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70" style={{ zIndex: 1 }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-6">
              Étude de cas : L'Agence du Cœur
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Refonte du site avec une structure SEO locale orientée vendeurs
            </p>
            <div className="flex justify-center">
              <AnimatedCTA href="#contexte">
                Découvrir l'étude
              </AnimatedCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Introduction */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
            <div className="space-y-6 text-center">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Cette étude de cas présente la refonte totale et la mise en place d'un site web sous la forme d'un système d'acquisition de demandes d'estimation pour une agence immobilière indépendante.
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                L'objectif n'est pas de présenter des résultats spectaculaires, mais d'expliquer la logique, la méthode appliquée et le contexte réel du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Le contexte de départ */}
      <section id="contexte" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Le contexte de départ
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              L'Agence du Cœur est une agence immobilière indépendante, implantée localement et travaillant principalement sur un secteur précis.
            </p>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Comme beaucoup d'agences indépendantes, elle disposait déjà :
            </p>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {/* Carte - Site internet existant */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center">
                  D'un site internet existant
                </p>
              </div>
              
              {/* Carte - Activité reposant sur */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center mb-4">
                  D'une activité reposant majoritairement sur :
                </p>
                <div className="space-y-3">
                  <div className="bg-white/3 rounded-xl p-3">
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                      Le bouche-à-oreille
                    </p>
                  </div>
                  <div className="bg-white/3 rounded-xl p-3">
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                      La prospection
                    </p>
                  </div>
                  <div className="bg-white/3 rounded-xl p-3">
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                      Les portails immobiliers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Le site était présent en ligne, mais ne jouait pas de rôle structurant dans l'acquisition de vendeurs.
            </p>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Un contexte très proche de celui de nombreuses agences indépendantes.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Problématique initiale */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Problématique initiale
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Le constat de départ était clair :
            </p>
            
            {/* Grille des problèmes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="group relative bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-red-500/25 hover:border-red-500/40 hover:shadow-[0_4px_12px_rgba(239,68,68,0.15)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Peu de demandes d'estimation générées via le site
                </p>
              </div>
              
              <div className="group relative bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-red-500/25 hover:border-red-500/40 hover:shadow-[0_4px_12px_rgba(239,68,68,0.15)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Aucune stratégie SEO locale réellement structurée
                </p>
              </div>
              
              <div className="group relative bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-red-500/25 hover:border-red-500/40 hover:shadow-[0_4px_12px_rgba(239,68,68,0.15)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Des contenus peu orientés vers les vendeurs
                </p>
              </div>
              
              <div className="group relative bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-red-500/25 hover:border-red-500/40 hover:shadow-[0_4px_12px_rgba(239,68,68,0.15)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Un site davantage conçu comme une vitrine que comme un outil de travail
                </p>
              </div>
            </div>
            
            {/* Résultat */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
                <p className="text-sm sm:text-base text-white/70 uppercase tracking-wider mb-4 text-center">
                  Résultat :
                </p>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-center">
                  Le site existait, mais n'apportait pas de levier concret pour signer plus de mandats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Les objectifs fixés */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Les objectifs fixés
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Avant toute refonte ou optimisation, les objectifs ont été définis clairement :
            </p>
            
            {/* Grille des objectifs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Transformer le site en outil d'acquisition de vendeurs
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Structurer une présence SEO locale cohérente
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Capter des vendeurs en phase de réflexion
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Mettre en place un système mesurable et améliorable dans le temps
                </p>
              </div>
            </div>
            
            {/* Conclusion */}
            <div className="mt-8 space-y-3">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed flex items-center justify-center gap-2">
                <span className="text-red-500 text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">×</span>
                Aucun objectif irréaliste.
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed flex items-center justify-center gap-2">
                <span className="text-red-500 text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">×</span>
                Aucune promesse immédiate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - La méthode mise en place */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              La méthode mise en place
            </h2>
          </header>
          
          {/* Carrousel */}
          <MethodeEtudeCasCarousel
            items={[
              'Analyse du site existant et de son positionnement',
              'Identification des intentions vendeurs locales',
              'Conception d\'une structure SEO orientée estimation',
              'Création de pages et contenus pensés pour accompagner un vendeur',
              'Mise en place de parcours de conversion clairs',
              'Installation d\'outils de suivi et de mesure',
              'Refonte totale du design'
            ]}
          />
        </div>
      </section>

      {/* Section - Design Avant/Après */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Design Avant/Après
            </h2>
          </header>
          
          {/* Images côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Image Avant */}
            <div className="relative group">
              <div className="relative w-full aspect-video overflow-hidden border border-white/10">
                <Image
                  src="/adcavant.png"
                  alt="Design avant - L'Agence du Cœur"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-center text-lg sm:text-xl text-white/90 font-medium">
                Avant
              </p>
            </div>
            
            {/* Image Après */}
            <div className="relative group">
              <div className="relative w-full aspect-video overflow-hidden border border-white/10">
                <Image
                  src="/illustrationayl.png"
                  alt="Design après - L'Agence du Cœur"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-center text-lg sm:text-xl text-white/90 font-medium">
                Après
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Etat actuel du projet */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Etat actuel du projet
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Le projet est actuellement en phase de déploiement et d'observation.
            </p>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Les pages sont en ligne, indexées,<br />
              et les premières données sont en cours de collecte afin d'analyser :
            </p>
            
            {/* Liste des éléments à analyser */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Le comportement des visiteurs
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Les pages consultées
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Les points de friction éventuels
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Les premiers signaux liés aux demandes d'estimation
                </p>
              </div>
            </div>
            
            {/* Conclusion */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mt-8">
              À ce stade, l'objectif est d'observer avant d'optimiser.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Indicateurs suivis */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Indicateurs suivis
            </h2>
          </header>
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Même en phase de lancement, plusieurs indicateurs sont suivis :
            </p>
          </div>
          
          {/* Carrousel */}
          <MethodeEtudeCasCarousel
            items={[
              'Trafic local qualifié',
              'Comportement des visiteurs sur les pages clés',
              'Taux de clic vers les demandes d\'estimation',
              'Taux de conversion',
              'Evolution dans le temps'
            ]}
          />
          
          {/* Conclusion */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Ces données servent de base aux ajustements futurs.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Quelles sont les prochaines étapes prévues ? */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Quelles sont les prochaines étapes prévues ?
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Les prochaines étapes du projet consistent à :
            </p>
            
            {/* Grille des étapes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Analyser les premiers comportements utilisateurs
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Ajuster les contenus en fonction des données réelles
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Améliorer progressivement les parcours de conversion
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Renforcer les pages les plus pertinentes
                </p>
              </div>
            </div>
            
            {/* Conclusion */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mt-8">
              Une approche itérative, basée sur les faits, pas sur des suppositions.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Pourquoi ce projet est représentatif */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          {/* Titre */}
          <header className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center leading-tight tracking-tight">
              Pourquoi ce projet est représentatif
            </h2>
          </header>
          
          {/* Contenu */}
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Ce projet illustre une situation très courante :
            </p>
            
            {/* Grille des caractéristiques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Une agence indépendante
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Un site existant peu exploité
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Une volonté de structurer l'acquisition de vendeurs
                </p>
              </div>
              
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                  Une approche progressive et réaliste
                </p>
              </div>
            </div>
            
            {/* Conclusion */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mt-8">
              C'est exactement ce type de contexte pour lequel la méthode StudioPN a été pensée.
            </p>
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
                Si votre agence se reconnaît dans ce contexte,<br />
                un diagnostic permet de déterminer si une démarche similaire est pertinente dans votre cas.
              </h2>
            </header>
            
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
