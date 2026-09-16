import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: "Python", level: "Core & Advanced", description: "OOP, Data Structures, Decorators, Backend logic, Automation, Scripting" },
        { name: "JavaScript", level: "ES6+", description: "Async/Await, Promises, DOM Manipulation, Fetch API, Event loop" },
        { name: "HTML5", level: "Semantic Markup", description: "Modern semantics, Web Accessibility (a11y), Forms, SEO structure" },
        { name: "CSS3", level: "Styling & Layout", description: "Flexbox, CSS Grid, Responsive design, Animations, Modern UI" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: [
        { name: "Django", level: "Web Framework", description: "MVT pattern, ORM, User authentication, Middleware, Admin dashboard" },
        { name: "Django REST Framework (DRF)", level: "API Framework", description: "RESTful endpoints, Serializers, ViewSets, Token & JWT authentication, Permissions" },
        { name: "React.js", level: "UI Library", description: "Hooks, Component-driven architecture, State management, Reusable components" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        { name: "MySQL & SQL", level: "Relational DB", description: "Normalized schemas, complex joins, indexing, query optimization, ACID transactions" },
        { name: "Git & GitHub", level: "Version Control", description: "Branching, PRs, code reviews, semantic commits, conflict resolution" },
        { name: "Postman", level: "API Testing", description: "Endpoint debugging, environment variables, API documentation & automated testing" },
        { name: "VS Code", level: "Development IDE", description: "Productive coding workflows, extensions, linting, debugging" }
      ]
    },
    {
      title: "Core Competencies",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      skills: [
        { name: "RESTful APIs", level: "Architecture", description: "Client-server architecture, JSON payloads, HTTP methods, status codes, pagination" },
        { name: "Object-Oriented Programming (OOP)", level: "Design Principles", description: "Inheritance, Polymorphism, Encapsulation, Abstraction, SOLID patterns" },
        { name: "Database Design & Normalization", level: "Data Engineering", description: "Relational table schemas, primary/foreign keys, indexing, data integrity" }
      ]
    }
  ];

  return (
    <section id="skills" className="section section-dark">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Technical Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-intro">
            Comprehensive skill set directly aligned with industry standards in Python Full-Stack Development.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="category-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-tag">{skill.level}</span>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Stack Pill Strip */}
        <div className="tech-badge-strip">
          <span className="badge-strip-title">Core Skills at a Glance:</span>
          <div className="badge-tokens">
            <span className="tech-pill">Python</span>
            <span className="tech-pill">Django</span>
            <span className="tech-pill">Django REST (DRF)</span>
            <span className="tech-pill">React.js</span>
            <span className="tech-pill">MySQL</span>
            <span className="tech-pill">JavaScript (ES6+)</span>
            <span className="tech-pill">RESTful APIs</span>
            <span className="tech-pill">OOP</span>
            <span className="tech-pill">Git & GitHub</span>
            <span className="tech-pill">Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
