"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
const PortfolioSlider = ({ sliderItems }) => {
  return (
    <Slider {...sliderProps.portfolio_slider} className="row portfolio_slider">
      {sliderItems.map((item) => (
        <div className="col-xl-6" key={item.id}>
          <div className="tf__portfolio_img">
            <img
              src={item.src}
              alt="portfolio img"
              className="img-fluid w-100"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default PortfolioSlider;
