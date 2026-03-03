import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="badge">🌟 International Conference 2026</div>
        
        <h1>ICSTAR 2026</h1>
        
        <div className="conf-title">
          International Conference on Smart Technologies & Advanced Research
        </div>
        
        <div className="edition">
          Women's Day Special Edition
        </div>

        <p>
          A one-day online academic platform for engineering students to present innovative ideas, 
          research work, and technical solutions. Join us in promoting research culture and encouraging 
          women participation in smart technologies and advanced research.
        </p>
        
        <div className="hero-organizers">
          Organized by <strong>Coreberly & SEAD</strong>
        </div>
        
        <div className="cta-buttons">
          <button className="btn btn-primary">📝 Register Now</button>
          <button className="btn btn-secondary">📚 Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
