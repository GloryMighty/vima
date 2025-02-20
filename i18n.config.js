export const defaultLocale = 'en';
export const locales = ['en', 'tr', 'fi', 'ar'];

export const localePrefix = 'always'; // Default

export function getLocalePartsFrom({ pathname, locale }) {
  const [, lang] = pathname.split('/');
  if (locales.includes(lang)) {
    return [lang, pathname.slice(3)];
  }
  return [locale, pathname];
}
