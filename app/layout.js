import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import PageTransition from '@/components/PageTransition';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const BASE_URL = 'https://kingtraders.com.np';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Coal Supplier Nepal | Thermal Coal for Brick Kilns & Industries — King Traders',
    template: '%s — King Traders & Suppliers',
  },
  description:
    "King Traders & Suppliers — Nepal's trusted importer of premium USA high GCV thermal coal. Serving brick kilns and industrial buyers in Biratnagar, Morang, and across Nepal for 7+ years.",
  keywords: [
    'coal supplier Nepal',
    'thermal coal Biratnagar',
    'coal for brick kiln Nepal',
    'USA coal Nepal',
    'coal importer Nepal',
    'coal price Nepal',
    'steam coal Nepal',
    'imported coal Nepal',
    'King Traders Nepal',
    'coal supplier Biratnagar',
    'coal Morang',
    'coal Sunsari',
  ],
  authors: [{ name: 'King Traders & Suppliers', url: BASE_URL }],
  creator: 'King Traders & Suppliers',
  publisher: 'King Traders & Suppliers',
  // Canonical is set per-page via alternates; layout provides the base
  alternates: {
    canonical: BASE_URL,
  },
  // Prevent phone number auto-detection from interfering with layout
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'King Traders & Suppliers',
    title: 'Coal Supplier Nepal | Premium Imported Coal — King Traders',
    description:
      "Nepal's trusted importer of premium thermal coal. Serving brick kilns and industries across Nepal with reliable supply and competitive pricing.",
    images: [
      {
        url: '/king_logo.jpg',
        width: 512,
        height: 512,
        alt: 'King Traders & Suppliers — Coal Supplier Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coal Supplier Nepal | Premium Imported Coal — King Traders',
    description: "Nepal's trusted importer of premium thermal coal. Serving brick kilns and industries across Nepal.",
    images: ['/king_logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Helps Google verify your site (add your actual verification code from Google Search Console)
  // verification: {
  //   google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  // },
};

// ── Structured Data (JSON-LD) ───────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': `${BASE_URL}/#organization`,
      name: 'King Traders & Suppliers',
      alternateName: 'King Traders Nepal',
      description:
        'Importer and supplier of premium imported coal in Nepal. Serving brick kilns and industrial buyers across Nepal with USA high GCV thermal coal.',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/king_logo.jpg`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}/king_logo.jpg`,
      telephone: '+977-9819322029',
      email: 'kingtraders76@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Biratnagar-2',
        addressLocality: 'Biratnagar',
        addressRegion: 'Morang',
        addressCountry: 'NP',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.4525,
        longitude: 87.2718,
      },
      hasMap: 'https://maps.google.com/?q=26.4525,87.2718',
      sameAs: [
        'https://www.facebook.com/profile.php?id=100063988061619',
        'https://www.linkedin.com/in/kunal-shah-9b65021b8',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
      foundingDate: '2019',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 10,
      },
      areaServed: [
        { '@type': 'Country', name: 'Nepal' },
        { '@type': 'City', name: 'Biratnagar' },
        { '@type': 'AdministrativeArea', name: 'Morang' },
        { '@type': 'AdministrativeArea', name: 'Sunsari' },
        { '@type': 'AdministrativeArea', name: 'Jhapa' },
      ],
      knowsAbout: ['Thermal Coal', 'Steam Coal', 'Coal Import Nepal', 'USA Coal', 'Coal for Brick Kilns'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Coal Products',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'USA High GCV Thermal Coal',
              description: 'Premium USA thermal coal with 6900+ GCV NAR. Low ash content (7-8%), ideal for brick kilns and industrial applications in Nepal.',
              brand: { '@type': 'Brand', name: 'King Traders & Suppliers' },
            },
          },
        ],
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+977-9819322029',
        contactType: 'sales',
        availableLanguage: ['English', 'Nepali', 'Hindi'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'King Traders & Suppliers',
      description: "Nepal's trusted coal importer and supplier",
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
