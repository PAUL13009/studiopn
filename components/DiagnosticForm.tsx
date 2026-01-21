'use client';

import { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface FormData {
  // Étape 1
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  
  // Étape 2
  typeAgent: string;
  ville: string;
  secteur: string;
  aSiteInternet: string;
  urlSite: string;
  demandesEstimation: string;
  acquisitionMandats: string[];
  objectifPrincipal: string;
  horizonResultats: string;
  investissement: string;
  messageLibre: string;
}

function AnimatedButton({ 
  children, 
  onClick, 
  type = 'button',
  className = ''
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const fill = fillRef.current;
    const text = textRef.current;

    if (!button || !fill || !text) return;

    // Initialiser l'état : remplissage invisible à gauche
    gsap.set(button, { scale: 1, y: 0 });
    gsap.set(fill, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(text, { color: '#ffffff' });

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.02,
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(fill, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(text, {
        color: '#000000',
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.1
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
      gsap.to(fill, {
        scaleX: 0,
        duration: 0.4,
        ease: 'power2.in'
      });
      gsap.to(text, {
        color: '#ffffff',
        duration: 0.3,
        ease: 'power2.in'
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={`relative px-8 py-4 border border-white text-lg font-medium transition-colors inline-block rounded-tl-lg rounded-br-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/30 ${className}`}
    >
      {/* Remplissage animé */}
      <div
        ref={fillRef}
        className="absolute inset-0 bg-white z-0"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
      />
      
      {/* Texte */}
      <span ref={textRef} className="relative z-10" style={{ color: '#ffffff' }}>
        {children}
      </span>
    </button>
  );
}

export default function DiagnosticForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    typeAgent: '',
    ville: '',
    secteur: '',
    aSiteInternet: '',
    urlSite: '',
    demandesEstimation: '',
    acquisitionMandats: [],
    objectifPrincipal: '',
    horizonResultats: '',
    investissement: '',
    messageLibre: ''
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentStep === 1 && step1Ref.current) {
      gsap.fromTo(
        step1Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    } else if (currentStep === 2 && step2Ref.current) {
      gsap.fromTo(
        step2Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentStep]);

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentValues = (formData[field] as string[]) || [];
    let newValues: string[];
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(v => v !== value);
    } else {
      if (currentValues.length >= 2) {
        return; // Max 2 choix
      }
      newValues = [...currentValues, value];
    }
    
    handleChange(field, newValues);
  };

  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'adresse e-mail est requise';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Adresse e-mail invalide';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le numéro de téléphone est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.typeAgent) {
      newErrors.typeAgent = 'Ce champ est requis';
    }
    if (!formData.ville.trim()) {
      newErrors.ville = 'La ville est requise';
    }
    if (!formData.secteur.trim()) {
      newErrors.secteur = 'Le secteur est requis';
    }
    if (!formData.aSiteInternet) {
      newErrors.aSiteInternet = 'Ce champ est requis';
    }
    
    // Validation conditionnelle si site internet = Oui
    if (formData.aSiteInternet === 'Oui') {
      if (!formData.urlSite.trim()) {
        newErrors.urlSite = 'L\'adresse du site est requise';
      } else if (!/^https?:\/\/.+/.test(formData.urlSite)) {
        newErrors.urlSite = 'URL invalide (doit commencer par http:// ou https://)';
      }
      if (!formData.demandesEstimation) {
        newErrors.demandesEstimation = 'Ce champ est requis';
      }
      if (formData.acquisitionMandats.length === 0) {
        newErrors.acquisitionMandats = 'Veuillez sélectionner au moins une option';
      }
      if (!formData.objectifPrincipal) {
        newErrors.objectifPrincipal = 'Ce champ est requis';
      }
      if (!formData.horizonResultats) {
        newErrors.horizonResultats = 'Ce champ est requis';
      }
      if (!formData.investissement) {
        newErrors.investissement = 'Ce champ est requis';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }
    
    // TODO: Envoyer les données au backend
    console.log('Form data:', formData);
    alert('Votre demande de diagnostic a été envoyée avec succès !');
  };

  const hasSiteInternet = formData.aSiteInternet === 'Oui';

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Indicateur de progression */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-white' : 'text-white/40'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 1 ? 'border-white bg-white/10' : 'border-white/30'
            }`}>
              {currentStep > 1 ? '✓' : '1'}
            </div>
            <span className="text-sm sm:text-base font-medium">Coordonnées</span>
          </div>
          <div className={`w-12 h-px ${currentStep >= 2 ? 'bg-white' : 'bg-white/20'}`}></div>
          <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-white' : 'text-white/40'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              currentStep >= 2 ? 'border-white bg-white/10' : 'border-white/30'
            }`}>
              2
            </div>
            <span className="text-sm sm:text-base font-medium">Diagnostic</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ÉTAPE 1 */}
        {currentStep === 1 && (
          <div ref={step1Ref} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-light text-center mb-8">
              Étape 1 — Coordonnées
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Prénom */}
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-white/90 mb-2">
                  Prénom <span className="text-white/60">*</span>
                </label>
                <input
                  type="text"
                  id="prenom"
                  value={formData.prenom}
                  onChange={(e) => handleChange('prenom', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${
                    errors.prenom ? 'border-red-500/50' : 'border-white/20'
                  }`}
                  placeholder="Votre prénom"
                  required
                />
                {errors.prenom && (
                  <p className="mt-1 text-sm text-red-400">{errors.prenom}</p>
                )}
              </div>

              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-white/90 mb-2">
                  Nom <span className="text-white/60">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  value={formData.nom}
                  onChange={(e) => handleChange('nom', e.target.value)}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${
                    errors.nom ? 'border-red-500/50' : 'border-white/20'
                  }`}
                  placeholder="Votre nom"
                  required
                />
                {errors.nom && (
                  <p className="mt-1 text-sm text-red-400">{errors.nom}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Adresse e-mail professionnelle <span className="text-white/60">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${
                  errors.email ? 'border-red-500/50' : 'border-white/20'
                }`}
                placeholder="votre.email@exemple.com"
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-white/90 mb-2">
                Numéro de téléphone <span className="text-white/60">*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                value={formData.telephone}
                onChange={(e) => handleChange('telephone', e.target.value)}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${
                  errors.telephone ? 'border-red-500/50' : 'border-white/20'
                }`}
                placeholder="06 12 34 56 78"
                required
              />
              {errors.telephone && (
                <p className="mt-1 text-sm text-red-400">{errors.telephone}</p>
              )}
            </div>

            {/* Bouton Continuer */}
            <div className="flex justify-center pt-4">
              <AnimatedButton
                type="button"
                onClick={handleNext}
              >
                Continuer vers le diagnostic
              </AnimatedButton>
            </div>
          </div>
        )}

        {/* ÉTAPE 2 */}
        {currentStep === 2 && (
          <div ref={step2Ref} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-light text-center mb-8">
              Étape 2 — Diagnostic
            </h2>

            {/* Message rassurant */}
            <div className="mb-8">
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/7 hover:border-white/20">
                <p className="text-base sm:text-lg text-white/90 text-center leading-relaxed">
                  Ces informations me permettent de préparer un diagnostic pertinent.<br />
                  <span className="text-white/70">Aucune réponse n'engage à quoi que ce soit</span>
                </p>
              </div>
            </div>

            {/* Type d'agent */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-4">
                Vous êtes <span className="text-white/60">*</span>
              </label>
              <div className="space-y-3">
                {['Agent immobilier indépendant', 'Petite agence indépendante'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="typeAgent"
                      value={option}
                      checked={formData.typeAgent === option}
                      onChange={(e) => handleChange('typeAgent', e.target.value)}
                      className="w-4 h-4 border-white/30 text-white focus:ring-2 focus:ring-white/30"
                      required
                    />
                    <span className="text-white/90 group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {errors.typeAgent && (
                <p className="mt-2 text-sm text-red-400">{errors.typeAgent}</p>
              )}
            </div>

            {/* Ville */}
            <div>
              <label htmlFor="ville" className="block text-sm font-medium text-white/90 mb-2">
                Ville principale d'activité <span className="text-white/60">*</span>
              </label>
              <input
                type="text"
                id="ville"
                value={formData.ville}
                onChange={(e) => handleChange('ville', e.target.value)}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${
                  errors.ville ? 'border-red-500/50' : 'border-white/20'
                }`}
                placeholder="Ex: Marseille"
                required
              />
              {errors.ville && (
                <p className="mt-1 text-sm text-red-400">{errors.ville}</p>
              )}
            </div>

            {/* Secteur */}
            <div>
              <label htmlFor="secteur" className="block text-sm font-medium text-white/90 mb-2">
                Secteur(s) travaillé(s) <span className="text-white/60">*</span>
              </label>
              <input
                type="text"
                id="secteur"
                value={formData.secteur}
                onChange={(e) => handleChange('secteur', e.target.value)}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${
                  errors.secteur ? 'border-red-500/50' : 'border-white/20'
                }`}
                placeholder="Ex: 8ème arrondissement, Le Panier"
                required
              />
              {errors.secteur && (
                <p className="mt-1 text-sm text-red-400">{errors.secteur}</p>
              )}
            </div>

            {/* Avez-vous un site internet */}
            <div>
              <label className="block text-sm font-medium text-white/90 mb-4">
                Avez-vous déjà un site internet ? <span className="text-white/60">*</span>
              </label>
              <div className="space-y-3">
                {['Oui', 'Non'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="aSiteInternet"
                      value={option}
                      checked={formData.aSiteInternet === option}
                      onChange={(e) => handleChange('aSiteInternet', e.target.value)}
                      className="w-4 h-4 border-white/30 text-white focus:ring-2 focus:ring-white/30"
                      required
                    />
                    <span className="text-white/90 group-hover:text-white transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {errors.aSiteInternet && (
                <p className="mt-2 text-sm text-red-400">{errors.aSiteInternet}</p>
              )}
            </div>

            {/* Champs conditionnels si site internet = Oui */}
            {hasSiteInternet && (
              <div className="space-y-6 pt-4 border-t border-white/10">
                {/* URL du site */}
                <div>
                  <label htmlFor="urlSite" className="block text-sm font-medium text-white/90 mb-2">
                    Adresse du site internet <span className="text-white/60">*</span>
                  </label>
                  <input
                    type="url"
                    id="urlSite"
                    value={formData.urlSite}
                    onChange={(e) => handleChange('urlSite', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all ${
                      errors.urlSite ? 'border-red-500/50' : 'border-white/20'
                    }`}
                    placeholder="https://www.exemple.com"
                    required={hasSiteInternet}
                  />
                  {errors.urlSite && (
                    <p className="mt-1 text-sm text-red-400">{errors.urlSite}</p>
                  )}
                </div>

                {/* Demandes d'estimation */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-4">
                    Votre site vous apporte-t-il des demandes d'estimation ? <span className="text-white/60">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      'Oui, régulièrement',
                      'Occasionnellement',
                      'Très rarement',
                      'Jamais',
                      'Je ne sais pas'
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="demandesEstimation"
                          value={option}
                          checked={formData.demandesEstimation === option}
                          onChange={(e) => handleChange('demandesEstimation', e.target.value)}
                          className="w-4 h-4 border-white/30 text-white focus:ring-2 focus:ring-white/30"
                          required={hasSiteInternet}
                        />
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.demandesEstimation && (
                    <p className="mt-2 text-sm text-red-400">{errors.demandesEstimation}</p>
                  )}
                </div>

                {/* Acquisition de mandats */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-4">
                    Comment obtenez-vous aujourd'hui la majorité de vos mandats ? <span className="text-white/60">*</span>
                    <span className="block text-xs text-white/60 mt-1 font-normal">(Maximum 2 choix)</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      'Prospection terrain / téléphone',
                      'Recommandations / bouche-à-oreille',
                      'Portails immobiliers',
                      'Publicité',
                      'Mon site internet',
                      'Autre'
                    ].map((option) => {
                      const isChecked = formData.acquisitionMandats.includes(option);
                      const isDisabled = !isChecked && formData.acquisitionMandats.length >= 2;
                      
                      return (
                        <label
                          key={option}
                          className={`flex items-center gap-3 cursor-pointer group ${
                            isDisabled ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <input
                            type="checkbox"
                            value={option}
                            checked={isChecked}
                            onChange={() => handleCheckboxChange('acquisitionMandats', option)}
                            disabled={isDisabled}
                            className="w-4 h-4 border-white/30 text-white focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed"
                            required={hasSiteInternet && formData.acquisitionMandats.length === 0}
                          />
                          <span className="text-white/90 group-hover:text-white transition-colors">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.acquisitionMandats && (
                    <p className="mt-2 text-sm text-red-400">{errors.acquisitionMandats}</p>
                  )}
                </div>

                {/* Objectif principal */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-4">
                    Objectif principal avec votre site <span className="text-white/60">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      'Obtenir plus de demandes d\'estimation qualifiées',
                      'Être plus visible localement',
                      'Réduire la dépendance aux portails',
                      'Refaire un site inefficace',
                      'Je ne sais pas encore'
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="objectifPrincipal"
                          value={option}
                          checked={formData.objectifPrincipal === option}
                          onChange={(e) => handleChange('objectifPrincipal', e.target.value)}
                          className="w-4 h-4 border-white/30 text-white focus:ring-2 focus:ring-white/30"
                          required={hasSiteInternet}
                        />
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.objectifPrincipal && (
                    <p className="mt-2 text-sm text-red-400">{errors.objectifPrincipal}</p>
                  )}
                </div>

                {/* Horizon de résultats */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-4">
                    Horizon de résultats <span className="text-white/60">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      'Court terme (1–3 mois)',
                      'Moyen terme (3–6 mois)',
                      'Long terme (6 mois et +)'
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="horizonResultats"
                          value={option}
                          checked={formData.horizonResultats === option}
                          onChange={(e) => handleChange('horizonResultats', e.target.value)}
                          className="w-4 h-4 border-white/30 text-white focus:ring-2 focus:ring-white/30"
                          required={hasSiteInternet}
                        />
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.horizonResultats && (
                    <p className="mt-2 text-sm text-red-400">{errors.horizonResultats}</p>
                  )}
                </div>

                {/* Investissement */}
                <div>
                  <label className="block text-sm font-medium text-white/90 mb-4">
                    Êtes-vous prêt à investir dans un système d'acquisition via votre site ? <span className="text-white/60">*</span>
                  </label>
                  <div className="space-y-3">
                    {[
                      'Oui',
                      'Non',
                      'Je souhaite d\'abord comprendre'
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="investissement"
                          value={option}
                          checked={formData.investissement === option}
                          onChange={(e) => handleChange('investissement', e.target.value)}
                          className="w-4 h-4 border-white/30 text-white focus:ring-2 focus:ring-white/30"
                          required={hasSiteInternet}
                        />
                        <span className="text-white/90 group-hover:text-white transition-colors">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.investissement && (
                    <p className="mt-2 text-sm text-red-400">{errors.investissement}</p>
                  )}
                </div>
              </div>
            )}

            {/* Message libre */}
            <div>
              <label htmlFor="messageLibre" className="block text-sm font-medium text-white/90 mb-2">
                Message libre (optionnel)
              </label>
              <textarea
                id="messageLibre"
                value={formData.messageLibre}
                onChange={(e) => handleChange('messageLibre', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
                placeholder="Dites-moi tout ce qui vous semble important..."
              />
            </div>

            {/* Boutons navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 border border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/40 transition-all duration-300 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                ← Retour
              </button>
              <AnimatedButton
                type="submit"
              >
                Envoyer ma demande de diagnostic
              </AnimatedButton>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
