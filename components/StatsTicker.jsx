'use client';

import { useEffect, useRef } from 'react';
import Smooothy from 'smooothy';
import styles from './StatsTicker.module.css';

const items = [
  { value: '6900+', label: 'GCV NAR kcal/kg' },
  { value: 'USA', label: 'Origin' },
  { value: '7–8%', label: 'Ash Content' },
  { value: '30+', label: 'Happy Clients' },
  { value: '7+', label: 'Years in Business' },
  { value: '100%', label: 'Quality Tested' },
  { value: 'Direct', label: 'Import — No Middlemen' },
  { value: 'Lab', label: 'Certified Coal' },
];

// Duplicate for seamless infinite loop
const allItems = [...items, ...items];

export default function StatsTicker({ direction = 'left' }) {
  const sliderRef = useRef(null);
  const smooothyRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    smooothyRef.current = new Smooothy(sliderRef.current, {
      auto: true,
      autoSpeed: direction === 'left' ? -0.4 : 0.4,
      infinite: true,
      snap: false,
      damping: 1,
    });

    return () => {
      smooothyRef.current?.kill();
    };
  }, [direction]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.fade} />
      <div ref={sliderRef} className={styles.slider}>
        {allItems.map((item, i) => (
          <div key={i} className={styles.item} data-smooothy-slide>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.sep}>·</span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.diamond}>◆</span>
          </div>
        ))}
      </div>
      <div className={`${styles.fade} ${styles.fadeRight}`} />
    </div>
  );
}
