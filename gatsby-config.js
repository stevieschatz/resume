module.exports = {
  siteMetadata: {
    title: 'Stephen Schatzl',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml', {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: './src/data/',
    },
  },],
}
