/**
 * OptimizedImage Component
 * 
 * A simplified component that uses Next.js Image component with WebP images
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/images-webp/example.webp" 
 *   alt="Example image" 
 *   className="your-class" 
 *   width={300} 
 *   height={200} 
 * />
 */

import React from 'react';
import Image from 'next/image';

/**
 * OptimizedImage component for serving WebP images
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - WebP image source
 * @param {string} props.alt - Alternative text for the image
 * @param {string} [props.className] - CSS class name
 * @param {number} [props.width] - Image width
 * @param {number} [props.height] - Image height
 * @param {Object} [props.style] - Additional inline styles
 * @param {boolean} [props.priority] - Whether to prioritize loading
 * @returns {React.ReactElement} - React component
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  style,
  priority = false,
  ...restProps
}) => {
  // Clean up the src path if needed
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  
  return (
    <Image
      src={cleanSrc}
      alt={alt || 'Image'}
      className={className}
      width={width || 800}
      height={height || 600}
      style={style}
      priority={priority}
      unoptimized={true} // Use pre-optimized WebP images
      {...restProps}
    />
  );
};

export default OptimizedImage;
