import StaggeredMenu from "@/components/StaggeredMenu";
import AnimatedCTA from "@/components/AnimatedCTA";
import Particles from "@/components/Particles";
import Image from "next/image";
import HoverImage from "@/components/HoverImage";

export default function ProjetsEnCours() {
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
              Projets en cours
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Découvrez les projets en phase de test et de mesure
            </p>
            <div className="flex justify-center">
              <AnimatedCTA href="#projets">
                Découvrir les projets sur lesquels je travaille
              </AnimatedCTA>
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
                  href="/etude-de-cas/agence-du-coeur"
                />
              </div>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)]">
                <div className="space-y-4 text-center">
                  <p className="text-lg sm:text-xl text-white/90">
                    Les systèmes sont en cours de déploiement.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90">
                    Les performances (trafic, demandes d'estimation, taux de conversion) sont mesurées et suivies dans le temps.
                  </p>
                  <p className="text-lg sm:text-xl text-white/90">
                    Les résultats seront documentés et publiés une fois suffisamment de recul obtenu.
                  </p>
                </div>
              </div>
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
