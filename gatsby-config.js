module.exports = {
  siteMetadata: {
    siteUrl: "https://www.garypeng.com",
    title: "Gary Peng",
  },
  plugins: [
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Gary Peng",
          short_name: "Gary Peng",
          icon: "src/assets/logo.png",
        },
    },
    `gatsby-plugin-react-helmet`
  ],
};
