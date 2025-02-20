'use client';

import { getImagePath } from './imageUtils';

/**
 * Utility functions for handling carousel images across all locales
 * Ensures images are loaded correctly regardless of the current language
 */

interface CarouselConfig {
  interval?: number;
  ride?: boolean;
  pause?: boolean;
}

/**
 * Get localized carousel images
 * @param {string[]} paths - Array of image paths relative to /images directory
 * @returns {string[]} Array of localized image paths
 */
export const getLocalizedCarouselImages = (paths: string[]): string[] => {
  return paths.map(path => getImagePath(path));
};

/**
 * Default carousel configuration
 */
export const defaultCarouselConfig: CarouselConfig = {
  interval: 3000,  // Change image every 3 seconds
  ride: true,      // Start automatic cycling
  pause: false     // Don't pause on hover
};

/**
 * Travel showcase image paths
 */
export const travelImagePaths = [
  'VimaProj/Travel/1.png',
  'VimaProj/Travel/2.png',
  'VimaProj/Travel/3.png',
  'VimaProj/Travel/4.png',
  'VimaProj/Travel/5.png'
];

/**
 * Beauty showcase image paths
 */
export const beautyImagePaths = [
  'VimaProj/Beauty/1.png',
  'VimaProj/Beauty/2.png',
  'VimaProj/Beauty/3.png',
  'VimaProj/Beauty/4.png',
  'VimaProj/Beauty/5.png'
];

/**
 * Personal showcase image paths
 */
export const personalImagePaths = [
  'VimaProj/Personal/1.png',
  'VimaProj/Personal/2.png',
  'VimaProj/Personal/3.png',
  'VimaProj/Personal/4.png',
  'VimaProj/Personal/5.png'
];
