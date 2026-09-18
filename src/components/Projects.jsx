import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: "jobi-ai",
      featured: true,
      title: "Jobi AI — AI-Powered Job Portal & ATS",
      subtitle: "Full-Stack Recruitment Platform & Applicant Tracking System",
      description: 
        "A full-stack recruitment platform connecting candidates and recruiters. Integrates automated resume parsing to evaluate candidate skillsets against job requirements, conduct intelligent interview preparation workflows, and manage applications in real time.",
      technologies: ["React.js", "Python", "Django REST Framework", "MySQL", "Google Gemini AI", "REST APIs", "JWT Authentication", "JavaScript", "CSS3"],
      features: [
        "Engineered a full-stack recruitment platform connecting candidates and recruiters using React.js and Django REST Framework.",
        "Integrated Google Gemini AI to parse PDF resumes, compare candidate skillsets against job requirements, and compute compatibility match scores.",
        "Developed an automated AI tool generating tailored technical and behavioral interview questions based on candidate skill gaps.",
        "Implemented Jobi AI Chatbot to assist job seekers with real-time job searches and application queries.",
        "Built role-based access control (RBAC) with JWT authentication for Job Seekers and Recruiters.",
        "Designed relational MySQL database schemas and REST APIs to manage users, job postings, and application status pipelines."
      ],
      githubLink: "https://github.com/jk-0008/Ai-Job-Portal",
      vercelLink: "https://ai-job-portal-pearl.vercel.app",
      backendApi: "https://ai-job-portal-so5e.onrender.com/api/",
      role: "Lead Full Stack Developer"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio Showcase</span>
          <h2 className="section-title">Featured Project</h2>
          <div className="section-divider"></div>
          <p className="section-intro">
            Flagship full-stack recruitment platform demonstrating end-to-end Python backend engineering, RESTful API design, database modeling, and modern React interface design.
          </p>
        </div>

        <div className="projects-list">
          {projectsData.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured-card' : ''}`}>
              {project.featured && (
                <div className="featured-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Flagship Project
                </div>
              )}

              <div className="project-content">
                <div className="project-meta-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <span className="role-tag">{project.role}</span>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Features Section */}
                <div className="project-features-block">
                  <h4 className="features-heading">Key Features & Resume Highlights:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div className="project-tech-stack">
                  <span className="tech-stack-label">Technologies:</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="project-actions">
                  {/* Vercel Link Button */}
                  <a 
                    href={project.vercelLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                    title="View deployed app on Vercel"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L24 22H0L12 1Z"/>
                    </svg>
                    <span>Vercel</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>

                  {/* GitHub Repo Button */}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    Source Code (Ai-Job-Portal)
                  </a>

                  {/* Backend API Link */}
                  <a 
                    href={project.backendApi} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-ghost"
                    title="View deployed Django REST API endpoints"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    API Endpoint (Render)
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
