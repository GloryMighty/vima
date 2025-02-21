# Vima React Application - Current State Documentation

## Project Overview
- **Name**: Vima React
- **Version**: 0.1.0
- **Language**: TypeScript
- **Package Manager**: NPM
- **Development Environment**: Next.js with TypeScript

## Core Architecture
- **Framework**: Next.js v14.1.0
- **Configuration**: 
  - Uses `next.config.mjs` for configuration
  - TypeScript-based middleware (`middleware.ts`)
- **State Management**: Context API
- **Internationalization**: 
  - Library: `next-intl`
  - Localization strategy: Dynamic routing with `[locale]`
- **UI Library**: React Bootstrap

## Project Structure
### Key Directories
- `/app`: Main application structure
  - `/[locale]`: Localized page routes
    - Supports dynamic language-based routing
    - Contains page-specific implementations
  - `/api`: API route handlers
- `/components`: Reusable React components
- `/layout`: Layout-related components
- `/context`: Application context management
- `/config`: Configuration files
  - `navigation.ts`: Central navigation configuration

### Localization Strategy
- Locales managed in `/app/[locale]`
- Translations follow consistent keyword logic
- Supports multiple language variants
- Minimal text changes between locales

### Main Pages
1. Home Page (`/app/[locale]/page.js`)
2. About Page (`/app/[locale]/about/page.js`)
3. Blog Page (`/app/[locale]/blog/page.js`)
4. Contact Page (`/app/[locale]/contact/page.js`)
5. Pricing Page (`/app/[locale]/pricing/page.js`)
6. Privacy Policy (`/app/[locale]/privacy-policy/page.js`)
7. Terms and Conditions (`/app/[locale]/terms-and-conditions/page.js`)

## Key Features
1. Responsive layout system
2. Smooth animations (GSAP/Framer Motion)
3. Content sliders (Swiper/Slick)
4. AI integration (Google Generative AI)
5. Performance optimizations:
   - Lenis smooth scrolling
   - Studio Freight libraries
6. Comprehensive internationalization support

## Key Dependencies
### UI & Design
- React Bootstrap
- Framer Motion
- GSAP
- Swiper
- Slick Carousel
- Simple Parallax JS

### Utilities
- Next Internationalization (`next-intl`)
- React Toastify
- Numeral (number formatting)
- Count Up

### Graphics & Animations
- Spline Runtime
- Nivo (data visualization)
- Split Type
- Lucide React
- FontAwesome

### AI Integration
- Google Generative AI

## Configuration
### Next.js Configuration
- Strict Mode: Enabled
- Page Extensions: `.js`, `.jsx`, `.ts`, `.tsx`

### Performance Optimization
- Lenis (smooth scrolling)
- Studio Freight libraries

## Development Setup
```bash
npm run dev  # Start development server
npm run build  # Create production build
npm run lint  # Run ESLint
```

## Localization Status
- ✅ Completed: EN, RU, FI
- 🚧 In Progress: AR, TR
- Translation files: `/locales/[lang].json`
- Navigation: `config/navigation.ts`
- Hook: `hooks/useLocalizedContent.js`

## Development Scripts
- `clean`: Remove `.next` directory

## Browser Compatibility
- Configured to disable Node.js specific modules in browser environment
- Uses modern React (v18) ecosystem

## Development Best Practices
- Modular and focused component design
- Consistent naming conventions
- Comprehensive code documentation
- Performance and user experience prioritized

## Future Improvements
- Continuous localization refinement
- Performance optimization
- Enhanced AI integration
- Accessibility improvements

## Next Steps
1. SEO Optimization for each page

## Notes
- Project is in production stage (v1.0.0)
- Focuses on modular, clean, and simple code implementation
- Prioritizes core functionality before optimization
