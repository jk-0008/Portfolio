import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <img src="/profile.jpg" alt="Jaya Ganesh P" className="nav-logo-avatar" />
          <span className="logo-text">Jaya Ganesh<span className="logo-accent">.dev</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-menu">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          <a href="/resume.pdf" download="Jaya_Ganesh_P_Resume.pdf" className="nav-btn-resume">
            Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        <a href="#home" className={`mobile-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMenu}>Home</a>
        <a href="#about" className={`mobile-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>About</a>
        <a href="#skills" className={`mobile-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={closeMenu}>Skills</a>
        <a href="#projects" className={`mobile-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMenu}>Projects</a>
        <a href="#experience" className={`mobile-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={closeMenu}>Experience</a>
        <a href="#contact" className={`mobile-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a>
        <a href="/resume.pdf" download="Jaya_Ganesh_P_Resume.pdf" className="mobile-btn-resume" onClick={closeMenu}>
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
