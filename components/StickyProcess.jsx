'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import styles from './StickyProcess.module.css';

const steps = [
  {
    num: '01',
    title: 'Source',
    label: 'STEP 01 OF 04',
    desc: 'We source premium thermal coal directly from certified mines in the USA — guaranteeing 6900+ GCV NAR, low ash content (7–8%), and consistent purity in every batch we import.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/>
        <path d="M5 20V8l7-6 7 6v12"/>
        <path d="M9 20v-6h6v6"/>
        <path d="M12 8v.01"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Import',
    label: 'STEP 02 OF 04',
    desc: 'Coal is shipped via certified maritime routes to Nepal. Our team handles all customs clearance, port documentation, and logistics — so you never have to worry about delays.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 21l1-1h18l1 1"/>
        <path d="M3 17l2-8h14l2 8"/>
        <rect x="7" y="9" width="10" height="5" rx="1"/>
        <path d="M12 9V5"/>
        <path d="M8 5h8"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Certify',
    label: 'STEP 03 OF 04',
    desc: 'Every batch undergoes rigorous lab testing for calorific value, moisture, ash, and sulphur content. We provide full analysis certificates — so you know exactly what you are buying.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Deliver',
    label: 'STEP 04 OF 04',
    desc: 'Direct truck delivery to your brick kiln or facility within 2–5 working days across Koshi and Madhesh Province. Reliable schedules, no middlemen, no surprises.',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

function ProcessStep({ step, progress, index, total }) {
  const start = index / total;
  const end = (index + 1) / total;
  const isLast = index === total - 1;

  // Each step fades in quickly at `start`, stays visible, then fades out completely
  // by `end` before the next step begins — no overlap between steps
  const opacity = useTransform(
    progress,
    [start, start + 0.06, isLast ? 1 : end - 0.06, isLast ? 1 : end],
    [0, 1, 1, isLast ? 1 : 0]
  );
  const y = useTransform(
    progress,
    [start, start + 0.07],
    [55, 0]
  );

  return (
    <motion.div className={styles.step} style={{ opacity, y }}>
      {/* Giant background number */}
      <div className={styles.bgNum} aria-hidden="true">{step.num}</div>

      <div className={styles.stepInner}>
        <p className={styles.stepLabel}>{step.label}</p>
        <div className={styles.iconRing}>
          {step.icon}
        </div>
        <h2 className={styles.stepTitle}>{step.title}</h2>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </motion.div>
  );
}

function StepDots({ progress, total }) {
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, 'change', (v) => {
    setActive(Math.min(total - 1, Math.floor(v * total)));
  });
  return (
    <div className={styles.dots}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} />
      ))}
    </div>
  );
}

export default function StickyProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>
        {/* Gold progress line at top of section */}
        <motion.div className={styles.progressLine} style={{ scaleX: scrollYProgress }} />

        {/* Steps */}
        {steps.map((step, i) => (
          <ProcessStep
            key={step.num}
            step={step}
            progress={scrollYProgress}
            index={i}
            total={steps.length}
          />
        ))}

        {/* Header */}
        <div className={styles.sectionLabel}>
          <div className="badge">How We Work</div>
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint}>
          <span>Scroll to explore</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>

        {/* Step dots */}
        <StepDots progress={scrollYProgress} total={steps.length} />
      </div>
    </div>
  );
}
