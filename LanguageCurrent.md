# VIMA Website Localization Documentation

## Last Updated: February 19, 2025

## Overview
This document outlines the implementation of internationalization (i18n) in the VIMA website using Next.js 13+ App Router and next-intl.

## Supported Languages
- English (en) - Default
- Finnish (fi)
- Arabic (ar)
- Turkish (tr)

## File Structure
```
vima/
├── app/
│   ├── [locale]/
│   │   ├── layout.js         # Locale-aware layout with provider
│   │   ├── page.js          # Home page
│   │   ├── about/
│   │   ├── blog/
│   │   └── contact/
├── components/
│   ├── Banner.js            # Localized banner component
│   ├── About.js             # Localized about component
│   ├── Blog.js              # Localized blog component
│   ├── Contact.js           # Localized contact form
│   ├── Experience.js        # Localized experience/pricing
│   └── Portfolio.js         # Localized portfolio
├── layout/
│   ├── Header.js           # Localized navigation
│   ├── Footer.js           # Localized footer
│   └── Copyright.js        # Localized copyright
├── locales/
│   ├── en.json             # English translations
│   ├── fi.json             # Finnish translations
│   ├── ar.json             # Arabic translations
│   └── tr.json             # Turkish translations
├── middleware.js           # Locale routing middleware
└── i18n-utils.js          # i18n utility functions
```

## Localized Components

### 1. Layout Components
- **Header**: Navigation menu, language selector
- **Footer**: Contact information, social links
- **Copyright**: Legal information

### 2. Page Components
- **Banner**: Hero section with main messaging
- **About**: Company information and services
- **Blog**: Project showcases and articles
- **Contact**: Contact form with validation
- **Experience**: Pricing plans and company logos
- **Portfolio**: Project portfolio grid

### 3. Utility Components
- **withLocaleLayout**: HOC for RTL support
- **useLocalizedContent**: Custom hook for translations
```javascript
export const locales = ['en', 'fi', 'ar', 'tr'];
export const defaultLocale = 'en';
```

### 2. Middleware (middleware.js)
- Handles locale-based routing
- Redirects to default locale if none specified
- Prevents access to non-localized routes

### 3. Layout ([locale]/layout.js)
- Wraps the application with locale context
- Handles RTL support for Arabic
- Loads locale-specific messages
- Includes the language selector

### 4. Language Selector Component
Features:
- Dropdown menu with language options
- Shows current language with flag emoji
- Preserves current page path when switching languages
- Closes when clicking outside
- RTL support
- Smooth animations and transitions

## Translation Structure
Located in `/locales` directory:
- Structured JSON format
- Organized by features (Banner, About, Blog, Contact)
- Includes form validations and UI elements
- Supports nested translations

Current translation structure:
```json
{
  "Banner": {
    "we_are_vima": "...",
    "passionate_website_developers": "...",
    "banner_paragraph": "...",
    "watch_video": "..."
  },
  "About": {
    "immerse_in": "...",
    "title": "...",
    "main_paragraphs": "..."
  },
  "Blog": {
    "page_title": "...",
    "posts": {...},
    "categories": {...}
  },
  "Contact": {
    "form": {...},
    "validation": {...}
  },
  "Experience": {
    "pricing": {...},
    "features": {...}
  },
  "Layout": {
    "Header": {...},
    "Footer": {...},
    "Copyright": {...}
  }
}
```

## Implementation Guidelines

### 1. Component Translation Process
1. Import useTranslations hook:
   ```javascript
   import { useTranslations } from 'next-intl';
   ```
2. Initialize translations in component:
   ```javascript
   const t = useTranslations('ComponentName');
   ```
3. Use translation keys:
   ```javascript
   <h1>{t('section.title')}</h1>
   ```

### 2. RTL Support
- Arabic locale automatically triggers RTL layout
- Use withLocaleLayout HOC for RTL-aware components
- CSS properties respect RTL direction

### 3. Testing Translations
- Jest tests verify translation key existence
- Component tests check correct rendering
- Manual testing in all supported languages

### 4. Adding New Content
1. Add English translations first
2. Create corresponding keys in other language files
3. Use descriptive, nested key names
4. Update tests if needed
1. Add new keys to `/messages/en.json`
2. Add corresponding translations to other language files
3. Use consistent naming convention (snake_case)
4. Group related translations under feature-specific keys

### 2. Using Translations in Components
```javascript
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('FeatureName');
  return <h1>{t('section.title')}</h1>;
}
```

### 3. Adding New Pages
1. Create page under `/app/[locale]/`
2. Import and use `useTranslations` hook
3. Add necessary translations to all language files

### 4. RTL Support
- Arabic pages automatically use RTL layout
- CSS classes use logical properties (start/end instead of left/right)
- RTL-specific styles use `[dir="rtl"]` selector

## Best Practices

1. Translation Keys:
   - Use descriptive, feature-based namespacing
   - Keep hierarchy shallow (max 3 levels)
   - Use consistent naming patterns

2. Component Design:
   - Keep translations close to where they're used
   - Use translation keys that match component structure
   - Handle missing translations gracefully

3. Performance:
   - Lazy load translations when possible
   - Use static rendering where appropriate
   - Keep translation files modular

4. Maintenance:
   - Document all translation keys
   - Keep translations in sync across all languages
   - Review and update translations regularly

## Known Limitations
1. Static paths must be configured for all supported locales
2. Some third-party components may need additional RTL support
3. Font loading might need optimization for non-Latin scripts

## Future Improvements
1. Add automated translation verification
2. Implement translation management system
3. Add support for locale-specific formatting (dates, numbers)
4. Improve SEO with locale-specific metadata
5. Add automated testing for translations

## Testing
To test localization:
1. Visit different language versions (`/en`, `/fi`, `/ar`, `/tr`)
2. Verify content is correctly translated
3. Check RTL layout in Arabic version
4. Confirm language switching preserves current page
5. Test form validations in all languages
