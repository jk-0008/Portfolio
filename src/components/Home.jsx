import React from 'react';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge-pill">
            <span className="pulsing-dot"></span>
            <span>Available for Opportunities • Chennai, India</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Jaya Ganesh P</span>
          </h1>

          <h2 className="hero-subtitle">
            Python Full Stack Developer
          </h2>

          <p className="hero-description">
            Aspiring Python Full-Stack Developer and B.E. Computer Science student (graduating 2026) with hands-on 
            experience building scalable, secure web applications using <strong>Python, Django REST Framework, React.js, and MySQL</strong>. 
            Passionate about architecting clean RESTful APIs, normalized database schemas, and modern user interfaces.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="/resume.pdf" download="Jaya_Ganesh_P_Resume.pdf" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-links">
              <a 
                href="https://github.com/jk-0008" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                title="GitHub (jk-0008)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>github.com/jk-0008</span>
              </a>

              <a 
                href="https://linkedin.com/in/jai1920" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                title="LinkedIn (jai1920)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.76-.79 1.76-1.76a1.76 1.76 0 0 0-1.76-1.76c-.97 0-1.76.79-1.76 1.76 0 .97.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
                <span>linkedin.com/in/jai1920</span>
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jayaganesh1920@gmail.com&su=Python%20Full%20Stack%20Opportunity" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
                title="Send Email via Gmail"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>jayaganesh1920@gmail.com</span>
              </a>

              <a 
                href="tel:+918248371828" 
                className="social-icon-link"
                title="Call: +91 82483 71828"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 82483 71828</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Card / Profile Photo */}
        <div className="hero-graphic">
          <div className="hero-profile-card">
            <div className="photo-wrapper">
              <div className="photo-ring">
                <img 
                  src="/profile.jpg" 
                  alt="Jaya Ganesh P - Python Full Stack Developer" 
                  className="hero-avatar-img" 
                />
              </div>
              <div className="floating-badge badge-top-left">
                <span className="badge-icon">⚡</span>
                <span>Python & Django</span>
              </div>
              <div className="floating-badge badge-bottom-right">
                <span className="badge-icon">🌐</span>
                <span>REST API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
