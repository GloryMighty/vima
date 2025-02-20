import {getRequestConfig} from 'next-intl/server';
import {locales} from './next-intl.config.js';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale)) {
    locale = locales[0]; // Default to first locale
  }

  // Load messages for the requested locale
  const messages = (await import(`./locales/${locale}.json`)).default;

  return {
    locale,
    messages,
    // You can pass other configurations like timeZone here
  };
});
