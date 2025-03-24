'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ToorieCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const importBootstrapCarousel = async () => {
      if (typeof window !== 'undefined') {
        const bootstrap = await import('bootstrap');
        if (carouselRef.current) {
          new bootstrap.Carousel(carouselRef.current, {
            interval: 3000,
            ride: true,
            pause: false
          });
        }
      }
    };

    importBootstrapCarousel();
  }, []);

  const t = useTranslations('Blog');

  const toorieImages = [
    '/images-webp/VimaProj/Toorie/1.webp',
    '/images-webp/VimaProj/Toorie/2.webp',
    '/images-webp/VimaProj/Toorie/3.webp',
    '/images-webp/VimaProj/Toorie/4.webp',
    '/images-webp/VimaProj/Toorie/5.webp',
    '/images-webp/VimaProj/Toorie/6.webp',
    '/images-webp/VimaProj/Toorie/7.webp',
    '/images-webp/VimaProj/Toorie/8.webp',
    '/images-webp/VimaProj/Toorie/9.webp',
    '/images-webp/VimaProj/Toorie/10.webp',
    '/images-webp/VimaProj/Toorie/11.webp'
  ];

  return (
    <div 
      ref={carouselRef}
      id="toorieCarousel" 
      className="carousel slide carousel-fade"
      suppressHydrationWarning={true}
    >
      <div className="carousel-indicators">
        {toorieImages.map((_, index) => (
          <button 
            key={index} 
            type="button" 
            data-bs-target="#toorieCarousel" 
            data-bs-slide-to={index} 
            className={index === 0 ? 'active' : ''} 
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {toorieImages.map((imagePath, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Image 
              src={imagePath} 
              alt={`Toorie image ${index + 1}`} 
              className="d-block w-100" 
              width={800} 
              height={400} 
              priority={index === 0}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                maxHeight: '500px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}