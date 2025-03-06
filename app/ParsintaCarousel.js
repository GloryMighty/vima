"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Carousel component for Personal images showcasing comprehensive solution example
export default function PersonalCarousel() {
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

  // Array of personal image paths
  const personalImages = [
    '/images-webp/VimaProj/Parsinta/1.webp',
    '/images-webp/VimaProj/Parsinta/2.webp',
    '/images-webp/VimaProj/Personal/3.webp',
  ];

  return (
    <div 
      ref={carouselRef}
      id="personalCarousel" 
      className="carousel slide carousel-fade"
      suppressHydrationWarning={true}
    >
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {personalImages.map((_, index) => (
          <button 
            key={index} 
            type="button" 
            data-bs-target="#personalCarousel" 
            data-bs-slide-to={index} 
            className={index === 0 ? 'active' : ''} 
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel inner content */}
      <div className="carousel-inner">
        {personalImages.map((imagePath, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Image 
              src={imagePath} 
              alt={`Personal image ${index + 1}`} 
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
