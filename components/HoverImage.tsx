'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

interface HoverImageProps {
  src: string;
  alt: string;
  href?: string;
}

export default function HoverImage({ src, alt, href }: HoverImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const text = textRef.current;
    const underline = underlineRef.current;

    if (!container || !image || !overlay || !text || !underline) return;

    const handleMouseEnter = () => {
      // Flou de l'image
      gsap.to(image, {
        filter: 'blur(8px)',
        duration: 0.3,
        ease: 'power2.out',
      });

      // Apparition progressive du texte
      gsap.fromTo(
        overlay,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        }
      );

      gsap.fromTo(
        text,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          delay: 0.1,
          ease: 'power2.out',
        }
      );
    };

    const handleMouseLeave = () => {
      // Retour à l'état initial de l'image
      gsap.to(image, {
        filter: 'blur(0px)',
        duration: 0.3,
        ease: 'power2.out',
      });

      // Disparition du texte
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
      });

      gsap.to(text, {
        y: 10,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
      });

      // Réinitialiser le soulignement
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleTextMouseEnter = () => {
      // Soulignement progressif
      gsap.to(underline, {
        scaleX: 1,
        duration: 0.4,
        ease: 'power2.out',
        transformOrigin: 'left',
      });
    };

    const handleTextMouseLeave = () => {
      // Retirer le soulignement
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.3,
        ease: 'power2.out',
        transformOrigin: 'left',
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    text.addEventListener('mouseenter', handleTextMouseEnter);
    text.addEventListener('mouseleave', handleTextMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      text.removeEventListener('mouseenter', handleTextMouseEnter);
      text.removeEventListener('mouseleave', handleTextMouseLeave);
    };
  }, []);

  const content = (
    <>
      <div ref={imageRef} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-all duration-300"
        />
      </div>
      
      {/* Overlay avec le texte */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0"
      >
        <p
          ref={textRef}
          className="text-white text-xl sm:text-2xl font-light relative cursor-pointer pointer-events-auto"
        >
          Découvrir l'étude de cas
          <span
            ref={underlineRef}
            className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left scale-x-0"
            style={{ transform: 'scaleX(0)' }}
          />
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        <div ref={containerRef} className="relative w-full aspect-video cursor-pointer group">
          {content}
        </div>
      </Link>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full aspect-video cursor-pointer group">
      {content}
    </div>
  );
}
