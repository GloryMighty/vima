/**
 * Custom hook for handling translations with error handling and interpolation
 */

'use client';

import { useTranslations } from 'next-intl';
import { interpolateMessage } from '../lib/i18n-utils';

export function useLocalizedContent(namespace) {
  const t = useTranslations(namespace);
  
  /**
   * Get translation with variable interpolation and fallback
   */
  const getContent = (key, variables = {}, fallback = '') => {
    try {
      const message = t(key);
      return variables ? interpolateMessage(message, variables) : message;
    } catch (error) {
      console.warn(`Translation missing for key: ${namespace}.${key}`);
      return fallback || key;
    }
  };

  /**
   * Get nested translation object for dynamic content
   */
  const getNestedContent = (prefix) => {
    return new Proxy({}, {
      get: (target, prop) => {
        const key = `${prefix}.${prop}`;
        try {
          return t(key);
        } catch {
          console.warn(`Translation missing for key: ${namespace}.${key}`);
          return key;
        }
      }
    });
  };

  return {
    getContent,
    getNestedContent
  };
}
