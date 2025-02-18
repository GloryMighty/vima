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
            <li className="nav-item">
              <a className="nav-link active text_hover_animaiton" href="#">
<<<<<<< HEAD
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text_hover_animaiton" href="#projects">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link text_hover_animaiton">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text_hover_animaiton" href="/contact">
                Contact
              </Link>
=======
                Home <i className="far fa-angle-down" />
              </a>
              <ul className="tf__dropdown">
                <li>
                  <Link href="/">Multipage</Link>
                </li>
                <li>
                  <Link href="/index-2">Onepage</Link>
                </li>
              </ul>
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
            </li>
            <li className="nav-item">
              <a className="nav-link text_hover_animaiton" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <a className="nav-link text_hover_animaiton" href="#">
                Blog <i className="far fa-angle-download" />
=======
              <Link href="/pricing" className="nav-link text_hover_animaiton">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text_hover_animaiton" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text_hover_animaiton" href="#">
                Blog <i className="far fa-angle-down" />
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
              </a>
              <ul className="tf__dropdown">
                <li>
                  <Link href="/blog">blog</Link>
                </li>
<<<<<<< HEAD
              </ul>
            </li>
=======
                <li>
                  <Link href="/blog-details">blog details</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text_hover_animaiton" href="/contact">
                Contact
              </Link>
            </li>
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
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
            <a href="#" className="tf__logo_2">
              <img src="images/logo_3.png" alt="logo" className="img-fluid" />
            </a>
          </li>
          <li className="active">
            <a href="#home">
              <i className="isti-home-21" />
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="isti-user-square-converted" />
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="isti-briefcase" />
            </a>
          </li>
          <li>
            <a href="#service">
              <i className="isti-clipboard" />
            </a>
          </li>
          <li>
            <a href="#testimonial">
              <i className="isti-quote-down-square" />
            </a>
          </li>
          <li>
            <a href="#blog">
              <i className="isti-path" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="isti-messages" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
