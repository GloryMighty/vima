"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
import { useTranslations } from 'next-intl';

/**
 * Portfolio slider component
 * Displays portfolio items in a responsive slider with project details
 */
const PortfolioSlider = ({ sliderItems }) => {
  const t = useTranslations('Portfolio');

  return (
    <Slider {...sliderProps.portfolio_slider} className="row portfolio_slider">
      {sliderItems.map((item) => (
        <div className="col-xl-6" key={item.id}>
          <div className="tf__portfolio_item">
            <div className="tf__portfolio_img">
              <img
                src={item.src}
                alt={t('image_alt')}
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PortfolioSlider;
