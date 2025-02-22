"use client";
import { istiUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Copyright from "./Copyright";
import Cursor from "./Cursor";
import { Footer } from "./Footer";
import Header from "./Header";
import ScrollBtn from "./ScrollBtn";

const IstiLayout = ({ children, footer }) => {
  useEffect(() => {
    istiUtility.scrollAnimation();
    istiUtility.scrollTextAnimation();
    istiUtility.parallax();
    istiUtility.progressbar();
    istiUtility.imgToSVG();
  }, []);
  return (
    <Fragment>
      <div className="main">
        <Header />
        {children}
        <Footer footer={footer} />
        <Copyright />
        <ScrollBtn />
        <Cursor />
      </div>
    </Fragment>
  );
};
export default IstiLayout;
