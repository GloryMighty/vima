const logos = [
  { id: 1, src: "/images/brand_1.png" },
  { id: 2, src: "/images/brand_2.png" },
  { id: 3, src: "/images/brand_3.png" },
  { id: 4, src: "/images/brand_4.png" },
  { id: 5, src: "/images/brand_5.png" },
];

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$299",
    priceSubtext: "starting from",
    features: [
      "Initial Consultation",
      "Design and production",
      "Hosting on Your server",
      "Simple website design",
      "2 Languages"
    ]
  },
  {
    title: "Advanced Plan",
    price: "$599",
    priceSubtext: "starting from",
    features: [
      "Ready to go solution",
      "3 Updates a year for FREE",
      "1 year FREE hosted server included",
      "SEO with 3 FREE blog posts a month",
      "Better digital presence",
      "Advanced website design",
      "3 Languages"
    ]
  },
  {
    title: "VIP Experience",
    price: "$999",
    priceSubtext: "starting from",
    features: [
      "Everything in Advanced, PLUS",
      "Premium domain included",
      "Unlimited updates on request",
      "AI Chatbot Integration",
      "Superior website design",
      "Users authentication",
      "2 years of hosting",
      "Up to 5 Languages"
    ]
  }
];

const Experiance = () => {
  return (
    <section className="tf__experiance pt_50 pb_50">
      <div className="container-fluid">
        <div className="tf__brand pl_100 pr_100">
          <div className="row justify-content-xl-between justify-content-center">
            {logos.map((logo) => (
              <div
                className="col-xl-2 col-sm-6 col-md-4 col-lg-4 col-6"
                key={logo.id}
              >
                <div
                  className="tf__brand_img"
                  data-animation="fade-left"
                  data-offset={100}
                  data-delay={(logo.id - 1) * 0.25}
                >
                  <img
                    src={logo.src}
                    alt="company logo"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tf__pricing pt_50">
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp">
              <div className="tf__section_heading mb_40">
                <h5 className="tf__sub_heading">Our Pricing</h5>
                <h2 className="tf__heading">Choose Your Plan</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp" key={index}>
                <div
                  className="tf__single_pricing"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    borderRadius: '15px', 
                    padding: '40px 30px',
                    height: '100%',
                    marginBottom: '30px'
                  }}
                >
                  <div className="tf__pricing_header">
                    <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px' }}>
                      {plan.title}
                    </h3>
                    <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#000', marginBottom: '20px' }}>
                      {plan.price}
                      <span style={{ fontSize: '18px', fontWeight: '500', color: '#444' }}>
                        {' '}{plan.priceSubtext}
                      </span>
                    </h2>
                  </div>
                  <div className="tf__pricing_body">
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {plan.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          style={{ 
                            fontSize: '17px',
                            fontWeight: '500',
                            color: '#2c2c2c',
                            lineHeight: '1.6',
                            padding: '12px 15px',
                            margin: '8px 0',
                            background: 'rgba(255, 255, 255, 0.95)',
                            borderRadius: '6px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="tf__common_btn" style={{ marginTop: '20px', display: 'inline-block' }}>
                      Choose Plan
                      <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '10px' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;

export const Experiance2 = () => {
  const brands = [
    { id: 1, img: "images/brand_6.png" },
    { id: 2, img: "images/brand_7.png" },
    { id: 3, img: "images/brand_8.png" },
    { id: 4, img: "images/brand_9.png" },
    { id: 5, img: "images/brand_10.png" },
  ];
  return (
    <section className="tf__experiance_2 pt_115 pb_115">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tf__section_heading mb_40">
              <h5 className="tf__sub_heading">Working Experience</h5>
              <h2 className="tf__heading">Trusted by 10k+ Companies</h2>
            </div>
            <div className="tf__experiance_text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                molestias voluptas voluptatum assumenda, in distinctio facere
                labore, veritatis optio inventore quia! Assumenda in pariatur
                ratione laboriosam distinctio facilis veritatis optio.
              </p>
              <a href="#" className="tf__common_btn">
                Let's Talk <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="row">
              {brands.map((item) => (
                <div className="col-sm-6" key={item.id}>
                  <div className="tf__single_brand">
                    <img
                      src={item.img}
                      alt="brand"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
