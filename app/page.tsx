import Link from "next/link";
import StaggeredMenu from "@/components/StaggeredMenu";
import HoverMenu from "@/components/HoverMenu";
import Particles from "@/components/Particles";
import BackgroundVideo from "@/components/BackgroundVideo";
import CardCarousel from "@/components/CardCarousel";

export default function Home() {
  const menuItems = [
    { label: 'Services', link: '#services' },
    { label: 'Avantages', link: '#avantages' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hover Menu - Global */}
      <HoverMenu 
        items={menuItems}
        displayItemNumbering={true}
        colors={['#000000', '#1a1a1a']}
        accentColor="#fff"
      />
      
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
              Des sites web conçus pour générer des demandes de contacts qualifiées pour les professionnels de l'immobilier
          </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Je conçois des sites immobiliers orientés conversion, pensés pour transformer vos visiteurs en prospects, sans dépendre uniquement des portails immobiliers ou de la publicité.
            </p>
            <div className="flex justify-center">
              <Link href="/rdv" className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-colors inline-block">
                Réserver un appel stratégique
              </Link>
            </div>
            <p className="text-sm text-white/60 mt-4">
              Gratuit • Sans engagement • Pour les professionnels de l'immobilier
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Title and subtitle */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Votre site est en ligne. Mais il ne vous apporte presque aucune demande directe</h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                Vous avez investi dans un site web.<br />
                Il est en ligne. Il est propre. Il "fait le job".
              </p>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Pourtant, les demandes directes sont rares, voire inexistantes.
              </p>
            </div>
            
            {/* Right column - Content */}
            <div className="space-y-8 text-lg sm:text-xl text-white/90 leading-relaxed">
              <div className="mt-12">
                <p className="mb-6 font-semibold text-center text-xl sm:text-2xl">Résultat</p>
                <CardCarousel 
                  items={[
                    "vous dépendez des portails immobiliers",
                    "vous payez pour de la visibilité que vous ne maîtrisez pas",
                    "votre site reste passif, alors qu'il devrait travailler pour vous"
                  ]}
                />
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
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Une méthode simple, pensée pour convertir</h2>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-12 text-center">
              Chaque site est conçu selon une méthode claire, basée sur l'analyse, la structure et la conversion.<br />
              Pas de design décoratif, pas de hasard : chaque élément a un rôle précis.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors text-center">
                <p className="text-white/90 text-lg">Analyse de votre marché et de vos objectifs</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors text-center">
                <p className="text-white/90 text-lg">Structure du site pensée pour la prise de contact</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors text-center">
                <p className="text-white/90 text-lg">Rédaction orientée clarté et engagement</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors text-center">
                <p className="text-white/90 text-lg">Optimisation SEO on-page essentielle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preuve Section */}
      <section id="preuve" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Une approche basée sur l'analyse, pas sur des promesses</h2>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-12 text-center">
              Chaque site est conçu selon une logique précise de conversion et d'expérience utilisateur, basée sur l'analyse de projets concrets et de structures éprouvées.
            </p>
            
            {/* Blocs chiffrés */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              <div className="border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-3">+10</div>
                <p className="text-lg text-white/90 mb-2">projets immobiliers conçus ou analysés</p>
                <p className="text-sm text-white/70">Sites vitrines, projets personnels et structures orientées conversion.</p>
              </div>
              
              <div className="border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-lg sm:text-xl font-semibold mb-3">Des parcours utilisateurs pensés pour la prise de contact</div>
                <p className="text-sm text-white/70">CTA visibles, messages clairs, hiérarchie de l'information.</p>
              </div>
              
              <div className="border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-lg sm:text-xl font-semibold mb-3">Une méthode appliquée systématiquement</div>
                <p className="text-sm text-white/70">Analyse → structure → contenu → optimisation.</p>
              </div>
            </div>
            
            {/* Phrase clé */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed italic text-center">
                Les résultats dépendent ensuite de votre marché, de votre offre et de votre implication.<br />
                Mon rôle est de fournir une base solide et structurée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offre Section */}
      <section id="offre" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">Une offre claire, sans promesses irréalistes</h2>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-12 text-center">
              Cette offre s'adresse aux professionnels de l'immobilier qui souhaitent un site structuré pour générer des demandes de contact, pas une simple vitrine.
            </p>
            
            {/* Offre principale */}
            <div className="border border-white/10 rounded-2xl p-8 mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-0">Site immobilier orienté conversion</h3>
                <div className="text-xl sm:text-2xl font-medium">À partir de 1 200 €</div>
              </div>
              <p className="text-lg text-white/90 leading-relaxed mb-8 text-center">
                Conception d'un site web sur mesure, pensé pour transformer vos visiteurs en prospects et poser les bases d'une acquisition plus autonome.
              </p>
              
              {/* Inclus */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-center">Inclus :</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/90">Analyse stratégique de votre activité et de votre marché local</p>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/90">Structure UX orientée prise de contact</p>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/90">Copywriting stratégique des pages clés</p>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/90">Design sobre et professionnel</p>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/90">Optimisation SEO on-page</p>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/90">Formulaires et CTA intégrés</p>
                  </div>
                </div>
              </div>
              
              {/* Non inclus */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-center">Non inclus :</h4>
                <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/60">Promesses de leads garantis</p>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/60">SEO mensuel</p>
                  </div>
                  <div className="border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-white/60">Publicité payante</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Link href="/rdv" className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-colors mb-3 inline-block">
                Voir si votre projet est éligible
              </Link>
              <p className="text-sm text-white/60">
                Appel stratégique gratuit • 15 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10 overflow-hidden">
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
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Prêt à transformer votre présence en ligne ?
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Discutons de votre projet et découvrez comment nous pouvons vous aider à générer plus de contacts qualifiés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-white/90 transition-colors">
              Demander un devis gratuit
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full text-lg font-medium hover:border-white/40 hover:bg-white/5 transition-colors">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-semibold">Studio PN</div>
            <div className="text-sm text-white/60">
              © 2024 Studio PN. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
