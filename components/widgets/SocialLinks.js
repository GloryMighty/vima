"use client"

import React, { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faShareAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { showSuccessToast, showErrorToast } from '../utils/toast'



// Social links data for easy maintenance
const socialLinks = [
  {
    icon: faWhatsapp,
    href: "https://wa.me/+905070711259",
    label: "WhatsApp",
    color: "text-[#32CD32] hover:text-[#32CD32]",
  },
  {
    icon: faEnvelope,
    href: "mailto:vimawebsolutions@gmail.com",
    label: "Email",
    color: "text-[#32CD32] hover:text-[#32CD32]",
  },
  {
    icon: faLinkedin,
    href: "https://linkedin.com/in/viacheslav-mamatov-61169032b/",
    label: "LinkedIn",
    color: "text-[#32CD32] hover:text-[#32CD32]",
  },
  {
    icon: faGithub,
    href: "https://github.com/GloryMighty",
    label: "GitHub",
    color: "text-[#32CD32] hover:text-[#32CD32]",
  },  
  {
    icon: faPhone,
    href: "tel:+905070711259",
    label: "Phone",
    color: "text-[#32CD32] hover:text-[#32CD32]",
  }
]

const SocialLinksWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSocialLinkClick = useCallback((label) => {
    try {
      showSuccessToast(`${label} link copied to clipboard!`)
    } catch (error) {
      showErrorToast(`Failed to copy ${label} link`)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[9999] flex flex-col gap-3 sticky-social items-center"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex items-center justify-center bg-transparent rounded-full transition-all duration-300 ease-in-out text-[#32CD32] hover:text-[#32CD32] !fill-[#32CD32]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon
          icon={faShareAlt}
          className="w-5 h-5 text-[#32CD32] fill-[#32CD32]"
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
            transition: 'transform 0.9s ease',
            color: '#32CD32'
          }}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-full mb-3 flex flex-col-reverse gap-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  } 
                }}
                exit={{ 
                  opacity: 0, 
                  x: -50,
                  transition: { 
                    delay: (socialLinks.length - index - 1) * 0.05,
                    type: "spring"
                  } 
                }}
                whileHover={{ scale: 1.1 }}
                className={`w-12 h-12 flex items-center justify-center bg-transparent rounded-full ${link.color} transition-all duration-300 ease-in-out hover:scale-110`}
                onClick={() => handleSocialLinkClick(link.label)}
              >
                <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default React.memo(SocialLinksWidget)
