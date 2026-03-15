import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const IconCode = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconLayers = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>
);
const IconServer = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const CERTS = [
  {
    issuer: 'SoloLearn',
    issuerColor: '#a48fd4',
    name: 'C Intermediate',
    date: 'Mai 2025',
    id: 'CC-WB8ESVP9',
    desc: 'Maîtrise intermédiaire du langage C confirmée par évaluation théorique et pratique.',
    icon: <IconCode />,
    hours: null,
    link: null,
  },
  {
    issuer: 'freeCodeCamp',
    issuerColor: '#f03c2e',
    name: 'Scientific Computing with Python',
    date: 'Juin 2025',
    id: 'fcc-513190fd-58a3-42f9-8976-3eb47da4fe3d',
    desc: 'Developer Certification — représentant environ 300 heures de travail en Python scientifique.',
    icon: <IconLayers />,
    hours: '300h',
    link: 'https://freecodecamp.org/certification/fcc-513190fd-58a3-42f9-8976-3eb47da4fe3d/scientific-computing-with-python-v7',
  },
  {
    issuer: 'Cisco Networking Academy',
    issuerColor: '#1ba0d7',
    name: 'Notions de base sur les réseaux',
    date: 'Décembre 2025',
    id: 'ESMT · Instructeur: Doudou FAYE',
    desc: 'Programme Cisco Networking Academy. Fondamentaux des réseaux informatiques, adressage IP, protocoles de communication.',
    icon: <IconServer />,
    hours: null,
    link: null,
  },
];

const CertCard = ({ cert, delay }) => {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          border: `1px solid ${hov ? 'rgba(164,143,212,0.5)' : 'rgba(84,68,112,0.35)'}`,
          padding: '2.5rem 2rem',
          background: hov ? 'rgba(84,68,112,0.08)' : 'rgba(84,68,112,0.03)',
          position: 'relative', overflow: 'hidden',
          transform: hov ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
          height: '100%',
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(to right, var(--purple), ${cert.issuerColor})`,
          transform: `scaleX(${hov ? 1 : 0})`,
          transformOrigin: 'left', transition: 'transform 0.4s',
        }} />

        {cert.hours && (
          <div style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
            letterSpacing: '0.15em', padding: '0.2rem 0.6rem',
            border: '1px solid rgba(84,68,112,0.5)', color: 'var(--glow)',
          }}>{cert.hours}</div>
        )}

        <div style={{ color: cert.issuerColor, marginBottom: '1.2rem', opacity: 0.9 }}>{cert.icon}</div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.3em', color: cert.issuerColor, textTransform: 'uppercase', marginBottom: '0.6rem' }}>{cert.issuer}</div>

        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2.5vw,1.5rem)', letterSpacing: '0.05em', color: 'var(--lavender)', marginBottom: '0.5rem', lineHeight: 1.1 }}>{cert.name}</div>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--glow)', marginBottom: '1rem' }}>{cert.date}</div>

        <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(219,213,242,0.45)', marginBottom: '1.2rem' }}>{cert.desc}</p>

        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'rgba(219,213,242,0.2)', marginBottom: cert.link ? '1rem' : 0, wordBreak: 'break-all' }}>{cert.id}</div>

        {cert.link && (
          <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--glow)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          }}>
            Vérifier ↗
          </a>
        )}
      </div>
    </Reveal>
  );
};

const Certifications = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="certifications" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', position: 'relative', zIndex: 1 }}>
      <SectionHeader num="05" title="CERTIFICATIONS" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
        gap: '2rem',
      }}>
        {CERTS.map((cert, i) => <CertCard key={cert.name} cert={cert} delay={i * 120} />)}
      </div>
    </section>
  );
};

export default Certifications;
