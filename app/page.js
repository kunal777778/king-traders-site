import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import HeroClient from '@/components/HeroClient';
import CountUp from '@/components/CountUp';
import ScrollRevealText from '@/components/ScrollRevealText';
import StickyProcess from '@/components/StickyProcess';
import StatsTicker from '@/components/StatsTicker';
import CoalGallery from '@/components/CoalGallery';
import styles from './page.module.css';

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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Trusted Quality',
    desc: 'USA high GCV coal (6900+ NAR) with detailed lab reports and analysis certificates available on request.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Reliable Supply',
    desc: 'Consistent supply chain backed by 7+ years of trusted import operations. We deliver when promised.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
        <path d="M12 18V6"/>
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'Volume-based pricing tailored to your requirements. Transparent rates with no hidden charges.',
  },
];

const industries = [
  {
    name: 'Brick Kilns',
    desc: 'High-temperature kiln firing with consistent heat output and low ash residue.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="8" y2="16"/>
        <line x1="16" y1="12" x2="16" y2="16"/>
      </svg>
    ),
  },
  {
    name: 'Cement Plants',
    desc: 'Fuel for clinker production requiring reliable calorific value and consistent supply.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V7l7-4 7 4v14"/>
        <path d="M9 21V11h6v10"/>
        <path d="M13 7h.01"/>
      </svg>
    ),
  },
  {
    name: 'Steel Industries',
    desc: 'Thermal coal for steel furnaces demanding precise energy output and low impurities.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    name: 'Textile Mills',
    desc: 'Reliable steam generation fuel for boilers powering large-scale textile operations.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'What is your minimum order quantity?',
    a: 'Our minimum order is 1 truck load — approximately 20 to 25 metric tons. For larger bulk orders we offer volume-based discounts. Contact us for a custom quote.',
  },
  {
    q: 'What coal grade do you supply?',
    a: 'We supply premium USA thermal/steam coal with 6900+ GCV NAR, 7–8% ash content, and low sulfur levels. It is ideal for brick kilns, cement plants, and industrial boilers.',
  },
  {
    q: 'How long does delivery take?',
    a: 'For Morang, Sunsari, and Jhapa, delivery is typically within 2–5 working days after order confirmation. Timelines for other districts depend on location — contact us for an estimate.',
  },
  {
    q: 'Do you provide lab test certificates?',
    a: 'Yes. Lab analysis certificates showing GCV, ash content, moisture, and sulfur levels are available on request for every batch we supply.',
  },
  {
    q: 'What payment terms do you offer?',
    a: 'We accept advance payment and partial advance with balance on delivery. For long-term clients, credit arrangements are available after the initial orders.',
  },
  {
    q: 'Which areas of Nepal do you serve?',
    a: 'We currently supply across Koshi Province and Madhesh Province — including Biratnagar, Morang, Sunsari, Jhapa, Saptari, and surrounding districts.',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroClient />
      <StatsTicker />
      <div className={styles.sectionDivider} />
      <section className={`section ${styles.servicesSection}`}>
        <div className={styles.sectionGlow} />
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="badge">Why Choose Us</div>
              <ScrollRevealText text="Built on Trust, Delivered with Excellence" />
              <div className="gold-line" />
              <p>From sourcing to delivery, we maintain the highest standards at every step</p>
            </div>
          </AnimatedSection>
          <div className="grid-3">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.12}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className={styles.cardGlowLine} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.sectionDivider} />
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <AnimatedSection direction="left">
              <div className={styles.aboutImage}>
                <Image src="/coal-mining.png" alt="Coal mining operations" width={560} height={560} className={styles.aboutImg} />
                <div className={styles.aboutImageOverlay} />
                <div className={styles.aboutImageBadge}>
                  <span className={styles.aboutBadgeNumber}>7+</span>
                  <span className={styles.aboutBadgeLabel}>Years of Trust</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={styles.aboutContent}>
                <div className="badge">About Us</div>
                <h2>Your Reliable Coal Supply Partner in Nepal</h2>
                <div className="gold-line gold-line-left" />
                <p>King Traders &amp; Suppliers has been serving Nepal&apos;s energy needs since 2019. Based in Biratnagar, Morang.</p>
                <p>With 30+ satisfied clients including brick kilns and industrial buyers across Nepal.</p>
                <div className={styles.aboutStats}>
                  <div className={styles.aboutStat}><span className={styles.aboutStatNum}><CountUp value="30+" duration={1600} /></span><span className={styles.aboutStatLabel}>Happy Clients</span></div>
                  <div className={styles.aboutStatDivider} />
                  <div className={styles.aboutStat}><span className={styles.aboutStatNum}><CountUp value="6900+" duration={2000} /></span><span className={styles.aboutStatLabel}>GCV NAR</span></div>
                  <div className={styles.aboutStatDivider} />
                  <div className={styles.aboutStat}><span className={styles.aboutStatNum}><CountUp value="24/7" /></span><span className={styles.aboutStatLabel}>Support</span></div>
                </div>
                <Link href="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Learn More About Us <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <div className={styles.sectionDivider} />
      <section className={`section ${styles.showcaseSection}`}>
        <div className={styles.showcaseVideoBg}>
          <video autoPlay muted loop playsInline preload="auto" className={styles.showcaseBgVideo}><source src="/coal-showcase.mp4" type="video/mp4" /></video>
          <div className={styles.showcaseBgOverlay} />
        </div>
        <div className={styles.sectionGlow} />
        <div className="container">
          <AnimatedSection><div className="section-header"><div className="badge">Our Product</div><h2>Premium High GCV Coal</h2><div className="gold-line" /><p >Sourced from the finest mines, delivered to your doorstep</p></div></AnimatedSection>
          <div className={styles.showcaseGrid}>
            <AnimatedSection delay={0.1}><div className={styles.showcaseCard}><div className={styles.showcaseImgWrap}><Image src="/coal-hero.png" alt="USA origin coal" width={600} height={400} className={styles.showcaseImg} /><div className={styles.showcaseImgOverlay} /><div className={styles.showcaseBadge}>USA Origin</div></div><div className={styles.showcaseCardContent}><h3>USA High GCV Coal</h3><p>6900+ NAR with superior calorific value</p></div></div></AnimatedSection>
            <AnimatedSection delay={0.2}><div className={styles.showcaseCard}><div className={styles.showcaseImgWrap}><Image src="/coal-product.png" alt="Lab certified coal" width={600} height={400} className={styles.showcaseImg} /><div className={styles.showcaseImgOverlay} /><div className={styles.showcaseBadge}>Lab Certified</div></div><div className={styles.showcaseCardContent}><h3>Quality Tested</h3><p >Lab reports available for every batch</p></div></div></AnimatedSection>
          </div>
        </div>
      </section>
      <StickyProcess />
      <section className={`section ${styles.industriesSection}`}>
        <div className="container">
          <AnimatedSection><div className="section-header"><div className="badge">Industries We Serve</div><ScrollRevealText text="Powering Nepal's Key Industries" /><div className="gold-line" /><p>Supplying reliable coal to the sectors that keep Nepal moving</p></div></AnimatedSection>
          <div className="grid-4">{industries.map((ind, i) => (<AnimatedSection key={ind.name} delay={i * 0.1}><div className={styles.industryCard}><div className={styles.industryIconWrap}>{ind.icon}</div><h4>{ind.name}</h4><p>{ind.desc}</p></div></AnimatedSection>))}</div>
        </div>
      </section>
      <CoalGallery />
      <section className={`section ${styles.faqSection}`}>
        <div className={styles.sectionGlow} />
        <div className="container">
          <AnimatedSection><div className="section-header"><div className="badge">FAQ</div><h2>Frequently Asked Questions</h2><div className="gold-line" /><p>Everything you need to know before placing your first order</p></div></AnimatedSection>
          <div className={styles.faqGrid}>{faqs.map((faq, i) => (<AnimatedSection key={i} delay={i * 0.07}><details className={styles.faqItem}><summary className={styles.faqQuestion}><span>{faq.q}</span><span className={styles.faqIcon}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary><p className={styles.faqAnswer}>{faq.a}</p></details></AnimatedSection>))}</div>
          <AnimatedSection delay={0.3}><div className={styles.faqCta}><p >Still have questions? We're happy to help.</p><Link href="/contact" className="btn btn-outline">Ask Us Directly <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link></div></AnimatedSection>
        </div>
      </section>
      <section className={`section ${styles.ctaSection}`}>
        <div className={styles.ctaBgImage}><video autoPlay muted loop playsInline preload="auto" className={styles.ctaBgImg}><source src="/coal-cta.mp4" type="video/mp4" /></video><div className={styles.ctaBgOverlay} /></div>
        <AnimatedSection><div className={`container ${styles.ctaContent}`}><div className={styles.ctaGlow} /><h2>Ready to Secure Your Coal Supply?</h2><p >Get in touch today for competitive quotes.</p><div className={styles.ctaBtns}><Link href="/contact" className="btn btn-primary">Contact Us Now <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></Link><a href="https://wa.me/9779819322029" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Us</a></div></div></AnimatedSection>
      </section>
    </>
  );
}
