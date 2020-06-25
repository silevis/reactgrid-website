module.exports = {
  siteMetadata: {
    title: `ReactGrid`,
    author: `Silevis Software`,
    description: `Spreadsheet experience for your React app`,
    siteUrl: `http://reactgrid.com`,
    pages: [
      { id: 'home', title: `Home`, description: ``, route: `/`, active: false },
      { id: 'features', title: `Features`, description: ``, route: `/features`, active: false },
      { id: 'examples', title: `Examples`, description: ``, route: `/examples`, active: false },
      { id: 'docs', title: `Docs`, description: ``, route: `/docs`, active: true },
      { id: 'pricing', title: `Pricing`, description: ``, route: `/pricing`, active: false },
      { id: 'blog', title: `Blog`, description: ``, route: `/blog`, active: false },
    ],
    footerNav: [
      { id: 'blog', title: `Blog`, description: ``, route: `/blog`, active: false },
      { id: 'team', title: `Team`, description: ``, route: `/team`, active: false },
      { id: 'faq', title: `FAQ`, description: ``, route: `/faq`, active: false },
      { id: 'cookie', title: `Cookie Policy`, description: ``, route: `/cookies`, active: true },
      { id: 'privacyPolicy', title: `Privacy Policy`, description: ``, route: `/privacy-policy`, active: true },
    ],
    docsVersions: [
      { slug: "/3.0", desc: '3.0', index: '/0-introduction', active: true }
    ],
    docsPagesOrder: [
      "/Za",
      "/Tutorial",
      "/Introduction",
    ],
    social: [
      { title: `npm`, description: `Check our npm`, url: `https://www.npmjs.com/package/@silevis/reactgrid`, fontAwesomeIcon: 'fab fa-npm' },
      { title: `Github`, description: `Check our github repo`, url: `https://github.com/silevis/reactgrid`, fontAwesomeIcon: 'fab fa-github' },
      { title: `Facebook`, description: `Check our Facebook profile`, url: `https://www.facebook.com/silevis.software/`, fontAwesomeIcon: 'fab fa-facebook-square' },
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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/features/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/usps/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        plugins: [`gatsby-remark-images`],
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
          {
            resolve: `gatsby-remark-prismjs`
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WWDXHMH",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
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
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //       anonymize: true
    //     },
    //     facebookPixel: {
    //       pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
    //     },
    //     environments: ['production', 'development']
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
