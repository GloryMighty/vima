import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
  // Image configuration
  images: {
    remotePatterns: [],
    unoptimized: false, // Disable Next.js image optimization to use pre-optimized WebP images
    domains: [],
  },
  
  // Handle locale-prefixed paths
  async rewrites() {
    return [
      // Handle locale-prefixed WebP image paths
      {
        source: '/:locale/images-webp/:path*',
        destination: '/images-webp/:path*',
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
  webpack: (config) => {
    // Improve performance by minimizing and optimizing chunks
    config.optimization.minimize = true;
    
    return config;
  },

  // Compression and Asset Optimization
  compress: true,
};

export default withNextIntl(config);