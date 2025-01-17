/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  i18n: {
    // Supported language
    locales: ['en', 'fr'],
    // default language
    defaultLocale: 'en',
  },
  reactStrictMode: process.env.NODE_ENV !== "development",
});
