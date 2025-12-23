'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleError = () => {
        console.log('Video failed to load');
        setVideoError(true);
      };
      
      const handleCanPlay = () => {
        video.play().catch((error) => {
          console.log('Video autoplay failed:', error);
          setVideoError(true);
        });
      };

      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);

      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  if (videoError) {
    return (
      <Image
        src="/roce-vu-SEfsMxasBxk-unsplash.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: 0, width: '100%', height: '100%' }}
      onError={() => {
        console.log('Video error detected');
        setVideoError(true);
      }}
      onLoadedData={() => {
        const video = videoRef.current;
        if (video) {
          video.play().catch((error) => {
            console.log('Video play failed:', error);
          });
        }
      }}
    >
      <source src="/RPReplay_Final1766478171.mov" type="video/quicktime" />
      <source src="/RPReplay_Final1766478171.mov" type="video/mp4" />
    </video>
  );
}

