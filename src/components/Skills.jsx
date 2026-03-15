import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const SKILLS_ROW1 = ['Java', 'C', 'Python', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Algorithmique'];
const SKILLS_ROW2 = ['Big Data Basics', 'Structures de données', 'POO', 'Git', 'Gestion fichiers', 'GUI Java', 'Réseaux IP'];

const SKILL_CATS = [
  {
    title: '// Langages',
    items: [
      { name: 'C', pct: 82 },
      { name: 'Java', pct: 76 },
      { name: 'Python', pct: 68 },
      { name: 'JavaScript', pct: 58 },
    ],
  },
  {
    title: '// Frameworks & Stack',
    items: [
      { name: 'React', pct: 55 },
      { name: 'Node.js / Express', pct: 52 },
      { name: 'MongoDB', pct: 50 },
    ],
  },
  {
    title: '// Concepts',
    items: [
      { name: 'Algorithmique', pct: 82 },
      { name: 'Structures de données', pct: 75 },
      { name: 'Réseaux (Cisco)', pct: 55 },
      { name: 'Big Data Basics', pct: 42 },
    ],
  },
];

const Pill = ({ label }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.5rem 1.2rem',
    border: '1px solid rgba(84,68,112,0.45)',
    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--purple-light)', background: 'rgba(84,68,112,0.08)',
    whiteSpace: 'nowrap',
    clipPath: 'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)',
    flexShrink: 0,
  }}>
    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--glow)', display: 'block' }} />
    {label}
  </div>
);

const Marquee = ({ items, reverse = false }) => (
  <div style={{ overflow: 'hidden', marginBottom: '1.2rem' }}>
    <div style={{
      display: 'flex', gap: '1.2rem',
      animation: `marquee${reverse ? 'R' : ''} ${reverse ? 28 : 22}s linear infinite`,
      width: 'max-content',
    }}>
      {[...items, ...items].map((item, i) => <Pill key={i} label={item} />)}
    </div>
    <style>{`
      @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      @keyframes marqueeR { from{transform:translateX(-50%)} to{transform:translateX(0)} }
    `}</style>
  </div>
);

const SkillBar = ({ name, pct }) => {
  const [visible, setVisible] = useState(false);
  const domRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    const el = domRef.current;
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={domRef} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--lavender)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--purple-light)' }}>{pct}%</span>
      </div>
      <div style={{ height: '2px', background: 'rgba(84,68,112,0.3)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, height: '100%',
          background: 'linear-gradient(to right, var(--purple), var(--glow))',
          width: visible ? `${pct}%` : '0%',
          transition: 'width 1.6s cubic-bezier(0.16,1,0.3,1)',
        }} />
      </div>
    </div>
  );
};

const SkillCat = ({ title, items, delay }) => (
  <Reveal delay={delay}>
    <div
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(164,143,212,0.45)'; e.currentTarget.style.transform='translateY(-5px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(84,68,112,0.3)'; e.currentTarget.style.transform='translateY(0)'; }}
      style={{
        border: '1px solid rgba(84,68,112,0.3)', padding: '2.5rem',
        background: 'rgba(84,68,112,0.04)', position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.4s, transform 0.4s',
      }}
    >
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '50px', height: '50px', borderTop: '1px solid rgba(164,143,212,0.15)', borderLeft: '1px solid rgba(164,143,212,0.15)', transform: 'translate(50%,50%) rotate(45deg)' }} />
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.3em', color: 'var(--glow)', textTransform: 'uppercase', marginBottom: '1.8rem' }}>{title}</div>
      {items.map(item => <SkillBar key={item.name} {...item} />)}
    </div>
  </Reveal>
);

const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="skills" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <SectionHeader num="02" title="COMPÉTENCES" />
      <Reveal>
        <Marquee items={SKILLS_ROW1} />
        <Marquee items={SKILLS_ROW2} reverse />
      </Reveal>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
        gap: '2rem', marginTop: '4rem',
      }}>
        {SKILL_CATS.map((cat, i) => <SkillCat key={cat.title} {...cat} delay={i * 100} />)}
      </div>
    </section>
  );
};

export default Skills;
