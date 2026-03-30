export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Prevent crawlers from indexing Next.js internals
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://kingtraders.com.np/sitemap.xml',
    host: 'https://kingtraders.com.np',
  };
}
