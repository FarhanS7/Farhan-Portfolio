/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.credly.com"], // ✅ Add this line
  },
};

module.exports = nextConfig;
