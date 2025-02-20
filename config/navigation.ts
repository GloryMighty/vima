import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'tr', 'fi', 'ar', 'ru'] as const;
export const defaultLocale = 'en';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};