import DiagnosticForm from "@/components/DiagnosticForm";
import Particles from "@/components/Particles";

export default function RDVPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-b border-white/10 overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 leading-tight tracking-tight">
            Demande de diagnostic
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Remplissez ce formulaire pour obtenir un diagnostic clair et honnête de votre site ou de votre projet.
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
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
        <div className="relative z-10">
          <DiagnosticForm />
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



