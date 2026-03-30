import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Coal Importer Biratnagar Nepal',
  description:
    "King Traders & Suppliers — established in 2019 in Biratnagar, Morang. Nepal's trusted importer of premium USA high GCV thermal coal. Serving 30+ brick kilns and industries across Nepal for 7+ years.",
  alternates: {
    canonical: 'https://kingtraders.com.np/about',
  },
  openGraph: {
    title: 'About King Traders & Suppliers | Coal Importer Biratnagar Nepal',
    description:
      '7+ years of trusted coal import and supply in Nepal. Based in Biratnagar, Morang. Premium USA thermal coal for brick kilns and industries nationwide.',
    url: 'https://kingtraders.com.np/about',
    images: [{ url: '/coal-mining.png', width: 560, height: 560, alt: 'King Traders & Suppliers — Coal importer Biratnagar Nepal' }],
  },
};

const values = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
    ),
    title: 'Quality First',
    desc: 'We source only the highest grade coal, backed by lab reports and analysis certificates.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    ),
    title: 'Trust & Transparency',
    desc: 'Transparent pricing with no hidden charges. What we quote is what you pay.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    ),
    title: 'Reliable Delivery',
    desc: 'On-time delivery, every time. Our logistics network covers all of Nepal.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
    ),
    title: 'Customer Focus',
    desc: 'Dedicated support for every client. We treat your business as our own.',
  },
];

const milestones = [
  { year: '2019', event: 'Founded in Biratnagar, Morang' },
  { year: '2020', event: 'Established supply network across eastern Nepal' },
  { year: '2021', event: 'Expanded to serve 15+ brick kilns' },
  { year: '2023', event: 'Reached 30+ satisfied clients nationwide' },
  { year: '2026', event: 'Serving all major industrial zones in Nepal' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroBgImage}>
          <Image
            src="/coal-mining.png"
            alt="Coal mining operations"
            fill
            className={styles.heroBgImg}
            priority
          />
          <div className={styles.heroBgOverlay} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div className="badge">Our Story</div>
            <h1>About King Traders<br /><span className="gradient-text">& Suppliers</span></h1>
            <p className={styles.heroDesc}>
              7+ years of trusted coal supply. From Biratnagar to all of Nepal,
              we&apos;re building the foundation that powers the nation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <AnimatedSection direction="left">
              <div className={styles.storyContent}>
                <div className="badge">Who We Are</div>
                <h2>A Legacy of Trust in Nepal&apos;s Coal Industry</h2>
                <div className="gold-line gold-line-left" />
                <p>
                  King Traders & Suppliers was established in 2019 in Biratnagar-2, Morang, Nepal
                  with a clear mission: to provide premium quality imported coal at fair prices
                  with unwavering reliability.
                </p>
                <p>
                  Today, we are one of Nepal&apos;s most trusted importers and suppliers of premium
                  coal, serving over 30 clients including brick kilns and industrial buyers across
                  the nation. Our success is built on three pillars: premium quality, transparent
                  business practices, and reliable supply chains.
                </p>
                <p>
                  We specialize in USA high GCV coal with 6900+ NAR, sourced directly from
                  reputable mines and backed by detailed lab reports and analysis certificates.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className={styles.statsGrid}>
                <div className={`card ${styles.statCard}`}>
                  <span className={styles.statNum}>7+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={`card ${styles.statCard}`}>
                  <span className={styles.statNum}>30+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={`card ${styles.statCard}`}>
                  <span className={styles.statNum}>6900+</span>
                  <span className={styles.statLabel}>GCV NAR</span>
                </div>
                <div className={`card ${styles.statCard}`}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statLabel}>Quality Tested</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">Our Values</div>
              <h2>What Drives Us Forward</h2>
              <div className="gold-line" />
            </div>
          </AnimatedSection>

          <div className="grid-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1} className={styles.animatedCardWrapper}>
                <div className={`card ${styles.valueCard}`}>
                  <div className={styles.iconWrapper}>{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">Our Journey</div>
              <h2>Milestones That Define Us</h2>
              <div className="gold-line" />
            </div>
          </AnimatedSection>

          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.12}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>{m.year}</span>
                    <p>{m.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
