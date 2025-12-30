/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  pageExtensions: ['js', 'jsx', 'mdx'],

  images: {
    unoptimized: true,
  },

  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
