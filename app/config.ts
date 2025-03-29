// Configure supported locales and default locale
export const defaultLocale = 'en';
export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
