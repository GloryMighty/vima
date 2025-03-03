/**
 * Reusable pricing card component
 * Used in both the main page pricing section and the dedicated pricing page
 */
import React from 'react';

const PricingCard = ({ 
  title, 
  price, 
  priceSubtext, 
  features, 
  ctaText, 
  ctaLink = 'https://wa.me/+905070711259' 
}) => {
  return (
    <div
      className="tf__single_pricing"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '15px',
        padding: '40px 30px',
        height: '100%',
        marginBottom: '30px',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="tf__common_heading text-center">
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', marginBottom: '15px' }}>
          {title}
        </h2>
        <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#000', marginBottom: '20px' }}>
          {price}
          <sub style={{ fontSize: '16px', fontWeight: '400', color: '#666' }}>
            {priceSubtext}
          </sub>
        </h2>
      </div>
      <div className="tf__pricing_body">
        <ul>
          {features.map((feature, i) => (
            <li key={i} style={{ marginBottom: '10px', color: '#666' }}>
              <i className="fas fa-check" style={{ color: '#28a745', marginRight: '10px' }}></i>
              {feature}
            </li>
          ))}
        </ul>
        <a href={ctaLink} className="tf__common_btn" style={{ borderRadius: '15%', marginTop: '20px' }}>
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
