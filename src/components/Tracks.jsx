import React from 'react';
import '../styles/Tracks.css';

function Tracks() {
  const tracks = [
    {
      icon: '👩‍💼',
      title: 'Women in STEM & Leadership',
      trackNumber: 1
    },
    {
      icon: '🤖',
      title: 'Artificial Intelligence & Emerging Technologies',
      trackNumber: 2
    },
    {
      icon: '🔐',
      title: 'Cybersecurity & Digital Safety',
      trackNumber: 3
    },
    {
      icon: '🏠',
      title: 'Smart IoT & Automation',
      trackNumber: 4
    },
    {
      icon: '🌐',
      title: 'Network Technologies',
      trackNumber: 5
    },
    {
      icon: '💼',
      title: 'Digital Entrepreneurship',
      trackNumber: 6
    },
    {
      icon: '🌍',
      title: 'Sustainable Development Goals (SDG)',
      trackNumber: 7
    },
    {
      icon: '✨',
      title: 'Open to all innovations',
      trackNumber: 8
    }
  ];

  return (
    <section className="tracks" id="tracks">
      <div className="section-title">Conference Tracks</div>
      <div className="subtitle-text">
        <p>Choose your area of interest and showcase your innovation</p>
      </div>
      <div className="tracks-grid">
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            <div className="track-number">Track {track.trackNumber}</div>
            <div className="track-icon">{track.icon}</div>
            <h3>{track.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tracks;
