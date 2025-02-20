# Vima React Application - Current State Documentation

## Project Overview
- **Name**: Vima React
- **Version**: 0.1.0
- **Language**: TypeScript
- **Package Manager**: NPM

## Core Architecture
- **Framework**: Next.js v14.1.0 (TypeScript)
- **State Management**: Context API
- **Internationalization**: next-intl (multi-language support)
- **UI Library**: React Bootstrap

## Project Structure
### Key Directories
- `/app/[locale]`: Main application routes and pages
- `/components`: Reusable React components
- `/layout`: Layout-related components
- `/context`: Application context management
- `/components/widgets`: Specialized widget components

### Main Pages
1. Home Page (`/app/[locale]/page.js`)
2. About Page (`/app/[locale]/about/page.js`)
3. Blog Page (`/app/[locale]/blog/page.js`)
4. Contact Page (`/app/[locale]/contact/page.js`)
5. Pricing Page (`/app/[locale]/pricing/page.js`)

## Key Features
1. Responsive layout system
2. Smooth animations (GSAP/Framer Motion)
3. Content sliders (Swiper/Slick)
4. AI integration (Google Generative AI)
5. Performance optimizations:
   - Lenis smooth scrolling
   - Studio Freight libraries

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

## Next Steps
1. Complete EN locale finalization
2. Add Jest testing framework
3. Implement error boundary components
4. Optimize asset loading
5. Enhance documentation

## Notes
- Project is in early development stage (v0.1.0)
- Focuses on modular, clean, and simple code implementation
- Prioritizes core functionality before optimization
