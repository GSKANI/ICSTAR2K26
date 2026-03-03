import React from 'react';
import '../styles/About.css';

function About() {
  const features = [
    {
      icon: '🎓',
      title: 'Promote Research Culture',
      description: 'Foster a strong research mindset among students'
    },
    {
      icon: '👩‍💻',
      title: 'Encourage Participation',
      description: 'Increase women\'s involvement in tech'
    },
    {
      icon: '🤝',
      title: 'Professional Platform',
      description: 'Knowledge sharing and discussion space'
    },
    {
      icon: '🌟',
      title: 'Networking Opportunities',
      description: 'Connect with peers and industry experts'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="section-title">About ICSTAR 2026</div>
      <div className="about-grid">
        <div className="about-text">
          <h2>Women's Edition - Smart Technologies & Advanced Research</h2>
          <p>The ICSTAR 2026 International Conference on Smart Technologies & Advanced Research, organized by Coreberly and SEAD, features a dedicated Women's Day Edition. This premier online academic platform is designed specifically for engineering students to showcase their innovative ideas, groundbreaking research work, and cutting-edge technical solutions.</p>
          <p>Our conference aims to:</p>
          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-visual">
          <img src="/images/about.jpeg" alt="Innovation & Excellence" className="about-visual-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
