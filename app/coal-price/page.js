import AnimatedSection from '@/components/AnimatedSection';
import TerminalTable from '@/components/TerminalTable';
import styles from './page.module.css';

export const metadata = {
  title: 'Coal Price Nepal 2026 | Thermal Coal Rates Per Ton',
  description:
    'Current thermal coal prices in Nepal 2026. King Traders & Suppliers offers competitive coal rates for brick kilns and industries. USA high GCV coal (6900+ NAR). Contact us for a custom quote.',
  alternates: {
    canonical: 'https://kingtraders.com.np/coal-price',
  },
  openGraph: {
    title: 'Coal Price Nepal 2026 | Thermal Coal Rates Per Ton',
    description:
      'Current thermal coal pricing in Nepal. USA high GCV coal rates for brick kilns, cement plants and industrial buyers. Get your custom quote from King Traders & Suppliers.',
    url: 'https://kingtraders.com.np/coal-price',
    images: [{ url: '/coal-product.png', width: 600, height: 400, alt: 'Coal price Nepal 2026 — thermal coal rates' }],
  },
};

const factors = [
  {
    icon: '⛏️',
    title: 'Coal Grade & GCV',
    desc: 'Higher GCV coal commands premium pricing. We offer USA high GCV coal (6900+ NAR).',
  },
  {
    icon: '📦',
    title: 'Order Quantity',
    desc: 'Volume-based pricing available. Larger orders benefit from competitive bulk rates.',
  },
  {
    icon: '🚛',
    title: 'Delivery Location',
    desc: 'Pricing varies based on distance and logistics required for your specific delivery point.',
  },
  {
    icon: '💰',
    title: 'Payment Terms',
    desc: 'Flexible payment arrangements that can be tailored to suit your business requirements.',
  },
];

export default function CoalPricePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroGlow} />
        <div className="container">
          <AnimatedSection>
            <div className="badge">Pricing</div>
            <h1>Coal<br /><span className="gradient-text">Pricing</span></h1>
            <p className={styles.heroDesc}>
              Competitive pricing tailored to your requirements. Contact us for a
              personalized quote based on your specific needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Info */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.pricingCard}>
              <div className={styles.pricingIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </div>
              <h2>Pricing Available on Request</h2>
              <div className="gold-line" />
              <p className={styles.pricingText}>
                Prices vary based on coal grade, quantity, delivery location, and payment terms.
                We provide customized quotations to ensure you get the most competitive pricing
                for your specific requirements.
              </p>
              <div className={styles.pricingBtns}>
                <a href="/contact" className="btn btn-primary">
                  Request a Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="https://wa.me/9779819322029" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  WhatsApp for Quick Quote
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className={`section ${styles.factorsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">What Affects Pricing</div>
              <h2>Factors That Determine Your Rate</h2>
              <div className="gold-line" />
              <p>Understanding the variables that influence your final quotation</p>
            </div>
          </AnimatedSection>

          <div className="grid-4">
            {factors.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className={`card ${styles.factorCard}`}>
                  <span className={styles.factorIcon}>{f.icon}</span>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coal Grade Summary */}
      <section className={`section`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">Available Grade</div>
              <h2>What We Supply</h2>
              <div className="gold-line" />
            </div>
          </AnimatedSection>

          <TerminalTable />

          <AnimatedSection delay={0.15}>
            <p className={styles.gradeNote}>
              📋 Detailed lab reports and coal analysis certificates can be shared upon request.
              Additional coal grades may be available — please inquire.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
