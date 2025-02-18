import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";
const page = () => {
  return (
    <IstiLayout>
      <Breadcrumbs pageTitle={"Blog Details"} />
      <section className="tf__blog_details pt_100 pb_130">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tf__blog_details_left">
                <h2 data-text-animation="rotate-in">
                  Safeguarding Your Dreams and Aspirations
                </h2>
                <ul className="tf__reach_details d-flex flex-wrap">
                  <li>
                    <i className="far fa-user" />
                    By admin
                  </li>
                  <li>
                    <i className="far fa-sd-card" />
                    Category
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    Comments (05)
                  </li>
                </ul>
                <div className="tf__blog_details_img1">
                  <div data-text-animation="img-blur">
                    <img
                      src="images/blog_details_1.jpg"
                      alt="blog details"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <p data-text-animation="scrub">
                  Aliquam eros justo, posuere loborti viverra laoreet matti
                  ullamcorper posuere viverra .Aliquam eros justo, posuere
                  lobortis non, viverra laoreet augue mattis fermentum
                  ullamcorper viverra laoreet
                </p>
                <p data-text-animation="scrub">
                  Aliquam eros justo, posuere loborti viverra laoreet matti
                  ullamcorper posuere viverra .Aliquam eros justo, posuere
                  lobortis non, viverra laoreet augue mattis fermentum
                  ullamcorper viverra laore Aliquam eros justo, posuere loborti
                  viverra laoreet matti ullamcorper posuere viverra .Aliquam
                  eros justo, posuere lobortis non
                </p>
                <div className="row">
                  <div className="col-xl-5">
                    <div className="tf__blog_details_img2 mt_10">
                      <img
                        src="images/blog_details_2.jpg"
                        alt="blog details"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="tf__blog_details_img2">
                      <img
                        src="images/blog_details_3.jpg"
                        alt="blog details"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                  <div className="col-xl-7">
                    <div className="tf__blog_details_img3 mt_10">
                      <img
                        src="images/blog_details_4.jpg"
                        alt="blog details"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
                <p data-text-animation="scrub">
                  Aliquam eros justo, posuere loborti viverra laoreet matti
                  ullamcorper posuere viverra .Aliquam eros justo, posuere
                  lobortis non, viverra laoreet augue mattis fermentum
                  ullamcorper viverra laoreet Aliquam eros justo
                </p>
                <p className="mt_100" data-text-animation="scrub">
                  Aliquam eros justo, posuere loborti viverra laoreet matti
                  ullamcorper posuere viverra .Aliquam eros justo, posuere
                  lobortis, viverra laoreet augue mattis fermentum ullamcorper
                  viverra laoreet Alim eros justo, posuere loborti viverra
                  laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                  posuere lobortis non, viverra
                </p>
                <div className="tf__clint_feedback mt_60">
                  <div className="row">
                    <div className="col-xl-9">
                      <div className="tf__clint_feedback_text">
                        <h6>Stanio lainto</h6>
                        <p>
                          Ished fact that a reader will be distrol acted bioii
                          the.ished fact th reader will be distrol ac laoreet
                          Aliquam fact that a reader will be distrol acted
                          Aliquam eros posuere loborti viverra laoreet.Ished
                          fact that a reader will be distrol
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="tf__clint_feedback_img">
                        <img
                          src="images/blog_details_5.jpg"
                          alt="blog details"
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="tf__blog_details_shaer d-flex flex-wrap align-items-center mt_60 mb_80">
                  <li>
                    <span>Share:</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
                <div className="tf__blog_details_post">
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="tf__privious_post d-flex flex-wrap align-items-center">
                        <a href="#" className="next_btn">
                          <i className="far fa-arrow-left" />
                        </a>
                        <div className="tf__privious_post_text">
                          <p>Previous post</p>
                          <h5>
                            <a href="#">Insure your peace of mind</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="tf__next_post d-flex flex-wrap justify-content-end">
                        <div className="tf__next_post_text">
                          <p>Next post</p>
                          <h5>
                            <a href="#">Insure your peace of mind</a>
                          </h5>
                        </div>
                        <a href="#" className="prev_btn">
                          <i className="far fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="tf__blog_details_form">
                  <h4>Leave a comment</h4>
                  <p>
                    By using form u agree with the message sorage, you can
                    contact us directly now
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <input type="text" placeholder="Your Name" />
                      <input type="text" placeholder="E-mail" />
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <textarea
                        rows={8}
                        placeholder="Write your message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-xl-12">
                      <button className="tf__common_btn tf__blog_details_form_btn">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </form>
                <div className="tf__another_blog">
                  <h4>You may also like</h4>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="tf__another_single_blog">
                        <a
                          href="#"
                          className="tf__another_single_blog_img"
                          data-cursor='<i class="fa-light fa-arrow-up-right"></i>'
                          data-animation="img-blur"
                        >
                          <img
                            src="images/blog_details_6.jpg"
                            alt="blog details"
                            className="img-fluid w-100"
                          />
                        </a>
                        <div className="tf__another_single_blog_text">
                          <ul className="d-flex flex-wrap">
                            <li>By Admin</li>
                            <li>Category</li>
                            <li>Comment</li>
                          </ul>
                          <a
                            href="blog-details.html"
                            className="tf__single_blog_heading mb-2"
                          >
                            which is the same as saying through shrinking from
                            toil
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="tf__another_single_blog">
                        <a
                          href="#"
                          className="tf__another_single_blog_img"
                          data-cursor='<i class="fa-light fa-arrow-up-right"></i>'
                          data-animation="img-blur"
                        >
                          <img
                            src="images/blog_details_7.jpg"
                            alt="blog details"
                            className="img-fluid w-100"
                          />
                        </a>
                        <div className="tf__another_single_blog_text">
                          <ul className="d-flex flex-wrap">
                            <li>By Admin</li>
                            <li>Category</li>
                            <li>Comment</li>
                          </ul>
                          <a
                            href="blog-details.html"
                            className="tf__single_blog_heading mb-2"
                          >
                            which is the same as saying through shrinking from
                            toil
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                      October 19, 2022
                    </p>
                    <a href="blog-details.html">
                      Protect What Matters Most to You with Insurance
                    </a>
                  </div>
                  <div className="tf__recent_post">
                    <p>
                      <i className="fas fa-calendar-alt" />
                      October 19, 2022
                    </p>
                    <a href="blog-details.html">
                      Your Safety Net for Life's Unexpected Moments
                    </a>
                  </div>
                  <div className="tf__recent_post">
                    <p>
                      <i className="fas fa-calendar-alt" />
                      October 19, 2022
                    </p>
                    <a href="blog-details.html">
                      Invest in Your Future with the Right Insurance
                    </a>
                  </div>
                </div>
                <div className="tf_blog_contact">
                  <p>Aliquam sto, posuere loborti viverra atti ullamcorper</p>
                  <a href="#" className="tf__common_btn tf_blog_contact_btn">
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
