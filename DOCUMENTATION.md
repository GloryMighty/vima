# ISTI React Application Documentation

## Project Overview
ISTI React is a Next.js-based web application using React 18. The project follows a modern, component-based architecture with a focus on clean, modular code and performance.

## Project Structure

```
isti/
├── .next/               # Next.js build output
├── app/                 # Next.js 14 app directory (pages and routes)
├── components/          # Reusable React components
├── layout/             # Layout components (Header, Footer, etc.)
├── lib/                # Library code and utilities
├── public/             # Static assets (images, fonts, etc.)
├── utility/            # Utility functions and helpers
└── package.json        # Project dependencies and scripts
```

## Key Technologies

- **Next.js** (v14.2.2): React framework for production
- **React** (v18): UI library
- **GSAP**: Animation library
- **@studio-freight/lenis**: Smooth scrolling
- **react-countup**: Number animation component
- **react-slick**: Carousel/slider component
- **split-type**: Text splitting utility
- **simple-parallax-js**: Parallax effects

## Main Components

### Layout Components

#### Header (`layout/Header.js`)
- Implements two header variants (Header1 and Header2)
- Uses conditional rendering based on page type
- Includes sticky navigation functionality
- Responsive design with mobile menu support

## Index Page Rendering in Next.js

In this Next.js 13+ project, the index page (homepage) is rendered through a combination of key files:

### 1. Root Layout (`/app/layout.js`)
- Defines the base HTML structure
- Imports global CSS files
- Sets metadata for the site
- Configures font families (Poppins and Spline Sans)
- Wraps all page content with a root HTML structure
- Adds global components like `SocialLinksWidget` and `ToastContainer`

### 2. Page Component (`/app/page.js`)
- Uses "use client" directive for client-side rendering
- Imports various section components
- Composes the homepage by arranging components within `IstiLayout`
- Sections include:
  - `Home1Banner`
  - `About`
  - `Portfolio`
  - `Testomonial`
  - `Experiance`
  - `Blog`

### Rendering Flow
1. Next.js generates the base HTML through `layout.js`
2. The page content is populated by `page.js`
3. Components are dynamically imported and rendered
4. Global styles and fonts are applied

### Key Observations
- No traditional `index.html` exists
- Rendering is handled through Next.js file-based routing
- Uses modern React component composition
- Supports server-side and client-side rendering

## TypeScript Implementation

### Configuration
- Project uses Next.js with TypeScript support
- `tsconfig.json` enables TypeScript and React TypeScript
- Supports both `.ts` and `.tsx` file extensions
- Allows gradual migration from JavaScript

### Key TypeScript Configuration Options
- `allowJs: true` - Mix JavaScript and TypeScript
- `skipLibCheck: true` - Faster compilation
- `strict: false` - Currently loose type checking
- `jsx: "preserve"` - Maintain JSX syntax

### Recommended Migration Path
1. Convert files from `.js`/`.jsx` to `.ts`/`.tsx`
2. Add type annotations
3. Gradually enable stricter type checking
4. Use TypeScript-specific features like interfaces and generics

### Existing TypeScript Files
- `/components/widgets/ChatWidget.tsx`
- `/components/widgets/routee.ts`

### Best Practices
- Use explicit type annotations
- Leverage TypeScript's type inference
- Create interfaces for complex data structures
- Use generics for reusable, type-safe components

## AI Chat Widget

### Features
- Positioned at bottom-right of the screen
- Toggleable chat interface
- AI-powered responses using Google Gemini
- Real-time message rendering
- Error handling and loading states

### Implementation Details
- Uses Next.js API Routes for backend communication
- Utilizes Framer Motion for smooth animations
- Implements responsive design with Tailwind CSS
- Supports sending and receiving messages
- Handles loading and error states gracefully

### Technical Components
- Frontend: `components/widgets/ChatWidget.tsx`
- Backend: `app/api/chat/route.ts`
- Uses Google Gemini AI for generating responses

### Usage
1. Click chat icon to open widget
2. Type message and press Enter or Send button
3. AI will generate and display a response

### Configuration
- Requires `GEMINI_API_KEY` in `.env.local`
- Configurable through environment variables
- Supports multiple safety settings for AI responses

## Development

### Running the Project
```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start
```

### Code Organization Principles
1. Components are modular and focused
2. Files are kept under 200 lines
3. Utility functions are separated into the utility directory
4. Layout components handle page structure
5. App directory contains page-specific components and routes

## Best Practices
- Write clean, simple, and readable code
- Keep components small and focused
- Include detailed comments for complex logic
- Test after every meaningful change
- Use consistent naming conventions
- Document all changes in comments

## Notes
- The project uses client-side navigation with Next.js
- Animations are handled through GSAP and custom utilities
- The application supports both single-page and multi-page layouts
- Static assets are stored in the public directory

This documentation will be updated as the codebase evolves.
