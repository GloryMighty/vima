"use client";

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

const Pricing = () => {
  return (
    <section className="tf__pricing pt_190" id="pricing">
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
    </section>
  );
};

export default Pricing;
