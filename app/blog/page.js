import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
import TravelCarousel from '@/components/TravelCarousel';
import BeautyCarousel from '@/components/BeautyCarousel';
import PersonalCarousel from '@/components/PersonalCarousel';

const page = () => {
  return (
    <IstiLayout>
      <Breadcrumbs pageTitle={"OUR PROJECTS"} />
      <section className="tf__blog_clasic pt_115 pb_150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tf__blog_clasic_left">
                <div className="tf__single_blog_clasic" id="blog-1">
                  <TravelCarousel />
                  <div className="tf__blog_clasic_text">
                    <ul className="d-flex flex-wrap">
                      <li>By VIMA</li>
                      <li>Showcase</li>
                      <li>Comment (8)</li>
                    </ul>
                    <a className="blog_title" href="#blog-1">
                      Advanced project for a Turkish Travel Company
                    </a>
                    <p>
                      Advanced and responsive UI design for Turkish Travel, showcasing the modern approach to Website Development. 
                      Handling SEO and optimizing website performance for optimal user experience, the website includes translation to 3 languages (Arabic, English and Turkish), ensuring flawless navigation of every user. 
                    </p>
                    <div className="tf__blog_link d-flex flex-wrap justify-content-between">
                      <a href="#" className="tf__blog_share">
                        <i className="far fa-share-alt" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tf__single_blog_clasic" id="blog-2">
                  <BeautyCarousel />
                  <div className="tf__blog_clasic_text">
                    <ul className="d-flex flex-wrap">
                      <li>By VIMA</li>
                      <li>Showcase</li>
                      <li>Comment (12)</li>
                    </ul>
                    <a className="blog_title" href="#blog-2">
                      Basic Plan implementation for Beauty Salon 
                    </a>
                    <p>
                      Graceful demonstration of one-page Website development, showcasing the power of responsive design and user-friendly navigation.
                      Clean and well-structured landing page, focused on clients conversion due to simplicity of the features and pricings.
                    </p>
                    <div className="tf__blog_link d-flex flex-wrap justify-content-between">
                      <a href="#" className="tf__blog_share">
                        <i className="far fa-share-alt" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tf__single_blog_clasic" id="blog-3">
                  <PersonalCarousel />
                  <div className="tf__blog_clasic_text">
                    <ul className="d-flex flex-wrap">
                      <li>By VIMA</li>
                      <li>Showcase</li>
                      <li>Comment (12)</li>
                    </ul>
                    <a className="blog_title" href="#blog-3">
                      Comprehensive solution example of Premium Website
                    </a>
                    <p>
                      A comprehensive solution example of a Premium Website, showcasing the power of Website Development and its impact on user engagement and satisfaction.
                      The website features a modern and responsive design, ensuring a seamless user experience across all devices.
                      Implemented AI Chatbot Capabilities provide navigation support as well as improve conversion. 
                    </p>
                    <div className="tf__blog_link d-flex flex-wrap justify-content-between">
                      <a href="#" className="tf__blog_share">
                        <i className="far fa-share-alt" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tf__single_blog_clasic" id="blog-4">
                  <div
                    className="tf__blog_clasic_img"
                    data-animation="img-blur"
                  >
                  </div>
                </div>
              </div>
              <div id="tf__pagination">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
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
                  <h5>Search</h5>
                  <input type="text" />
                  <button className="tf__search_icon">
                    <i className="far fa-search" aria-hidden="true" />
                  </button>
                </form>
                <div className="tf__blog_common_header">
                  <h5>Category</h5>
                  <ul className="tf__blog_categories mt-5">
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <span className="text_hover_animaiton category_list">
                          Web Designer
                        </span>
                        <span>02</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <span className="text_hover_animaiton category_list">
                          Graphics Designer
                        </span>
                        <span>04</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <span className="text_hover_animaiton category_list">
                          Web Developer
                        </span>
                        <span>02</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <span className="text_hover_animaiton category_list">
                          UI/UX Designer
                        </span>
                        <span>03</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tf__blog_common_header">
                  <h5>Recent post</h5>
                  <div className="tf__recent_post">
                    <p>
                      <i className="fas fa-calendar-alt" />
                      February 15, 2022
                    </p>
                    <a href="blog-details.html">
                      Explore basic options for your Business
                    </a>
                  </div>
                  <div className="tf__recent_post">
                    <p>
                      <i className="fas fa-calendar-alt" />
                      February 17,  2025
                    </p>
                    <a href="blog-details.html">
                      Advanced solution for smart business owners
                    </a>
                  </div>
                  <div className="tf__recent_post">
                    <p>
                      <i className="fas fa-calendar-alt" />
                      February 19, 2025
                    </p>
                    <a href="blog-details.html">
                      Invest in Your Future, have a Web Application!
                    </a>
                  </div>
                </div>
                <div className="tf_blog_contact">
                  <p>Make your dream come true!</p>
                  <a href="/contact" className="tf__common_btn tf_blog_contact_btn">
                    Contact Us
                  </a>
                </div>
                <div className="tf__blog_common_header">
                  <h5>Tags</h5>
                  <ul className="tf__blog_tags d-flex flex-wrap">
                    <li>
                      <a href="#">designer</a>
                    </li>
                    <li>
                      <a href="#">Developer</a>
                    </li>
                    <li>
                      <a href="#">UI/UX</a>
                    </li>
                    <li>
                      <a href="#">Graphics</a>
                    </li>
                    <li>
                      <a href="#">web</a>
                    </li>
                    <li>
                      <a href="#">python</a>
                    </li>
                    <li>
                      <a href="#">developer</a>
                    </li>
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
export default page;