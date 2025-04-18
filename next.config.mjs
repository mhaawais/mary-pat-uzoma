/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This makes Next.js generate static files
    images: {
      unoptimized: true, // Disables the Image Optimization API
    },
  };
  
  export default nextConfig;