/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // Adding * here since we'll create a new blob store in demo
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "*/**",
      },
    ],
  },
}

export default nextConfig
