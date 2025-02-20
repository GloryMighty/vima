import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = locales[0]; // Default to first locale
  }

  return {
    locale, // Explicitly return the locale
    messages: (await import(`../locales/${locale}.json`)).default
  };
});
