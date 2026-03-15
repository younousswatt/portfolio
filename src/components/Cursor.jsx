import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top = my + 'px';
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovering(true);
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovering(false);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: hovering ? '16px' : '8px', height: hovering ? '16px' : '8px',
        background: hovering ? 'var(--glow-bright)' : 'var(--lavender)',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%,-50%)', transition: 'width 0.2s, height 0.2s, background 0.2s',
        mixBlendMode: 'exclusion'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: hovering ? '48px' : '32px', height: hovering ? '48px' : '32px',
        border: `1px solid ${hovering ? 'var(--glow-bright)' : 'var(--glow)'}`,
        borderRadius: '50%', pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%,-50%)', transition: 'width 0.3s, height 0.3s, border-color 0.3s',
        opacity: hovering ? 0.8 : 0.4
      }} />
    </>
  );
};

export default Cursor;
