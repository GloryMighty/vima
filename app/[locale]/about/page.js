'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/config/navigation';
import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import dynamic from 'next/dynamic';
import ClientHelmet from '@/components/ClientHelmet';
import Image from 'next/image';
import Skills from '@/app/Skillset';
import ShinyText from '../../../public/effects/ShinyText';
import RollingGallery from '../../../public/effects/RollingGallery'; // Correct import

// Dynamically import Nivo to ensure client-side rendering
const NivoLine = dynamic(() => import('@nivo/line').then((mod) => mod.ResponsiveLine), {
  ssr: false,
});

export default function AboutPage() {
  const t = useTranslations('About');
  
  /*
  const aboutPageData = [
    {
      title: t('ai_insights.title'),
      description: t('ai_insights.description'),
      impact: t('ai_insights.impact'),
      image: "/images/ai.png"
    },
    {
      title: t('ui_ux.title'),
      description: t('ui_ux.description'),
      impact: t('ui_ux.impact'),
      image: "/images/intu.png"
    },
    {
      title: t('scalable.title'),
      description: t('scalable.description'),
      impact: t('scalable.impact'),
      image: "/images/scale.png"
    }
  ];
  */

  return (
    <IstiLayout>
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <Breadcrumbs pageTitle={t('page_title')} />
      <section className="tf__about pt-5" id="about">
        {/* Viacheslav section - image on right, text on left */}
        <div className="row mb-5 align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-7 order-md-1 order-2 px-4">
            <div className="tf__common_heading pt-5">
              <h5 className="mb-3">{t('viacheslav_title') || 'Viacheslav Mamatov'}</h5>
              <p className="text-break pt-2">
                {t('viacheslav_description') || `
                  23 years old passionate software developer 
                  with experience in Data Analytics, 
                  AI Integrations and Web Development.
                `}
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 order-md-2 order-1 px-4">
            <div className="tf__about_img" style={{ maxWidth: '100%', maxHeight: '300px', margin: '0 auto' }}>
              <Image
                src="/images/slav.png"
                alt="Viacheslav Mamatov"
                className="img-fluid"
                style={{ borderRadius: '20px', objectFit: 'cover' }}
                width={300}
                height={300}
                priority={true}
              />
            </div>
          </div>
        </div>
        {/* Markus section - image on left, text on right */}
        <div className="row mb-5 align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-5 px-4">
            <div className="tf__about_img" style={{ maxWidth: '100%', maxHeight: '300px', margin: '0 auto' }}>
              <Image
                src="/images/ai.jpg"
                alt="Markus Ketonen"
                className="img-fluid"
                style={{ borderRadius: '20px', objectFit: 'cover' }}
                width={300}
                height={300}
                priority={true}
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-7 px-4">
            <div className="tf__common_heading pt-5">
              <h5 className="mb-3">{t('markus_title') || 'Markus Ketonen'}</h5>
              <p className="text-break pt-2">
                {t('markus_description') || `
                  37 years old entrepreneur 
                  knowing everything about local businesses, 
                  which helps a lot in understanding of customers needs.
                `}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Skills />
            <div className="tf_testimonial justify-content-center">
            </div>
          </div>
          
          <RollingGallery classname="tf_about_details_img" pauseOnHover={false} />
          <div className="row justify-content-center">
              <div className="tf__common_heading tf__about_text text-center">
                <h2 data-text-animation="rotate-in" data-split="char" className="mb-3">
                  {t('main_title')}
                </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 mb-4">
            <div className="tf__about_details_img">
              <Image
                src="/images/about.png"
                alt={t('image_alt')}
                className="img-fluid w-70"
                style={{ borderRadius: '20px' }}
                width={800}
                height={600}
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="tf__blog_link">
              <Link href="/contact">
                <ShinyText text={t('cta_button')} disabled={false} speed={2} className='custom-class' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </IstiLayout>
  );
}
