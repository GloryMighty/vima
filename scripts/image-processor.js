/**
 * Simple WebP Converter
 * 
 * This script converts all images in the public/images directory to WebP format:
 * - Maintains the same file structure
 * - Preserves original image dimensions
 * - Generates a mapping file to help with updating references
 * - Optimizes images for better web performance
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const SOURCE_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images-webp');
const QUALITY = 85; // Adjust quality as needed (0-100)

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Mapping of old paths to new paths
const imageMap = {};

/**
 * Process a single image file
 * @param {string} filePath - Path to the image file
 */
async function processImage(filePath) {
  try {
    const relativePath = path.relative(SOURCE_DIR, filePath);
    const dirName = path.dirname(relativePath);
    const fileName = path.basename(relativePath, path.extname(relativePath));
    
    // Create output directory if it doesn't exist
    const outputDirPath = path.join(OUTPUT_DIR, dirName);
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }
    
    // Output file path
    const outputPath = path.join(outputDirPath, `${fileName}.webp`);
    const outputRelativePath = path.join(dirName, `${fileName}.webp`);
    
    // Convert to WebP
    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    // Add to mapping
    const oldPath = `/images/${relativePath}`;
    const newPath = `/images-webp/${outputRelativePath}`;
    imageMap[oldPath] = newPath;
    
    console.log(`Converted: ${relativePath} → ${outputRelativePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

/**
 * Walk through directory recursively to find all files
 * @param {string} dir - Directory to walk
 * @param {Function} callback - Callback for each file
 */
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

/**
 * Main function to process all images
 */
async function processAllImages() {
  console.log('Starting WebP conversion...');
  
  // Get all image files
  const files = [];
  walkDir(SOURCE_DIR, (filePath) => {
    // Only process image files
    if (/\.(jpe?g|png|gif)$/i.test(filePath)) {
      files.push(filePath);
    }
  });
  
  console.log(`Found ${files.length} images to convert`);
  
  // Process all files
  for (const file of files) {
    await processImage(file);
  }
  
  // Save mapping to a JSON file
  const mappingPath = path.join(__dirname, '../public/image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(imageMap, null, 2));
  console.log(`Image mapping saved to ${mappingPath}`);
  
  console.log('WebP conversion complete!');
}

// Run the main function
processAllImages().catch(console.error);
