"use client";

const blogs = [
  {
    id: 1,
    title: "Visual example of Basic Website",
    author: "VIMA Web",
    comments: 5,
    date: "17 February, 2025",
    img: "/images/showcasemed1.png",
  },
  {
    id: 2,
    title: "Advanced Solution for business owners",
    author: "VIMA Solutions",
    comments: 5,
    date: "15 February, 2025",
    img: "/images/turitmed2.png",
  },
  {
    id: 3,
    title: "Premium Plan comprehensive implementation",
    author: "VIMA Solutions",
    comments: 5,
    date: "31 December, 2025",
    img: "/images/slav1.png",
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
                    href={`/blog#blog-${item.id}`}
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
                    href={`/blog#blog-${item.id}`}
                    className="tf__single_blog_heading"
                  >
                    {item.title}
                  </a>
                  <a
                    href={`/blog#blog-${item.id}`}
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
