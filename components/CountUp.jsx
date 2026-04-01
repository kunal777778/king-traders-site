'use client';

import { useState, useEffect, useRef } from 'react';

// Parses "6900+" → { num: 6900, suffix: '+' }
// "24/7" or anything non-matching → returns null (display as-is)
function parse(value) {
  const m = String(value).match(/^(\d+)([+]?)$/);
  if (!m) return null;
  return { num: parseInt(m[1], 10), suffix: m[2] || '' };
}

export default function CountUp({ value, duration = 1800 }) {
  const parsed = parse(value);
  const [display, setDisplay] = useState(parsed ? `0${parsed.suffix}` : value);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!parsed) return;
    const { num, suffix } = parsed;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const t = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
            setDisplay(Math.round(eased * num) + suffix);
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref}>{display}</span>;
}
