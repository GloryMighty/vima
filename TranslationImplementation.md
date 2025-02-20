To use and translate your application with next-intl, follow these steps, incorporating the information from the search results:

1. Installation

Install next-intl using npm:

```bash
npm install next-intl
```

2. Project Structure

The typical file structure for a Next.js project using next-intl10:

```
│   ├── en.json
│   └── ...
├── next.config.js
└── src
    ├── i18n.ts
    ├── middleware.ts
    └── app
        └── [locale]
            ├── layout.tsx
            └── page.tsx
3. Configuration

next.config.js: Configure Next.js to use the next-intl plugin3.

javascript
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  // include other configs here
});
middleware.ts: Create a middleware.ts file in the root of your project to handle text translations during runtime4. This file intercepts requests and determines the user's locale based on the URL or browser settings4.

javascript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es', 'fr'], // List of all locales that your application supports
  defaultLocale: 'en' // The default locale
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'] // Skip all paths that should not be internationalized
};
i18n.ts: This module is used to provide i18n configuration like locale-specific messages to React Server Components6.

4. Translation Files

Create a content or messages folder at the project’s root3. Inside, create JSON files for each locale (e.g., en.json, es.json, de.json) containing your translated strings3.

json
// en.json
{
  "UserProfile": {
    "title": "{firstName}'s profile",
    "membership": "Member since {memberSince, date, short}",
    "followers": "{count, plural, \n =0 {No followers yet} \n =1 {One follower} \n other {# followers} \n }"
  }
}
5. Rendering Translations

Server Components: Use the useTranslations hook to render translations in server components7.

javascript
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <h1>{t('title')}</h1>
  );
}
Client Components: To maintain optimal performance, next-intl doesn't automatically provide messages to client components. You can pass server-rendered translations to client components as props5.

javascript
// Server component passing translations to a client component
import { useTranslations } from 'next-intl';
import InteractiveButton from './InteractiveButton';

function Greeting() {
  const t = useTranslations('Greeting');
  return <InteractiveButton label={t('hello')} />;
}
6. Internationalized Routing

next-intl provides internationalized routing for Next.js1. The layout and page modules are moved within the [locale] folder to make all pages locale-aware6.

7. ICU Message Syntax

next-intl uses ICU message syntax for localized messages with interpolation, plurals, and rich text2.

8. Splitting Translation Files

To keep translation files modular, consider using next-intl-split11.

9. Language Switching

To switch between languages, explicitly instruct the application to switch the language context by specifying the locale9.

10. Considerations

Type Safety: next-intl offers type safety with autocompletion for message keys1.

Performance: next-intl is performance-focused, using the App Router and Server Components1.

