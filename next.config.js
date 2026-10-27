/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` writes plain HTML/CSS/JS to ./out, which is
  // uploaded to Hostinger's public_html (no Node.js server needed).
  output: 'export',
  // Each page becomes <route>/index.html, which Apache/LiteSpeed serve at /<route>/.
  trailingSlash: true,
  // There is no image-optimisation server on static hosting.
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
