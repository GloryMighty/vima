import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "./RollingGallery.css";

const DEFAULT_IMGS = [
  "/images-webp/Rolling/1.webp",
  "/images-webp/Rolling/2.webp",
  "/images-webp/Rolling/3.webp",
  "/images-webp/Rolling/4.webp",
];

const RollingGallery = ({ 
  autoplay = true, 
  pauseOnHover = false, 
  images = DEFAULT_IMGS 
}) => {
  // Use passed images or default images
  const [currentImages, setCurrentImages] = useState(DEFAULT_IMGS);
  
  // Responsive width calculation with SSR safety
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const cylinderWidth = screenWidth <= 640 ? 1200 : 1800;
  
  const faceCount = currentImages.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (1.5 * Math.PI);
  
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef(null);

  // Update images if prop changes
  useEffect(() => {
    setCurrentImages(images.length > 0 ? images : DEFAULT_IMGS);
  }, [images]);

  // More precise and controlled drag handling
  const handleDrag = (_, info) => {
    const dragSensitivity = 0.01;
    rotation.set(rotation.get() + info.offset.x * dragSensitivity);
  };

  const handleDragEnd = (_, info) => {
    const rotationVelocity = info.velocity.x * 0.1;
    controls.start({
      rotateY: rotation.get() + rotationVelocity,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 20 
      },
    });
  };

  const transform = useTransform(rotation, (value) => 
    `rotate3d(0, 1, 0, ${value}deg)`
  );

  // Improved autoplay effect with cleanup
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined' || !autoplay) return;

    const startAutoRotation = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      
      autoplayRef.current = setInterval(() => {
        const nextRotation = rotation.get() - (360 / faceCount);
        controls.start({
          rotateY: nextRotation,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(nextRotation);
      }, 3000);
    };

    startAutoRotation();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, faceCount]);

  // Responsive resize handling
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause on hover logic
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover && autoplayRef.current) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount),
        transition: { duration: 2, ease: "linear" },
      });
    }
  };

  // Client-side rendering check
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {currentImages.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={url} alt={`Gallery image ${i + 1}`} className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
