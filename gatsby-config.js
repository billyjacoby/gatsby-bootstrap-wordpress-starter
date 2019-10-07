module.exports = {
  pathPrefix: "/gatsby-bootstrap-wordpress-starter",
  siteMetadata: {
    title: `Gatsby Bootstrap Wordpress Starter`,
    description: `A starter that includes react-bootstrap, SASS compilation, and sample wordpress sourcing.`,
    author: `Billy Jacoby`,
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: "backend.billyjacoby.com",
          protocol: "https",
          hostingWPCOM: false,
          useACF: true,
          keepMediaSizes: false
       },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
