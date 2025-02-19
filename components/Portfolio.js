import PortfolioSlider from "./PortfolioSlider";

const portfolioData = {
  title: "Latests Portfolio",
  sub_title: "gallery",
  desc: "Explore our latest works in our portfolio",
  items: [
    { id: 1, src: "/images/beauty.png" },
    { id: 2, src: "/images/land.png" },
    { id: 3, src: "/images/land1.png" },
    { id: 4, src: "/images/pars.png" },
    // For later use     { id: 5, src: "/images/slav2.png" },{ id: 6, src: "/images/mockmac.png" }, { id: 7, src: "/images/mockmac1.png"},{ id: 8, src: "/images/mockmac2.png"},  

  ],
};

const Portfolio = () => {
  return (
    <section className="tf__portfolio pt_150" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 order-xl-1 order-2">
            {portfolioData.items && (
              <PortfolioSlider sliderItems={portfolioData.items} />
            )}
          </div>
          <div className="col-xl-4 my-auto order-xl-2 order-1">
            <div className="tf__common_heading tf__portfolio_heading">
              <h5>{portfolioData.sub_title}</h5>
              <h2 data-text-animation="rotate-in">{portfolioData.title}</h2>
              <p>{portfolioData.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

export const Portfolio2 = () => {
  return (
    <section className="tf__portfolio_2 pt_20" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="tf__portfolio_text">
              <h5>Portfolio</h5>
              <h2>Our Latest Works</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                cupiditate aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
