import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Conference Details</h3>
          <p><strong>Event:</strong> ICSTAR 2026</p>
          <p><strong>Full Name:</strong> International Conference on Smart Technologies & Advanced Research</p>
          <p><strong>Organized by:</strong> Coreberly & SEAD</p>
          <p><strong>Track:</strong> Women's Day Edition</p>
          <p><strong>Format:</strong> Online Academic Platform</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About Conference</a></p>
          <p><a href="#registration">Registration</a></p>
          <p><a href="#documents">Guidelines</a></p>
          <p><a href="https://docs.google.com/forms/d/1bUfIM1AXsAYLF25uHT1kL5IvrqILIGWfdyxp1qI7fEA/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"><strong>🚀 Apply Now</strong></a></p>
        </div>
        <div className="footer-section">
          <h3>Organizers</h3>
          <div className="organizer-logos">
            <a href="https://coreberly.in" target="_blank" rel="noopener noreferrer" className="organizer-logo">
              <img src="/images/COREBERLY.jpeg" alt="COREBERLY" />
            </a>
            <a href="https://thesead.in" target="_blank" rel="noopener noreferrer" className="organizer-logo">
              <img src="/images/THE SEAD.png" alt="THE SEAD" />
            </a>
          </div>
          <p style={{ marginTop: '1.5rem' }}><a href="https://coreberly.in" target="_blank" rel="noopener noreferrer"><strong>COREBERLY</strong></a></p>
          <p>Empowering businesses through innovative technology solutions</p>
          <p style={{ marginTop: '1rem' }}><a href="https://thesead.in" target="_blank" rel="noopener noreferrer"><strong>THE SEAD</strong></a></p>
          <p>SKILL ENHANCEMENT AND DEVELOPMENT</p>
        </div>
        <div className="footer-section">
          <h3>Contact & Submissions</h3>
          <p>📧 <a href="mailto:icstar2026@gmail.com">icstar2026@gmail.com</a></p>
          <p style={{ marginTop: '1rem' }}>📱 <strong>CHARANN K S</strong> - 9361736413</p>
          <p className="contact-title">FOUNDER, COREBERLY</p>
          <p style={{ marginTop: '0.8rem' }}>📱 <strong>KANI G S </strong> - 6382330559</p>
          <p className="contact-title">CO-FOUNDER, COREBERLY</p>
          <p style={{ marginTop: '0.8rem' }}>📱 <strong>TAEJAS D </strong> - 6383273657</p>
          <p className="contact-title">MD, SEAD </p>
          <p style={{ marginTop: '1rem' }}>Submit all papers in MS Word format to the email above</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Registration Support Available 24/7</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ICSTAR - International Conference on Smart Technologies & Advanced Research. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
