import React, { useEffect, useState } from 'react';
import PCBLogo from './PCBLogo';

const ROLES = [
  "Ingénieur en formation",
  "Développeur Full-Stack",
  "Passionné d'algorithmique",
  "Étudiant ESMT Dakar",
];

const GlitchText = ({ text }) => {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {text}
      {glitch && (
        <>
          <span style={{
            position: 'absolute', top: 0, left: '2px',
            color: 'var(--glow)', clipPath: 'polygon(0 0,100% 0,100% 33%,0 33%)',
            pointerEvents: 'none',
            background: 'linear-gradient(135deg,var(--lavender) 30%,var(--glow) 65%,var(--purple-light) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>{text}</span>
          <span style={{
            position: 'absolute', top: 0, left: '-2px',
            color: 'var(--purple-light)', clipPath: 'polygon(0 67%,100% 67%,100% 100%,0 100%)',
            pointerEvents: 'none',
            background: 'linear-gradient(135deg,var(--lavender) 30%,var(--glow) 65%,var(--purple-light) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>{text}</span>
        </>
      )}
    </span>
  );
};

const TypeWriter = ({ texts }) => {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);

  return (
    <span>
      {displayed}
      <span style={{ borderRight: '2px solid var(--glow)', marginLeft: '2px', animation: 'blink 1s step-end infinite' }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
};

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const fadeUp = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.9s ease ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: isMobile ? '8rem 1.5rem 4rem' : '10rem 4rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-25px)} }
        @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes scanLine { 0%{left:-100%} 100%{left:100%} }
      `}</style>

      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: isMobile ? '300px' : '600px', height: isMobile ? '300px' : '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(84,68,112,0.35), transparent 70%)',
        filter: 'blur(60px)', animation: 'float 8s ease-in-out infinite', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '5%',
        width: isMobile ? '200px' : '350px', height: isMobile ? '200px' : '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(164,143,212,0.15), transparent 70%)',
        filter: 'blur(50px)', animation: 'float 10s ease-in-out infinite reverse', pointerEvents: 'none',
      }} />

      {!isMobile && (
        <div style={{
          position: 'absolute', right: '5%', bottom: '5%',
          opacity: 0.04, pointerEvents: 'none',
          animation: 'spinSlow 40s linear infinite',
        }}>
          <PCBLogo size={300} />
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '950px', width: '100%' }}>
        <div style={{ ...fadeUp(200), display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '30px', height: '1px', background: 'var(--glow)', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: isMobile ? '0.55rem' : '0.65rem',
            letterSpacing: '0.25em', color: 'var(--glow)', textTransform: 'uppercase',
          }}>Étudiant Ingénieur · Dakar, Sénégal</span>
        </div>

        <h1 style={{
          ...fadeUp(400),
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 'clamp(4rem,18vw,6rem)' : 'clamp(5rem,13vw,12rem)',
          lineHeight: 0.88, letterSpacing: '0.04em',
          background: 'linear-gradient(135deg, var(--lavender) 30%, var(--glow) 65%, var(--purple-light) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          <GlitchText text="YOUNOUSS" />
          <br />
          <span style={{
            fontSize: '0.55em', letterSpacing: '0.2em',
            WebkitTextFillColor: 'var(--purple-light)',
          }}>WATT</span>
        </h1>

        <div style={{ ...fadeUp(600), marginTop: '1.5rem', minHeight: '2rem' }}>
          <span style={{
            fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1rem' : '1.1rem',
            fontStyle: 'italic', color: 'var(--purple-light)',
          }}>
            <TypeWriter texts={ROLES} />
          </span>
        </div>

        <p style={{
          ...fadeUp(700), marginTop: '0.6rem',
          fontFamily: 'var(--font-mono)', fontSize: isMobile ? '0.6rem' : '0.7rem',
          letterSpacing: '0.1em', color: 'rgba(219,213,242,0.35)',
        }}>
          {'// «\u00a0Le progrès naît de la curiosité et de la rigueur.\u00a0»'}
        </p>

        <div style={{
          ...fadeUp(900), marginTop: '3rem',
          display: 'flex', gap: '1.5rem', alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#projects" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '0.9rem 2rem',
            background: 'var(--purple)', color: 'var(--lavender)',
            border: '1px solid var(--glow)',
            clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)',
          }}>
            Voir mes projets →
          </a>
          <a href="#contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--purple-light)',
          }}>
            Contact ↗
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '2.5rem', left: isMobile ? '1.5rem' : '4rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
        fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
        letterSpacing: '0.3em', color: 'rgba(219,213,242,0.25)',
        ...fadeUp(1400),
      }}>
        <div style={{ width: '50px', height: '1px', background: 'rgba(219,213,242,0.15)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%', background: 'var(--glow)', animation: 'scanLine 2.5s ease-in-out infinite' }} />
        </div>
        SCROLL
      </div>
    </section>
  );
};

export default Hero;
