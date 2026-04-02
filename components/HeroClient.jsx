'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from '@/components/CountUp';
import styles from '@/app/page.module.css';

const FULL_TEXT =
  'Premium imported coal for brick kilns and industrial buyers across Nepal. Delivering quality, reliability, and competitive pricing for over 7 years.';

const stats = [
  { number: '7+',   label: 'Years in Business' },
  { number: '30+',  label: 'Clients Served' },
  { number: '6900+', label: 'GCV NAR' },
  { number: '24/7', label: 'Customer Support' },
];

export default function HeroClient() {
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Parallax: video drifts upward slower than the page scroll
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 700], ['0%', '-18%']);

  // Typewriter: starts after 0.9s (hero title has appeared by then)
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTyped(FULL_TEXT.slice(0, i));
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          // Hide cursor 1.5s after typing completes
          setTimeout(() => setShowCursor(false), 1500);
        }
      }, 14);
      return () => clearInterval(interval);
    }, 900);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroGrid} />
      </div>

      {/* Video background with parallax */}
      <div className={styles.videoBg}>
        <motion.div style={{ y: videoY }} className={styles.videoParallaxWrap}>
          <video
            className={styles.heroBgVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/coal-hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className={styles.videoOverlay} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <motion.div
          className={styles.heroLeft}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="badge">Established Since 2019</div>
          <h1 className={styles.heroTitle}>
            Nepal&apos;s Trusted
            <span className="gradient-text"> Coal Partner</span>
          </h1>

          {/* Typewriter description */}
          <p className={styles.heroDesc}>
            {typed}
            {showCursor && <span className={styles.cursor}>|</span>}
          </p>

          <div className={styles.heroBtns}>
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/thermal-coal" className="btn btn-outline">
              View Products
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.logoShowcase}>
            <div className={styles.logoRing1} />
            <div className={styles.logoRing2} />
            <div className={styles.logoInner}>
              <Image
                src="/king_logo.jpg"
                alt="King Traders & Suppliers Logo"
                width={160}
                height={160}
                className={styles.logoImg}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stat cards with CountUp */}
      <div className={`container ${styles.heroStats}`}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={`${styles.statCard} glass`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          >
            <span className={styles.statNumber}>
              <CountUp value={stat.number} duration={1600} />
            </span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
