"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/config/navigation';
import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import TravelCarousel from '@/app/TravelCarousel';
import BeautyCarousel from '@/app/BeautyCarousel';
import PersonalCarousel from '@/app/PersonalCarousel';
import ClientHelmet from '@/components/ClientHelmet';

const Page = () => {
  const t = useTranslations('Blog');

  const blogPosts = [
    {
      id: 'blog-1',
      Carousel: TravelCarousel,
      author: t('posts.travel.author'),
      category: t('categories.web_developer'),
      commentsCount: 8,
      title: t('posts.travel.title'),
      content: t('posts.travel.content'),
      link: 'https:/tur.it.com/'
    },
    {
      id: 'blog-2',
      Carousel: BeautyCarousel,
      author: t('posts.beauty.author'),
      category: t('categories.web_designer'),
      commentsCount: 10,
      title: t('posts.beauty.title'),
      content: t('posts.beauty.content'),
      link: 'https:/showcase.it.com/'
    },
    {
      id: 'blog-3',
      Carousel: PersonalCarousel,
      author: t('posts.premium.author'),
      category: t('categories.ui_ux_designer'),
      commentsCount: 12,
      title: t('posts.premium.title'),
      content: t('posts.premium.content'),
      link: 'https://viacheslav.my'
    }
  ];

  const categories = [
    { name: t('categories.web_designer'), count: '02' },
    { name: t('categories.graphics_designer'), count: '04' },
    { name: t('categories.web_developer'), count: '02' },
    { name: t('categories.ui_ux_designer'), count: '03' }
  ];

  const recentPosts = [
    {
      date: 'February 15, 2022',
      title: t('recent_posts.basic'),
      link: 'https://showcase.it.com'
    },
    {
      date: 'February 17, 2025',
      title: t('recent_posts.advanced'),
      link: 'https://tur.it.com'
    },
    {
      date: 'February 19, 2025',
      title: t('recent_posts.future'),
      link: 'https://viacheslav.my'
    }
  ];

  const tags = [
    'designer', 'Developer', 'UI/UX', 'Graphics', 'web', 'python'
  ];

  return (
    <IstiLayout>
      <ClientHelmet 
        title={`${t('meta_title')} | Vima Web Solutions`}
        description={t('meta_description')}
        keywords={t('meta_keywords')}
      />
      <Breadcrumbs pageTitle={t('page_title')} />
      <section className="tf__blog_clasic pt_115 pb_150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tf__blog_clasic_left">
                {blogPosts.map(post => (
                  <div key={post.id} className="tf__single_blog_clasic" id={post.id}>
                    <post.Carousel />
                    <div className="tf__blog_clasic_text">
                      <ul className="d-flex flex-wrap">
                        <li>{t('by')} {post.author}</li>
                        <li>{post.category}</li>
                        <li>{t('comments', { count: post.commentsCount })}</li>
                      </ul>
                      <a className="blog_title" href={'#' + post.id}>
                        {post.title}
                      </a>
                      <p>{post.content}</p>
                      <div className="tf__blog_link d-flex flex-wrap justify-content-between">
                        <a href={post.link} className="tf__blog_share">
                          <i className="far fa-share-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div id="tf__pagination">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">01</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">02</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">03</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        <i className="fa fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tf__blog_clasic_right">
                <form className="tf__blog_searchbar tf__blog_common_header">
                  <h5>{t('search')}</h5>
                  <input type="text" placeholder={t('search_placeholder')} />
                  <button className="tf__search_icon">
                    <i className="far fa-search" aria-hidden="true" />
                  </button>
                </form>
                <div className="tf__blog_common_header">
                  <h5>{t('category.title')}</h5>
                  <ul className="tf__blog_categories mt-5">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="d-flex justify-content-between">
                          <span className="text_hover_animaiton category_list">
                            {category.name}
                          </span>
                          <span>{category.count}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tf__blog_common_header">
                  <h5>{t('recent_posts.title')}</h5>
                  {recentPosts.map((post, index) => (
                    <div key={index} className="tf__recent_post">
                      <p>
                        <i className="fas fa-calendar-alt" />
                        {post.date}
                      </p>
                      <a href={post.link}>{post.title}</a>
                    </div>
                  ))}
                </div>
                <div className="tf_blog_contact">
                  <p>{t('contact.message')}</p>
                  <Link href="/contact" className="tf__common_btn tf_blog_contact_btn">
                    {t('contact.button')}
                  </Link>
                </div>
                <div className="tf__blog_common_header">
                  <h5>{t('tags.title')}</h5>
                  <ul className="tf__blog_tags d-flex flex-wrap">
                    {tags.map((tag, index) => (
                      <li key={index}>
                        <a href="#">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </IstiLayout>
  );
};

export default Page;
