import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const StatCard = ({ num, label, delay }) => (
  <Reveal delay={delay}>
    <div
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(164,143,212,0.5)'; e.currentTarget.style.transform='translateY(-4px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(84,68,112,0.4)'; e.currentTarget.style.transform='translateY(0)'; }}
      style={{
        border: '1px solid rgba(84,68,112,0.4)', padding: '2rem',
        background: 'rgba(84,68,112,0.05)', position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.3s',
      }}
    >
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--lavender)', lineHeight: 1, letterSpacing: '0.05em' }}>{num}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em', color: 'var(--purple-light)', marginTop: '0.5rem', textTransform: 'uppercase' }}>{label}</div>
    </div>
  </Reveal>
);

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="about" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', position: 'relative', zIndex: 1 }}>
      <SectionHeader num="01" title="À PROPOS" />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'start' }}>
        <div>
          <Reveal>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(219,213,242,0.7)', marginBottom: '1.5rem' }}>
              Je suis <strong style={{ color: 'var(--lavender)' }}>Younouss Watt</strong>, étudiant en cycle ingénieur à l'ESMT de Dakar. Après deux années de classes préparatoires scientifiques intensives (MPSI), j'ai intégré l'une des grandes écoles d'ingénieurs du Sénégal.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(219,213,242,0.7)', marginBottom: '1.5rem' }}>
              Passionné par le développement logiciel, j'explore les domaines du <strong style={{ color: 'var(--lavender)' }}>développement full-stack</strong>, de l'algorithmique, du <strong style={{ color: 'var(--lavender)' }}>Python scientifique</strong> et des bases du Big Data.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <blockquote style={{
              fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic',
              color: 'var(--glow)', borderLeft: '2px solid var(--purple)',
              paddingLeft: '2rem', margin: '2.5rem 0', lineHeight: 1.6,
            }}>
              « Le progrès naît de la curiosité et de la rigueur. »
            </blockquote>
          </Reveal>
          <Reveal delay={300}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'rgba(219,213,242,0.7)' }}>
              Chaque projet est pour moi une occasion d'apprendre et de me dépasser. La rigueur mathématique et la créativité technique se renforcent mutuellement.
            </p>
          </Reveal>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <StatCard num="3+" label="Projets académiques" delay={0} />
          <StatCard num="2+" label="Années prépa" delay={100} />
          <StatCard num="6+" label="Technologies" delay={200} />
          <StatCard num="3" label="Langues parlées" delay={300} />
        </div>
      </div>
    </section>
  );
};

export default About;
