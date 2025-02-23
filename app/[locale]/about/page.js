'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/config/navigation';
import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import dynamic from 'next/dynamic';
import ClientHelmet from '@/components/ClientHelmet';
import Image from 'next/image';
import Skills from '@/app/Skillset';
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
      <section className="tf__about" id="about">

          <div className="row justify-content-center">
            <Skills />
            <div className="tf_testimonial justify-content-center">
            </div>
          </div>
          <RollingGallery classname="tf_about_details_img" autoplay={true} pauseOnHover={false} />
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
                {t('cta_button')}
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </IstiLayout>
  );
}
