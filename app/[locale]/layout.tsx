import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {locales} from '../../config/navigation';
import {notFound} from 'next/navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

// Global CSS imports
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

// Dynamic imports for widgets
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';
const ChatWidget = dynamic(() => import('../../components/widgets/ChatWidget'), { ssr: false });
const SocialLinksWidget = dynamic(() => import('../../components/widgets/SocialLinks'), { ssr: false });

// Metadata for SEO and internationalization
export const metadata = {
  title: "VIMA Web Development",
  description: "Professional developers with unique approach and exceptional sense of style",
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
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'tr': '/tr',
      'fi': '/fi',
      'ar': '/ar',
    },
  },
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
};

// Google Font configuration
const inter = Inter({subsets: ['latin']});

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

// Main Locale Layout Component
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {    

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    // If messages fail to load, redirect to 404
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="Europe/London">
          {children}
          <ToastContainer />
          <ChatWidget />
          <SocialLinksWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
