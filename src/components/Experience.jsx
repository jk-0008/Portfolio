import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "QSpiders",
      role: "Python Full Stack Developer Intern",
      period: "Feb 2026 – Aug 2026",
      location: "Bengaluru, India",
      summary: 
        "Engineered scalable web applications and RESTful backend architectures using Python, Django, and modern database systems.",
      highlights: [
        "Developed scalable full-stack web applications using Python, Django, MySQL, and JavaScript.",
        "Engineered RESTful APIs with Django REST Framework and designed normalized database models.",
        "Implemented secure JWT authentication and role-based permissions for applicant and recruiter pipelines.",
        "Created responsive React.js frontend interfaces integrated with backend endpoints."
      ],
      skillsLearned: [
        "Python",
        "Django",
        "Django REST Framework",
        "MySQL",
        "JavaScript",
        "RESTful APIs",
        "Database Normalization",
        "Git & GitHub"
      ]
    },
    {
      company: "HITAKEY Solution",
      role: "MERN Stack Developer Intern",
      period: "June 2025 – July 2025",
      location: "Trichy, India",
      summary: 
        "Focused on full-stack JavaScript application development, building end-to-end task management workflows with MongoDB, Express, React, and Node.js.",
      highlights: [
        "Developed a responsive full-stack To-Do/Task web application with CRUD operations using MongoDB, React.js, and Node.js.",
        "Constructed RESTful API routes in Express.js for handling task lifecycle, priority states, and deadlines.",
        "Implemented MongoDB schemas with Mongoose for efficient document persistence and querying.",
        "Designed clean component-driven React user interfaces with dynamic state synchronization."
      ],
      skillsLearned: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CRUD Operations",
        "REST APIs",
        "Full-Stack JavaScript"
      ]
    },
    {
      company: "AIIRF EDII",
      role: "UI/UX Design Intern",
      period: "June 2024 – July 2024",
      location: "Chidambaram, India",
      summary: 
        "Conducted user experience design and wireframing, crafting accessible, user-centered interface flows and high-fidelity interactive prototypes.",
      highlights: [
        "Designed intuitive wireframes, user flows, and interactive prototypes focusing on responsive web accessibility.",
        "Conducted usability testing and refined information architecture for smooth user journeys.",
        "Collaborated on responsive design systems ensuring consistency across mobile and desktop breakpoints."
      ],
      skillsLearned: [
        "UI/UX Design",
        "Wireframing",
        "User Flows",
        "Interactive Prototypes",
        "Web Accessibility",
        "Design Systems"
      ]
    }
  ];

  const certifications = [
    {
      title: "Python Full Stack Development",
      issuer: "QSpiders",
      badge: "Full Stack",
      description: "Comprehensive enterprise certification in Core & Advanced Python, Django REST Framework, MySQL database engineering, and React.js."
    },
    {
      title: "MERN Stack Development",
      issuer: "HITAKEY Solution",
      badge: "MERN Stack",
      description: "Full-stack web application development credential covering MongoDB, Express.js, React.js, and Node.js architecture."
    },
    {
      title: "UI & UX Design",
      issuer: "AIIRF EDII",
      badge: "Design",
      description: "Design credentials focused on wireframing, accessible design systems, user flows, and interactive prototype validation."
    },
    {
      title: "Cloud Computing & Social Networks",
      issuer: "NPTEL",
      badge: "Cloud & Networks",
      description: "Government-backed certification covering cloud architectures, virtualization, distributed systems, and network paradigms."
    }
  ];

  return (
    <section id="experience" className="section section-dark">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Career Journey</span>
          <h2 className="section-title">Internship Experience</h2>
          <div className="section-divider"></div>
          <p className="section-intro">
            Hands-on professional industry internships developing full-stack applications, REST APIs, and user-centric software.
          </p>
        </div>

        {/* Timeline of Internships */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="info-separator">•</span>
                      <span className="company-location">{exp.location}</span>
                    </div>
                  </div>
                  <span className="timeline-period-badge">{exp.period}</span>
                </div>

                <p className="timeline-summary">{exp.summary}</p>

                <div className="timeline-learnings">
                  <h4 className="learnings-title">Key Responsibilities & Achievements:</h4>
                  <ul className="learnings-list">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="learning-item">
                        <svg className="bullet-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="skills-learned-container">
                  <span className="skills-learned-label">Technologies & Domain Skills:</span>
                  <div className="skills-learned-tags">
                    {exp.skillsLearned.map((skill, sIdx) => (
                      <span key={sIdx} className="learned-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div id="certifications" className="certifications-block">
          <div className="certifications-header">
            <div className="cert-icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="certifications-title">Verified Certifications</h3>
              <p className="certifications-desc">Recognized industry and academic technical credentials</p>
            </div>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-card-top">
                  <span className="cert-badge">{cert.badge}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
                <h4 className="cert-name">{cert.title}</h4>
                <p className="cert-description">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Banner Card */}
        <div id="resume" className="resume-cta-banner">
          <div className="resume-cta-content">
            <div className="resume-icon-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="resume-cta-title">Looking for my full resume document?</h3>
              <p className="resume-cta-desc">
                Download my comprehensive one-page resume featuring technical coursework, academic credentials, and project details.
              </p>
            </div>
          </div>
          <a href="/resume.pdf" download="Jaya_Ganesh_P_Resume.pdf" className="btn btn-primary resume-download-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
