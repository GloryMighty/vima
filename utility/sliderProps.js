function Arrow(props) {
  const { onClick, icon } = props;
  return (
    <div onClick={onClick} className="slick-arrow">
      <i className={icon}></i>
    </div>
  );
}

export const sliderProps = {
  portfolio_slider: {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    nextArrow: <Arrow icon="fa-regular fa-chevron-right nextArrow" />,
    prevArrow: <Arrow icon="fa-regular fa-chevron-left prevArrow" />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  },
  testimonial_slider: {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    nextArrow: <Arrow icon="fa-regular fa-chevron-right nextArrow" />,
    prevArrow: <Arrow icon="fa-regular fa-chevron-left prevArrow" />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  },
  testimonial_slider_2: {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  },
};
