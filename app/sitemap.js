// Static dates — do NOT use `new Date()` here.
// Dynamic dates generate a different timestamp on every build,
// which can confuse Google and waste crawl budget.
// Update these dates manually when you update a page's content.

const BASE_URL = 'https://kingtraders.com.np';

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: '2026-03-30',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/thermal-coal`,
      lastModified: '2026-03-30',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/coal-price`,
      lastModified: '2026-03-30',
      changeFrequency: 'weekly',   // Updated often — price pages change frequently
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: '2026-03-30',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: '2026-03-30',
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
