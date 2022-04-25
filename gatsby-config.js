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
    {
        resolve: '@chakra-ui/gatsby-plugin',
        options: {
          /**
           * @property {boolean} [resetCSS=true]
           * if false, this plugin will not use `<CSSReset />
           */
          resetCSS: true,
          /**
           * @property {boolean} [isUsingColorMode=true]
           * if false, this plugin will not use <ColorModeProvider />
           */
          isUsingColorMode: true,
        },
      },
    `gatsby-plugin-react-helmet`
  ],
};
