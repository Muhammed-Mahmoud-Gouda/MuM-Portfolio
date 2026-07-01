import React from 'react';

export const TechParticlesBackground: React.FC = () => {
  // New Purple circle .NET logo SVG
  const dotnetLogo = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#512BD4" />
      <text x="12" y="14.5" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="'Inter', system-ui, sans-serif" textAnchor="middle">.NET</text>
    </svg>
  );

  // Purple hexagon C# logo SVG
  const csharpLogo = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#512BD4" />
      <path d="M12 2V22L20.66 17V7L12 2Z" fill="#000000" opacity="0.1" />
      <path d="M10.5 15.5C8.8 15.5 7.5 14.2 7.5 12s1.3-3.5 3-3.5c1.0 0 1.7.4 2.1.9l-1.2 1.0c-.2-.3-.5-.5-.9-.5-.9 0-1.4.6-1.4 1.9s.5 1.9 1.4 1.9c.4 0 .7-.2.9-.5l1.2 1.0c-.4.5-1.1.8-2.1.8z" fill="#FFFFFF" />
      <path d="M15.2 12.5h-1.1v-1.1h1.1V10h1v1.4h1.1v1.1h-1.1v1.4h-1v-1.4zm0-2.5h-1.1v-1.1h1.1V10z" fill="#FFFFFF" />
    </svg>
  );

  // Official Red/Silver Microsoft SQL Server Logo from CDN
  const sqlLogo = (
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" 
      alt="SQL Server Logo" 
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
    />
  );

  // Official GitHub Logo from CDN
  const githubLogo = (
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
      alt="GitHub Logo" 
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
    />
  );

  // Array of 12 staggered particles distributing C#, .NET, SQL Server, and GitHub logos
  const particles = [
    { logo: dotnetLogo, size: 28, left: '8%', delay: '0s', duration: '16s', speedX: '15px' },
    { logo: csharpLogo, size: 24, left: '15%', delay: '3s', duration: '19s', speedX: '-20px' },
    { logo: sqlLogo, size: 26, left: '28%', delay: '6s', duration: '14s', speedX: '30px' },
    { logo: githubLogo, size: 22, left: '42%', delay: '2s', duration: '18s', speedX: '-15px' },
    { logo: dotnetLogo, size: 20, left: '55%', delay: '4s', duration: '20s', speedX: '25px' },
    { logo: csharpLogo, size: 30, left: '68%', delay: '7s', duration: '13s', speedX: '-10px' },
    { logo: sqlLogo, size: 22, left: '78%', delay: '1s', duration: '15s', speedX: '20px' },
    { logo: githubLogo, size: 28, left: '90%', delay: '3.5s', duration: '19s', speedX: '-25px' },
    { logo: dotnetLogo, size: 32, left: '22%', delay: '8s', duration: '17s', speedX: '-12px' },
    { logo: csharpLogo, size: 28, left: '62%', delay: '9s', duration: '16s', speedX: '18px' },
    { logo: sqlLogo, size: 24, left: '84%', delay: '5s', duration: '15s', speedX: '-15px' },
    { logo: githubLogo, size: 26, left: '35%', delay: '10s', duration: '20s', speedX: '20px' }
  ];

  return (
    <div className="tech-particles-bg">
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="tech-particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            '--wobble-x': p.speedX,
          } as React.CSSProperties}
        >
          {p.logo}
        </div>
      ))}
    </div>
  );
};
