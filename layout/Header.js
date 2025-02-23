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
  switch (onePage) {
    case true:
      return <Header2 />;
    default:
      return <Header1 homepage={homepage} />;
  }
};

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

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Handle navigation with proper locale preservation
   */
  const handleNavigation = (path) => {
    router.push(path);
    setMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg tf__main_menu main_menu">
          <div className={`container${homepage ? "-fluid" : ""}`}>  
            <Link className="navbar-brand" href="/">
              <img src="images/logo.png" alt="logo" className="img-fluid w-100" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => {
                console.log("Button clicked, current state:", isMobileMenuOpen);
                setMobileMenuOpen(!isMobileMenuOpen);
              }}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="far fa-stream menu_icon_bar" />
              <i className="far fa-times close_icon_close" />
            </button>
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className={`navbar-nav ms-auto ${isMobileMenuOpen ? 'open flex-column' : 'd-none d-md-flex'}`}>  
                <li className={`nav-item ${isActiveLink('/') ? 'active' : ''}`}>  
                  <Link href="/" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/')}>{t('HOME')}</Link>
                </li>
                <li className={`nav-item ${isActiveLink('/about') ? 'active' : ''}`}>  
                  <Link href="/about" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/about')}>{t('ABOUT')}</Link>
                </li>
                <li className={`nav-item ${isActiveLink('/pricing') ? 'active' : ''}`}>  
                  <Link href="/pricing" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/pricing')}>{t('PRICING')}</Link>
                </li>
                <li className={`nav-item ${isActiveLink('/blog') ? 'active' : ''}`}>  
                  <Link href="/blog" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/blog')}>{t('BLOG')}</Link>
                </li>
                <li className={`nav-item ${isActiveLink('/contact') ? 'active' : ''}`}>  
                  <Link href="/contact" className="nav-link text_hover_animaiton" onClick={() => handleNavigation('/contact')}>{t('CONTACT')}</Link>
                </li>
              </ul>
              <div className="language-selector-container">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
