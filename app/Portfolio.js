import PortfolioSlider from "app/PortfolioSlider";
import { useTranslations } from 'next-intl';
import { getImagePath } from '@/utility/imageUtils';

/**
 * Portfolio component showcasing our latest work
 * Uses translations for multi-language support
 *
 * Translation structure:
 * - title: Main portfolio title
 * - sub_title: Portfolio subtitle
 * - description: Portfolio section description
 * - image_alt: Alt text for portfolio images
 * - items: Object containing project details:
 *   - [key]: Project identifier (beauty, land, etc.)
 *     - title: Project title
 *     - description: Project description
 */
/**
 * Portfolio items configuration
 * Each item maps to a translation key in the locale files
 * and contains the image source and unique identifier
 */
// Transform image paths to ensure they work across all locales
const portfolioData = [
  { id: 1, src: "/images-webp/beauty.webp", key: 'beauty' },
  { id: 2, src: "/images-webp/land.webp", key: 'land' },
  { id: 3, src: "/images-webp/land1.webp", key: 'land1' },
  { id: 4, src: "/images-webp/pars.webp", key: 'pars' },
  // For later use
  // { id: 5, src: "/images-webp/slav2.webp" },
  // { id: 6, src: "/images-webp/mockmac.webp" },
  // { id: 7, src: "/images-webp/mockmac1.webp"},
  // { id: 8, src: "/images-webp/mockmac2.webp"},
];

/**
 * Main Portfolio component
 * Displays a grid of portfolio items with translations
 */
const Portfolio = () => {
  // Initialize translations for the Portfolio namespace
  const t = useTranslations('Portfolio');
  return (
    <section className="tf__portfolio pt_150" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 order-xl-1 order-2">
            {portfolioData && (
              <PortfolioSlider sliderItems={portfolioData} />
            )}
          </div>
          <div className="col-xl-4 my-auto order-xl-2 order-1">
            <div className="tf__banner_text tf__common_heading">
              <h5>{t('sub_title')}</h5>
              <h2 className="banner-title" data-text-animation="slide-from-right" data-split="char">
                {t('title')}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
