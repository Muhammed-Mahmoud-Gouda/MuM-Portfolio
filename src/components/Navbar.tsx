import React, { useEffect, useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Force light mode: remove any leftover dark-mode classes and preferences
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('theme');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tech-stack', 'projects', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above 250px and the bottom is below 250px, it is active
          if (rect.top <= 250 && rect.bottom >= 250) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, true);
    // Initial call to set active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'nav-open' : ''}`}>
      <div className="navbar-top-row">
        <a href="#home" className="nav-logo" onClick={() => setIsOpen(false)}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="nav-logo-star">
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
          </svg>
          <span>MuM.Dev</span>
        </a>

        {/* Hamburger Toggle Button */}
        <button 
          className={`hamburger-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={`nav-links-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>About</a>
          <a href="#tech-stack" className={`nav-link ${activeSection === 'tech-stack' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <div className="nav-actions">
          {/* CTA Button */}
          <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>
            Let's Talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
