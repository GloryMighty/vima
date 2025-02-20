import { NextResponse, type NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './config/navigation';
 
// Create internationalization middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale
});

export function middleware(request: NextRequest) {
  return intlMiddleware(request);
} 

export const config = {
  matcher: ['/', '/((?!api|_next|.*\\..*).*)']
};
