import React, { useState, useEffect } from 'react';
import PCBLogo from './PCBLogo';

const NAV_LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Formation', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 160) setActive(s.id);
      });
    };
    const onResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '1rem 1.5rem' : '1.2rem 4rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        background: scrolled || menuOpen ? 'rgba(10,8,16,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(84,68,112,0.2)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <PCBLogo size={36} animated />
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.3rem',
            letterSpacing: '0.25em', color: 'var(--lavender)',
          }}>YW</span>
        </a>

        {isMobile ? (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ color: 'var(--lavender)', padding: '0.5rem', background: 'none', border: 'none' }}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        ) : (
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = active === id;
              return (
                <li key={href}>
                  <a href={href} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: isActive ? 'var(--lavender)' : 'var(--purple-light)',
                    position: 'relative', transition: 'color 0.3s', paddingBottom: '4px',
                  }}>
                    {label}
                    <span style={{
                      position: 'absolute', bottom: 0, left: 0,
                      width: isActive ? '100%' : '0%', height: '1px',
                      background: 'var(--glow)', transition: 'width 0.3s', display: 'block',
                    }} />
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,8,16,0.98)', borderBottom: '1px solid rgba(84,68,112,0.3)',
          padding: '1.5rem',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '1rem 0',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--purple-light)',
                borderBottom: '1px solid rgba(84,68,112,0.15)',
              }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
