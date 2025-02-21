"use client";
import About from "app/About";
import { Home1Banner } from "@/app/Banner";
import Blog from "@/app/Blog";
import Experiance from "app/Prices";
import Portfolio from "app/Portfolio";
import Testomonial from "app/Testemonial";
import IstiLayout from "@/layout/IstiLayout";

const page = () => {
  return (
    <IstiLayout homepage>
      <Home1Banner />
      <About />
      <Portfolio />
      <Testomonial />
      <Blog />
      <Experiance />
    </IstiLayout>
  );
};
export default page;
