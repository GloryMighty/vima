const serviceItems = {
  title: " Pushing Boundaries: My Portfolio of Limitless Ideas",
  services: [
    {
      id: 1,
      title: "Website Design",
      img: "/images/service_1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore",
      icon: "isti-copy1",
      icon2: "/images/service_4.png",
    },
    {
      id: 2,
      title: "Logo Design",
      img: "/images/service_2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore",
      icon: "isti-settings",
      icon2: "/images/service_5.png",
    },
    {
      id: 3,
      title: "Apps Development",
      img: "/images/service_3.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore",
      icon: "isti-fullscreen",
      icon2: "/images/service_6.png",
    },
  ],
};

<<<<<<< HEAD
const Pricing = () => {
=======
const Service = () => {
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8
  return (
    <section className="tf__service pt_145" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="tf__common_heading tf__common_heading2">
              <h5>My service</h5>
              <h2 data-text-animation="rotate-in" data-split="word">
                {serviceItems.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceItems.services &&
            serviceItems.services.map((item) => (
              <div className="col-xl-4 col-md-6" key={item.id}>
                <div
                  className="tf__single_service"
                  data-animation="fade-left"
                  data-delay={(item.id - 1) * 0.25}
                >
                  <div className="tf__single_service_img">
                    <div data-animation="img-blur">
                      <img
                        src={item.img}
                        alt="service"
                        className="img-fluid w-100"
                      />
                    </div>
                    <span>
                      <i className={item.icon} />
                    </span>
                  </div>
                  <div className="tf__single_service_text">
                    <a href="#">{item.title}</a>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
<<<<<<< HEAD
export default Pricing;
=======
export default Service;
>>>>>>> 95ff9be6638ae07803b864c70523b545a06de5b8

export const Service2 = () => {
  return (
    <section className="tf__service_2 pt_120 xs_pt_50" id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tf__common_heading tf__common_heading2 mb_180 xs_mb_80 text-center">
              <h5>My service</h5>
              <h2 data-text-animation="rotate-in">{serviceItems.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceItems.services.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
              <div
                className={`tf__single_service_2 ${
                  item.id !== 2 ? "" : "tf__single_service_3"
                }`}
                data-animation="fade-bottom"
                data-offset={100}
                data-delay={index * 0.25}
              >
                <div className="tf__single_service_2_img">
                  <img
                    src={item.icon2}
                    alt="service"
                    className="img-fluid w-100"
                  />
                </div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
