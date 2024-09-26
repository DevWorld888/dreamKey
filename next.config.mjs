/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
      },
      images: {
        domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
      },
};

export default nextConfig;
