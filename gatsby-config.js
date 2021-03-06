module.exports = {
  siteMetadata: {
    title: `Athena (Xiaohe) Liu - Portfolio`,
    description: `Athena (Xiaohe) Liu is a PhD candidate in fluid dynamics at the University of British Columbia. She is also an amateur data scientist / machine learning engineer. Checkout her personal portfolio and learn more about her projects.`,
    author: `Athena (Xiaohe) Liu 刘小禾`,
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
      `developer`,
      `data scientist`,
      `machine learning`
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
