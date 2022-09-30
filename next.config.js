/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    EMAIL_API_HOST: process.env.EMAIL_API_HOST
  }
}
