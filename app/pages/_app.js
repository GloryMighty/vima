import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  // Default to 'en' if no locale is provided
  const locale = ctx?.locale || 'en';
  
  // Dynamically import the messages file for the current locale
  let messages = {};
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for locale '${locale}':`, error);
  }
  return { pageProps: { messages } };
};

export default MyApp;