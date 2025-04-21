/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This makes Next.js generate static files
  images: {
    unoptimized: true, // Disables the Image Optimization API
  },
  trailingSlash: true, // Ensures trailing slashes in URLs (good for static sites)
};

export default nextConfig;
