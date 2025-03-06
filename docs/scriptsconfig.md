# Image Optimization Documentation

## Overview

This document explains the image optimization implementation in our project, which converts all images to WebP format for better site performance while maintaining compatibility with all browsers.

## Implementation Details

### 1. Image Conversion

We've implemented a script (`scripts/image-processor.js`) that converts all images in the `/public/images` directory to WebP format, maintaining the original folder structure and saving the converted images in `/public/images-webp`.

```javascript
// Usage: node scripts/image-processor.js
```

The script uses Sharp for image processing and generates a mapping file that tracks the relationship between original images and their WebP versions.

### 2. Image Reference Updates

We've updated all image references in the codebase to point to the new WebP images using the `/images-webp/` path prefix. This ensures that all components use the optimized WebP images.

Key files that were updated:
- `app/Blog.js` - Updated blog post image references
- `app/BannerExmpl.js` - Fixed relative paths to use absolute paths with leading slashes
- `app/Foot.js` - Corrected incorrect path structure
- `app/Portfolio.js` - Updated portfolio image references

### 3. Next.js Configuration

We've configured Next.js to properly handle WebP images by disabling its built-in image optimization for our pre-optimized WebP images:

```javascript
// next.config.mjs
images: {
  remotePatterns: [],
  unoptimized: true, // Disable Next.js image optimization to use pre-optimized WebP images
  domains: [],
},
```

### 4. OptimizedImage Component

We've created a reusable `OptimizedImage` component (`components/common/OptimizedImage.js`) that simplifies the use of WebP images throughout the application:

```jsx
// Usage example
<OptimizedImage 
  src="/images-webp/example.webp" 
  alt="Example image" 
  width={300} 
  height={200} 
/>
```

The component uses Next.js's Image component with the `unoptimized` flag to prevent double-optimization.

## Best Practices

1. **Always use absolute paths** - Always use absolute paths with leading slashes (e.g., `/images-webp/example.webp`) for image references.

2. **Use the OptimizedImage component** - Use the OptimizedImage component when possible for consistent image handling.

3. **Adding new images** - When adding new images:
   - Add the original image to `/public/images/`
   - Run the image processor script to convert it to WebP
   - Reference the WebP version in your code using `/images-webp/` path

4. **Image sizes** - Provide appropriate width and height attributes to prevent layout shifts.

## Troubleshooting

If you encounter issues with image loading:

1. Check that the image path starts with a leading slash (`/`)
2. Verify that the WebP version of the image exists in the `/public/images-webp/` directory
3. Ensure the Next.js configuration has `unoptimized: true` in the images section

## Performance Benefits

The WebP format offers significant advantages over traditional formats:
- 25-35% smaller file sizes compared to PNG
- 25-34% smaller file sizes compared to JPEG
- Support for transparency like PNG but with smaller file sizes
- Better compression algorithms resulting in faster page loads
