"use client";
import About from "@/components/About";
import { Home1Banner } from "@/components/Banner";
import Blog from "@/components/Blog";
import Experiance from "@/components/Experiance";
import Portfolio from "@/components/Portfolio";
import Testomonial from "@/components/Testomonial";
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
