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

  // Production Optimizations
  productionBrowserSourceMaps: false,
  
  // Performance and Caching
  experimental: {
    optimizePackageImports: ['@/components', '@/app'],
    serverComponentsExternalPackages: ['sharp', 'ejs'],
  },

  // Webpack Configuration
  webpack: (config, { isServer }) => {
    // Improve performance by minimizing and optimizing chunks
    config.optimization.minimize = true;
    
    return config;
  },

  // Compression and Asset Optimization
  compress: true,
};

export default withNextIntl(config);