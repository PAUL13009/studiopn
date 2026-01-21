import StaggeredMenu from "@/components/StaggeredMenu";
import BackgroundVideo from "@/components/BackgroundVideo";
import AnimatedCTA from "@/components/AnimatedCTA";
import Particles from "@/components/Particles";
import DiagnosticCarousel from "@/components/DiagnosticCarousel";

export default function Diagnostic() {
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
              Un diagnostic clair pour savoir si votre site peut réellement générer des vendeurs
          </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Ce diagnostic permet d'identifier ce qui bloque aujourd'hui et ce qui peut être amélioré,<br />
              afin de déterminer si votre site peut devenir un véritable levier d'acquisition de demandes d'estimation
            </p>
            <div className="flex flex-col items-center gap-4">
              <AnimatedCTA href="/rdv">
                Demandez votre diagnostic personnalisé
              </AnimatedCTA>
              <p className="text-sm sm:text-base text-white/70">
                Gratuit - Sans Engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - A quoi sert ce diagnostic */}
      <section id="a-quoi-sert" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              A quoi sert ce diagnostic ?
            </h2>
          </header>
          
          {/* Paragraphe introductif */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
              Ce diagnostic a un objectif simple :<br />
              vous donner une vision claire et honnête de la situation actuelle.
            </p>
          </div>

          {/* Sous-titre */}
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-px bg-white/20 mb-6"></div>
              <p className="text-lg sm:text-xl text-white/80 text-center font-medium">
                Il permet notamment de :
              </p>
              <div className="w-16 h-px bg-white/20 mt-6"></div>
            </div>
          </div>
          
          {/* Grille des 4 points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {[
              'Vérifier si votre site peut jouer un rôle réel dans l\'obtention de mandats',
              'Identifier les freins techniques, structurels ou éditoriaux',
              'Analyser la cohérence entre votre site et les recherches réelles des vendeurs',
              'Déterminer si la mise en place d\'un système d\'acquisition est pertinente dans votre cas'
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

          {/* Paragraphe de conclusion */}
          <div className="max-w-prose mx-auto">
            <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed">
              Ce diagnostic n'est pas un audit automatique.<br />
              C'est une analyse humaine, contextualisée, orientée terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Ce que j'analyse concrètement */}
      <section id="analyse-concrete" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Ce que j'analyse concrètement
            </h2>
          </header>
          
          {/* Paragraphe introductif */}
          <div className="max-w-prose mx-auto mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-white/90 text-center leading-relaxed">
              Lors de ce diagnostic, j'analyse notamment :
            </p>
          </div>
          
          {/* Grille des 6 éléments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              'la structure globale de votre site',
              'sa lisibilité pour un vendeur non expert',
              'sa visibilité locale sur Google',
              'la cohérence des contenus existants',
              'les parcours proposés aux visiteurs',
              'les points de conversion (ou leur absence)'
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/4 backdrop-blur-sm border border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] focus-within:bg-white/6 focus-within:border-white/35"
                tabIndex={0}
                role="article"
              >
                {/* Badge numéro */}
                <div className="mb-4">
                  <span 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/8 border border-white/20 text-white/80 text-sm font-light group-hover:bg-white/12 group-hover:border-white/30 group-hover:text-white/90 transition-all duration-300"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Contenu */}
                <p className="text-base sm:text-lg font-medium text-white/95 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Paragraphe de conclusion */}
          <div className="max-w-prose mx-auto">
            <p className="text-base sm:text-lg text-white/80 text-center leading-relaxed">
              L'objectif n'est pas de tout analyser en profondeur,<br />
              mais d'identifier les leviers prioritaires et les blocages majeurs.
            </p>
          </div>
        </div>
      </section>

      {/* Section - À qui s'adresse ce diagnostic */}
      <section id="pour-qui-diagnostic" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              À qui s'adresse ce diagnostic
            </h2>
          </header>
          
          {/* Grille comparatif */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Colonne gauche - Ce diagnostic est utile si */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-medium mb-6 text-center">
                Ce diagnostic est utile si :
              </h3>
              <div className="space-y-4">
                {[
                  'Vous êtes agent immobilier indépendant',
                  'Vous travaillez un secteur local précis',
                  'Vous souhaitez obtenir plus de demandes d\'estimation qualifiées',
                  'Vous cherchez une alternative durable à la prospection classique',
                  'vous acceptez une logique de travail progressive et mesurable'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/4 backdrop-blur-sm border border-white/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-white/6 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] focus-within:bg-white/6 focus-within:border-white/40"
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
            
            {/* Colonne droite - Ce diagnostic n'est pas adapté si */}
            <div className="space-y-6 mt-8 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-medium mb-6 text-center">
                Ce diagnostic n'est pas adapté si :
              </h3>
              <div className="space-y-4">
                {[
                  'Vous recherchez des résultats immédiats',
                  'Vous attendez une solution miracle',
                  'Vous ne souhaitez pas remettre en question votre site actuel',
                  'Vous cherchez simplement "un avis rapide"'
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

      {/* Section - Le déroulé de mon diagnostic */}
      <section id="deroule-diagnostic" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
              Le déroulé de mon diagnostic
            </h2>
          </header>
          
          {/* Carrousel */}
          <DiagnosticCarousel 
            items={[
              'Formulaire de demande',
              'Analyse de votre situation',
              'Appel de restitution'
            ]}
          />

          {/* Disclaimer */}
          <div className="mt-12 sm:mt-16 max-w-prose mx-auto">
            <p className="text-base sm:text-lg text-white/70 text-center leading-relaxed italic">
              Si ce n'est pas pertinent, je vous le dis
            </p>
          </div>
        </div>
      </section>

      {/* Section - Ce diagnostic n'engage à rien */}
      <section id="engagement" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:bg-white/7 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
            <div className="space-y-6 sm:space-y-8">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 text-center leading-relaxed font-light">
                Ce diagnostic n'engage à rien.
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 text-center leading-relaxed font-light">
                Il ne débouche pas automatiquement sur une collaboration.
              </p>
              <div className="w-16 h-px bg-white/20 mx-auto my-8"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 text-center leading-relaxed font-light">
                L'objectif est avant tout de poser un cadre clair,<br />
                et de vérifier si un travail commun a du sens.
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
