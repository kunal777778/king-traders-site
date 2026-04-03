'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './StickyProcess.module.css';

const steps = [
  {
    num: '01',
    label: 'STEP 01 OF 04',
    title: 'Source',
    desc: 'We source premium thermal coal directly from certified mines in the USA — guaranteeing 6900+ GCV NAR, low ash content (7–8%), and consistent purity in every batch we import.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M5 20V8l7-6 7 6v12"/><path d="M9 20v-6h6v6"/><path d="M12 8v.01"/>
      </svg>
    ),
  },
  {
    num: '02',
    label: 'STEP 02 OF 04',
    title: 'Import',
    desc: 'Coal is shipped via certified maritime routes to Nepal. Our team handles all customs clearance, port documentation, and logistics — so you never have to worry about delays.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21l1-1h18l1 1"/><path d="M3 17l2-8h14l2 8"/><rect x="7" y="9" width="10" height="5" rx="1"/><path d="M12 9V5"/><path d="M8 5h8"/>
      </svg>
    ),
  },
  {
    num: '03',
    label: 'STEP 03 OF 04',
    title: 'Certify',
    desc: 'Every batch undergoes rigorous lab testing for calorific value, moisture, ash, and sulphur content. We provide full analysis certificates — so you know exactly what you are buying.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    num: '04',
    label: 'STEP 04 OF 04',
    title: 'Deliver',
    desc: 'Direct truck delivery to your brick kiln or facility within 2–5 working days across Koshi and Madhesh Province. Reliable schedules, no middlemen, no surprises.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

export default function StickyProcess() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Snap to discrete step — no overlapping opacity transitions
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    setActiveIndex(idx);
  });

  const step = steps[activeIndex];

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>

        {/* Gold progress line */}
        <motion.div
          className={styles.progressLine}
          style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
        />

        {/* "How We Work" badge */}
        <div className={styles.sectionLabel}>
          <div className="badge">How We Work</div>
        </div>

        {/* Big faded number — outside AnimatePresence so it doesn't bleed outside sticky */}
        <div className={styles.bgNum} aria-hidden="true">{step.num}</div>

        {/* Step content — AnimatePresence mode="wait" ensures only ONE step renders at a time */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={styles.stepInner}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className={styles.stepLabel}>{step.label}</p>
            <div className={styles.iconRing}>{step.icon}</div>
            <h2 className={styles.stepTitle}>{step.title}</h2>
            <p className={styles.stepDesc}>{step.desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Step dots */}
        <div className={styles.dots}>
          {steps.map((_, i) => (
            <div key={i} className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
