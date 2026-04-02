'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollRevealText.module.css';

function Word({ word, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.12, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ['rgba(255,255,255,0.12)', 'rgba(255,255,255,1)']
  );
  return (
    <motion.span className={styles.word} style={{ opacity, color }}>
      {word}
    </motion.span>
  );
}

export default function ScrollRevealText({ text, tag = 'h2', className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.15'],
  });

  const words = text.split(' ');
  const SPREAD = 0.85; // all words fully revealed by 85% of scroll range

  const Tag = tag;

  return (
    <Tag ref={ref} className={`${styles.container} ${className}`} aria-label={text}>
      {words.map((word, i) => {
        const start = (i / words.length) * SPREAD;
        const end = ((i + 1) / words.length) * SPREAD;
        return (
          <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />
        );
      })}
    </Tag>
  );
}
