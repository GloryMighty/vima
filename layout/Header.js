"use client";
import { istiUtility } from "@/utility";
import Link from 'next/link';
import { useEffect } from "react";

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
export default Header;

const Header1 = ({ homepage }) => {
  return (
    <nav className="navbar navbar-expand-lg tf__main_menu pl_50 pr_60 main_menu">
      <div className={`container${homepage ? "-fluid" : ""}`}>
        <Link className="navbar-brand" href="/">
          <img src="images/logo.png" alt="logo" className="img-fluid w-100" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="far fa-stream menu_icon_bar" />
          <i className="far fa-times close_icon_close" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link href="/" className="nav-link text_hover_animaiton">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text_hover_animaiton">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link text_hover_animaiton">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link text_hover_animaiton">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link text_hover_animaiton">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text_hover_animaiton">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Header2 = () => {
  return (
    <section className="tf__main_2">
      <span className="mobile_menu_icon">
        <i className="far fa-stream bar_icon" />
        <i className="far fa-times close_icon" />
      </span>
      <div className="container-fluid">
        <ul className="tf__main_manu_2">
          <li>
            <Link href="/" className="tf__logo_2">
              <img src="images/logo_3.png" alt="logo" className="img-fluid" />
            </Link>
          </li>
          <li className="active">
            <Link href="#home">
              <i className="isti-home-21" />
            </Link>
          </li>
          <li>
            <Link href="#about">
              <i className="isti-user-square-converted" />
            </Link>
          </li>
          <li>
            <Link href="#portfolio">
              <i className="isti-briefcase" />
            </Link>
          </li>
          <li>
            <Link href="#service">
              <i className="isti-clipboard" />
            </Link>
          </li>
          <li>
            <Link href="#testimonial">
              <i className="isti-quote-down-square" />
            </Link>
          </li>
          <li>
            <Link href="#blog">
              <i className="isti-path" />
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <i className="isti-messages" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
