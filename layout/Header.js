"use client";
import { istiUtility } from "@/utility";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '../config/navigation';
import LanguageSelector from '@/components/LanguageSelector';

const Header = ({ onePage, homepage }) => {
  useEffect(() => {
    istiUtility.stickyNav();
    istiUtility.scrollToActiveNav();
  }, []);
  
  return <Header1 homepage={homepage} />;
};
export default Header;

const Header1 = ({ homepage }) => {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();
  
  /**
   * Check if the current path matches the navigation link
   * This handles both exact matches and nested routes
   */
  const isActiveLink = (path) => {
    return pathname.endsWith(path);
  };

  // Mobile menu state management
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggle mobile menu visibility
   * Also used by the language selector in mobile view
   */
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Handle navigation with proper locale preservation
   * Closes mobile menu after navigation
   */
  const handleNavigation = (path) => {
    toggleMobileMenu();
    router.push(path);
  };

  // Mobile menu styles to ensure it fits within the viewport and prevents horizontal scrolling
  const mobileMenuStyles = {
    overflowX: 'hidden',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <nav className="navbar navbar-expand-lg tf__main_menu pl_50 pr_60 main_menu" style={mobileMenuStyles}>
      <div className={`container${homepage ? "-fluid" : ""}`}>
        <Link className="navbar-brand" href="/" onClick={() => handleNavigation('/')}>
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
        >
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${isActiveLink('/') ? 'active' : ''}`}>
              <Link href="/" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/')}>
                {t('HOME')}
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink('/about') ? 'active' : ''}`}>
              <Link href="/about" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/about')}>
                {t('ABOUT')}
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink('/pricing') ? 'active' : ''}`}>
              <Link href="/pricing" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/pricing')}>
                {t('PRICING')}
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink('/blog') ? 'active' : ''}`}>
              <Link href="/blog" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/blog')}>
                {t('BLOG')}
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink('/contact') ? 'active' : ''}`}>
              <Link href="/contact" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/contact')}>
                {t('CONTACT')}
              </Link>
            </li>
            <LanguageSelector />
          </ul>
        </div>
      </div>
    </nav>
  );
};
