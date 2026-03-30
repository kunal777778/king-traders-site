// Contact page is a 'use client' component (form state), so metadata
// cannot be exported from page.js directly — Next.js ignores metadata
// in client components. This layout.js is a server component that
// correctly provides the metadata for the /contact route.

export const metadata = {
  title: 'Contact Us | Coal Supplier Biratnagar Nepal',
  description:
    'Contact King Traders & Suppliers for coal supply in Nepal. Call, WhatsApp, or email us for pricing, bulk orders, and delivery. Located in Biratnagar, Morang, Nepal.',
  alternates: {
    canonical: 'https://kingtraders.com.np/contact',
  },
  openGraph: {
    title: 'Contact King Traders & Suppliers | Coal Supplier Biratnagar Nepal',
    description:
      'Reach King Traders & Suppliers for coal quotes and bulk orders in Nepal. Based in Biratnagar, Morang. Call +977-9819322029 or WhatsApp us.',
    url: 'https://kingtraders.com.np/contact',
    images: [{ url: '/king_logo.jpg', width: 512, height: 512, alt: 'King Traders Contact — Coal Supplier Nepal' }],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
