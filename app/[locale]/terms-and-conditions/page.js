/*
 * Terms and Conditions Page
 * Route: /terms-and-conditions
 * Follows Next.js App Router conventions
 */
import { useTranslations } from 'next-intl';
import IstiLayout from '@/layout/IstiLayout';
import ClientHelmet from '@/components/ClientHelmet';

export default function TermsAndConditions() {
  const t = useTranslations('TermsAndConditions');

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
        <h1 className="mb-4 text-center">{t('title')}</h1>
        
        <section className="mb-5">
          <h2 className="mt-4">{t('acceptance.heading')}</h2>
          <p>{t('acceptance.description')}</p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">{t('changes.heading')}</h2>
          <p>{t('changes.description')}</p>
        </section>

        <section className="text-white">
          <h2 className="text-white">{t('userAccount.heading')}</h2>
          <ul>
            <li>{t('userAccount.responsibilities.item1')}</li>
            <li>{t('userAccount.responsibilities.item2')}</li>
            <li>{t('userAccount.responsibilities.item3')}</li>
            <li>{t('userAccount.responsibilities.item4')}</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">{t('intellectualProperty.heading')}</h2>
          <p>{t('intellectualProperty.description')}</p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">{t('userContent.heading')}</h2>
          <p>{t('userContent.description')}</p>
          <p className="text-white">{t('userContent.prohibited')}</p>
          <ul className="text-white">
            <li>{t('userContent.prohibitedItems.item1')}</li>
            <li>{t('userContent.prohibitedItems.item2')}</li>
            <li>{t('userContent.prohibitedItems.item3')}</li>
            <li>{t('userContent.prohibitedItems.item4')}</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">{t('limitationOfLiability.heading')}</h2>
          <p>{t('limitationOfLiability.description')}</p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">{t('termination.heading')}</h2>
          <p>{t('termination.description')}</p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">{t('governingLaw.heading')}</h2>
          <p>{t('governingLaw.description')}</p>
        </section>

        <section className="mb-5">
          <h2 className="mt-4">{t('contactInformation.heading')}</h2>
          <p>{t('contactInformation.description')}</p>
          <p>
            {t('contactInformation.email')} 
            <br />
            {t('contactInformation.address')}
          </p>
        </section>

        <p className="text-center mt-5">
          <strong>{t('lastUpdated')}</strong>
        </p>
      </div>
    </IstiLayout>
  );
}
