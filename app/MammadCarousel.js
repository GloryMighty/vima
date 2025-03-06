'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Carousel component for Mammad project images
export default function MammadCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Dynamically import Bootstrap's Carousel module
    const importBootstrapCarousel = async () => {
      if (typeof window !== 'undefined') {
        const bootstrap = await import('bootstrap');
        if (carouselRef.current) {
          // Initialize the carousel
          new bootstrap.Carousel(carouselRef.current, {
            interval: 3000,  // Change image every 3 seconds
            ride: true,      // Start automatic cycling
            pause: false     // Don't pause on hover
          });
        }
      }
    };

    importBootstrapCarousel();
  }, []);

  const t = useTranslations('Blog');

  // Array of Mammad project image paths
  const mammadImages = [
    '/images-webp/VimaProj/mammad/1.webp',
    '/images-webp/VimaProj/mammad/2.webp',
    '/images-webp/VimaProj/mammad/3.webp',
    '/images-webp/VimaProj/mammad/4.webp',
    '/images-webp/VimaProj/mammad/5.webp'
  ];

  return (
    <div 
      ref={carouselRef}
      id="mammadCarousel" 
      className="carousel slide carousel-fade"
      suppressHydrationWarning={true}
    >
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {mammadImages.map((_, index) => (
          <button 
            key={index} 
            type="button" 
            data-bs-target="#mammadCarousel" 
            data-bs-slide-to={index} 
            className={index === 0 ? 'active' : ''} 
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel inner content */}
      <div className="carousel-inner">
        {mammadImages.map((imagePath, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Image 
              src={imagePath} 
              alt={`Mammad project image ${index + 1}`} 
              className="d-block w-100" 
              width={800} 
              height={400} 
              priority={index === 0}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                maxHeight: '500px'  // Ensure consistent height
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
