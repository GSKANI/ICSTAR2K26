import React from 'react';
import '../styles/InfoSection.css';

function InfoSection() {
  const infoCards = [
    {
      icon: '📅',
      title: 'One-Day Event',
      description: 'A focused, intensive online conference bringing together the brightest minds in engineering to share innovations and research.'
    },
    {
      icon: '💡',
      title: 'Innovation Showcase',
      description: 'Present your research work and technical solutions to a global audience of engineering professionals and students.'
    },
    {
      icon: '👥',
      title: 'Team Participation',
      description: 'Submit as a team of 3 members or as an individual researcher, academician, or corporate participant.'
    },
    {
      icon: '🎖️',
      title: 'Recognition',
      description: 'Get recognized for your contributions to advancing research and innovation in engineering and technology.'
    },
    {
      icon: '🌐',
      title: 'Online Platform',
      description: 'Accessible to participants worldwide with flexible scheduling for maximum participation.'
    },
    {
      icon: '📚',
      title: 'Knowledge Exchange',
      description: 'Engage in meaningful discussions and share knowledge with peers from different institutions and backgrounds.'
    }
  ];

  return (
    <section className="info-section">
      <div className="section-title">Conference Highlights</div>
      <div className="info-grid">
        {infoCards.map((card, index) => (
          <div key={index} className="info-card">
            <h3>{card.icon} {card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoSection;
