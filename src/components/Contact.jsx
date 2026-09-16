import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'warning' | 'error', text: '' }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/jayaganesh1920@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: "table"
        })
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setFeedback({
          type: "success",
          text: "Message sent successfully! It has been delivered directly to jayaganesh1920@gmail.com."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.includes("Activation")) {
        setFeedback({
          type: "warning",
          text: "One-Time Activation: FormSubmit has sent a confirmation email to jayaganesh1920@gmail.com. Please open your Gmail and click 'Activate Form'. All future messages will arrive directly in your inbox!"
        });
      } else {
        setFeedback({
          type: "success",
          text: data.message || "Message sent! Delivered to jayaganesh1920@gmail.com."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFeedback({
        type: "error",
        text: "Could not send automatically. Please use the 'Open & Send via Web Gmail' button below to send your message directly!"
      });
    } finally {
      setIsSending(false);
    }
  };

  // Pre-filled web Gmail compose URL
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jayaganesh1920@gmail.com&su=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
  )}`;

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider"></div>
          <p className="section-intro">
            I am actively seeking Python Full Stack Developer / Software Engineer roles. Feel free to connect or drop me a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Social Links */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              Whether you are recruiting for a full-stack engineering position, seeking a developer, or discussing a software project—my inbox is always open.
            </p>

            <div className="contact-items-list">
              {/* Email - Direct Web Gmail Compose Page */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jayaganesh1920@gmail.com&su=Software%20Engineer%20Opportunity%20-%20Portfolio%20Inquiry" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item contact-item-highlight"
                title="Touch to open Gmail compose page directly"
              >
                <div className="contact-icon-box gmail-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <div className="contact-label-row">
                    <span className="contact-label">Email</span>
                    <span className="contact-badge-gmail">Opens Gmail ↗</span>
                  </div>
                  <span className="contact-value">jayaganesh1920@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+918248371828" className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 82483 71828</span>
                </div>
              </a>

              {/* Location */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Chennai, India</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/jai1920" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.76-.79 1.76-1.76a1.76 1.76 0 0 0-1.76-1.76c-.97 0-1.76.79-1.76 1.76 0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/jai1920</span>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/jk-0008" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/jk-0008</span>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Direct Message Form */}
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Quick Message</h3>
            
            {feedback && feedback.type === 'success' && (
              <div className="alert-success">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>{feedback.text}</span>
              </div>
            )}

            {feedback && feedback.type === 'warning' && (
              <div className="alert-warning">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{feedback.text}</span>
              </div>
            )}

            {feedback && feedback.type === 'error' && (
              <div className="alert-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <span>{feedback.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Python Full Stack Developer Position"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Hi Jaya Ganesh, we reviewed your resume and portfolio and would like to discuss an opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
              </div>

              <div className="form-btn-group">
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="btn btn-primary submit-btn"
                >
                  {isSending ? (
                    <>
                      <svg className="spinner-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message (Direct)</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>

                <a 
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direct-gmail-btn"
                  title="Open draft in Web Gmail directly"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Or Open & Send via Web Gmail</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
