'use client';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = '01#@%&*?<>+=-_\\/';

export default function DecodeText({ text, speed = 30 }) {
  const [displayText, setDisplayText] = useState(text); 
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef(null);
  
  // Only trigger once when scrolled into view
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  useEffect(() => {
    if (!isInView || hasRun) return;
    setHasRun(true);
    
    let iteration = 0;
    let interval = null;
    const maxIterations = text.length;

    interval = setInterval(() => {
      setDisplayText(
        text.split('').map((letter, index) => {
          if (letter === ' ') return ' '; // Preserve spacing natively
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      // Decodes 1 actual character every 2 intervals, making the "scramble" highly visible
      iteration += 1 / 2; 
      
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text); // Force exact match at end
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed, hasRun]);

  return (
    <span ref={ref} style={{ display: 'inline-block' }}>
      {/* Invisible actual text for perfect SEO and hydration matching */}
      <span style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}>{text}</span>
      {/* Visible interactive cyber-scramble text */}
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}
