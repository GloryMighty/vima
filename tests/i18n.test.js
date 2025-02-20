/**
 * Simple test script to verify translations
 * Tests all supported languages and key components
 */

import { useTranslations } from 'next-intl';
import { render, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { useLocale } from 'next-intl';

// Test key components with translations
describe('Internationalization Tests', () => {
  const languages = ['en', 'fi', 'ar', 'tr'];
  const keyComponents = ['Banner', 'About', 'Blog', 'Contact'];

  // Test each language
  languages.forEach(lang => {
    describe(`${lang} translations`, () => {
      // Test each component
      keyComponents.forEach(component => {
        it(`should have all required translations for ${component}`, () => {
          const messages = require(`../locales/${lang}.json`);
          expect(messages[component]).toBeDefined();
          
          // Verify key translations exist
          if (component === 'Banner') {
            expect(messages.Banner.we_are_vima).toBeDefined();
            expect(messages.Banner.passionate_website_developers).toBeDefined();
            expect(messages.Banner.banner_paragraph).toBeDefined();
          }
          
          if (component === 'Contact') {
            expect(messages.Contact.form).toBeDefined();
            expect(messages.Contact.validation).toBeDefined();
            expect(messages.Contact.errors).toBeDefined();
          }
        });
      });
    });
  });
});

describe('Locale Handling', () => {
  it('should handle different locales', () => {
    const TestComponent = () => {
      const locale = useLocale();
      return <div data-testid="locale-test">{locale}</div>;
    };

    const { container } = render(<TestComponent />);
    expect(container.firstChild).toHaveTextContent('en'); // Default locale
  });
});
