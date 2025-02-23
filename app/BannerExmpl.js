const HomeData = {
  name: "Mezbah",
  title: " CREATIVE DESIGNER BASED IN USA",
  desc: "As a passionate UI/UX Designer, I thrive on creating beautiful and intuitive digital experiences that delight users.",
  cvUrl: "#",
  videoUrl: "",
};

export const Home1Banner = () => {
  return (
    <section
      className="tf__banner pt_100 pl_60 pr_60 bg-fixed"
      style={{ background: "url(images/banner_bg.jpg)" }}
    >
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-xxl-6 col-xl-6">
            <div className="tf__banner_img">
              <img
                src="images/banner_img.png"
                alt="portfolio img"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 ms-auto">
            <div className="tf__banner_text">
              <h3 className="banner_title">Hello I'm Mezbah</h3>
              <h1 className="banner_title">CREATIVE DESIGNER BASED IN USA</h1>
              <p>
                As a passionate UI/UX Designer, I thrive on creating beautiful
                and intuitive digital experiences that delight users.
              </p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a
                    className="tf__common_btn tf___video_btn venobox"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://youtu.be/668nUCeBHyY?si=sHtcsCQRzAET5GOt"
                  >
                    <i className="fa-sharp fa-solid fa-circle-play" />
                    Watch The Video
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

