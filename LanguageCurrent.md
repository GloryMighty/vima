# VIMA Website Localization Documentation

## Overview
This document outlines the implementation of internationalization (i18n) in the VIMA website using Next.js 13+ App Router and next-intl.

## Supported Languages
- English (en) - Default
- Finnish (fi)
- Arabic (ar)
- Turkish (tr)
- Russian (ru)

## File Structure
```
vima/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx         # Locale-aware layout with provider
│   │   ├── providers.js      # Client-side provider setup
│   │   ├── page.js          # Home page
│   │   ├── about/
│   │   │   └── page.js # About page
│   │   ├── blog/
│   │   │   └── page.js # Blog page
│   │   ├── contact/
│   │   │   └── page.js # Contact page
│   │   ├── pricing/
│   │   │   └── page.js # Pricing page
│   │   ├── privacy-policy/
│   │   │   └── page.js # Privacy policy page
│   │   └── terms-and-conditions/
│   │       └── page.js # Terms and conditions page
├── api/ 
    ├──chat/        # API routes
│        ├──route.ts   # AI Chat route
├── components/
│   └── LanguageSelector.js   # Language switching component
├── messages/
│   ├── en.json              # English translations
│   ├── ru.json              # Russian translations
│   ├── fi.json              # Finnish translations
│   ├── ar.json              # Arabic translations
│   └── tr.json              # Turkish translations
├── styles/
│   └── languageSelector.css # Language selector styles
│   └── social-links.css    # Social links styles

├── config.js                # Language configuration
├── middleware.js            # Routing middleware
└── i18n.js                 # i18n configuration
```

## Key Components

### 1. Configuration (config.js)
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

### 5. Translation Files
Located in `/messages` directory:
- Structured JSON format
- Organized by features (Banner, About, Blog, Contact)
- Includes form validations and UI elements
- Supports nested translations

Example structure:
```json
{
  "Banner": {
    "title": "...",
    "subtitle": "..."
  },
  "About": {
    "section1": {
      "title": "...",
      "content": "..."
    }
  }
}
```

## Usage

### 1. Adding New Translations
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
