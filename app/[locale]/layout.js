import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '../../config/navigation';

const inter = Inter({subsets: ['latin']});

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  if (!['en', 'tr', 'fi', 'ar'].includes(locale)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/London">
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
