'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene({ 
  style = {}, 
  className = '',
  height = '500px',
  scene = "/Ethereal Rings of Light.spline"
}) {
  return (
    <div 
      className={className} 
      style={{ 
        width: '100%', 
        height: height, 
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        ...style 
      }}
    >
      <Spline 
        scene={scene} 
        style={{ 
          width: '100%', 
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
