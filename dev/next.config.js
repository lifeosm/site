const isStatic = process.env.TARGET === 'static'

let exportStatic = {}
if (isStatic) {
  exportStatic = {
    output: 'export',
    distDir: 'dist',
    cleanDistDir: true,
    images: {
      unoptimized: true,
    },
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  ...exportStatic,
}

module.exports = nextConfig
