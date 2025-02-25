'use client';

/**
 * LanguageSelector Component
 * 
 * A reusable component that provides language switching functionality.
 * Features:
 * - Displays current language with flag
 * - Dropdown menu for language selection
 * - Preserves current route when switching languages
 * - Responsive design (works in both desktop and mobile)
 * - Closes when clicking outside
 */

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

const LanguageSelector = () => {
  const t = useTranslations('Language');
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1];

  /**
   * Language configuration object
   * Maps locale codes to their display names and flag emojis
   * Note: Flags are unicode emojis for better compatibility
   */
  const languages = {
    en: { flag: '🇺🇸' },
    fi: { flag: '🇫🇮' },
    ru: { flag: '🇷🇺' },
    ar: { flag: '🇸🇦' },
    tr: { flag: '🇹🇷' }
  };

  /**
   * Click outside handler
   * Closes the language dropdown when clicking anywhere outside
   * Uses a ref to track the dropdown container element
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * Language change handler
   * Preserves the current route while changing the locale
   * Example: /en/about -> /ar/about
   * @param {string} locale - The new locale to switch to
   */
  const handleLanguageChange = (locale) => {
    // Remove the current locale from the start of the path
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
    // Ensure the path starts with a slash and is not empty
    const cleanPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
    // Construct new path with selected locale
    const newPath = `/${locale}${cleanPath}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef} 
      className={`tf__language_selector ${isOpen ? 'open' : ''}`} 
      style={{
        overflow: 'hidden', // Hide overflow
      }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="tf__common_btn "
        style={{ 
          padding: '5px 13px',  // Reduce padding
          fontSize: '12px',     // Reduce font size
          lineHeight: '1.2',    // Tighten line height
          height: 'auto',        // Allow height to adjust to content
          borderRadius: '50%'
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="menu-text">
          <div>
            <span className="tf__language_current">
              <span className="tf__language_flag">{languages[currentLocale].flag}</span>
            </span>
          </div>
        </span>
      </button>
      {isOpen && (
        <div className="tf__language_dropdown">
          {Object.keys(languages)
            .filter((locale) => locale !== currentLocale)
            .map((locale) => (
              <button 
                key={locale} 
                onClick={() => handleLanguageChange(locale)}
                className="tf__common_btn"
                style={{ 
                  padding: '6px 12px',  // Reduce padding for dropdown items
                  fontSize: '11px',      // Reduce font size for dropdown items
                  lineHeight: '1.2',    // Tighten line height
                  height: 'auto',        // Allow height to adjust to content
                  borderRadius: '50%',
                  display: 'block',      // Ensure buttons stack vertically
                }}
              >
                <span className="tf__language_flag">{languages[locale].flag}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
