import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Locale Configuration
export const defaultLocale = 'en';
export const locales = ['en', 'tr', 'fi', 'ar'];
export const localePrefix = 'always'; // Default

// Utility function to extract locale parts from pathname
export function getLocalePartsFrom({ pathname, locale }) {
  const [, lang] = pathname.split('/');
  if (locales.includes(lang)) {
    return [lang, pathname.slice(3)];
  }
  return [locale, pathname];
}

// Internationalization Request Handler
export default getRequestConfig(async ({requestLocale}) => {
  // Validate and normalize the locale
  const locale = (!requestLocale || !locales.includes(requestLocale)) 
    ? defaultLocale 
    : requestLocale;

  try {
    // Dynamically import messages for the requested locale
    const messages = (await import(`./locales/${locale}.json`)).default;
    
    return {
      locale,
      messages,
      // Additional configuration can be added here
      timeZone: 'UTC', // Example of additional configuration
    };
  } catch (error) {
    // Handle missing locale files
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }
});
