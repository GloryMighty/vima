import { useTranslations } from 'next-intl';
import { getImagePath } from '@/utility/imageUtils';
import Image from 'next/image';

const aboutData = {
  title: "Visual Journey through my Portfolio",
  subtitle: "making this the first true generator on the Internet",
  bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illonge inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam",
  img: "/images-webp/targetreached.webp",
};

const About = () => {
  const t = useTranslations("About");
  return (
    <section className="tf__about pt_150" id="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="tf__common_heading tf__about_text">
              <h5>{t('immerse_in')}</h5>
              <h2 data-text-animation="rotate-in" data-split="word">
                {t('title')}
              </h2>
              <p>{t('bio')}</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="tf__about_img">
              <Image
                src={getImagePath(aboutData.img)}
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
