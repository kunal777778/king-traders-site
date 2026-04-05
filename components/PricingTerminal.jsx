'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import CountUp from './CountUp';
import styles from './PricingTerminal.module.css';

export default function PricingTerminal() {
  const [tonnage, setTonnage] = useState(500);
  const [animating, setAnimating] = useState(false);

  // Gamified metrics
  const trucks = Math.ceil(tonnage / 25);
  const energyYield = Math.floor(tonnage * 6900); // Kcal in millions roughly
  const ashResidue = Math.floor(tonnage * 0.075); // 7.5% average ash

  const handleSlider = (e) => {
    setTonnage(Number(e.target.value));
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <TiltCard className={`card ${styles.terminalContainer}`}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.terminalTitle}>LIVE_LOGISTICS_CALCULATOR.exe</div>
      </div>

      <div className={styles.terminalBody}>
        <div className={styles.sliderGroup}>
          <div className={styles.sliderHeader}>
            <label>Required Volume (Metric Tonnes)</label>
            <span className={styles.sliderValue}>{tonnage} MT</span>
          </div>
          <input
            type="range"
            min="100"
            max="5000"
            step="50"
            value={tonnage}
            onChange={handleSlider}
            className={styles.rangeSlider}
          />
          <div className={styles.sliderLabels}>
            <span>100 MT</span>
            <span>5000 MT</span>
          </div>
        </div>

        <div className={styles.outputGrid}>
          <div className={styles.outputBox}>
            <span className={styles.outputLabel}>Logistics / Trucks</span>
            <span className={styles.outputValue}>
              <CountUp end={trucks} duration={1} /> 
              <span className={styles.unit}> Trips</span>
            </span>
            <div className={styles.scanline} />
          </div>

          <div className={styles.outputBox}>
            <span className={styles.outputLabel}>Energy Yield</span>
            <span className={styles.outputValue}>
              <CountUp end={energyYield} duration={1} />
              <span className={styles.unit}> Mcal</span>
            </span>
            <div className={styles.scanline} />
          </div>

          <div className={styles.outputBox}>
            <span className={styles.outputLabel}>Est. Ash Residue</span>
            <span className={styles.outputValue}>
              <CountUp end={ashResidue} duration={1} />
              <span className={styles.unit}> MT</span>
            </span>
            <div className={styles.scanline} />
          </div>
        </div>

        <div className={styles.terminalFooter}>
          <p className={styles.disclaimer}>
            &gt; SYSTEM NOTE: This data is indicative based on 6900+ NAR coal. For accurate pricing based on current global indexes, request an official quote.
          </p>
          <div className={styles.ctaWrapper}>
            <a href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              [&gt;] EXECUTE_QUOTE_REQUEST
            </a>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
