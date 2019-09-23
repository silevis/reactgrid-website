module.exports = {
  siteMetadata: {
    title: `ReactGrid`,
    author: `Silevis Software`,
    description: `Advanced spreadsheet for developers`,
    siteUrl: `http://reactgrid.com`,
    pages: [
      {id: 0, title: `Home`,        description: ``, route: `/`,        active: false },
      {id: 1, title: `Demo`,        description: ``, route: `/demo`,    active: true  },
      {id: 2, title: `Docs`,        description: ``, route: `/docs`,    active: true  },
      {id: 3, title: `Pricing`,     description: ``, route: `/pricing`, active: true  },
      {id: 4, title: `Blog`,        description: ``, route: `/blog`,    active: false  },

    ],
    docsVersions: [
      {slug: "/1.0.3", desc: '1.0.3', index: '/Introduction' },
      {slug: "/1.0.2", desc: '1.0.2 (deprecated)', index: '/Introduction' },
      {slug: "/1.0.1", desc: '1.0.1 (deprecated)', index: '/Introduction' },
    ],
    docsPagesOrder: [
      "/Za",
      "/Tutorial",
      "/Introduction",
      
    ],
    social: [
      { title: `Facebook`, description: `Check our Facebook profile`, url: `https://www.facebook.com/silevis.software/`, fontAwesomeIcon: 'fab fa-facebook-square' },
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
        path: `${__dirname}/content/authors`,
        name: 'authors',
      },
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
        path: `${__dirname}/content/docs`,
        name: `docs`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        plugins: [ `gatsby-remark-images` ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 800
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {resolve: `gatsby-remark-prismjs`},
          {resolve: `gatsby-remark-copy-linked-files`},
          {resolve: `gatsby-remark-smartypants`},
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ReactGrid",
        short_name: "ReactGrid",
        start_url: "/",
        background_color: "#171941",
        theme_color: "#171941",
        display: "standalone",
        icon: "src/assets/img/icon.png", 
        crossOrigin: `use-credentials`,
      }
    },
  ],
}
