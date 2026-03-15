import React, { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import PCBBackground from './components/PCBBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <footer style={{
      padding: isMobile ? '2rem 1.5rem' : '2.5rem 4rem',
      borderTop: '1px solid rgba(84,68,112,0.2)',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0.8rem',
      position: 'relative', zIndex: 1,
      textAlign: isMobile ? 'center' : 'left',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.25em', color: 'rgba(219,213,242,0.3)' }}>YOUNOUSS WATT</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(219,213,242,0.18)' }}>© 2025 · Conçu & développé avec passion · Dakar, Sénégal</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.15em', color: 'rgba(219,213,242,0.18)' }}>v1.0.0</span>
    </footer>
  );
};

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Cursor />
      <PCBBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
