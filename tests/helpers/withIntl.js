/**
 * Helper function to wrap components with next-intl provider for testing
 */

import { NextIntlClientProvider } from 'next-intl';
import { render } from '@testing-library/react';

export function renderWithIntl(ui, locale = 'en') {
  const messages = require(`../../locales/${locale}.json`);
  
  function Wrapper({ children }) {
    return (
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    );
  }
  
  return render(ui, { wrapper: Wrapper });
}
