import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '../app/config';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = locales[0]; // Default to first locale
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});
