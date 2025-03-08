import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Copyright = () => {
  const t = useTranslations('Layout.Copyright');
  return (
    <section className="tf__copyright">
      <div className="container">
        <div className="col-xl-12">
          <div className="tf__main_copyright d-flex flex-wrap justify-content-between">
            <p>{t('text')}</p>
            <li className="tf__main_copyright_text" style={{ color: '#b5b5b5a4' }}>
              By VIMA with ❤️
            </li>
            <ul className="d-flex flex-wrap">
              <li>
                <Link href="/terms-and-conditions" className="text_hover_animaiton">
                  {t('terms_and_conditions')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text_hover_animaiton">
                  {t('privacy_policy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Copyright;
