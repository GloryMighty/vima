"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
const Testomonial = () => {
  return (
    <section className="tf__testimonial pt_145">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="tf__common_heading tf__testimonial_heading">
              <h5>Testomonials</h5>
              <h2 data-text-animation="rotate-in">What our clients say?</h2>
            </div>
          </div>
        </div>
        <div className="tf__testimonial_slider">
          <Slider
            {...sliderProps.testimonial_slider}
            className="row testimonial_slider"
          >
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="tf__single_testimonial_img">
                  <img
                    src="images/testimonial_1.png"
                    alt="testimonial"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>Batuhan Sezar</h4>
                <span>Application user</span>
                <p>
                 Interesting idea flawlessly implemented into reality with great attention to detail and creativity. I like the application because of efficiency and powerful AI solutions! 
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="tf__single_testimonial_img">
                  <img
                    src="images/testimonial_2.png"
                    alt="testimonial"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>Sarah Kim</h4>
                <span>Startup Founder</span>
                <p>
                  This AI-powered solution has been a game-changer for our team. It streamlines complex workflows and provides insights that would have taken weeks to uncover manually.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="tf__single_testimonial_img">
                  <img
                    src="images/testimonial_3.png"
                    alt="testimonial"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>Michael Rodriguez</h4>
                <span>Product Manager</span>
                <p>
                  Incredibly intuitive and powerful. The AI capabilities have helped our team make data-driven decisions faster and more accurately than ever before.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Testomonial;
