import { useTranslations } from 'next-intl';
import Iridiscence from '@/public/effects/descence';

/**
 * Pricing plan configuration
 * Each plan maps to a translation key in the locale files
 * Translation structure for each plan:
 * - title: Plan name
 * - price: Plan price
 * - price_subtext: Additional price information
 * - features: Array of features included in the plan
 */
const pricingPlans = [
  { key: 'basic' },
  { key: 'advanced' },
  { key: 'vip' }
];

/**
 * Experience component displaying pricing plans
 * Uses translations for multi-language support
 *
 * Translation structure:
 * - pricing:
 *   - sub_heading: Pricing section subheading
 *   - heading: Pricing section main heading
 *   - choose_plan: Text for the plan selection button
 *   - plans: Object containing plan details
 */
const Experiance = () => {
  // Initialize translations for the Experience namespace
  const t = useTranslations('Experience');
  return (
    <section className="tf__experiance pt_50 pb_50" style={{ position: 'relative', overflow: 'hidden' }}>
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
      <div className="tf__pricing pt_50">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-12 wow fadeInUp">
              <div className="tf__section_heading mb_40">
                <h5 className="tf__sub_heading">{t('pricing.sub_heading')}</h5>
                <h2 
                  className="tf__heading"
                  data-text-animation="rotate-in" 
                  data-split="word"
                >
                  {t('pricing.heading')}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp" key={index}>
                  <div
                    className="tf__single_pricing"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.95)', 
                      borderRadius: '15px', 
                      padding: '40px 30px',
                      height: '100%',
                    marginBottom: '30px'
                    }}
                  >
                    <div className="tf__pricing_header">
                      <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px' }}>
                        {t(`pricing.plans.${plan.key}.title`)}
                      </h3>
                      <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#000', marginBottom: '20px' }}>
                        {t(`pricing.plans.${plan.key}.price`)}
                        <span style={{ fontSize: '18px', fontWeight: '500', color: '#444' }}>
                          {' '}{t(`pricing.plans.${plan.key}.price_subtext`)}
                        </span>
                      </h2>
                    </div>
                    <div className="tf__pricing_body">
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {/* Map through translated features for each plan */}
                        {t(`pricing.plans.${plan.key}.features`).split('|').map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            style={{ 
                              fontSize: '17px',
                              fontWeight: '500',
                              color: '#2c2c2c',
                              lineHeight: '1.6',
                              padding: '12px 15px',
                              margin: '8px 0',
                              background: 'rgba(255, 255, 255, 0.95)',
                              borderRadius: '6px',
                              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                            
                            }}
                          >   
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href="https://wa.me/+905070711259" className="tf__common_btn" style={{ marginTop: '20px', display: 'inline-block' }}>
                        {t('pricing.choose_plan')}
                        <i className="fa-solid" style={{ marginLeft: '10px' }} />
                      </a>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
