/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com", "cdn.pixabay.com", "i.ibb.co.com", "kodeforest.net", "i.ibb.co"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
