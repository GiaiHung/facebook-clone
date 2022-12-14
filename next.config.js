/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'links.papareact.com',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'scontent.fsgn8-3.fna.fbcdn.net',
      'https://facebook-clone-giaihung.vercel.app'
    ],
  },
}

module.exports = nextConfig
