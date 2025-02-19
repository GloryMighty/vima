import Breadcrumbs from "@/components/Breadcrumbs";
import IstiLayout from "@/layout/IstiLayout";

const PricingPage = () => {
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
      title: "Premium Plan",
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

  return (
    <IstiLayout>
      <Breadcrumbs />
      <section className="tf__pricing_hero position-relative">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-12 text-center text-white">
              <h1> <br />   PRICING</h1>
              <p>Tailored solutions for your digital success</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tf__pricing pt_130 pb_120">
        <div className="container">
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-xl-4 col-md-6">
                <div className="tf__single_pricing" style={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)' }}>
                  <div className="tf__pricing_header">
                    <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', letterSpacing: '0.5px' }}>{plan.title}</h3>
                    <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#000' }}>{plan.price}<span style={{ fontSize: '18px', fontWeight: '500', color: '#444' }}>{plan.priceSubtext}</span></h2>
                  </div>
                  <div className="tf__pricing_body">
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} style={{ fontSize: '17px', fontWeight: '500', color: '#2c2c2c', lineHeight: '1.6', padding: '12px 15px', margin: '8px 0', background: 'rgba(255, 255, 255, 0.95)', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>{feature}</li>
                      ))}
                    </ul>
                    <a href="#" className="tf__common_btn">
                      Choose Plan
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </IstiLayout>
  );
};

export default PricingPage;
