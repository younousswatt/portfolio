import React, { useEffect, useRef } from 'react';

// Animated PCB trace background using canvas
const PCBBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Trace nodes
    const COLS = 16;
    const ROWS = 10;
    const nodes = [];

    for (let c = 0; c <= COLS; c++) {
      for (let r = 0; r <= ROWS; r++) {
        nodes.push({
          x: (c / COLS) * w,
          y: (r / ROWS) * h,
          active: Math.random() < 0.4,
        });
      }
    }

    // Signal particles
    const particles = [];
    for (let i = 0; i < 12; i++) {
      particles.push({
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        col: Math.floor(Math.random() * COLS),
        row: Math.floor(Math.random() * ROWS),
        horizontal: Math.random() > 0.5,
        alpha: 0.6 + Math.random() * 0.4,
      });
    }

    let tick = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      tick++;

      // Draw grid lines
      const cellW = w / COLS;
      const cellH = h / ROWS;

      // Vertical lines
      for (let c = 0; c <= COLS; c++) {
        const x = c * cellW;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = 'rgba(84,68,112,0.07)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      // Horizontal lines
      for (let r = 0; r <= ROWS; r++) {
        const y = r * cellH;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = 'rgba(84,68,112,0.07)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw node pads
      for (let c = 0; c <= COLS; c++) {
        for (let r = 0; r <= ROWS; r++) {
          const x = c * cellW;
          const y = r * cellH;
          const pulse = Math.sin(tick * 0.02 + c * 0.5 + r * 0.3) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(84,68,112,${0.15 + pulse * 0.15})`;
          ctx.fill();
        }
      }

      // Move and draw signal particles
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.col = Math.floor(Math.random() * COLS);
          p.row = Math.floor(Math.random() * ROWS);
          p.horizontal = Math.random() > 0.5;
        }

        let x1, y1, x2, y2;
        if (p.horizontal) {
          x1 = p.col * cellW;
          x2 = (p.col + 1) * cellW;
          y1 = y2 = p.row * cellH;
        } else {
          x1 = x2 = p.col * cellW;
          y1 = p.row * cellH;
          y2 = (p.row + 1) * cellH;
        }

        const px = x1 + (x2 - x1) * p.progress;
        const py = y1 + (y2 - y1) * p.progress;

        // Trail
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 20);
        grad.addColorStop(0, `rgba(164,143,212,${p.alpha * 0.8})`);
        grad.addColorStop(0.4, `rgba(84,68,112,${p.alpha * 0.3})`);
        grad.addColorStop(1, 'rgba(84,68,112,0)');
        ctx.beginPath();
        ctx.arc(px, py, 20, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,176,240,${p.alpha})`;
        ctx.fill();

        // Draw the trace line segment
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(84,68,112,0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100vw', height: '100vh',
        pointerEvents: 'none', zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
};

export default PCBBackground;
