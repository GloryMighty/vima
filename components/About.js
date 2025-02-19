const aboutData = {
  title: "Visual Journey through our Portfolio",
  subtitle: "making this the first true generator on the Internet",
  bio: "",
  // Path to the dojo image in public directory
  image: "/images/dojo.png",
};

const About = () => {
  return (
    <section className="tf__about pt_150 pb_150" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 mb-4">
            <div className="tf__common_heading tf__about_text">
              <h5>immerse in</h5>
              <h2 data-text-animation="rotate-in" data-split="word">
                {aboutData.title}
              </h2>
              <p>{aboutData.bio}</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 mb-4">
            <div className="tf__about_img">
              <img
                src={aboutData.image}
                alt="about img"
                className="img-fluid w-100 parallax-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

