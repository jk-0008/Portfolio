import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="portfolio-app">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-badge">JG</span>
                <span className="logo-text">Jaya Ganesh P</span>
              </div>
              <p className="footer-tagline">
                Python Full Stack Developer • Chennai, India • <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jayaganesh1920@gmail.com&su=Portfolio%20Inquiry" target="_blank" rel="noopener noreferrer" className="footer-email-link">jayaganesh1920@gmail.com</a>
              </p>
              <div className="footer-social-strip">
                <a href="https://github.com/jk-0008" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
                <span className="footer-bullet">•</span>
                <a href="https://linkedin.com/in/jai1920" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
                <span className="footer-bullet">•</span>
                <a href="tel:+918248371828" className="footer-social-link">+91 82483 71828</a>
              </div>
            </div>

            <div className="footer-nav">
              <span className="footer-nav-title">Quick Links</span>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#certifications">Certifications</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              © {new Date().getFullYear()} Jaya Ganesh P • Built with React.js & Vite
            </p>
            <button onClick={scrollToTop} className="back-to-top" title="Scroll to top" aria-label="Scroll to top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
