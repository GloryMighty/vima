import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['en', 'ru', 'fi', 'tr', 'ar'] as const; // Completed: en, ru, fi
export const defaultLocale = 'en';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};