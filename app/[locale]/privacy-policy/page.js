/*
 * Privacy Policy Page
 * Route: /privacy-policy
 * Follows Next.js App Router conventions
 */
import { useTranslations } from 'next-intl';
import IstiLayout from '@/layout/IstiLayout';
import ClientHelmet from '@/components/ClientHelmet';

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPolicy');

  return (
    <IstiLayout>
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <br />
      <br />  
      <div className="container py-5">
        <h1 className="mb-4">{t('title')}</h1>
        <div className="content">
          <p>{t('introduction')}</p>
          
          <h2 className="mt-4">{t('informationCollected.heading')}</h2>
          <p>{t('informationCollected.description')}</p>
          
          <h2 className="mt-4">{t('informationUsage.heading')}</h2>
          <p>{t('informationUsage.description')}</p>
          
          <h2 className="mt-4">{t('dataProtection.heading')}</h2>
          <p>{t('dataProtection.description')}</p>
        </div>
      </div>
    </IstiLayout>
  );
}
