/**
 * Fix Image Paths Script
 * 
 * This script fixes incorrect image paths in the codebase:
 * - Corrects paths like /images/images-webp/ to /images-webp/
 * - Corrects paths like /en/images-webp/ to /images-webp/
 * - Ensures all WebP images are referenced correctly
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ROOT_DIR = path.join(__dirname, '..');
const FILE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const EXCLUDE_DIRS = ['node_modules', '.git', '.next', 'public'];

// Patterns to fix
const PATH_FIXES = [
  { 
    pattern: /["'`]\/images\/images-webp\//g, 
    replacement: '"/images-webp/' 
  },
  { 
    pattern: /["'`]\/en\/images-webp\//g, 
    replacement: '"/images-webp/' 
  },
  { 
    pattern: /getImagePath\(["'`]\/images-webp\//g, 
    replacement: '"/images-webp/' 
  },
  // Fix paths that might be constructed with string concatenation
  { 
    pattern: /path\s*\+\s*["'`]images-webp\//g, 
    replacement: '"/images-webp/' 
  }
];

/**
 * Walk through directory recursively to find all files
 * @param {string} dir - Directory to walk
 * @param {Function} callback - Callback for each file
 */
function walkDir(dir, callback) {
  if (EXCLUDE_DIRS.includes(path.basename(dir))) return;
  
  fs.readdirSync(dir).forEach(f => {
    const filePath = path.join(dir, f);
    const isDirectory = fs.statSync(filePath).isDirectory();
    
    if (isDirectory) {
      walkDir(filePath, callback);
    } else if (FILE_EXTENSIONS.includes(path.extname(filePath).toLowerCase())) {
      callback(filePath);
    }
  });
}

/**
 * Fix image paths in a file
 * @param {string} filePath - Path to the file
 */
function fixFilePaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Apply all path fixes
    for (const fix of PATH_FIXES) {
      if (fix.pattern.test(content)) {
        const originalContent = content;
        content = content.replace(fix.pattern, fix.replacement);
        if (content !== originalContent) {
          hasChanges = true;
        }
      }
    }
    
    // Only write to file if changes were made
    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error);
  }
}

/**
 * Main function to fix all paths
 */
function fixAllPaths() {
  console.log('Starting path fixes...');
  
  // Get all relevant files
  const files = [];
  walkDir(ROOT_DIR, (filePath) => {
    files.push(filePath);
  });
  
  console.log(`Found ${files.length} files to check for incorrect image paths`);
  
  // Fix paths in all files
  let fixedCount = 0;
  for (const file of files) {
    const originalContent = fs.readFileSync(file, 'utf8');
    fixFilePaths(file);
    const newContent = fs.readFileSync(file, 'utf8');
    
    if (originalContent !== newContent) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed paths in ${fixedCount} files`);
  console.log('Path fixes complete!');
}

// Run the main function
fixAllPaths();
