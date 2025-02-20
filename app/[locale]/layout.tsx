import {Inter} from 'next/font/google';
import {unstable_setRequestLocale} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import {locales} from '../../config/navigation';

const inter = Inter({subsets: ['latin']});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Set the request locale for static generation
  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    // If messages fail to load, you might want to show an error page
    return null;
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
