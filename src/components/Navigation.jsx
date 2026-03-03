import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="logo-section">
          <div className="logo">ICSTAR 2026</div>
          <div className="logo-subtitle">Women's Day Edition</div>
        </div>
        <ul>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#tracks" onClick={(e) => { e.preventDefault(); scrollToSection('tracks'); }}>Tracks</a></li>
          <li><a href="#registration" onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}>Registration</a></li>
          <li><a href="#documents" onClick={(e) => { e.preventDefault(); scrollToSection('documents'); }}>Guidelines</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
