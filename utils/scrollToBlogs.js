"use client";

export const scrollToBlog = () => {
  // Check if we're on the blog page
  if (typeof window !== 'undefined' && window.location.pathname === '/blog') {
    // Get the hash from the URL, removing the '#' if present
    const hash = window.location.hash.replace(/^#/, '');
    
    // If there's a hash, find the corresponding element and scroll to it
    if (hash) {
      const targetElement = document.getElementById(hash);
      
      if (targetElement) {
        // Smooth scroll to the element, with an offset to account for header
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      } else {
        console.warn(`No blog section found with id: ${hash}`);
      }
    }
  }
};

// Add event listener when the component mounts
if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', scrollToBlog);
  window.addEventListener('load', scrollToBlog);
}
