"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Carousel component for Beauty images
export default function BeautyCarousel() {
  const carouselRef = useRef(null);

  // Array of beauty image paths
  const beautyImages = [
    '/images/VimaProj/Beauty/1.png',
    '/images/VimaProj/Beauty/2.png',
    '/images/VimaProj/Beauty/3.png',
    '/images/VimaProj/Beauty/4.png'
  ];

  return (
    <div 
      ref={carouselRef}
      id="beautyCarousel" 
      className="carousel slide carousel-fade" 
    >
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {beautyImages.map((_, index) => (
          <button 
            key={index} 
            type="button" 
            data-bs-target="#beautyCarousel" 
            data-bs-slide-to={index} 
            className={index === 0 ? 'active' : ''} 
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel inner content */}
      <div className="carousel-inner">
        {beautyImages.map((imagePath, index) => (
          <div 
            key={index} 
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <Image 
              src={imagePath} 
              alt={`Beauty image ${index + 1}`} 
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
