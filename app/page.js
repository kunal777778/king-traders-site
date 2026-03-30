import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import HeroClient from '@/components/HeroClient';
import styles from './page.module.css';

// ── Page-level metadata (layout.js provides global defaults) ──────────────
export const metadata = {
  alternates: {
    canonical: 'https://kingtraders.com.np',
  },
  openGraph: {
    url: 'https://kingtraders.com.np',
    images: [{ url: '/king_logo.jpg', width: 512, height: 512, alt: 'King Traders & Suppliers — Coal Supplier Nepal' }],
  },
};

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Trusted Quality',
    desc: 'USA high GCV coal (6900+ NAR) with detailed lab reports and analysis certificates available on request.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    title: 'Reliable Supply',
    desc: 'Consistent supply chain backed by 7+ years of trusted import operations. We deliver when promised.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
    ),
    title: 'Competitive Pricing',
    desc: 'Volume-based pricing tailored to your requirements. Transparent rates with no hidden charges.',
  },
];

const industries = [
  { name: 'Brick Kilns', icon: '🏭' },
  { name: 'Cement Plants', icon: '🏗️' },
  { name: 'Steel Industries', icon: '⚙️' },
  { name: 'Textile Mills', icon: '🧵' },
];

export default function HomePage() {
  return (
    <>
      {/* ========== HERO — client component handles animations ========== */}
      <HeroClient />

      {/* ========== SERVICES ========== */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">Why Choose Us</div>
              <h2>Built on Trust,<br />Delivered with Excellence</h2>
              <div className="gold-line" />
              <p>From sourcing to delivery, we maintain the highest standards at every step</p>
            </div>
          </AnimatedSection>

          <div className="grid-3">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.12}>
                <div className={`card ${styles.serviceCard}`}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW ========== */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <AnimatedSection direction="left">
              <div className={styles.aboutImage}>
                <Image
                  src="/coal-mining.png"
                  alt="Coal mining operations — King Traders supply chain"
                  width={560}
                  height={560}
                  className={styles.aboutImg}
                />
                <div className={styles.aboutImageOverlay} />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className={styles.aboutContent}>
                <div className="badge">About Us</div>
                <h2>Your Reliable Coal Supply Partner in Nepal</h2>
                <div className="gold-line gold-line-left" />
                <p>
                  King Traders &amp; Suppliers has been serving Nepal&apos;s energy needs since 2019.
                  Based in Biratnagar, Morang, we are dedicated importers and suppliers of
                  premium quality coal sourced from the USA.
                </p>
                <p>
                  With 30+ satisfied clients including brick kilns and industrial buyers across
                  Nepal, we&apos;ve built our reputation on quality, reliability, and competitive pricing.
                </p>
                <Link href="/about" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                  Learn More About Us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== COAL SHOWCASE ========== */}
      <section className={`section ${styles.showcaseSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">Our Product</div>
              <h2>Premium High GCV Coal</h2>
              <div className="gold-line" />
              <p>Sourced from the finest mines, delivered to your doorstep</p>
            </div>
          </AnimatedSection>

          <div className={styles.showcaseGrid}>
            <AnimatedSection delay={0.1}>
              <div className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/coal-hero.png"
                    alt="Premium high GCV thermal coal — USA origin coal for brick kilns Nepal"
                    width={600}
                    height={400}
                    className={styles.showcaseImg}
                  />
                  <div className={styles.showcaseImgOverlay} />
                </div>
                <div className={styles.showcaseCardContent}>
                  <h3>USA High GCV Coal</h3>
                  <p>6900+ NAR with superior calorific value for maximum energy output</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className={styles.showcaseCard}>
                <div className={styles.showcaseImgWrap}>
                  <Image
                    src="/coal-product.png"
                    alt="Quality-tested thermal coal batch — lab certified coal Nepal"
                    width={600}
                    height={400}
                    className={styles.showcaseImg}
                  />
                  <div className={styles.showcaseImgOverlay} />
                </div>
                <div className={styles.showcaseCardContent}>
                  <h3>Quality Tested</h3>
                  <p>Lab reports and analysis certificates available for every batch</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">Industries We Serve</div>
              <h2>Powering Nepal&apos;s Key Industries</h2>
              <div className="gold-line" />
            </div>
          </AnimatedSection>

          <div className="grid-4">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={i * 0.1}>
                <div className={`card ${styles.industryCard}`}>
                  <span className={styles.industryIcon}>{ind.icon}</span>
                  <h4>{ind.name}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className={`section ${styles.ctaSection}`}>
        <div className={styles.ctaBgImage}>
          <Image
            src="/coal-hero.png"
            alt=""
            fill
            className={styles.ctaBgImg}
          />
          <div className={styles.ctaBgOverlay} />
        </div>
        <AnimatedSection>
          <div className={`container ${styles.ctaContent}`}>
            <h2>Ready to Secure Your Coal Supply?</h2>
            <p>Get in touch today for competitive quotes tailored to your requirements.</p>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">
                Contact Us Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="https://wa.me/9779819322029" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                WhatsApp Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
