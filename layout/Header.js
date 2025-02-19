"use client";
import { istiUtility } from "@/utility";
import Link from 'next/link';
import { useEffect, useState } from "react";

const Header = ({ onePage, homepage }) => {
  useEffect(() => {
    istiUtility.stickyNav();
    istiUtility.scrollToActiveNav();
  }, []);
  
  return <Header1 homepage={homepage} />;
};
export default Header;

const Header1 = ({ homepage }) => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg tf__main_menu pl_50 pr_60 main_menu">
      <div className={`container${homepage ? "-fluid" : ""}`}>
        <Link className="navbar-brand" href="/">
          <img src="images/logo.png" alt="logo" className="img-fluid w-100" />
        </Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'show' : ''}`}
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {!isMenuOpen ? (
            <i className="far fa-stream menu_icon_bar" style={{color: '#000', fontSize: '20px'}} />
          ) : (
            <i className="far fa-times close_icon_close" style={{color: '#000', fontSize: '20px'}} />
          )}
        </button>
        <div 
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} 
          id="navbarSupportedContent"
          style={{
            position: 'fixed',
            right: '0',
            width: '20%', 
            height: '100%',
          }}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link href="/" className="nav-link text_hover_animaiton" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text_hover_animaiton" onClick={toggleMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link text_hover_animaiton" onClick={toggleMobileMenu}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link text_hover_animaiton" onClick={toggleMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text_hover_animaiton" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
