const blogs = [
  {
    id: 1,
    title: "These cases are perfectly simple and easy",
    author: "VIMA Web",
    comments: 5,
    date: "31 December, 2023",
    img: "/images/blog_1.jpg",
  },
  {
    id: 2,
    title: "which is the same as saying through shrinking from toil",
    author: "VIMA Solutions",
    comments: 5,
    date: "31 December, 2023",
    img: "/images/blog_2.jpg",
  },
  {
    id: 3,
    title: "when our power of choice is design untrammelled and when",
    author: "VIMA Solutions",
    comments: 5,
    date: "31 December, 2023",
    img: "/images/blog_3.jpg",
  },
];
const Blog = () => {
  return (
    <section className="tf__blog pt_145 pb_120">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tf__common_heading tf__common_heading2 tf__blog_heading">
                <h5>ALL Blogs</h5>
                <h2 data-text-animation="rotate-in">
                  From Vision to Reality OUR Portfolio of Accomplishments
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
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
                    href="/blog-details.html"
                    data-cursor='<i class="fa-light fa-arrow-up-right"></i>'
                  >
                    <img
                      src={item.img}
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </a>
                  <p>{item.date}</p>
                </div>
                <div className="tf__single_blog_text">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-user" />
                      By {item.author}
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      Comments (
                      {item.comments <= 9 ? `0${item.comments}` : item.comments}
                      )
                    </li>
                  </ul>
                  <a
                    href="/blog-details.html"
                    className="tf__single_blog_heading"
                  >
                    {item.title}
                  </a>
                  <a
                    href="/blog-details.html"
                    className="tf__common_btn tf__blog_btn"
                  >
                    read more
                    <i className="fa-solid fa-arrow-right-long" />
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

export const Blog2 = () => {
  return (
    <section className="tf__blog pt_120 pb_120" id="blog">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tf__common_heading tf__common_heading2 tf__blog_heading mb_120">
                <h5>ALL Blogs</h5>
                <h2 data-text-animation="rotate-in">
                  From Vision to Reality <br />
                  OUR Portfolio of Accomplishments
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((item, i) => (
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div
                className="tf__single_blog"
                data-animation="fade-left"
                data-offset={100}
                data-delay=".25"
              >
                <div className="tf__single_blog_img tf__single_blog_img_2">
                  <a
                    href="blog-details.html"
                    data-cursor='<i class="fa-light fa-arrow-up-right"></i>'
                  >
                    <img
                      src={item.img}
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </a>
                  <p className="w-auto h-auto">
                    <span>{item.date}</span>
                  </p>
                </div>
                <div className="tf__single_blog_text tf__blog_text_hp2">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <i className="far fa-user" />
                      By {item.author}
                    </li>
                    <li>
                      <i className="far fa-comments" />
                      Comments ({item.comments})
                    </li>
                  </ul>
                  <a href="#" className="tf__single_blog_heading">
                    {item.title}
                  </a>
                  <a
                    href="#"
                    className="tf__common_btn tf__blog_btn tf__blog_btn_hp2"
                  >
                    read more
                    <i className="fa-solid fa-arrow-right-long" />
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
