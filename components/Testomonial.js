<<<<<<< HEAD
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
                <h4>Batuhan</h4>
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
=======
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
                    src="images/testimonial_1.jpg"
                    alt="testimonial"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>Batuhan</h4>
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
                    src="images/testimonial_2.jpg"
                    alt="testimonial"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>Eleanor Pena</h4>
                <span>Marketing Coordinator</span>
                <p>
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tf__single_testimonial">
                <div className="tf__single_testimonial_img">
                  <img
                    src="images/testimonial_1.jpg"
                    alt="testimonial"
                    className="img-fluid w-100"
                  />
                </div>
                <h4>Eleanor Pena</h4>
                <span>Marketing Coordinator</span>
                <p>
                  Financial planners help people to knowledge in about how to
                  invest and in save their moneye the most efficient way eve
                  plan ners help people tioniio know ledige in about how.
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

export const Testimonial2 = () => {
  return (
    <section
      className="tf__review_2 pt_200 xs_pt_120 pr_50 xs_pr_0"
      id="testimonial"
    >
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-xxl-5 col-xl-4">
            <div className="tf__contact_area tf__contact_area_2">
              <h4 data-text-animation="rotate-in">IF YOU WANT TO UPDATE ?</h4>
              <h4 data-text-animation="rotate-in" data-delay=".25">
                STAY CONECTED!
              </h4>
              <div className="tf__contact_mail">
                <input type="text" placeholder="Your e-mail address" />
                <a href="#" className="tf__subscribtion">
                  SUBSCRIBE NOW
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-6 col-xl-8">
            <Slider
              {...sliderProps.testimonial_slider_2}
              className="testimonial_slider_2"
            >
              <div className="tf__single_review">
                <span>
                  <i className="fas fa-quote-right" />
                </span>
                <ul className="d-flex flex-wrap justify-content-center">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h5>Brooklyn Simmons</h5>
                <h6>Marketing Coordinator</h6>
                <p>
                  Financial planners help people to knowledge in about how to
                  invest and save their moneye the most efficient way
                  eve.planners help people to knowledge in about how.
                </p>
                <div className="tf__single_review_img">
                  <img
                    src="images/review_1.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="tf__single_review">
                <span>
                  <i className="fas fa-quote-right" />
                </span>
                <ul className="d-flex flex-wrap justify-content-center">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h5>Brooklyn Simmons</h5>
                <h6>Marketing Coordinator</h6>
                <p>
                  Financial planners help people to knowledge in about how to
                  invest and save their moneye the most efficient way
                  eve.planners help people to knowledge in about how.
                </p>
                <div className="tf__single_review_img">
                  <img
                    src="images/review_1.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="tf__single_review">
                <span>
                  <i className="fas fa-quote-right" />
                </span>
                <ul className="d-flex flex-wrap justify-content-center">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h5>Brooklyn Simmons</h5>
                <h6>Marketing Coordinator</h6>
                <p>
                  Financial planners help people to knowledge in about how to
                  invest and save their moneye the most efficient way
                  eve.planners help people to knowledge in about how.
                </p>
                <div className="tf__single_review_img">
                  <img
                    src="images/review_1.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="tf__single_review">
                <span>
                  <i className="fas fa-quote-right" />
                </span>
                <ul className="d-flex flex-wrap justify-content-center">
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
                <h5>Brooklyn Simmons</h5>
                <h6>Marketing Coordinator</h6>
                <p>
                  Financial planners help people to knowledge in about how to
                  invest and save their moneye the most efficient way
                  eve.planners help people to knowledge in about how.
                </p>
                <div className="tf__single_review_img">
                  <img
                    src="images/review_1.png"
                    alt="reviewer"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
