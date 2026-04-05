/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove X-Powered-By header (minor security + clean response)
  poweredByHeader: false,

  // Enable gzip compression for faster page loads (Core Web Vitals)
  compress: true,

  // Image optimization — allow your own domain images to be optimized
  images: {
    formats: ['image/avif', 'image/webp'],   // Serve modern formats (smaller file sizes)
    minimumCacheTTL: 86400,                  // Cache optimized images for 24h
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // HTTP security headers — Google uses these as trust/quality signals
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Block clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Enforce HTTPS
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Control referrer info sent to external sites
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
