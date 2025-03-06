"use client";
import { useTranslations } from 'next-intl';
import { getImagePath } from '@/utility/imageUtils';
import Image from 'next/image';

/**
 * Blog component displaying latest blog posts
 * Uses translations for multi-language support
 *
 * Translation structure:
 * - section_title: Main section title
 * - heading: Section heading
 * - image_alt: Alt text for blog images
 * - read_more: Read more button text
 * - by_author: Author attribution text with {author} placeholder
 * - comments_count: Comments text with {count} placeholder
 */

// Static blog data
const blogs = [
  {
    id: 2,
    key: "beauty",
    author: "VIMA Web",
    comments: 5,
    date: "17 February, 2025",
    img: "/images-webp/ShowcaseMed1.webp",
  },
  {
    id: 1,
    key: "travel",
    author: "VIMA Solutions",
    comments: 5,
    date: "15 February, 2025",
    img: "/images-webp/TuritMed2.webp",
  },
  {
    id: 3,
    key: "premium",
    author: "VIMA Solutions",
    comments: 5,
    date: "19 February, 2025",
    img: "/images-webp/slav1.webp",
  },
];

const Blog = () => {
  // Initialize translations for the Blog namespace
  const t = useTranslations('Blog');
  return (
    <section className="tf__blog pt_145 pb_120">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tf__common_heading tf__common_heading2 tf__blog_heading">
                <h5>{t('section_title')}</h5>
                <h2 data-text-animation="rotate-in" data-split="char">{t('heading')}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Map through blog posts array */}
          {blogs.map((item) => (
            <div className="col-xl-4 col-md-6" key={item.id}>
              <div
                className="tf__single_blog"
                data-animation="fade-left"
                data-delay={(item.id - 1) * 0.25}
                data-offset={100}
              >
                <div className="tf__single_blog_img">
                  <a
                    href={`/blog#blog-${item.id}`}
                    data-cursor='<i class="fa-light fa-arrow-up-right"></i>'
                  >
                    <Image
                      src={getImagePath(item.img)}
                      alt={t('image_alt')}
                      className="img-fluid w-100"
                      loading="lazy"
                      width={500}
                      height={300}
                    />
                  </a>
                  <p>{item.date}</p>
                </div>
                <div className="tf__single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-user" />
                      {t('by_author', { author: item.author })}
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      {t('comments_count', { count: item.comments <= 9 ? `0${item.comments}` : item.comments })}
                    </li>
                  </ul>
                  <a
                    href={`/blog#blog-${item.id}`}
                    className="tf__single_blog_heading"
                  >
                    {t(`posts.${item.key}.title`)}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
