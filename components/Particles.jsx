// Server component — no 'use client' needed, pure HTML + CSS animations
import styles from './Particles.module.css';

// Predetermined particles to avoid SSR/client mismatch
// Increased opacity and size so they're actually visible on dark backgrounds
const PARTICLES = [
  { size: 3,  left: '4%',  top: '12%', dur: 14, del: 0,  op: 0.22 },
  { size: 4,  left: '10%', top: '55%', dur: 20, del: 4,  op: 0.16 },
  { size: 3,  left: '18%', top: '28%', dur: 17, del: 8,  op: 0.20 },
  { size: 5,  left: '25%', top: '72%', dur: 25, del: 1,  op: 0.14 },
  { size: 3,  left: '32%', top: '40%', dur: 13, del: 6,  op: 0.18 },
  { size: 4,  left: '40%', top: '85%', dur: 22, del: 11, op: 0.15 },
  { size: 3,  left: '47%', top: '18%', dur: 16, del: 3,  op: 0.20 },
  { size: 6,  left: '54%', top: '63%', dur: 28, del: 9,  op: 0.12 },
  { size: 3,  left: '61%', top: '35%', dur: 19, del: 5,  op: 0.18 },
  { size: 4,  left: '68%', top: '78%', dur: 12, del: 14, op: 0.22 },
  { size: 3,  left: '74%', top: '22%', dur: 23, del: 2,  op: 0.16 },
  { size: 5,  left: '80%', top: '50%', dur: 18, del: 7,  op: 0.14 },
  { size: 3,  left: '87%', top: '68%', dur: 15, del: 10, op: 0.20 },
  { size: 4,  left: '92%', top: '30%', dur: 21, del: 13, op: 0.16 },
  { size: 3,  left: '96%', top: '88%', dur: 26, del: 0,  op: 0.18 },
  { size: 3,  left: '14%', top: '91%', dur: 16, del: 5,  op: 0.14 },
  { size: 4,  left: '35%', top: '8%',  dur: 20, del: 8,  op: 0.19 },
  { size: 3,  left: '58%', top: '93%', dur: 14, del: 12, op: 0.15 },
  { size: 4,  left: '76%', top: '7%',  dur: 24, del: 3,  op: 0.21 },
  { size: 3,  left: '48%', top: '48%', dur: 11, del: 6,  op: 0.13 },
  { size: 5,  left: '22%', top: '75%', dur: 19, del: 9,  op: 0.17 },
  { size: 3,  left: '63%', top: '15%', dur: 15, del: 1,  op: 0.20 },
  { size: 4,  left: '88%', top: '42%', dur: 23, del: 7,  op: 0.15 },
  { size: 3,  left: '5%',  top: '60%', dur: 18, del: 11, op: 0.18 },
];

export default function Particles() {
  return (
    <div className={styles.field} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: p.op,
            animationDuration: `${p.dur}s`,
            animationDelay: `-${p.del}s`, /* negative delay = already mid-animation on load */
          }}
        />
      ))}
    </div>
  );
}
