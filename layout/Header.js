"use client";
import { istiUtility } from "@/utility";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '../config/navigation';
import LanguageSelector from '@/components/LanguageSelector';
import '@/styles/header.css';

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

  /**
   * Handle navigation with proper locale preservation
   */
  const handleNavigation = (path) => {
    router.push(path);
  };




  return (
    <nav className="navbar tf__main_menu main_menu">
      <ul className="navbar-nav ms-auto">
        <div className="language-selector-container">
          <LanguageSelector />
        </div>
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
      </ul>
    </nav>
  );
};
