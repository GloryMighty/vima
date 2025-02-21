'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/config/navigation';
import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import dynamic from 'next/dynamic';
import ClientHelmet from '@/components/ClientHelmet';

// Dynamically import Nivo to ensure client-side rendering
const NivoLine = dynamic(() => import('@nivo/line').then((mod) => mod.ResponsiveLine), {
  ssr: false,
});

export default function AboutPage() {
  const t = useTranslations('About');
  
  return (
    <IstiLayout>
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <Breadcrumbs pageTitle={t('page_title')} />
      <section className="tf__about pt_150 pb_150" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="tf__common_heading tf__about_text text-left text-md-start">
                <h2 data-text-animation="rotate-in" data-split="word" className="mb-3">
                  {t('main_title')}
                </h2>
                <h6 className="mb-2">{t('main_paragraph_1')}</h6>
                <h5>{t('main_paragraph_2')}</h5>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 offset-xl-4 offset-lg-4">
              <div className="tf__testimonial_slider">
                <div className="row">
                  {[
                    {
                      title: t('ai_insights.title'),
                      description: t('ai_insights.description'),
                      impact: t('ai_insights.impact')
                    },
                    {
                      title: t('ui_ux.title'),
                      description: t('ui_ux.description'),
                      impact: t('ui_ux.impact')
                    },
                    {
                      title: t('scalable.title'),
                      description: t('scalable.description'),
                      impact: t('scalable.impact')
                    }
                  ].map((value, index) => (
                    <div key={index} className="col-xl-12 mb-4">
                      <div className="tf__single_testimonial">
                        <div className="tf__single_testimonial_img">
                          <div className="tf__single_about_icon">
                            <i className="far fa-check-circle"></i>
                          </div>
                        </div>
                        <div className="tf__single_testimonial_text">
                          <h3 data-text-animation="rotate-in" data-split="word">
                            {value.title}
                          </h3>
                          <p>{value.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
        </div>
      </section>
    </IstiLayout>
  );
}
