import React from 'react';

const About = () => {
  const educationList = [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
      institution: "Annamalai University, Tamil Nadu",
      period: "2022 – 2026",
      score: "CGPA: 7.5 / 10",
      description: "Comprehensive engineering curriculum covering Data Structures, Algorithms, Object-Oriented Programming (OOP), Database Management Systems, and Software Engineering."
    },
    {
      degree: "Higher Secondary Certificate (HSC – 12th)",
      institution: "V.M. Government Higher Secondary School, Periyakulam",
      period: "2021 – 2022",
      score: "Percentage: 82%",
      description: "Focused on core Mathematics, Physics, Chemistry, and Computer Science fundamentals."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC – 10th)",
      institution: "V.M. Government Higher Secondary School, Periyakulam",
      period: "2019 – 2020",
      score: "Percentage: 89%",
      description: "Strong academic record establishing problem-solving abilities and mathematical foundation."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          {/* Main About Story */}
          <div className="about-text-card">
            <div className="about-header-with-photo">
              <img src="/profile.jpg" alt="Jaya Ganesh P" className="about-avatar-img" />
              <div>
                <h3 className="about-heading">
                  Python Full-Stack Developer
                </h3>
                <span className="about-author-role">Jaya Ganesh P • B.E. Computer Science (Graduating 2026)</span>
              </div>
            </div>
            
            <p className="about-paragraph">
              Python Full-Stack Developer with a <strong>B.E. in Computer Science & Engineering</strong> from <strong>Annamalai University</strong> and hands-on experience in <strong>Python, Django, Django REST Framework, React.js, and MySQL</strong>.
            </p>
            
            <p className="about-paragraph">
              Experienced in developing scalable RESTful APIs, full-stack web applications, authentication systems, normalized relational database models, and AI-powered features.
            </p>
            
            <div className="objective-box">
              <div className="objective-icon">🎯</div>
              <div>
                <h4 className="objective-title">Career Objective</h4>
                <p className="objective-desc">
                  Seeking an entry-level <strong>Python Developer / Python Full-Stack Developer</strong> role where I can leverage my expertise in Python, Django REST Framework, React.js, and MySQL to architect scalable systems, automate workflows, and deliver impactful digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="about-cards-column">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Backend Architecture</h4>
                <p className="feature-subtitle">Python & Django REST Framework</p>
                <span className="feature-detail">Engineering secure RESTful APIs, JWT role-based auth, and normalized database models.</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Frontend Engineering</h4>
                <p className="feature-subtitle">React.js & Modern JavaScript</p>
                <span className="feature-detail">Crafting responsive, component-driven UI with fluid workflows, state management, and accessibility.</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">Database Engineering</h4>
                <p className="feature-subtitle">MySQL & Relational Modeling</p>
                <span className="feature-detail">Designing normalized schemas, query optimization, indexing, and transactional integrity.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Education Section */}
        <div id="education" className="education-block">
          <div className="education-header">
            <div className="education-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div>
              <h3 className="education-section-title">Education Background</h3>
              <p className="education-section-desc">Formal academic degrees and qualifications from school to university</p>
            </div>
          </div>

          <div className="education-cards-grid">
            {educationList.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-card-top">
                  <span className="education-period-badge">{edu.period}</span>
                  <span className="education-score-badge">{edu.score}</span>
                </div>
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {edu.institution}
                </p>
                <p className="education-card-detail">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
