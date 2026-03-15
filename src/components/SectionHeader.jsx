import React from 'react';
import Reveal from './Reveal';

const SectionHeader = ({ num, title }) => (
  <Reveal style={{ marginBottom: '5rem' }}>
    <div style={{
      display: 'flex', alignItems: 'center', gap: '2rem',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        color: 'var(--glow)', letterSpacing: '0.3em', flexShrink: 0,
      }}>{num}</span>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        letterSpacing: '0.1em', color: 'var(--lavender)', lineHeight: 1,
        flexShrink: 0,
      }}>{title}</h2>
      <div style={{
        flex: 1, height: '1px',
        background: 'linear-gradient(to right, rgba(219,213,242,0.2), transparent)',
      }} />
    </div>
  </Reveal>
);

export default SectionHeader;
