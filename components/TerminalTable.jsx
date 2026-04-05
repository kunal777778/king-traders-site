'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './TerminalTable.module.css';

const rows = [
  { key: 'TYPE', value: 'USA High GCV Thermal Coal', highlight: false },
  { key: 'ORIGIN', value: 'United States of America', highlight: false },
  { key: 'GCV (NAR)', value: '6900+ kcal/kg', highlight: true },
  { key: 'ASH CONTENT', value: '7–8%', highlight: false },
  { key: 'SULPHUR', value: '2–3%', highlight: false },
  { key: 'VOLATILE MATTER', value: '39–40%', highlight: false },
  { key: 'CERTIFICATION', value: 'Lab Report Available on Request', highlight: false },
  { key: 'PRICING', value: 'Available on Request', highlight: true },
];

export default function TerminalTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className={styles.terminal}>
      {/* Terminal header bar */}
      <div className={styles.termHeader}>
        <div className={styles.windowDots}>
          <span className={styles.dotR} />
          <span className={styles.dotY} />
          <span className={styles.dotG} />
        </div>
        <span className={styles.termTitle}>coal_specifications.sh</span>
        <span className={styles.termBadge}>LIVE</span>
      </div>

      {/* Terminal body */}
      <div className={styles.termBody}>
        {/* Command line */}
        <motion.div
          className={styles.cmdLine}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <span className={styles.prompt}>$</span>
          <span className={styles.cmd}> cat /data/coal_grade.json</span>
        </motion.div>

        {/* Separator */}
        <motion.div
          className={styles.separator}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.5, transformOrigin: 'left' }}
        />

        {/* Data rows */}
        {rows.map((row, i) => (
          <motion.div
            key={row.key}
            className={`${styles.row} ${row.highlight ? styles.rowGold : ''}`}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.38, ease: 'easeOut' }}
          >
            <span className={styles.rowKey}>{row.key}</span>
            <span className={styles.arrow}>→</span>
            <span className={`${styles.rowVal} ${row.highlight ? styles.rowValGold : ''}`}>
              {row.value}
            </span>
            {row.highlight && (
              <motion.span
                className={styles.shimmer}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.2, delay: 1.2 + i * 0.15, repeat: Infinity, repeatDelay: 4 }}
              />
            )}
          </motion.div>
        ))}

        {/* Blinking cursor */}
        <motion.div
          className={styles.cursor}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 + rows.length * 0.1 + 0.3 }}
        >
          <span className={styles.prompt}>$</span>
          <motion.span
            className={styles.blinkCursor}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom note */}
      <div className={styles.termFooter}>
        <span className={styles.footerDot} />
        All data verified by independent lab analysis
      </div>
    </div>
  );
}
