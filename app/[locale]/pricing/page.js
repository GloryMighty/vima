'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import IstiLayout from '@/layout/IstiLayout';
import Iridiscence from '@/public/effects/descence';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const PricingPage = () => {
  const t = useTranslations('Experience.pricing');
  const params = useParams();
  const currentLocale = params.locale;

  return (
    <IstiLayout>
      <Breadcrumbs pageTitle={t('sub_heading')} />
      <section 
        className="tf__pricing pt_120 pb_120" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden' 
        }}
      >
        <Iridiscence
          color={[0.3, 0.8, 0.3]} // Green tint
          speed={0.5}
          amplitude={0.05}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
        <div 
          className="container" 
          style={{ 
            position: 'relative', 
            zIndex: 1 
          }}
        >
          <div className="row">
            <div className="col-xl-12">
              <div className="tf__section_heading mb_40">
                <h5 
                  className="tf__sub_heading" 
                  style={{ color: '#ffffff' }}
                >
                  {t('sub_heading')}
                </h5>
                <h2 
                  className="tf__heading" 
                  data-text-animation="rotate-in" 
                  data-split="word"
                  style={{ color: '#ffffff' }}
                >
                  {t('heading')}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {['basic', 'advanced', 'vip'].map((plan, index) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp" key={index}>
                <div
                  className="tf__single_pricing"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '15px',
                    padding: '40px 30px',
                    height: '100%',
                    marginBottom: '30px',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="tf__pricing_header">
                    <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px' }}>
                      {t(`plans.${plan}.title`)}
                    </h3>
                    <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#000', marginBottom: '20px' }}>
                      {t(`plans.${plan}.price`)}
                      <sub style={{ fontSize: '16px', fontWeight: '400', color: '#666' }}>
                        {t(`plans.${plan}.price_subtext`)}
                      </sub>
                    </h2>
                  </div>
                  <div className="tf__pricing_body">
                    <ul>
                      {t(`plans.${plan}.features`).split('|').map((feature, i) => (
                        <li key={i} style={{ marginBottom: '10px', color: '#666' }}>
                          <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/+905070711259`} className="tf__common_btn" style={{ marginTop: '20px' }}>
                      {t('choose_plan')}  
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </IstiLayout>
  );
};

export default PricingPage;
