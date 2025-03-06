# Image Optimization Guide

## Overview

We've implemented a comprehensive image optimization strategy to improve website performance:

1. Converted all PNG/JPG images to WebP format (85% quality)
2. Maintained the original folder structure in the new `/public/images-webp` directory
3. Updated all image references in the codebase
4. Created an `OptimizedImage` component for backward compatibility

## Benefits of WebP

- **Smaller file sizes**: WebP images are typically 25-35% smaller than PNG/JPG
- **Better quality-to-size ratio**: Higher quality at smaller file sizes
- **Transparency support**: Like PNG, but with better compression
- **Animation support**: Like GIF, but with better compression

## How to Use WebP Images

### Direct Usage

```jsx
// Before
<img src="/images/example.png" alt="Example" />

// After
<img src="/images-webp/example.webp" alt="Example" />
```

### Using the OptimizedImage Component (Recommended)

For better browser compatibility, use our new `OptimizedImage` component:

```jsx
import OptimizedImage from '../components/common/OptimizedImage';

// Basic usage
<OptimizedImage 
  src="/images-webp/example.webp" 
  alt="Example" 
/>

// With additional props
<OptimizedImage 
  src="/images-webp/example.webp"
  fallbackSrc="/images/example.png" // Optional: custom fallback
  alt="Example"
  className="your-class"
  width={300}
  height={200}
/>
```

The `OptimizedImage` component automatically provides a fallback for browsers that don't support WebP.

## Adding New Images

When adding new images to the project:

1. Save the original image in `/public/images/`
2. Run the conversion script to create the WebP version:

```bash
node scripts/image-processor.js
```

3. Use the `OptimizedImage` component to reference the image in your code

## Scripts Reference

### Image Processor (`scripts/image-processor.js`)

Converts all images in `/public/images` to WebP format and saves them in `/public/images-webp`.

```bash
node scripts/image-processor.js
```

### Reference Updater (`scripts/update-image-references.js`)

Updates image references in the codebase to point to the WebP versions.

```bash
node scripts/update-image-references.js
```

## Best Practices

1. Always use the `OptimizedImage` component for new images
2. Keep original images in the `/public/images` directory as fallbacks
3. Run the conversion script whenever you add new images
4. Set appropriate width and height attributes to prevent layout shifts
5. Use responsive images with appropriate sizes for different devices

## Troubleshooting

If you encounter any issues with the WebP images:

1. Check if the image exists in both `/public/images-webp` and `/public/images`
2. Verify that the path is correct (case-sensitive)
3. Try using the `OptimizedImage` component with a custom fallback
4. Run the conversion script again if needed
