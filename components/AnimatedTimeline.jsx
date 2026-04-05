'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './AnimatedTimeline.module.css';

function MilestoneCard({ milestone, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={styles.row}>
      {/* Left slot */}
      {isLeft ? (
        <motion.div
          className={`${styles.card} ${styles.cardLeft}`}
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <span className={styles.cardYear}>{milestone.year}</span>
          <p className={styles.cardEvent}>{milestone.event}</p>
        </motion.div>
      ) : (
        <div className={styles.spacer} />
      )}

      {/* Center dot */}
      <div className={styles.dotCol}>
        <motion.div
          className={styles.dotOuter}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className={styles.dotInner} />
          <motion.div
            className={styles.dotRing}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1.8, opacity: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, repeatDelay: 2 }}
          />
        </motion.div>
      </div>

      {/* Right slot */}
      {!isLeft ? (
        <motion.div
          className={`${styles.card} ${styles.cardRight}`}
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <span className={styles.cardYear}>{milestone.year}</span>
          <p className={styles.cardEvent}>{milestone.event}</p>
        </motion.div>
      ) : (
        <div className={styles.spacer} />
      )}
    </div>
  );
}

export default function AnimatedTimeline({ milestones }) {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true, margin: '-50px' });

  return (
    <div className={styles.timeline}>
      {/* Vertical gold line */}
      <div ref={lineRef} className={styles.lineWrap}>
        <motion.div
          className={styles.line}
          initial={{ scaleY: 0 }}
          animate={isLineInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </div>

      {/* Milestone rows */}
      {milestones.map((m, i) => (
        <MilestoneCard key={m.year} milestone={m} index={i} />
      ))}
    </div>
  );
}
