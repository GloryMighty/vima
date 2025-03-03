import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {locales, defaultLocale} from '../../config/navigation';
import {notFound} from 'next/navigation';
import { Analytics } from "@vercel/analytics/react"

// Global CSS imports - CRITICAL: Maintain all global styles and resets
import "@css/font-awesome-pro.css";
import "@css/plugin.css";
import "@css/responsive.css";
import "@css/scroll_top.css";
import "@css/spacing.css";
import "@css/style.css";
import "@istiIcon/style.css";
import "../../styles/social-links.css";
import "../globals.css";
import 'react-toastify/dist/ReactToastify.css';

// Dynamic imports for widgets - Lazy load to improve initial page load performance
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';
const ChatWidget = dynamic(() => import('../../components/widgets/ChatWidget'), { ssr: false });
const SocialLinksWidget = dynamic(() => import('../../components/widgets/SocialLinks'), { ssr: false });

// Helmet imports
import HelmetWrapper from './HelmetWrapper';

// Google Font configuration - Consistent typography across the application
const inter = Inter({subsets: ['latin']});

// Generate static params for all supported locales - Enables static site generation for all languages
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

// Comprehensive metadata for SEO and internationalization
// Combines global site metadata with language-specific configurations
export const metadata = {
  // Core site identity and description
  title: "VIMA Web Development",
  description: "Professional developers with unique approach and exceptional sense of style",
  
  // SEO keywords covering our core competencies
  keywords: [
    "web development", 
    "AI-powered websites", 
    "custom web solutions", 
    "full-stack development", 
    "responsive design", 
    "Next.js", 
    "React", 
    "multilingual websites"
  ],
  
  // Internationalization and canonical URL configuration
  alternates: {
    canonical: '/',
    // Dynamically generate language alternates based on configured locales
    languages: Object.fromEntries(locales.map(locale => [locale, `/${locale}`])),
  },
  
  // Robot indexing instructions for search engines
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },

  // Optional: Additional verification or site ownership meta tags
  verification: {
    // Example: Add Google Search Console verification
    google: 'SehANDDhj3LTVodEsYzH4X4CN6LMUH_q_KvNrMaZA9o',
  }
};

// Main Locale Layout Component - Central hub for internationalized application structure
export default async function LocaleLayout({
  children, 
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Load messages based on locale
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    try {
      messages = (await import(`../../locales/${defaultLocale}.json`)).default;
    } catch {
      notFound();
    }
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="SehANDDhj3LTVodEsYzH4X4CN6LMUH_q_KvNrMaZA9o" />
      </head>
      <body className={inter.className}>
        <HelmetWrapper>
          <NextIntlClientProvider 
            locale={locale} 
            messages={messages} 
            timeZone="Europe/London"
            defaultTranslationValues={{
              name: 'Guest',
            }}
          >
            {/* Main content rendering */}
            {children}
            <ToastContainer />
            <ChatWidget />
            <Analytics />
          </NextIntlClientProvider>
        </HelmetWrapper>
      </body>
    </html>
  );
}
