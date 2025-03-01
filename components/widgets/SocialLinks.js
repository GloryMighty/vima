"use client"

import React from "react"

const SocialLinks = () => {
  return (
    <div className="fixed bottom-4 left-4 z-[9999] viewport-fixed">
      <a 
        href="https://wa.me/+905070711259" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2ECC71] transition-all duration-300"
      >
        <i className="fab fa-whatsapp text-2xl" aria-hidden="true" />
      </a>
    </div>
  )
}

export default React.memo(SocialLinks)
