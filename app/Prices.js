import { useTranslations } from 'next-intl';
import Iridiscence from '@/public/effects/descence';
import PricingCard from '@/components/pricing/PricingCard';

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
        speed={0.8}
        amplitude={0.1}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <div className="tf__pricing">
        <div 
          className="container" 
          style={{ 
            position: 'relative', 
            zIndex: 1 
          }}
        >
          <div className="row">
              <div className="tf__common_heading text-center">
                <h5>{t('pricing.sub_heading')}</h5>
                <h2 
                  data-text-animation="rotate-in" 
                  data-split="char"
                >
                  {t('pricing.heading')}
                </h2>
  
            </div>
          </div>
          <div className="row">
            {['basic', 'advanced', 'vip'].map((plan, index) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp pt-5 px-3" key={index}>
                <PricingCard
                  title={t(`pricing.plans.${plan}.title`)}
                  price={t(`pricing.plans.${plan}.price`)}
                  priceSubtext={t(`pricing.plans.${plan}.price_subtext`)}
                  features={t(`pricing.plans.${plan}.features`).split('|')}
                  ctaText={t('pricing.choose_plan')}
                />
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 text-center mt-3 mb-4">
              <p className="text-muted" style={{ color: '#c7d100' }}>
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
