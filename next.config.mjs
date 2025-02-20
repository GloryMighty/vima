import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
  /**
   * Configure image handling and optimization
   * - Ensures images are served from correct paths
   * - Handles locale-prefixed image requests
   */
  async rewrites() {
    return [
      // Handle locale-prefixed image paths
      {
        source: '/:locale/images/:path*',
        destination: '/images/:path*',
      },
    ];
  },
};

export default withNextIntl(config);