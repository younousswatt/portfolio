import React from 'react';
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

const Footer = () => (
  <footer style={{
    padding: '2.5rem 4rem',
    borderTop: '1px solid rgba(84,68,112,0.2)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    position: 'relative', zIndex: 1,
  }}>
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.8rem',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: '1.1rem',
        letterSpacing: '0.25em', color: 'rgba(219,213,242,0.3)',
      }}>YOUNOUSS WATT</span>
    </div>
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
      letterSpacing: '0.2em', color: 'rgba(219,213,242,0.2)',
      textAlign: 'center',
    }}>
      © 2025 · Conçu & développé avec passion · Dakar, Sénégal
    </div>
    <div style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
      letterSpacing: '0.15em', color: 'rgba(219,213,242,0.2)',
    }}>
      v1.0.0
    </div>
  </footer>
);

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
