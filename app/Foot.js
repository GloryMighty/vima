import React from 'react';
import GridDistortion from '@/public/effects/distortion.js'; // Adjust the path if necessary

const Foot = () => {
  return (
    <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
  <GridDistortion
    imageSrc="/images-webp/hero.webp"
    grid={5}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className="tf__grid_distortion"
  />
    </div>
  );
};

export default Foot;