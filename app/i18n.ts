import {notFound} from 'next/navigation';
import {getRequestConfig, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from './config';
 
// This is the default i18n configuration
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  // Set the locale for the request
  unstable_setRequestLocale(locale);
 
  return {
    locale, // Explicitly return the locale
    messages: (await import(`../locales/${locale}.json`)).default
  };
});
