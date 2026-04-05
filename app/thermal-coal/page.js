import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import CoalShardReveal from '@/components/CoalShardReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'Thermal Coal Nepal | High GCV USA Steam Coal Supplier',
  description:
    'Premium USA thermal coal with 6900+ GCV NAR, low ash (7-8%) and consistent quality. King Traders & Suppliers — Nepal\'s trusted coal importer for brick kilns, cement plants and industries. Lab reports available.',
  alternates: {
    canonical: 'https://kingtraders.com.np/thermal-coal',
  },
  openGraph: {
    title: 'Thermal Coal Nepal | High GCV USA Steam Coal — King Traders & Suppliers',
    description:
      'Premium USA thermal coal with 6900+ GCV NAR. Low ash content. Reliable supply for brick kilns and industries across Nepal. Lab certificates available.',
    url: 'https://kingtraders.com.np/thermal-coal',
    images: [{ url: '/coal-hero.png', width: 600, height: 400, alt: 'Premium thermal coal Nepal — USA high GCV coal' }],
  },
};

const applications = [
  { icon: '🏭', title: 'Brick Kilns', desc: 'High GCV coal perfect for continuous kiln operations.' },
  { icon: '🏗︎', title: 'Cement Plants', desc: 'Reliable energy source for cement manufacturing.' },
  { icon: '⚙️', title: 'Steel & Iron', desc: 'Premium grade coal supporting metallurgical processes.' },
  { icon: '🏢', title: 'General Industries', desc: 'Versatile coal suitable for boiler operations and thermal power.' },
];

const advantages = [
  'GCV of 6900+ NAR ─ among the highest available in Nepal',
  'Low ash content (7–8%) for cleaner burning',
  'Consistent quality across all deliveries',
  'Lab reports and analysis certificates available on request',
  'Direct import — and no middlemen',
  'Flexible quantity and payment terms',
];

export default function ThermalCoalPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.heroBgImage}>
          <Image src="/coal-hero.png" alt="Premium high GCV thermal coal" fill className={styles.heroBgImg} priority />
          <div className={styles.heroBgOverlay} />
        </div>
        <div className="container">
          <AnimatedSection>
            <div className="badge">Our Product</div>
            <h1>Premium<br /><span className="gradient-text">Thermal Coal</span></h1>
            <p className={styles.heroDesc}>USA-Origin high GCV thermal coal for Nepal's most demanding industries.</p>
          </AnimatedSection>
        </div>
      </section>

      <CoalShardReveal />

      <section className="section">
        <div className="container">
          <AnimatedSection><div className="section-header"><div className="badge">Why Our Coal</div><h2>The King Traders Advantage</h2><div className="gold-line" /></div></AnimatedSection>
          <div className={styles.advantagesList}>{advantages.map((a, i) => (
            <AnimatedSection key={i} delay={i * 0.08}><div className={styles.advantageItem}><span className={styles.checkIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span><span>{a}</span></div></AnimatedSection>
          ))}</div>
        </div>
      </section>

      <section className={`section ${styles.applicationsSection}`}>
        <div className="container">
          <AnimatedSection><div className="section-header"><div className="badge">Applications</div><h2>Industries We Power</h2><div className="gold-line" /><p>Our thermal coal is engineered for maximum efficiency across industries</p></div></AnimatedSection>
          <div className="grid-4">{applications.map((a, i) => (<AnimatedSection key={a.title} delay={i * 0.1}><div className={`card ${styles.appCard}`}><span className={styles.appIcon}>{a.icon}</span><h4>{a.title}</h4><p>{a.desc}</p></div></AnimatedSection>))}</div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <AnimatedSection><div className={`container ${styles.ctaContent}`}><h2>Interested in Our Coal?</h2><p>Prices are available on request and vary based on grade, quantity, and location.</p><div className={styles.ctaBtns}><a href="/contact" className="btn btn-primary">Request Pricing <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><a href="https://wa.me/9779819322029" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Inquiry</a></div></div></AnimatedSection>
      </section>
    </>
  );
}
