import {createNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'ru', 'fi', 'tr', 'ar'] as const; // Completed: en, ru, fi
export const defaultLocale = 'en';
 
export const {Link, usePathname, useRouter} =
  createNavigation({locales});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};