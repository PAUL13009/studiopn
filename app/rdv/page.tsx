import Link from "next/link";

export default function RDVPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Réserver un appel stratégique pour votre site immobilier
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Cet échange de 15 minutes permet d'analyser votre situation actuelle et de déterminer si un site orienté conversion est pertinent pour votre activité.
          </p>
        </div>
      </section>

      {/* Ce qu'est cet appel */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">À quoi sert cet appel ?</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span className="text-lg text-white/90">Analyser votre site actuel ou votre projet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span className="text-lg text-white/90">Identifier les blocages à la prise de contact</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span className="text-lg text-white/90">Déterminer si mon accompagnement est adapté à votre situation</span>
            </li>
          </ul>
          <p className="text-lg text-white/80 italic">
            Cet appel est un échange stratégique, pas un rendez-vous commercial forcé.
          </p>
        </div>
      </section>

      {/* Ce que cet appel n'est pas */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ce que cet appel n'est pas</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">❌</span>
              <span className="text-lg text-white/60">Une démonstration technique</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">❌</span>
              <span className="text-lg text-white/60">Une promesse de résultats garantis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white/60 mt-1">❌</span>
              <span className="text-lg text-white/60">Un devis automatique</span>
            </li>
          </ul>
        </div>
      </section>

      {/* À qui s'adresse cet appel */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Cet appel est pertinent si :</h2>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span className="text-lg text-white/90">Vous êtes professionnel de l'immobilier</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span className="text-lg text-white/90">Vous souhaitez générer plus de demandes directes via votre site</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span className="text-lg text-white/90">Vous êtes prêt à investir dans un site structuré (à partir de 1 200 €)</span>
            </li>
          </ul>
          <p className="text-lg text-white/70 italic">
            Si ce n'est pas votre cas, cet appel ne sera probablement pas utile.
          </p>
        </div>
      </section>

      {/* Déroulé de l'appel */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Comment se déroule l'appel ?</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">1.</span>
              <span className="text-lg text-white/90">Présentation rapide de votre situation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">2.</span>
              <span className="text-lg text-white/90">Analyse de votre site ou de votre projet</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">3.</span>
              <span className="text-lg text-white/90">Recommandation claire (oui / non / plus tard)</span>
            </li>
          </ul>
          <p className="text-lg text-white/80 italic">
            À l'issue de l'appel, vous saurez clairement si un accompagnement est pertinent ou non.
          </p>
        </div>
      </section>

      {/* Bloc Calendrier */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Sélectionnez un créneau pour votre appel stratégique
          </h2>
          <p className="text-sm text-white/60 text-center mb-8">
            Appel gratuit • 15 minutes • Sans engagement
          </p>
          
          {/* Zone pour intégrer le calendrier */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 min-h-[600px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/70 mb-4">Intégrez votre calendrier ici</p>
              <p className="text-sm text-white/50">
                (Calendly, Tidycal, ou autre solution de calendrier)
              </p>
            </div>
          </div>
          
          {/* Rassurance finale */}
          <p className="text-base text-white/70 text-center mt-8 italic">
            Je travaille avec un nombre limité de projets afin de garantir un accompagnement sérieux et personnalisé.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="text-lg font-semibold hover:text-white/70 transition-colors">
              Studio PN
            </Link>
            <div className="text-sm text-white/60">
              © 2024 Studio PN. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


