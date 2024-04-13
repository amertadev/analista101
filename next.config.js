const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  transpilePackages: ['@mui/x-charts'],
})

module.exports = withNextra()