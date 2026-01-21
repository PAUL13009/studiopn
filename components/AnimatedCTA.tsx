'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

interface AnimatedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCTA({ href, children, className = '' }: AnimatedCTAProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
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

    const handleClick = (e: MouseEvent) => {
      // Si c'est une ancre (commence par #), faire un scroll fluide
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, [href]);

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`relative px-8 py-4 border border-white text-lg font-medium transition-colors inline-block rounded-tl-lg rounded-br-lg overflow-hidden ${className}`}
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
    </Link>
  );
}
