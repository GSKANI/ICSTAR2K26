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
        </div>
        <div className="footer-section">
          <h3>Organizers</h3>
          <p><strong>Coreberly</strong></p>
          <p>Innovation & Research Partners</p>
          <p style={{ marginTop: '1rem' }}><strong>SEAD</strong></p>
          <p>Scientific Exchange & Advanced Development</p>
        </div>
        <div className="footer-section">
          <h3>Contact & Submissions</h3>
          <p>📧 <a href="mailto:icstar2026@gmail.com">icstar2026@gmail.com</a></p>
          <p style={{ marginTop: '1rem' }}>📱 <strong>Charan K.S</strong> - 9361736413</p>
          <p>📱 <strong>Taejas</strong> - 6382330559</p>
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
