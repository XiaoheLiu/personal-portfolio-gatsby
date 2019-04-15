module.exports = {
  siteMetadata: {
    title: `Athena Liu - Portfolio`,
    description: `Athena (Xiaohe) Liu's personal portfolio built with Gatsby.js. Learn more about her full stack web development projects.`,
    author: `Athena Liu`,
    keywords: [
      `Athena Liu`,
      `Xiaohe Liu`,
      `portfolio`,
      `Gatsby`,
      `projects`,
      `python`,
      `javascript`,
      `full stack`,
      `personal`,
      `website`,
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#00aba9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-modal-routing`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
