import Link from 'next/link';

export const Footer = (footer) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    case 2:
      return <Footer2 />;

    default:
      return <Footer2 />;
  }
};

const Footer1 = () => {
  return (
    <section className="tf__contact pb_80">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="tf__contact_area">
              <h4 data-text-animation="rotate-in">IF YOU WANT TO UPDATE ?</h4>
              <h4 data-text-animation="rotate-in" data-delay=".25">
                STAY CONECTED!
              </h4>
              <div className="tf__contact_mail">
                <input type="text" placeholder="Enter email address" />
                <a href="#" className="tf__subscribtion">
                  SUBSCRIBE NOW
                </a>
              </div>
              <div className="row justify-content-between">
                <div className="col-xl-5 col-md-5">
                  <div className="tf__contact_address">
                    <h4>Contact Me</h4>
                    <div className="tf__single_address d-flex flex-wrap">
                      <span>
                        <i className="fa-sharp fa-solid fa-paper-plane" />
                      </span>
                      <div className="tf__address_area">
                        <p>Old city street,USA</p>
                        <p>1212 New york-3500</p>
                      </div>
                    </div>
                    <div className="tf__single_address d-flex flex-wrap">
                      <span>
                        <i className="fa-sharp fa-solid fa-phone" />
                      </span>
                      <div className="tf__address_area">
                        <p>(+888) 123 456 765</p>
                        <p>(+888) 123 456 765</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-5">
                  <div className="tf__contact_address">
                    <h4>OUR SERVICES</h4>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right" />
                          <span className="text_hover_animaiton">
                            Next.js Development
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right" />
                          <span className="text_hover_animaiton">
                            React UI/UX
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right" />
                          <span className="text_hover_animaiton">
                            Web Animation
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right" />
                          <span className="text_hover_animaiton">
                            Interactive Design
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <form className="tf__form">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tf__single_form">
                    <input type="text" placeholder="Name*" />
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tf__single_form">
                    <input type="email" placeholder="E-mail" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="tf__single_form">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="tf__single_form">
                    <textarea
                      rows={6}
                      placeholder="Comment"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="tf__single_form">
                    <button type="submit" className="tf__common_btn">
                      Submit
                      <i className="fa-solid fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer2 = () => {
  return (
    <footer className="tf__footer pb_80" id="contact">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-md-12 col-lg-4">
            <div className="tf__footer_left">
              <a href="index.html" className="tf__footer_logo mb-3">
                <img
                  src="images/logo_3.png"
                  alt="footer logo"
                  className="img-fluid w-100"
                />
              </a>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed thisnquia consequuntur.
              </p>
              <form className="tf__footer_subscrib d-flex flex-wrap">
                <input type="text" placeholder="Subscribe Now" />
                <button type="submit">
                  <i className="far fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="tf__footer_middle">
              <h4>All Service</h4>
              <ul>
                <li>
                  <Link href="/pricing?service=next-js" className="text_hover_animaiton">
                    Next.js Development
                  </Link>
                </li>
                <li>
                  <Link href="/pricing?service=react-uiux" className="text_hover_animaiton">
                    React UI/UX
                  </Link>
                </li>
                <li>
                  <Link href="/pricing?service=web-animation" className="text_hover_animaiton">
                    Web Animation
                  </Link>
                </li>
                <li>
                  <Link href="/pricing?service=interactive-design" className="text_hover_animaiton">
                    Interactive Design
                  </Link>
                </li>
                <li>
                  <Link href="/pricing?service=gsap-animations" className="text_hover_animaiton">
                    GSAP Animations
                  </Link>
                </li>
                <li>
                  <Link href="/pricing?service=web-development" className="text_hover_animaiton">
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-4">
            <div className="tf__footer_right">
              <h4>Address</h4>
              <div className="tf__footer_right_address">
                <h5>
                  <i className="far fa-map-marker-alt" />
                 Istanbul
                </h5>
                <p>Somewhere here</p>
              </div>
              <div className="tf__footer_right_address">
                <h5>
                  <i className="fal fa-phone-alt" />
                  Lets Talk us
                </h5>
                <p>(603) 555-012345678</p>
                <p>(603) 555-012345678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
