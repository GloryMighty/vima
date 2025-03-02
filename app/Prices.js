import { useTranslations } from 'next-intl';
import Iridiscence from '@/public/effects/descence';

/**
 * Pricing section component for the main page
 * Uses the same pricing card structure as the standalone pricing page
 * Displays three pricing plans: basic, advanced, and vip
 * 
 * Translation structure:
 * - pricing:
 *   - sub_heading: Pricing section subheading
 *   - heading: Pricing section main heading
 *   - choose_plan: Text for the plan selection button
 *   - VAT: VAT information text
 *   - plans: Object containing plan details (title, price, price_subtext, features)
 */
const Experiance = () => {
  // Initialize translations for the Experience namespace
  const t = useTranslations('Experience');
  
  return (
    <section className="tf__experiance pt_50 pb_50" style={{ position: 'relative', overflow: 'hidden' }}>
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
      <div className="tf__pricing pt_50">
        <div 
          className="container" 
          style={{ 
            position: 'relative', 
            zIndex: 1 
          }}
        >
          <div className="row">
            <div className="col-xl-12">
              <div className="tf__section_heading mb_10">
                <h2 
                  className="tf__sub_heading text-center" 
                  style={{ color: '#ffffff' }}
                >
                  {t('pricing.sub_heading')}
                </h2>
                <h1 
                  className="tf__heading text-center" 
                  data-text-animation="rotate-in" 
                  data-split="char"
                  style={{ color: '#ffffff' }}
                >
                  {t('pricing.heading')}
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {['basic', 'advanced', 'vip'].map((plan, index) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp pt-5 px-3" key={index}>
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
                  <div className="tf__common_heading text-center">
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px' }}>
                      {t(`pricing.plans.${plan}.title`)}
                    </h2>
                    <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#000', marginBottom: '20px' }}>
                      {t(`pricing.plans.${plan}.price`)}
                      <sub style={{ fontSize: '16px', fontWeight: '400', color: '#666' }}>
                        {t(`pricing.plans.${plan}.price_subtext`)}
                      </sub>
                    </h2>
                  </div>
                  <div className="tf__pricing_body">
                    <ul>
                      {t(`pricing.plans.${plan}.features`).split('|').map((feature, i) => (
                        <li key={i} style={{ marginBottom: '10px', color: '#666' }}>
                          <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={`https://wa.me/+905070711259`} className="tf__common_btn" style={{ marginTop: '20px' }}>
                      {t('pricing.choose_plan')}  
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 text-center mt-3 mb-4">
              <p className="text-muted" style={{ fontSize: '1.9rem', color: '#ffffff' }}>
                {t('pricing.VAT')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
