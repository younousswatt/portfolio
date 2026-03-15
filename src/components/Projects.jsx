import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const PROJECTS = [
  {
    type: 'Projet individuel',
    title: 'Gestionnaire de Contacts',
    desc: 'Application console complète pour ajouter, modifier, rechercher et supprimer des contacts avec gestion persistante par fichiers.',
    tech: ['C', 'Structures', 'Fichiers'],
    date: 'Mai 2024',
    color: 'var(--glow)',
  },
  {
    type: 'Projet de groupe',
    title: 'Système de Réservation Bibliothèque',
    desc: "Système de réservation de livres avec gestion des utilisateurs et base de données fichier simple.",
    tech: ['C', 'BDD fichier', 'Collaboration'],
    date: 'Mars 2024',
    color: 'var(--purple-light)',
  },
  {
    type: 'Projet en binôme',
    title: 'Mini Réseau Social',
    desc: "Implémentation d'un mini réseau social avec profils, amis et messagerie. Introduction aux structures de données avancées et interfaces graphiques Java.",
    tech: ['Java', 'POO', 'GUI', 'Structures'],
    date: 'Décembre 2023',
    color: 'var(--lavender)',
  },
];

const ProjectCard = ({ project, delay }) => {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          border: `1px solid ${hov ? 'rgba(164,143,212,0.5)' : 'rgba(84,68,112,0.3)'}`,
          padding: '2.5rem 2rem', background: 'rgba(10,8,16,0.8)',
          position: 'relative', overflow: 'hidden',
          transform: hov ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
          height: '100%',
        }}
      >
        <div style={{
          position: 'absolute', top: '1.2rem', right: '1.2rem',
          width: '16px', height: '16px',
          borderTop: `1px solid ${project.color}`,
          borderRight: `1px solid ${project.color}`,
          opacity: hov ? 1 : 0,
          transform: hov ? 'translate(0,0)' : 'translate(5px,-5px)',
          transition: 'all 0.3s',
        }} />
        {hov && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at top right, rgba(84,68,112,0.15), transparent 70%)',
            pointerEvents: 'none',
          }} />
        )}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.3em', color: project.color, textTransform: 'uppercase', marginBottom: '0.8rem' }}>{project.type}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem,3vw,1.7rem)', letterSpacing: '0.06em', color: 'var(--lavender)', marginBottom: '1rem', lineHeight: 1.1 }}>{project.title}</h3>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(219,213,242,0.5)', marginBottom: '1.5rem' }}>{project.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '0.3rem 0.8rem', border: '1px solid rgba(84,68,112,0.5)', color: 'var(--purple-light)' }}>{t}</span>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(219,213,242,0.2)' }}>{project.date}</div>
      </div>
    </Reveal>
  );
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="projects" style={{
      padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', position: 'relative', zIndex: 1,
      background: 'linear-gradient(180deg, transparent, rgba(46,37,64,0.08) 50%, transparent)',
    }}>
      <SectionHeader num="03" title="PROJETS" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
        gap: isMobile ? '1.5rem' : '2px',
      }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 100} />)}
      </div>
    </section>
  );
};

export default Projects;
