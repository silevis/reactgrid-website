module.exports = {
  siteMetadata: {
    title: `ReactGrid`,
    author: `Silevis Software`,
    description: `Advanced spreadsheet for developers`,
    siteUrl: `http://reactgrid.com`,
    pages: [
      {id: 0, title: `Home`,        description: ``, route: `/` },
      {id: 1, title: `Demo`,        description: ``, route: `/demo` },
      {id: 2, title: `Features`,    description: ``, route: `/features` },
      {id: 3, title: `Contact Us`,  description: ``, route: `/contact-us` },
    ],
    social: [
      { title: `Facebook`, description: `Check our Facebook profile`, url: `https://facebook.com`, fontAwesomeIcon: 'fab fa-facebook-square' },
      { title: `Github`, description: `Check our github repo`, url: `https://github.com/silevis/reactgrid`, fontAwesomeIcon: 'fab fa-github' },
      { title: `npm`, description: `Check our npm repo`, url: `https://www.npmjs.com/org/silevis`, fontAwesomeIcon: 'fab fa-npm' },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img`,
        name: `img`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}