'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  disableReverse?: boolean;
  fillColor?: string;
}

export default function AnimatedCard({ children, delay = 0, disableReverse = false, fillColor = '#ffffff' }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const animationState = useRef<'idle' | 'filled' | 'unfilled'>('idle');
  const hasAnimated = useRef(false);
  const isInViewport = useRef(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const fill = fillRef.current;
    const text = textRef.current;

    if (!card || !fill || !text) return;

    // Initialiser l'état : remplissage invisible
    gsap.set(card, { scale: 1, y: 0 });
    gsap.set(fill, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(text, { color: '#ffffff', opacity: 0 });
    
    // Initialiser lastScrollY
    lastScrollY.current = window.scrollY;

    // Fonction pour animer le remplissage (vers le bas - gauche à droite)
    const animateFillDown = () => {
      if (animationState.current === 'filled') return;
      gsap.killTweensOf([fill, text]);
      
      gsap.set(fill, { transformOrigin: 'left center' });
      
      gsap.to(fill, {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: delay
      });
      
      gsap.to(text, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        delay: delay + 0.1
      });
      
      // Si le remplissage est rouge, garder le texte blanc, sinon le mettre en noir
      const textColor = fillColor === '#ef4444' || fillColor === '#dc2626' || fillColor === '#991b1b' || fillColor.includes('red') ? '#ffffff' : '#000000';
      gsap.to(text, {
        color: textColor,
        duration: 0.3,
        ease: 'power2.out',
        delay: delay + 0.3
      });
      
      // Animer le changement de couleur de la bordure si le remplissage est rouge
      const isRedFill = fillColor === '#ef4444' || fillColor === '#dc2626' || fillColor === '#991b1b' || fillColor.includes('red');
      if (isRedFill && card) {
        gsap.to(card, {
          borderColor: fillColor,
          duration: 0.3,
          ease: 'power2.out',
          delay: delay + 0.3
        });
      }
      
      animationState.current = 'filled';
      hasAnimated.current = true;
      setIsFilled(true);
    };

    // Fonction pour animer le remplissage inverse (vers le haut - droite à gauche)
    const animateFillUp = () => {
      if (animationState.current === 'unfilled') return;
      gsap.killTweensOf([fill, text]);
      
      gsap.set(fill, { transformOrigin: 'right center' });
      
      gsap.to(text, {
        color: '#ffffff',
        duration: 0.3,
        ease: 'power2.in'
      });
      
      gsap.to(fill, {
        scaleX: 0,
        duration: 0.6,
        ease: 'power2.in',
        delay: 0.1
      });
      
      gsap.to(text, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        delay: 0.3
      });
      
      // Remettre la bordure blanche si le remplissage était rouge
      const isRedFill = fillColor === '#ef4444' || fillColor === '#dc2626' || fillColor === '#991b1b' || fillColor.includes('red');
      if (isRedFill && card) {
        gsap.to(card, {
          borderColor: '#ffffff',
          duration: 0.3,
          ease: 'power2.in',
          delay: 0.1
        });
      }
      
      animationState.current = 'unfilled';
      setIsFilled(false);
    };

    // Intersection Observer pour détecter la première apparition et suivre la visibilité
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewport.current = entry.isIntersecting;
          
          if (entry.isIntersecting && !hasAnimated.current) {
            // Déclencher l'animation dès que la carte devient visible
            animateFillDown();
          }
        });
      },
      {
        threshold: 0.1, // Réduire le seuil pour déclencher plus tôt
        rootMargin: '50px' // Ajouter une marge pour déclencher avant que la carte soit complètement visible
      }
    );

    observer.observe(card);

    // Suivre le scroll pour déterminer la direction et animer (pour l'effet inverse)
    // Chaque carte a son propre gestionnaire de scroll qui vérifie uniquement sa propre visibilité
    const handleScroll = () => {
      // Ne pas gérer l'effet inverse si désactivé
      if (disableReverse) return;
      
      // Ne traiter que si la carte a déjà été animée
      if (!hasAnimated.current) return;
      
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Vérifier si la carte est visible dans le viewport
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isVisible) return;
      
      // Animer selon la direction du scroll et l'état actuel
      if (scrollingDown && animationState.current !== 'filled') {
        // Si on descend et que la carte n'est pas remplie, la remplir
        animateFillDown();
      } else if (!scrollingDown && animationState.current === 'filled') {
        // Si on remonte et que la carte est remplie, déclencher l'effet inverse
        animateFillUp();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Effet hover
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.03,
        y: -4,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay, disableReverse, fillColor]);

  const isRedFill = fillColor === '#ef4444' || fillColor === '#dc2626' || fillColor === '#991b1b' || fillColor.includes('red');
  const borderColor = isRedFill && isFilled ? fillColor : 'white';

  return (
    <div
      ref={cardRef}
      className="relative border rounded-tl-lg rounded-br-lg p-6 overflow-hidden flex items-center justify-center"
      style={{ borderColor: borderColor }}
    >
      {/* Remplissage animé */}
      <div
        ref={fillRef}
        className="absolute inset-0 z-0"
        style={{ 
          transform: 'scaleX(0)', 
          transformOrigin: 'left center',
          backgroundColor: fillColor
        }}
      />
      
      {/* Contenu */}
      <div ref={textRef} className="relative z-10 text-center w-full flex items-center justify-center" style={{ color: '#ffffff' }}>
        {children}
      </div>
    </div>
  );
}
