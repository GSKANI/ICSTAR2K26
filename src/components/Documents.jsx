import React from 'react';
import '../styles/Documents.css';

function Documents() {
  const documentRequirements = [
    { label: 'Format', value: 'MS Word (.docx)' },
    { label: 'Page Size', value: 'A4 (210 × 297 mm)' },
    { label: 'Maximum Pages', value: '6 pages (not exceeding)' },
    { label: 'Font Type', value: 'Times New Roman' },
    { label: 'Line Spacing', value: 'Single spacing' },
    { label: 'Columns', value: 'Single column' }
  ];

  const formattingDetails = [
    { label: 'Paper Title', value: '16 points, Bold' },
    { label: 'Section Heading', value: '12 points, Bold' },
    { label: 'Sub Headings', value: '12 points, Italic' },
    { label: 'Body Text', value: '12 points, Normal' },
    { label: 'Abstract', value: '10 points, Italic' },
    { label: 'Team Size', value: '3 members (+ ₹200 each)' }
  ];

  return (
    <section className="documents" id="documents">
      <div className="section-title">Paper Submission Guidelines</div>
      <div className="doc-grid">
        <div>
          <h3>📝 Document Requirements</h3>
          {documentRequirements.map((item, index) => (
            <div key={index} className="doc-item">
              <div className="doc-label">{item.label}</div>
              <div className="doc-value">{item.value}</div>
            </div>
          ))}
        </div>

        <div>
          <h3>🎨 Formatting Details</h3>
          {formattingDetails.map((item, index) => (
            <div key={index} className="doc-item">
              <div className="doc-label">{item.label}</div>
              <div className="doc-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="submission-box">
        <h4>📧 Submit Your Paper</h4>
        <p>
          Prepare your manuscript according to the guidelines above and send it to:
        </p>
        <a href="mailto:icstar2026@example.com" className="email-link">
          📧 icstar2026@example.com
        </a>
        <p className="submission-note">
          Include your team member names and institution in the email subject line
        </p>
      </div>
    </section>
  );
}

export default Documents;
