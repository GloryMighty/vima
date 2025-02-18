"use client";
import { istiUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Copyright from "./Copyright";
import Cursor from "./Cursor";
import { Footer } from "./Footer";
import Header from "./Header";
import ScrollBtn from "./ScrollBtn";
<<<<<<< HEAD
const IstiLayout = ({ children, footer }) => {
=======
const IstiLayout = ({ children, onePage, footer, homepage }) => {
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
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
<<<<<<< HEAD
        <Header />
=======
        <Header onePage={onePage} homepage={homepage} />
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
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
