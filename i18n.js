import {getRequestConfig} from 'next-intl/server';
import {locales} from './next-intl.config.js';

export default getRequestConfig(async ({locale}) => {
  // Load messages for the requested locale
  const messages = (await import(`./locales/${locale}.json`)).default;

  return {
    messages,
    // You can pass other configurations like timeZone here
  };
});
