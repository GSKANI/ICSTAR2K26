import React from 'react';
import '../styles/Registration.css';

function Registration() {
  const pricingCards = [
    {
      icon: '👧',
      title: 'All-Girls Team',
      price: '₹500',
      subtext: 'Team of 3 Members',
      highlight: '⭐ All 3 members MUST be girls',
      features: [
        '3 female team members',
        'Online presentation access',
        'Certificate of participation',
        'Networking event access'
      ],
      featured: true
    },
    {
      icon: '👥',
      title: 'Other Teams',
      price: '₹600',
      subtext: 'Team of 3 Members',
      highlight: 'Teams with 1 or more male members',
      features: [
        '3 team members included',
        'Online presentation access',
        'Certificate of participation',
        'Networking event access'
      ],
      featured: false
    },
    {
      icon: '👨‍🏫',
      title: 'Academician',
      price: '₹1200',
      subtext: 'Faculty/Professors',
      features: [
        'Full conference access',
        'Speaking opportunities',
        'Networking sessions',
        'Premium certificate'
      ],
      featured: false
    },
    {
      icon: '🎓',
      title: 'Research Scholar',
      price: '₹1000',
      subtext: 'PhD/Postdocs',
      features: [
        'Full conference access',
        'Presentation slot',
        'Networking sessions',
        'Premium certificate'
      ],
      featured: false
    },
    {
      icon: '💼',
      title: 'Corporate Participant',
      price: '₹1500',
      subtext: 'Industry Professional',
      features: [
        'Full conference access',
        'Networking privileges',
        'Speaking slot available',
        'Premium certificate'
      ],
      featured: false
    },
    {
      icon: '🌍',
      title: 'International Authors',
      price: '₹2000',
      subtext: 'International Participants',
      features: [
        'Full conference access',
        'Premium speaking slot',
        'VIP networking',
        'Premium certificate'
      ],
      featured: false
    }
  ];

  return (
    <section className="registration" id="registration">
      <div className="section-title">Registration Fees</div>
      <div className="subtitle-text">
        <p>Choose your category and register below</p>
      </div>
      <div className="pricing-grid">
        {pricingCards.map((card, index) => (
          <div key={index} className={`pricing-card ${card.featured ? 'featured' : ''}`}>
            <h3>{card.icon} {card.title}</h3>
            <div className="price">{card.price}</div>
            <div className="price-subtext">{card.subtext}</div>
            {card.highlight && (
              <div className="highlight-box">
                {card.highlight}
              </div>
            )}
            <ul className="pricing-features">
              {card.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Register</button>
          </div>
        ))}
      </div>

      <div className="fee-breakdown">
        <h3>Registration Fee Breakdown</h3>
        <div className="breakdown-grid">
          <div className="breakdown-item">
            <p className="breakdown-title">👧 All-Girls Team</p>
            <p className="breakdown-subtitle">All 3 members must be girls</p>
          </div>
          <div className="breakdown-item">
            <p className="breakdown-title">👥 Mixed Teams</p>
            <p className="breakdown-subtitle">1 or more male members</p>
          </div>
        </div>
        <p className="additional-text">
          <strong>Additional Team Members:</strong> ₹200 per person
        </p>
        <p className="additional-subtitle">Add extra members to your team at just ₹200 each</p>
        
        <div className="apply-button-container">
          <a href="mailto:icstar2026@gmail.com?subject=ICSTAR 2026 Registration" className="apply-button">
            🚀 APPLY NOW
          </a>
        </div>
      </div>
    </section>
  );
}

export default Registration;
