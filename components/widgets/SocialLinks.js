"use client"

import React from "react"

const SocialLinks = () => {
  return (
    <div className="z-[9999] viewport-fixed">
      <a 
        href="https://wa.me/+905070711259" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-24 h-24  text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2ECC71] transition-all duration-300"
      >
        <i 
          className="fab fa-whatsapp" 
          style={{ 
            fontSize: '3rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }} 
          aria-hidden="true" 
        />
      </a>
    </div>
  )
}

export default React.memo(SocialLinks)
