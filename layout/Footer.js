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
                In VIMA we transform modern standards of web development!
              </p>
              <form className="tf__footer_subscrib d-flex flex-wrap">
                <input type="text" placeholder="Stay Updated" />
                <button type="submit">
                  <i className="far fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-3">
            <div className="tf__footer_middle">
              <br/>
              <br/>
              <br/>
              <br/>
              <h4>We do</h4>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link href="/pricing?service=domain-hosting" className="text_hover_animaiton">
                        Domain Hosting
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing?service=ai-integrations" className="text_hover_animaiton">
                        AI Integrations
                      </Link>
                    </li>
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
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
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
                    <li>
                      <Link href="/pricing?service=ai-solutions" className="text_hover_animaiton">
                        AI Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing?service=interactive-design" className="text_hover_animaiton">
                        Interactive Design
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing?service=mobile-applications" className="text_hover_animaiton">
                        Mobile Applications
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-4">
            <div className="tf__footer_right">
              <br />
              <br />
              <br />
              <br /> 
              <h4>Address</h4>
              <div className="tf__footer_right_address">
                <h5>
                  <i className="far fa-map-marker-alt" />
                 Istanbul
                </h5>
              </div>
              <div className="tf__footer_right_address">
                <h5>
                  <i className="fal fa-phone-alt" />
                  Contact us
                </h5>
                <p>+90 507 071 12 59</p>
                <p>+90 535 676 58 99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf__footer_bottom_content pt-5">
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
