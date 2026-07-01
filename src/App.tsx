import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DeveloperIllustration } from './components/DeveloperIllustration';
import { TechParticlesBackground } from './components/TechParticlesBackground';
import './App.css';

const getSkillGlowColor = (name: string): string => {
  const n = name.toLowerCase();
  if (n.includes('c#') || n.includes('.net') || n === 'oop') {
    return 'rgba(81, 43, 212, 0.18)'; // Purple (#512BD4)
  }
  if (n.includes('sql') || n === 'ssms' || n === 'database design' || n === 'algorithms') {
    return 'rgba(204, 41, 43, 0.18)'; // Red (#CC292B)
  }
  if (n === 'html') {
    return 'rgba(227, 76, 38, 0.18)'; // HTML Orange (#E34C26)
  }
  if (n === 'css') {
    return 'rgba(38, 76, 227, 0.18)'; // CSS Blue (#264DE3)
  }
  if (n === 'bootstrap') {
    return 'rgba(111, 44, 244, 0.18)'; // Bootstrap Purple (#6F2CF4)
  }
  if (n === 'git' || n === 'github') {
    return 'rgba(240, 80, 51, 0.18)'; // Git Orange/Black (#F05033)
  }
  if (n === 'vs code') {
    return 'rgba(0, 120, 215, 0.18)'; // VS Code Blue (#0078D7)
  }
  if (n === 'visual studio') {
    return 'rgba(92, 45, 145, 0.18)'; // Visual Studio Purple (#5C2D91)
  }
  if (n === 'data structures' || n === 'networks') {
    return 'rgba(0, 120, 212, 0.18)'; // MS Blue (#0078D4)
  }
  if (n === 'problem solving') {
    return 'rgba(212, 163, 115, 0.18)'; // Muted gold (#D4A373)
  }
  return 'rgba(0, 0, 0, 0.05)';
};

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingVisible, setLoadingVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeEventifyShot, setActiveEventifyShot] = useState(0);

  const eventifyScreenshots = [
    { src: '/eventify/landingpage1.png', label: 'Landing 1' },
    { src: '/eventify/lamdingpage2.png', label: 'Landing 2' },
    { src: '/eventify/landingpage3.png', label: 'Landing 3' },
    { src: '/eventify/events.png', label: 'Events List' },
    { src: '/eventify/details.png', label: 'Event Details' },
    { src: '/eventify/attendee.png', label: 'Ticket Booking' },
    { src: '/eventify/scanner.png', label: 'QR Scanner' },
    { src: '/eventify/organizerdashboard.png', label: 'Organizer Portal' },
    { src: '/eventify/admindashboard.png', label: 'Admin Dashboard' },
  ];

  const [activePmsShot, setActivePmsShot] = useState(0);

  const pmsScreenshots = [
    { src: '/pms_console_menu.png', label: 'Main Menu' },
    { src: '/pms_console_records.png', label: 'Patients List' },
  ];

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [showArchModal, setShowArchModal] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('muhammedmahmoudgoda66@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('+201064665247');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const [contactData, setContactData] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSending, setContactSending] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSending(true);
    setContactSuccess(false);
    setContactError(false);
    try {
      const response = await fetch('https://formsubmit.co/ajax/muhammedmahmoudgoda66@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          _subject: contactData.subject || "New Portfolio Message",
          message: contactData.message
        })
      });
      if (response.ok) {
        setContactSuccess(true);
        setContactData({ name: '', email: '', subject: '', message: '' });
      } else {
        setContactError(true);
      }
    } catch (err) {
      setContactError(true);
    } finally {
      setContactSending(false);
    }
  };

  useEffect(() => {
    // Simulate GitHub-style top loading progress bar
    const timer1 = setTimeout(() => setLoadingProgress(30), 80);
    const timer2 = setTimeout(() => setLoadingProgress(75), 350);
    const timer3 = setTimeout(() => setLoadingProgress(100), 700);
    const timer4 = setTimeout(() => setLoadingVisible(false), 1050);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    // Detect scrolling on any element in the page using the capture phase
    const handleScroll = (event: any) => {
      const target = event.target;
      const scrollTop = (target === document || target === window)
        ? (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
        : (target.scrollTop || 0);
      
      if (scrollTop > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  useEffect(() => {
    // Intersection Observer to handle fade-in and slide-up animations as sections enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    // Scroll window, documentElement, and body to support all viewport scroll behaviors
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techCategories = [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'C#',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
        },
        {
          name: 'C++',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" />
        },
        {
          name: 'SQL',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#CC292B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C7.58 2 4 4 4 6v12c0 2 3.58 4 8 4s8-2 8-4V6c0-2-4.42-4-8-4z" />
              <path d="M4 6c0 2 3.58 4 8 4s8-2 8-4" />
              <path d="M4 12c0 2 3.58 4 8 4s8-2 8-4" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Back-End Development',
      skills: [
        {
          name: 'ASP.NET Core',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt="ASP.NET Core" />
        },
        {
          name: 'ADO.NET',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg" alt="ADO.NET" />
        },
        {
          name: '.NET Framework',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt=".NET Framework" />
        }
      ]
    },
    {
      title: 'Front-End Development',
      skills: [
        {
          name: 'HTML',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" />
        },
        {
          name: 'CSS',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" />
        },
        {
          name: 'Bootstrap',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
        }
      ]
    },
    {
      title: 'Database & Design',
      skills: [
        {
          name: 'Microsoft SQL Server',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" />
        },
        {
          name: 'Database Design',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#CC292B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="7" height="5" rx="1" />
              <rect x="15" y="2" width="7" height="5" rx="1" />
              <rect x="8" y="17" width="8" height="5" rx="1" />
              <path d="M5.5 7v5h13V7M12 12v5" />
            </svg>
          )
        }
      ]
    },
    {
      title: 'Tools & Environments',
      skills: [
        {
          name: 'Git',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
        },
        {
          name: 'VS Code',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" />
        },
        {
          name: 'Visual Studio',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" />
        },
        {
          name: 'SSMS',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SSMS" />
        },
        {
          name: 'GitHub',
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
        }
      ]
    },
    {
      title: 'Computer Science & Concepts',
      skills: [
        {
          name: 'Data Structures',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="4" r="2.5" fill="#0078D4" />
              <circle cx="6" cy="12" r="2.5" fill="#0078D4" />
              <circle cx="18" cy="12" r="2.5" fill="#0078D4" />
              <circle cx="12" cy="20" r="2.5" fill="#0078D4" />
              <line x1="12" y1="6.5" x2="6" y2="9.5" />
              <line x1="12" y1="6.5" x2="18" y2="9.5" />
              <line x1="6" y1="14.5" x2="12" y2="17.5" />
            </svg>
          )
        },
        {
          name: 'Algorithms',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#CC292B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="20" x2="4" y2="10" />
              <line x1="9" y1="20" x2="9" y2="4" />
              <line x1="14" y1="20" x2="14" y2="13" />
              <line x1="19" y1="20" x2="19" y2="7" />
            </svg>
          )
        },
        {
          name: 'Problem Solving',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#D4A373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <line x1="9" y1="18" x2="15" y2="18" />
              <line x1="10" y1="22" x2="14" y2="22" />
            </svg>
          )
        },
        {
          name: 'Networks',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" fill="#0078D4" />
              <circle cx="4" cy="4" r="2" />
              <circle cx="20" cy="4" r="2" />
              <circle cx="4" cy="20" r="2" />
              <circle cx="20" cy="20" r="2" />
              <line x1="5.5" y1="5.5" x2="10" y2="10" />
              <line x1="18.5" y1="5.5" x2="14" y2="10" />
              <line x1="5.5" y1="18.5" x2="10" y2="10" />
              <line x1="18.5" y1="18.5" x2="14" y2="10" />
            </svg>
          )
        },
        {
          name: 'OOP',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#512BD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="2" width="6" height="5" rx="1" />
              <rect x="2" y="16" width="6" height="5" rx="1" />
              <rect x="16" y="16" width="6" height="5" rx="1" />
              <line x1="12" y1="7" x2="12" y2="11" />
              <line x1="5" y1="11" x2="19" y2="11" />
              <line x1="5" y1="11" x2="5" y2="16" />
              <line x1="19" y1="11" x2="19" y2="16" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <>
      {loadingVisible && (
        <div 
          className="top-loading-bar" 
          style={{ width: `${loadingProgress}%` }}
        />
      )}
      {/* Background Decorations (Static & Clean) */}
      <div className="bg-decorations"></div>

      {/* Floating .NET and C# logo background particles */}
      <TechParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="main-content">
        
        {/* Hero Section */}
        <section id="home" className="hero-section">
          {/* Hero Left: Intro Text */}
          <div className="hero-text">
            {/* Tag / Badge */}
            <div className="hero-tag">
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ color: 'var(--text)' }}>
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
              </svg>
              <span>Full-Stack .NET Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Architecting scalable <span>backends</span> & seamless web experiences
            </h1>

            {/* Description */}
            <p className="hero-desc">
              I specialize in designing scalable backend architectures with C# and .NET Core, paired with interactive, high-performance web applications using React.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#tech-stack" className="btn-secondary">
                View My Skills
              </a>
            </div>
          </div>

          {/* Hero Right: Integrated Grayscale 3D Character */}
          <div className="hero-illustration">
            <DeveloperIllustration />
          </div>
        </section>

        {/* Developer Metrics Bar */}
        <div className="metrics-bar animate-on-scroll">
          <div className="metrics-container">
            <div className="metric-item">
              <span className="metric-number">5+ Layers</span>
              <span className="metric-label">Decoupled Architecture</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">Clean Code</span>
              <span className="metric-label">SOLID Principles</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">Optimized DB</span>
              <span className="metric-label">SQL Server Queries</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">Background Tasks</span>
              <span className="metric-label">Hangfire Services</span>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section id="about" className="about-section animate-on-scroll">
          <div className="about-container">
            {/* Left: Text Details */}
            <div className="about-content">
              <div className="about-tag">
                <span>About Me</span>
              </div>
              <h2 className="about-name">Muhammed Mahmoud Gouda</h2>
              <h3 className="about-title">.NET Developer</h3>
              
              <p className="about-objective">
                Motivated .NET Developer with strong expertise in C#, SQL Server, and object-oriented programming. Skilled in building scalable applications, applying clean code practices, and solving complex problems. Open to contributing technical and analytical skills to innovative software projects.
              </p>

              <div style={{ marginBottom: '8px' }}>
                <a 
                  href="/Muhammed_Mahmoud_Gouda.pdf" 
                  download="Muhammed_Mahmoud_Gouda.pdf" 
                  className="btn-primary"
                  style={{ display: 'inline-flex', textDecoration: 'none' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon" style={{ width: '15px', height: '15px' }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>

              <div className="about-contact-grid">
                <a href="mailto:muhammedmahmoudgoda66@gmail.com" className="contact-pill">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
                    alt="Gmail Logo" 
                    className="contact-icon" 
                    style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                  />
                  <span>muhammedmahmoudgoda66@gmail.com</span>
                </a>

                <a href="tel:+201064665247" className="contact-pill">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+201064665247</span>
                </a>

                <a href="https://wa.me/201064665247" target="_blank" rel="noopener noreferrer" className="contact-pill">
                  <img 
                    src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" 
                    alt="WhatsApp Logo" 
                    className="contact-icon" 
                    style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                  />
                  <span>WhatsApp Chat</span>
                </a>

                <div className="contact-pill static">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Egypt</span>
                </div>

                <a href="https://linkedin.com/in/muhammad-mahmoud-gouda/" target="_blank" rel="noopener noreferrer" className="contact-pill">
                  <svg viewBox="0 0 24 24" className="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="#0077B5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <a href="https://github.com/Muhammed-Mahmoud-Gouda" target="_blank" rel="noopener noreferrer" className="contact-pill">
                  <svg viewBox="0 0 24 24" className="contact-icon" xmlns="http://www.w3.org/2000/svg" fill="#181717">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.65.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Right: Photo Card */}
            <div className="about-photo-wrapper">
              <div className="about-photo-card">
                <img 
                  src="/my_photo.jpg" 
                  alt="Muhammed Mahmoud Gouda" 
                  className="about-profile-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section (Dedicated Category Bento Grid) */}
        <section id="tech-stack" className="tech-stack-section animate-on-scroll">
          <div className="section-header">
            <h2 className="section-title">Tech Stack & Tools</h2>
            <p className="section-desc">
              A detailed directory of my programming languages, frameworks, databases, tools, and core computer science concepts.
            </p>
          </div>

          <div className="tech-categories-grid">
            {techCategories.map((category, idx) => (
              <div key={idx} className="tech-category-card">
                <h3 className="tech-category-title">{category.title}</h3>
                <div className="tech-skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="tech-skill-mini-card"
                      style={{ '--skill-glow': getSkillGlowColor(skill.name) } as React.CSSProperties}
                    >
                      <div className="tech-skill-icon">{skill.icon}</div>
                      <span className="tech-skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section animate-on-scroll">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-desc">
              A showcase of my recent backend and full-stack software development projects, demonstrating Clean Architecture, OOP principles, and robust database designs.
            </p>
          </div>

          <div className="projects-grid">
            {/* Project 1: Eventify Pro */}
            <div className="project-card">
              <div className="project-image-container slider-mode">
                <img 
                  src={eventifyScreenshots[activeEventifyShot].src} 
                  alt={eventifyScreenshots[activeEventifyShot].label} 
                  className="project-image"
                />
                
                {/* Left/Right navigation arrows */}
                <button 
                  className="slider-arrow prev" 
                  onClick={() => setActiveEventifyShot((activeEventifyShot - 1 + eventifyScreenshots.length) % eventifyScreenshots.length)}
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  className="slider-arrow next" 
                  onClick={() => setActiveEventifyShot((activeEventifyShot + 1) % eventifyScreenshots.length)}
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Bottom glassmorphic scrollable tab titles */}
                <div className="slider-tabs-container">
                  <div className="slider-tabs">
                    {eventifyScreenshots.map((shot, index) => (
                      <button 
                        key={index} 
                        className={`slider-tab ${activeEventifyShot === index ? 'active' : ''}`}
                        onClick={() => setActiveEventifyShot(index)}
                      >
                        {shot.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Eventify Pro</h3>
                <p className="project-text">
                  A role-driven enterprise event management system built on a 5-layer N-Tier architecture. Designed to handle real-world operational challenges such as preventing ticket overselling under highly concurrent user traffic, generating fraud-resistant secure tickets with QR codes, integrating payment gateway with Paymob, and processing background tasks queue using Hangfire.
                </p>
                <div className="project-tech-list">
                  <span className="tech-badge">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt="ASP.NET Core" />
                    <span>ASP.NET Core MVC 8</span>
                  </span>
                  <span className="tech-badge">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt="EF Core" />
                    <span>EF Core 8</span>
                  </span>
                  <span className="tech-badge">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" />
                    <span>SQL Server</span>
                  </span>
                  <span className="tech-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                    <span>Paymob API</span>
                  </span>
                  <span className="tech-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Hangfire</span>
                  </span>
                  <span className="tech-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <span>N-Tier Architecture</span>
                  </span>
                </div>
                <div className="project-links">
                  <div className="project-links-row">
                    <a 
                      href="https://github.com/Muhammed-Mahmoud-Gouda/EventifyPro-System" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-btn"
                    >
                      <svg viewBox="0 0 24 24" className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.65.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                    <a 
                      href="https://eventifypro.runasp.net" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-btn secondary"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                  <button 
                    onClick={() => setShowArchModal(true)} 
                    className="project-link-btn secondary full-width"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon" style={{ width: '15px', height: '15px' }}>
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <span>System Architecture Diagram</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2: Patient Management System */}
            <div className="project-card">
              <div className="project-image-container slider-mode">
                <img 
                  src={pmsScreenshots[activePmsShot].src} 
                  alt={pmsScreenshots[activePmsShot].label} 
                  className="project-image"
                />
                
                {/* Left/Right navigation arrows */}
                <button 
                  className="slider-arrow prev" 
                  onClick={() => setActivePmsShot((activePmsShot - 1 + pmsScreenshots.length) % pmsScreenshots.length)}
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button 
                  className="slider-arrow next" 
                  onClick={() => setActivePmsShot((activePmsShot + 1) % pmsScreenshots.length)}
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Bottom glassmorphic scrollable tab titles */}
                <div className="slider-tabs-container">
                  <div className="slider-tabs">
                    {pmsScreenshots.map((shot, index) => (
                      <button 
                        key={index} 
                        className={`slider-tab ${activePmsShot === index ? 'active' : ''}`}
                        onClick={() => setActivePmsShot(index)}
                      >
                        {shot.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Patient Management System (PMS)</h3>
                <p className="project-text">
                  A clinical management application built with a decoupled Clean N-Tier Architecture (Domain, Application, Infrastructure, Console). Features database seed structures, clinic scheduler schemas, robust lookup algorithms, and transactional repository design patterns to organize clinical information.
                </p>
                <div className="project-tech-list">
                  <span className="tech-badge">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" />
                    <span>C#</span>
                  </span>
                  <span className="tech-badge">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt="EF Core" />
                    <span>EF Core</span>
                  </span>
                  <span className="tech-badge">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" />
                    <span>SQL Server</span>
                  </span>
                  <span className="tech-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <span>Clean Architecture</span>
                  </span>
                  <span className="tech-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    <span>OOP Principles</span>
                  </span>
                </div>
                <div className="project-links">
                  <a 
                    href="https://github.com/Muhammed-Mahmoud-Gouda/Patient-Management-System" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                  >
                    <svg viewBox="0 0 24 24" className="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.65.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="contact-section animate-on-scroll">
          <div className="section-header">
            <span className="section-tag">Let's Connect</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-desc">
              Have an exciting project, a job opportunity, or just want to say hello? Drop me a message and I'll get back to you as soon as possible!
            </p>
          </div>

          <div className="contact-container">
            {/* Left: Contact Info / Quick Links */}
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's build something together</h3>
              <p className="contact-info-text">
                I'm always open to discussing backend system architectures, new web applications, database designs, or consulting on C# and .NET solutions.
              </p>

              <div className="contact-details-list">
                <a href="mailto:muhammedmahmoudgoda66@gmail.com" className="contact-detail-item">
                  <div className="detail-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Email Me</span>
                    <span className="detail-value text-break">muhammedmahmoudgoda66@gmail.com</span>
                  </div>
                  <button onClick={handleCopyEmail} className="copy-detail-btn" aria-label="Copy Email">
                    {copiedEmail ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="#155B32" strokeWidth="2.5" className="copy-success-icon" style={{ width: '16px', height: '16px' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    )}
                  </button>
                </a>

                <a href="https://wa.me/201064665247" target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                  <div className="detail-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">WhatsApp Me</span>
                    <span className="detail-value">Instant Chat (+20 1064665247)</span>
                  </div>
                  <div className="contact-detail-actions" style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowQrModal(true);
                      }} 
                      className="copy-detail-btn" 
                      aria-label="Show WhatsApp QR Code"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: '16px', height: '16px' }}>
                        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                        <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                        <path d="M14 14h3v3h-3z"></path>
                        <path d="M14 20h3v1h-3z"></path>
                        <path d="M20 14h1v3h-1z"></path>
                        <path d="M20 20h1v1h-1z"></path>
                      </svg>
                    </button>
                    <button onClick={handleCopyPhone} className="copy-detail-btn" aria-label="Copy Phone">
                      {copiedPhone ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="#155B32" strokeWidth="2.5" className="copy-success-icon" style={{ width: '16px', height: '16px' }}>
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </a>

                <div className="contact-detail-item static">
                  <div className="detail-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="detail-info">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">Egypt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="contact-form-card">
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="form-name">Your Name</label>
                    <input 
                      type="text" 
                      id="form-name" 
                      required 
                      value={contactData.name} 
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="Muhammed Mahmoud"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-email">Your Email</label>
                    <input 
                      type="email" 
                      id="form-email" 
                      required 
                      value={contactData.email} 
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="form-subject">Subject</label>
                  <input 
                    type="text" 
                    id="form-subject" 
                    required 
                    value={contactData.subject} 
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Message</label>
                  <textarea 
                    id="form-message" 
                    rows={5} 
                    required 
                    value={contactData.message} 
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Write your message details here..."
                  ></textarea>
                </div>



                {contactError && (
                  <div className="contact-alert error">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="alert-icon" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <div>
                      <strong>Failed to send message!</strong>
                      <p style={{ margin: '2px 0 0 0', fontSize: '0.82rem' }}>Please try again or contact me directly via email.</p>
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={contactSending} 
                  className={`contact-submit-btn ${contactSending ? 'sending' : ''}`}
                >
                  {contactSending ? (
                    <>
                      <div className="spinner"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon" style={{ width: '15px', height: '15px' }}>
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            {/* Left: Brand */}
            <div className="footer-brand" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
              <span className="brand-dot"></span>
              <span className="brand-text">MuM.Dev</span>
            </div>

            {/* Center: Navigation links */}
            <div className="footer-nav">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#tech-stack" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            {/* Right: Social icons */}
            <div className="footer-socials">
              <a href="https://github.com/Muhammed-Mahmoud-Gouda" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.65.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/muhammad-mahmoud-gouda/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://wa.me/201064665247" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              © {new Date().getFullYear()} MuM.Dev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll-To-Top Button */}
      <button 
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201064665247"
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-whatsapp-btn ${showScrollTop ? 'visible' : ''}`}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="whatsapp-icon">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.511 0 9.998-4.486 10-10 .003-2.672-1.03-5.183-2.909-7.067C16.48 1.653 13.97 1.62 11.999 1.62 6.487 1.62 2 6.108 1.998 11.62c0 1.688.497 3.332 1.44 4.887l-1.026 3.738 3.84-.997zM16.92 14.15c-.27-.136-1.597-.79-1.847-.88-.25-.09-.43-.136-.61.136-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.065-2.73-1.374-4.51-2.92-5.74-5.025-.16-.273-.017-.42.12-.556.12-.12.27-.32.41-.475.14-.15.19-.25.28-.42.09-.17.045-.32-.02-.455-.065-.135-.61-1.474-.836-2.02-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.71.32-.24.25-.92.9-1.06 2.2-.14 1.3.84 2.56 1.06 2.86.22.3 2.11 3.2 5.11 4.5 1.76.76 3.14 1.22 4.22 1.57.88.28 1.68.24 2.3.15.7-.1 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.29-.07-.11-.25-.2-.52-.335z"/>
        </svg>
        <span className="whatsapp-dot"></span>
      </a>

      {/* Premium Success Modal */}
      {contactSuccess && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <div className="success-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="checkmark-svg">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="success-modal-title">Message Sent!</h3>
            <p className="success-modal-text">
              Thank you! Muhammed has received your message. If this is your first time, check your inbox for the FormSubmit activation link!
            </p>
            <button className="success-modal-close" onClick={() => setContactSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* N-Tier Architecture Diagram Modal */}
      {showArchModal && (
        <div className="arch-modal-overlay" onClick={() => setShowArchModal(false)}>
          <div className="arch-modal animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <button className="arch-modal-close-btn" onClick={() => setShowArchModal(false)} aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '18px', height: '18px' }}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="arch-modal-header">
              <h3 className="arch-modal-title">Eventify Pro System Architecture</h3>
              <p className="arch-modal-desc">
                Interactive representation of the 5-Layer N-Tier Architecture. Each layer operates with decoupled dependencies.
              </p>
            </div>

            <div className="arch-diagram-flow">
              {/* Layer 1 */}
              <div className="arch-layer-card web-layer">
                <div className="layer-num-badge">Layer 1</div>
                <h4 className="layer-title">Presentation / Web Layer</h4>
                <p className="layer-summary">Handles HTTP requests, client-side views, and controller routing.</p>
                <div className="layer-details">
                  <strong>Tech Stack:</strong> ASP.NET Core MVC 8, Razor Views, React Frontend, ViewModels, Controllers.
                </div>
              </div>

              <div className="flow-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow-down-svg">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>

              {/* Layer 2 */}
              <div className="arch-layer-card bll-layer">
                <div className="layer-num-badge">Layer 2</div>
                <h4 className="layer-title">Business Logic Layer (BLL)</h4>
                <p className="layer-summary">Coordinates domain models, enforces validations, manages payments, and queues background jobs.</p>
                <div className="layer-details">
                  <strong>Tech Stack:</strong> Hangfire Queue Services, Paymob API Integration Services, Business Rules, Validation Engines.
                </div>
              </div>

              <div className="flow-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow-down-svg">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>

              {/* Layer 3 */}
              <div className="arch-layer-card dal-layer">
                <div className="layer-num-badge">Layer 3</div>
                <h4 className="layer-title">Data Access Layer (DAL)</h4>
                <p className="layer-summary">Handles persistent storage read/write queries and repository configurations.</p>
                <div className="layer-details">
                  <strong>Tech Stack:</strong> Entity Framework Core 8, DbContext, Migrations, Repository Patterns, SQL Server Client.
                </div>
              </div>

              <div className="flow-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow-down-svg">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>

              {/* Layer 4 */}
              <div className="arch-layer-card domain-layer">
                <div className="layer-num-badge">Layer 4</div>
                <h4 className="layer-title">Domain / Entities Layer</h4>
                <p className="layer-summary">Contains central database tables, schemas, core constraints, and user roles.</p>
                <div className="layer-details">
                  <strong>Entities:</strong> Event, Ticket, Booking, User, Role. (Independent layer referenced by all).
                </div>
              </div>

              <div className="flow-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="arrow-down-svg">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>

              {/* Layer 5 */}
              <div className="arch-layer-card shared-layer">
                <div className="layer-num-badge">Layer 5</div>
                <h4 className="layer-title">Shared Infrastructure Layer</h4>
                <p className="layer-summary">Supplies cross-cutting helpers, logging, security encoders, and app configurations.</p>
                <div className="layer-details">
                  <strong>Tech Stack:</strong> Serilog Logger, Cryptography Encoders, Constants, JSON Config Utilities.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp QR Code Modal */}
      {showQrModal && (
        <div className="success-modal-overlay" onClick={() => setShowQrModal(false)}>
          <div className="success-modal animate-scale-up" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '360px', padding: '30px 24px' }}>
            <h3 className="success-modal-title" style={{ fontSize: '1.25rem' }}>Scan to Chat</h3>
            <p className="success-modal-text" style={{ fontSize: '0.85rem' }}>
              Scan this QR code with your phone camera to start a chat with Muhammed instantly.
            </p>
            <div className="qr-container" style={{ margin: '15px 0', padding: '16px', backgroundColor: '#F8F9FA', borderRadius: '16px', border: '1px solid var(--border)' }}>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Fwa.me%2F201064665247" 
                alt="WhatsApp QR Code" 
                style={{ width: '200px', height: '200px', display: 'block' }}
              />
            </div>
            <button className="success-modal-close" onClick={() => setShowQrModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
