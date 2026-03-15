import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const EDUCATION = [
  {
    date: '2025 — En cours',
    location: 'Dakar, Sénégal',
    school: 'ESMT',
    degree: 'Cycle Ingénieur',
    desc: "Formation en cours dans une grande école d'ingénieurs de conception. Spécialisation en informatique et systèmes numériques.",
  },
  {
    date: '2023 — 2025',
    location: 'Dakar, Sénégal',
    school: 'ESMT — ESIGELEC — CSC',
    degree: 'Classes Préparatoires Scientifiques (MPSI)',
    desc: "Formation intensive en mathématiques, physique et informatique. Développement d'une rigueur scientifique et d'une forte capacité d'abstraction.",
  },
];

const LANGUAGES = [
  { code: 'FR', name: 'Français', level: 'Natif', pct: 100 },
  { code: 'EN', name: 'Anglais', level: 'Avancé', pct: 80 },
  { code: 'ES', name: 'Espagnol', level: 'Notions', pct: 30 },
];

const FORCES = [
  { icon: '🔬', title: 'CURIOSITÉ', sub: 'Scientifique' },
  { icon: '🎯', title: 'AUTONOMIE', sub: 'Proactivité' },
  { icon: '🧠', title: 'ANALYTIQUE', sub: 'Esprit critique' },
  { icon: '🤝', title: 'ÉQUIPE', sub: 'Collaboration' },
];

const TimelineItem = ({ item, delay }) => (
  <Reveal delay={delay} direction="left">
    <div style={{ position: 'relative', paddingLeft: '3rem', marginBottom: '4rem' }}>
      <div style={{
        position: 'absolute', left: 0, top: '0.3rem',
        width: '12px', height: '12px',
        border: '1px solid var(--glow)',
        background: 'var(--bg)',
        clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)',
      }} />
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
        letterSpacing: '0.2em', color: 'var(--glow)', marginBottom: '0.6rem',
        display: 'flex', gap: '0.8rem', flexWrap: 'wrap',
      }}>
        <span>{item.date}</span>
        <span style={{ color: 'rgba(219,213,242,0.25)' }}>·</span>
        <span style={{ color: 'rgba(219,213,242,0.4)' }}>{item.location}</span>
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        letterSpacing: '0.1em', color: 'var(--lavender)', marginBottom: '0.3rem',
      }}>{item.school}</div>
      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: '0.95rem',
        fontStyle: 'italic', color: 'var(--purple-light)', marginBottom: '0.8rem',
      }}>{item.degree}</div>
      <p style={{
        fontSize: '0.85rem', lineHeight: 1.75,
        color: 'rgba(219,213,242,0.5)', maxWidth: '500px',
      }}>{item.desc}</p>
    </div>
  </Reveal>
);

const LangBar = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    const el = domRef.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(164,143,212,0.4)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(84,68,112,0.3)'; }}
      style={{
        border: '1px solid rgba(84,68,112,0.3)', padding: '1.5rem 1rem',
        textAlign: 'center', transition: 'border-color 0.3s',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '2rem',
        letterSpacing: '0.1em', color: 'var(--lavender)', marginBottom: '0.8rem',
      }}>{lang.code}</div>
      <div style={{
        width: '70%', height: '2px', background: 'rgba(84,68,112,0.3)',
        margin: '0 auto 0.6rem', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, height: '100%',
          background: 'linear-gradient(to right, var(--purple), var(--glow))',
          width: visible ? `${lang.pct}%` : '0%',
          transition: 'width 1.5s cubic-bezier(0.16,1,0.3,1)',
        }} />
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
        letterSpacing: '0.2em', color: 'var(--purple-light)', textTransform: 'uppercase',
      }}>{lang.level}</div>
    </div>
  );
};

const Education = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="education" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', position: 'relative', zIndex: 1 }}>
      <SectionHeader num="04" title="FORMATION" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '4rem' : '6rem',
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0,
            width: '1px', height: '100%',
            background: 'linear-gradient(to bottom, transparent, var(--purple) 20%, var(--purple) 80%, transparent)',
          }} />
          <div style={{ paddingLeft: '2rem' }}>
            {EDUCATION.map((item, i) => (
              <TimelineItem key={item.school} item={item} delay={i * 150} />
            ))}
          </div>
        </div>
        <div>
          <Reveal>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              letterSpacing: '0.3em', color: 'var(--glow)',
              textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>Langues</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '3.5rem' }}>
              {LANGUAGES.map(l => <LangBar key={l.code} lang={l} />)}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              letterSpacing: '0.3em', color: 'var(--glow)',
              textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>Forces personnelles</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
              {FORCES.map(f => (
                <div
                  key={f.title}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(164,143,212,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(84,68,112,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  style={{
                    border: '1px solid rgba(84,68,112,0.3)', padding: '1.5rem',
                    textAlign: 'center', background: 'rgba(84,68,112,0.05)', transition: 'all 0.3s',
                  }}
                >
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '0.1em', color: 'var(--lavender)', marginBottom: '0.2rem' }}>{f.title}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.15em', color: 'var(--purple-light)', textTransform: 'uppercase' }}>{f.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
