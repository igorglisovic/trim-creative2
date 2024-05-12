/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'sr'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
