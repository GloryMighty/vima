"use client";
import { istiUtility } from "@/utility";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '../config/navigation';
import LanguageSelector from '@/components/LanguageSelector';
import "@/public/css/custom-navbar.css"; // Import the custom navbar CSS

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
    <header className={`custom-main-menu ${isMobileMenuOpen ? "menu-opened" : ""}`}>
      <div className={`custom-container${homepage ? "-fluid" : ""}`}>
        <nav className="custom-navbar">
          <Link className="custom-navbar-brand" href="/">
            <img src="/images-webp/logo.webp" alt="logo" className="img-fluid" />
          </Link>
          <button
            className="custom-navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className="far fa-stream custom-menu-icon-bar" />
          </button>
          <div className={`custom-navbar-collapse ${isMobileMenuOpen ? "custom-show" : ""}`}>
            <ul className="custom-navbar-nav">
              {['/', '/about', '/pricing', '/blog', '/contact'].map((path) => (
                <li key={path} className={`custom-nav-item ${isActiveLink(path) ? 'custom-active' : ''}`}>
                  <Link
                    href={path}
                    className="custom-nav-link custom-text-hover-animation"
                    onClick={() => handleNavigation(path)}
                  >
                    {t(path === '/' ? 'HOME' : path.slice(1).toUpperCase())}
                  </Link>
                </li>
              ))}
              <li className="custom-nav-item custom-language-selector-container">
                <LanguageSelector />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
