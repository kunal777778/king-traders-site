'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Smooothy from 'smooothy';
import styles from './CoalGallery.module.css';

const slides = [
  {
    src: '/coal-chunks.jpg',
    alt: 'Premium USA high GCV thermal coal chunks',
    caption: 'Premium Coal Quality',
    sub: 'High GCV USA thermal coal — 6900+ kcal/kg NAR',
  },
  {
    src: '/coal-port.jpg',
    alt: 'Large scale coal stockpile at port with excavators',
    caption: 'Massive Supply Capacity',
    sub: 'Direct import from USA mines to Nepal',
  },
  {
    src: '/coal-trucks.jpg',
    alt: 'Coal dump trucks unloading at mine site',
    caption: 'Reliable Logistics',
    sub: 'End-to-end supply chain management',
  },
];

export default function CoalGallery() {
  const sliderRef = useRef(null);
  const smooothyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    smooothyRef.current = new Smooothy(sliderRef.current, {
      snap: true,
      infinite: true,
      damping: 0.06,
    });

    const slider = smooothyRef.current;

    // Track active slide via progress
    const onProgress = () => {
      if (slider) {
        const idx = Math.round(slider.index) % slides.length;
        setActiveIndex((idx + slides.length) % slides.length);
      }
    };

    sliderRef.current.addEventListener('smooothy:progress', onProgress);

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('smooothy:progress', onProgress);
      }
      slider?.kill();
    };
  }, []);

  const goTo = (i) => smooothyRef.current?.goToIndex(i);
  const prev = () => smooothyRef.current?.goToPrev();
  const next = () => smooothyRef.current?.goToNext();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className="badge">Our Coal in Action</div>
        <h2>
          Direct from Source<br />
          <span className="gradient-text">to Your Industry</span>
        </h2>
        <div className="gold-line" />
      </div>

      {/* Slider */}
      <div className={styles.sliderOuter}>
        <div ref={sliderRef} className={styles.slider}>
          {slides.map((slide, i) => (
            <div key={i} className={styles.slide} data-smooothy-slide>
              <div className={styles.slideInner}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className={styles.slideImg}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={i === 0}
                />
                <div className={styles.slideOverlay} />
                <div className={styles.slideCaption}>
                  <span className={styles.captionNum}>0{i + 1}</span>
                  <h3>{slide.caption}</h3>
                  <p>{slide.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow controls */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="Previous slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          aria-label="Next slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 19l7-7-7-7" />
          </svg>
        </button>
      </div>

      {/* Dot navigation */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Drag hint */}
      <p className={styles.dragHint}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/></svg>
        Drag to explore
      </p>
    </section>
  );
}
