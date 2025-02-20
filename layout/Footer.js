import Link from 'next/link';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Layout.Footer');
  return (
    <section className="tf__contact pb_80">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="tf__contact_area">
              <h4 data-text-animation="rotate-in">{t('subscribe_question')}</h4>
              <h4 data-text-animation="rotate-in" data-delay=".25">
                {t('stay_connected')}
              </h4>
              <div className="tf__contact_mail">
                <input type="text" placeholder={t('email_placeholder')} />
                <a href="#" className="tf__subscribtion">
                  {t('subscribe_now')}
                </a>
              </div>
              <div className="row justify-content-between">
                <div className="col-xl-5 col-md-5">
                  <div className="tf__contact_address">
                    <h4>{t('contact_me')}</h4>
                    <div className="tf__single_address d-flex flex-wrap">
                      <span>
                        <i className="fa-sharp fa-solid fa-paper-plane" />
                      </span>
                      <div className="tf__address_area">
                        <p>{t('address.line1')}</p>
                        <p>{t('address.line2')}</p>
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
