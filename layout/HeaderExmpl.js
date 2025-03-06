"use client";
import { istiUtility } from "@/utility";
import Link from "next/link";
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
          <img src="images-webp/logo_1.webp" alt="logo" className="img-fluid w-100" />
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
                Home <i className="far fa-angle-down" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text_hover_animaiton" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text_hover_animaiton" href="#">
                Blog <i className="far fa-angle-down" />
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text_hover_animaiton" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
