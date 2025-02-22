import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Home1Banner = () => {
  const t = useTranslations("Banner");
  return (
    <section
      className="tf__banner pt_100 pl_60 pr_60 bg-fixed"
      style={{ background: "url(images/background.jpg)" }}
    >
      <div className="container-fluid h-100">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6">
            <div className="tf__banner_img">
              <Image
                src="/images/hero.jpg"
                alt="hero img"
                className="img-fluid w-100 parallax-image"
                width={1200}
                height={800}
                priority={false}
              />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 ms-auto">
            <div className="tf__banner_text">
              <h3 className="banner_title" data-text-animation="slide-up" data-split="char">
                {t('we_are_vima')}
              </h3>
              <h2 className="banner_title" data-text-animation="slide-up" data-split="word">
                {t('passionate_website_developers')}
              </h2>
              <p className="banner_title" data-text-animation="slide-from-right" data-split="line">
                {t('banner_paragraph')}
              </p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a
                    className="tf__common_btn tf___video_btn venobox"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/668nUCeBHyY?si=sHtcsCQRzAET5GOt"
                  >
                    <i className="fa-sharp fa-solid fa-circle-play" />
                    {t('watch_video')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
