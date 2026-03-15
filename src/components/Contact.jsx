import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconPhone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const IconPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CONTACTS = [
  { label: 'Email', value: 'wattyounouss6@gmail.com', href: 'mailto:wattyounouss6@gmail.com', icon: <IconMail /> },
  { label: 'Téléphone', value: '+221 77 732 32 19', href: 'tel:+221777323219', icon: <IconPhone /> },
  { label: 'Localisation', value: 'Grand-Dakar, Sénégal', href: null, icon: <IconPin /> },
];

const ContactLink = ({ contact, delay, isMobile }) => {
  const [hov, setHov] = useState(false);
  const El = contact.href ? 'a' : 'div';
  return (
    <Reveal delay={delay}>
      <El
        href={contact.href}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.8rem', textDecoration: 'none', color: 'var(--lavender)',
          transform: hov ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
          minWidth: isMobile ? '120px' : '140px',
        }}
      >
        <div style={{
          width: '56px', height: '56px',
          border: `1px solid ${hov ? 'var(--glow)' : 'rgba(84,68,112,0.5)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hov ? 'var(--purple)' : 'rgba(84,68,112,0.08)',
          transition: 'all 0.3s',
          clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)',
          color: hov ? 'var(--lavender)' : 'var(--purple-light)',
        }}>{contact.icon}</div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--purple-light)', textTransform: 'uppercase' }}>{contact.label}</span>
        <span style={{ fontSize: '0.78rem', color: 'rgba(219,213,242,0.45)', fontFamily: 'var(--font-body)', textAlign: 'center' }}>{contact.value}</span>
      </El>
    </Reveal>
  );
};

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="contact" style={{
      padding: isMobile ? '5rem 1.5rem 4rem' : '8rem 4rem 6rem',
      position: 'relative', zIndex: 1, textAlign: 'center',
      background: 'linear-gradient(180deg, transparent, rgba(46,37,64,0.12))',
    }}>
      <Reveal>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 'clamp(3rem,12vw,5rem)' : 'clamp(4rem,10vw,9rem)',
          letterSpacing: '0.05em', lineHeight: 1,
          background: 'linear-gradient(135deg, var(--lavender), var(--glow))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', marginBottom: '1.5rem',
        }}>
          TRAVAILLONS<br />ENSEMBLE.
        </h2>
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: isMobile ? '1rem' : '1.2rem',
          fontStyle: 'italic', color: 'var(--purple-light)', marginBottom: '4rem',
        }}>
          Prêt à collaborer sur votre prochain projet.
        </p>
      </Reveal>

      <div style={{
        display: 'flex', justifyContent: 'center',
        gap: isMobile ? '2rem' : '4rem',
        flexWrap: 'wrap', marginBottom: '4rem',
      }}>
        {CONTACTS.map((c, i) => (
          <ContactLink key={c.label} contact={c} delay={i * 100} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
