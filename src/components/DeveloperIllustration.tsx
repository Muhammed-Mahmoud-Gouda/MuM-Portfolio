import React, { useState, useEffect } from 'react';

export const DeveloperIllustration: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '480px',
    height: '480px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1200px',
    overflow: 'visible',
  };

  // 3D dot grid background behind the character
  const dotGridStyle: React.CSSProperties = {
    position: 'absolute',
    width: '320px',
    height: '320px',
    zIndex: 1,
    pointerEvents: 'none',
    backgroundSize: '24px 24px',
    backgroundImage: 'radial-gradient(circle, #EAEAEA 1.5px, transparent 1.5px)',
    opacity: 0.8,
    transform: `translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, -30px)`,
    transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  // Outlined large typography behind the character
  const outlineTextStyle: React.CSSProperties = {
    position: 'absolute',
    fontFamily: 'var(--heading)',
    fontSize: '9.5rem',
    fontWeight: 900,
    color: 'transparent',
    WebkitTextStroke: '1px #E5E5E5',
    letterSpacing: '-0.06em',
    zIndex: 2,
    pointerEvents: 'none',
    userSelect: 'none',
    transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, -20px)`,
    transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    width: '380px',
    height: '380px',
    transformStyle: 'preserve-3d',
    transform: `rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg) scale(1.02)`,
    transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transform: 'translateZ(30px)',
    pointerEvents: 'none',
    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 92%, rgba(0,0,0,0.1) 98%, rgba(0,0,0,0) 100%)',
    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 92%, rgba(0,0,0,0.1) 98%, rgba(0,0,0,0) 100%)',
  };

  return (
    <div style={containerStyle}>
      {/* Structural Dot Grid */}
      <div style={dotGridStyle}></div>

      {/* Outlined Background Typography */}
      <div style={outlineTextStyle}>.NET</div>

      {/* Main Integrated Container */}
      <div style={wrapperStyle}>
        <img
          src="/developer_3d_new.png"
          alt="3D Developer Character"
          style={imageStyle}
        />
      </div>
    </div>
  );
};
