'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import styles from './CoalShardReveal.module.css';

const specs = [
  {
    param: 'Calorific Value (GCV NAR)',
    value: '6900+',
    unit: 'kcal/kg',
    highlight: true,
    desc: 'Among the highest GCV thermal coal available in Nepal',
  },
  {
    param: 'Volatile Matter',
    value: '39–40%',
    unit: '',
    highlight: false,
    desc: 'High volatile content for efficient, fast ignition',
  },
  {
    param: 'Ash Content',
    value: '7–8%',
    unit: '',
    highlight: false,
    desc: 'Ultra-low ash ensures cleaner burning and less waste',
  },
  {
    param: 'Sulphur Content',
    value: '2–3%',
    unit: '',
    highlight: false,
    desc: 'Lower emissions profile for industrial operations',
  },
  {
    param: 'Origin',
    value: 'USA',
    unit: '',
    highlight: true,
    desc: 'Directly imported from certified USA mines',
  },
];

// Crack paths in viewBox "0 0 100 100" from center (50,50)
const cracks = [
  'M 50 50 L 48 28 L 44 4',
  'M 50 50 L 68 28 L 88 8',
  'M 50 50 L 80 52 L 98 48',
  'M 50 50 L 56 74 L 52 97',
  'M 50 50 L 24 68 L 4 72',
];

// Glow dot endpoints matching crack paths above
const crackEnds = [
  [44, 4],
  [88, 8],
  [98, 48],
  [52, 97],
  [4, 72],
];

export default function CoalShardReveal() {
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // 0→1 maps to 0→5 visible specs
    const count = Math.min(specs.length, Math.ceil(v * (specs.length + 0.5)));
    setVisibleCount(count);
  });

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.sticky}>

        {/* Gold progress line */}
        <motion.div
          className={styles.progressLine}
          style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
        />

        <div className={styles.inner}>

          {/* ── Left: Coal image with animated crack SVG ── */}
          <div className={styles.imageCol}>
            <div className={styles.badge}>Coal Specifications</div>
            <div className={styles.imageWrap}>
              <Image
                src="/coal-product.png"
                alt="Premium USA thermal coal"
                fill
                className={styles.coalImg}
              />
              {/* Dark overlay so cracks pop */}
              <div className={styles.imgOverlay} />

              {/* SVG crack lines */}
              <svg
                className={styles.crackSvg}
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Center glow */}
                <motion.circle
                  cx="50" cy="50" r="4"
                  fill="rgba(212,168,67,0.6)"
                  animate={visibleCount > 0 ? { r: [4, 6, 4], opacity: [0.6, 1, 0.6] } : { r: 4, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {cracks.map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="rgba(212,168,67,0.85)"
                    strokeWidth="0.8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      visibleCount > i
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                  />
                ))}

                {/* Endpoint glow dots */}
                {crackEnds.map(([cx, cy], i) => (
                  <motion.circle
                    key={`dot-${i}`}
                    cx={cx}
                    cy={cy}
                    r="2.5"
                    fill="rgba(212,168,67,0.9)"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      visibleCount > i
                        ? { scale: 1, opacity: [0, 1, 0.7] }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{ delay: 0.5, duration: 0.4 }}
                  />
                ))}

                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Lab cert note */}
            <motion.p
              className={styles.certNote}
              initial={{ opacity: 0 }}
              animate={visibleCount >= specs.length ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              📋 Lab reports &amp; analysis certificates available on request
            </motion.p>
          </div>

          {/* ── Right: Spec list ── */}
          <div className={styles.specsCol}>
            <h2 className={styles.heading}>
              USA High GCV<br /><span className="gradient-text">Thermal Coal</span>
            </h2>

            <div className={styles.specsList}>
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  className={`${styles.specItem} ${spec.highlight ? styles.specHighlight : ''}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    visibleCount > i
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0.1, x: 30 }
                  }
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Animated bar */}
                  <div className={styles.barWrap}>
                    <motion.div
                      className={styles.barFill}
                      initial={{ scaleX: 0 }}
                      animate={visibleCount > i ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                    />
                  </div>

                  <div className={styles.specContent}>
                    <span className={styles.specParam}>{spec.param}</span>
                    <span className={`${styles.specValue} ${spec.highlight ? styles.specValueGold : ''}`}>
                      {spec.value}
                      {spec.unit && <small className={styles.specUnit}> {spec.unit}</small>}
                    </span>
                    <span className={styles.specDesc}>{spec.desc}</span>
                  </div>

                  {spec.highlight && (
                    <div className={styles.highlightBadge}>✦ Premium</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Step dots */}
        <div className={styles.dots}>
          {specs.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${visibleCount > i ? styles.dotActive : ''}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
