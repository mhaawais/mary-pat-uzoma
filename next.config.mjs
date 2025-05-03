/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Keep this if you're using static hosting like Hostinger
  },
  // ✅ Allow dynamic rendering (Vercel will use serverless functions)
  // ❌ Do NOT include: output: "export"
}

export default nextConfig;
