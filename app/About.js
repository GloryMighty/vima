import { useTranslations } from 'next-intl';
import { getImagePath } from '@/utility/imageUtils';
import Image from 'next/image';

const aboutData = {
  title: "Visual Journey through our Portfolio",
  subtitle: "Web Solutions for your business elevations",
  bio: "",
  // Path to the dojo image in public directory
  image: "/images/dojo.png",
};

const About = () => {
  const t = useTranslations("About");
  return (
    <section className="tf__about pt_150 pb_150" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 mb-4">
            <div className="tf__common_heading tf__about_text">
              <h5 data-text-animation="slide-up" data-split="line">
                {t('immerse_in')}
              </h5>
              <h1 data-text-animation="slide-up" data-split="line" style={{ textTransform: 'uppercase' }}>
                {t('title')}
              </h1>
              <p>{t('bio')}</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 mb-4">
            <div className="tf__about_img">
              <Image
                src={getImagePath(aboutData.image)}
                alt={t('image_alt')}
                width={800}
                height={600}
                priority={false}
                className="img-fluid w-100 parallax-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
