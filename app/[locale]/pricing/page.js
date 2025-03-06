'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import IstiLayout from '@/layout/IstiLayout';
import Iridiscence from '@/public/effects/descence';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import ClientHelmet from '@/components/ClientHelmet';
import Image from 'next/image';
import PricingCard from '@/components/pricing/PricingCard';

const PricingPage = () => {
  const t = useTranslations('Experience.pricing');
  const params = useParams();
  const currentLocale = params.locale;

  return (
    <IstiLayout>
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <Breadcrumbs pageTitle={t('sub_heading')} />
      <section 
        className="tf__pricing pt_120 pb_120" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden' 
        }}
      >
        <Iridiscence
          color={[0.8, 0.4, 0.9]} // Magenta-like tint
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
              <div className="tf__common_heading mb_10 text-center">
                <h5>{t('sub_heading')}</h5>
                <h2 
                  data-text-animation="rotate-in" 
                  data-split="word"
                >
                  {t('heading')}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {['basic', 'advanced', 'vip'].map((plan, index) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp pt-5 px-3" key={index}>
                <PricingCard
                  title={t(`plans.${plan}.title`)}
                  price={t(`plans.${plan}.price`)}
                  priceSubtext={t(`plans.${plan}.price_subtext`)}
                  features={t(`plans.${plan}.features`).split('|')}
                  ctaText={t('choose_plan')}
                />
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 text-center mt-3 mb-4">
              <p className="text-muted" style={{ fontSize: '1.9rem', color: '#ffffff' }}>
                {t('VAT')}
              </p>
            </div>
          </div>
        </div>

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
                className="img-fluid"
                style={{ 
                  borderRadius: '20px', 
                  zIndex: 1, 
                  position: 'relative' 
                }}
                width={800}
                height={600}
                priority={true}
              />
            </div>
          </div>
        </div>
      {/* FAQ Section */}
<section className="tf__faq_section section_padding" style={{ backgroundColor: '#0f1525', marginTop: '5.0rem' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tf__common_heading text-center mb_50">
                <h2 className="text-center" data-text-animation="rotate-in" data-split="char" style={{ color: '#ffffff' }}>
                  {t('faq_title')}
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tf__faq_box">
                <div className="tf__faq_item" style={{ 
                  backgroundColor: 'rgba(30, 40, 70, 0.6)', 
                  borderRadius: '10px', 
                  padding: '20px 25px',
                  marginBottom: '15px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ color: '#4e80ff', marginBottom: '10px' }}>
                    {t('faq_question_1')}
                  </h4>
                  <p style={{ color: '#ffffff' }}>
                    {t('faq_answer_1')}
                  </p>
                </div>
                
                <div className="tf__faq_item" style={{ 
                  backgroundColor: 'rgba(30, 40, 70, 0.6)', 
                  borderRadius: '10px', 
                  padding: '20px 25px',
                  marginBottom: '15px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ color: '#4e80ff', marginBottom: '10px' }}>
                    {t('faq_question_2')}
                  </h4>
                  <p style={{ color: '#ffffff' }}>
                    {t('faq_answer_2')}
                  </p>
                </div>
                
                <div className="tf__faq_item" style={{ 
                  backgroundColor: 'rgba(30, 40, 70, 0.6)', 
                  borderRadius: '10px', 
                  padding: '20px 25px',
                  marginBottom: '15px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ color: '#4e80ff', marginBottom: '10px' }}>
                    {t('faq_question_3')}
                  </h4>
                  <p style={{ color: '#ffffff' }}>
                    {t('faq_answer_3')}
                  </p>
                </div>
                
                <div className="tf__faq_item wow fadeInUp" style={{ 
                  backgroundColor: 'rgba(30, 40, 70, 0.6)', 
                  borderRadius: '10px', 
                  padding: '20px 25px',
                  marginBottom: '15px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(78, 128, 255, 0.3)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                }}>
                  <h4 style={{ 
                    color: '#4e80ff', 
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    <span style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#4e80ff',
                      borderRadius: '50%',
                      marginRight: '10px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>★</span>
                    {t('faq_question_4')}
                  </h4>
                  <div style={{ color: '#ffffff', lineHeight: '1.6' }}>
                    <ul style={{ 
                      listStyleType: 'none', 
                      padding: '0', 
                      margin: '0'
                    }}>
                      <li style={{ 
                        padding: '8px 0', 
                        display: 'flex', 
                        alignItems: 'flex-start'
                      }}>
                        <span style={{ 
                          color: '#4e80ff', 
                          marginRight: '10px',
                          fontSize: '1.1rem'
                        }}>•</span>
                        <span>{t('faq_answer_4').split(',')[0]}</span>
                      </li>
                      <li style={{ 
                        padding: '8px 0', 
                        display: 'flex', 
                        alignItems: 'flex-start'
                      }}>
                        <span style={{ 
                          color: '#4e80ff', 
                          marginRight: '10px',
                          fontSize: '1.1rem'
                        }}>•</span>
                        <span>{t('faq_answer_4').split(',')[1]}</span>
                      </li>
                      <li style={{ 
                        padding: '8px 0', 
                        display: 'flex', 
                        alignItems: 'flex-start'
                      }}>
                        <span style={{ 
                          color: '#4e80ff', 
                          marginRight: '10px',
                          fontSize: '1.1rem'
                        }}>•</span>
                        <span>{t('faq_answer_4').split(',')[2]}</span>
                      </li>
                      <li style={{ 
                        padding: '8px 0', 
                        display: 'flex', 
                        alignItems: 'flex-start'
                      }}>
                        <span style={{ 
                          color: '#4e80ff', 
                          marginRight: '10px',
                          fontSize: '1.1rem'
                        }}>•</span>
                        <span>{t('faq_answer_4').split(',')[3]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt_70">
            <div className="col-xl-8 text-center">

                <a href="https://wa.me/+905070711259" target="_blank" rel="noopener noreferrer" className="tf__common_btn" style={{
                  display: 'inline-block',
                  padding: '12px 30px',
                  backgroundColor: '#4e80ff',
                  color: '#ffffff',
                  borderRadius: '30px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease-in-out',
                  zIndex: '1000',
                  position: 'relative',
                  boxShadow: '0 4px 15px rgba(78, 128, 255, 0.4)',
                  transform: 'scale(1)',
                }}>
                  {t('contact_for_custom_pricing')}
                </a>
            </div>
          </div>
        </div>
</section>
      </section>
      
    </IstiLayout>
  );
};

export default PricingPage;
