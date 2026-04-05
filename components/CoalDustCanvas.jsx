'use client';

import { useEffect, useRef } from 'react';
import styles from './CoalDustCanvas.module.css';

// Physics-Notebook BaseVisual pattern — adapted for coal dust atmosphere
export default function CoalDustCanvas() {
  const canvasRef = useRef(null);
  const stateRef = useRef({ particles: [], raf: null, alive: true });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = stateRef.current;

    // HiDPI scaling (Physics-Notebook pattern)
    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      state.w = w;
      state.h = h;
    };
    setSize();

    // Particle factory
    const createParticle = () => {
      const w = state.w;
      const h = state.h;
      return {
        x: Math.random() * w,
        y: h + Math.random() * 40,       // start below canvas
        size: Math.random() * 2.8 + 0.5, // 0.5 – 3.3 px radius
        speedY: -(Math.random() * 0.35 + 0.08), // drift upward slowly
        speedX: (Math.random() - 0.5) * 0.25,   // gentle horizontal drift
        opacity: Math.random() * 0.18 + 0.04,   // very subtle: 0.04–0.22
        wobble: Math.random() * Math.PI * 2,     // phase offset for sine wobble
        wobbleSpeed: Math.random() * 0.012 + 0.004,
        wobbleAmp: Math.random() * 0.8 + 0.2,   // horizontal wiggle amplitude
        // Gold sparkle chance (1 in 14 particles gets a gold tint)
        gold: Math.random() < 0.07,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    };

    // Spawn initial particles
    const COUNT = 55;
    for (let i = 0; i < COUNT; i++) {
      const p = createParticle();
      // Scatter initial positions across the canvas height for a natural start
      p.y = Math.random() * state.h;
      p.life = Math.random() * p.maxLife;
      state.particles.push(p);
    }

    const draw = () => {
      if (!state.alive) return;
      ctx.clearRect(0, 0, state.w, state.h);

      for (let i = 0; i < state.particles.length; i++) {
        const p = state.particles[i];

        // Update position
        p.wobble += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobble) * p.wobbleAmp * 0.05;
        p.y += p.speedY;
        p.life++;

        // Fade in / fade out based on life fraction
        const lifeFrac = p.life / p.maxLife;
        let alpha = p.opacity;
        if (lifeFrac < 0.12) alpha *= lifeFrac / 0.12;
        if (lifeFrac > 0.8) alpha *= (1 - lifeFrac) / 0.2;

        // Respawn when out of canvas or life exhausted
        if (p.y < -10 || p.life >= p.maxLife) {
          state.particles[i] = createParticle();
          continue;
        }

        // Draw particle
        ctx.save();
        if (p.gold) {
          // Tiny gold sparkle — slightly larger, brighter
          ctx.shadowColor = 'rgba(212, 168, 67, 0.6)';
          ctx.shadowBlur = 4;
          ctx.fillStyle = `rgba(212, 168, 67, ${alpha * 1.4})`;
        } else {
          // Coal dust — near-black with very slight warmth
          const shade = Math.floor(Math.random() * 25 + 18); // 18–43
          ctx.fillStyle = `rgba(${shade}, ${shade - 4}, ${shade - 8}, ${alpha})`;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      state.raf = requestAnimationFrame(draw);
    };

    // IntersectionObserver — only animate when visible (Physics-Notebook pattern)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!state.raf) state.raf = requestAnimationFrame(draw);
        } else {
          if (state.raf) {
            cancelAnimationFrame(state.raf);
            state.raf = null;
          }
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      setSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      state.alive = false;
      if (state.raf) cancelAnimationFrame(state.raf);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
