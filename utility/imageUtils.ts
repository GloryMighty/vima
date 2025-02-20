'use client';

/**
 * Utility functions for handling images across all locales
 * Ensures images are loaded correctly regardless of the current language
 * 
 * Features:
 * - Safe path handling and validation
 * - Support for localized images
 * - Fallback to default images
 * - Consistent path formatting
 * - Error handling and logging
 */

/**
 * Gets the correct image path for the current locale
 * Provides safe path handling and validation
 * 
 * @param {string} imagePath - The path to the image in the public directory
 * @returns {string} The correct path to use for the image
 */
export const getImagePath = (imagePath: string): string => {
  if (!imagePath) {
    console.warn('Image path is undefined or empty');
    return '/images/placeholder.png';
  }

  // Clean the path and ensure it starts with /images/
  const cleanPath = imagePath.replace(/^\/+/, '').replace(/^images\//, '');
  return `/images/${cleanPath}`;
};

/**
 * Creates an image object with path and alt text
 * @param {string} path - The path to the image in the public directory
 * @param {string} alt - The alt text for the image
 * @returns {Object} Image object with path and alt text
 */
export const createImageObject = (path: string, alt: string = 'Image') => ({
  path: getImagePath(path),
  alt
});

/**
 * Creates an image object with path and alt text
 * Handles localization of both path and alt text
 * 
 * @param {string} path - The path to the image in the public directory
 * @param {string} alt - The alt text for the image
 * @returns {Object} Image object with path and alt text
 */