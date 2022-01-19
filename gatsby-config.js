module.exports = {
  siteMetadata: {
    title: `ReactGrid`,
    author: `Silevis Software Sp. z o.o.`,
    description: `Spreadsheet experience for your React app`,
    siteUrl: `https://reactgrid.com`,
    pages: [
      { id: 'home', title: `Home`, description: ``, route: `/`, active: false },
      { id: 'features', title: `Features`, description: ``, route: `/features`, active: true },
      { id: 'examples', title: `Examples`, description: ``, route: `/examples`, active: true },
      { id: 'docs', title: `Docs`, description: ``, route: `/docs`, active: true },
      { id: 'pricing', title: `Pricing`, description: ``, route: `/pricing`, active: false },
      { id: 'blog', title: `Blog`, description: ``, route: `/blog`, active: true },
    ],
    footerNav: [
      { id: 'team', title: `Team`, description: ``, route: `/team`, active: false },
      { id: 'faq', title: `FAQ`, description: ``, route: `/faq`, active: false },
      { id: 'cookie', title: `Cookie Policy`, description: ``, route: `/cookies`, active: true },
      { id: 'privacyPolicy', title: `Privacy Policy`, description: ``, route: `/privacy-policy`, active: true },
    ],
    explore: [
      { id: 'features', title: `Features`, description: ``, route: `/features`, active: true },
      { id: 'examples', title: `Examples`, description: ``, route: `/examples`, active: true },
      { id: 'blog', title: `Blog`, description: ``, route: `/blog`, active: true },
      { id: 'contact-us', title: `Contact us`, description: ``, route: `/contact-us`, active: true },
      { id: 'pricing', title: `Pricing`, description: ``, route: `/pricing`, active: false },
    ],
    docsVersions: [
      { slug: "/3.1", desc: '3.1', index: '/0-introduction', active: true },
      { slug: "/3.0", desc: '3.0', index: '/0-introduction', active: true }
    ],
    docsPagesOrder: [
      "/Za",
      "/Tutorial",
      "/Introduction",
    ],
    social: [
      { title: `npm`, description: `Check our npm`, url: `https://www.npmjs.com/package/@silevis/reactgrid`, fontAwesomeIcon: 'fab fa-npm', active: true },
      { title: `Github`, description: `Check our github repo`, url: `https://github.com/silevis/reactgrid`, fontAwesomeIcon: 'fab fa-github', active: true },
      { title: `Twitter`, description: `Check our Twitter profile`, url: `https://twitter.com/ReactGrid`, fontAwesomeIcon: 'fab fa-twitter', active: true },
      { title: `Gitter`, description: `Chat on Gitter`, url: `https://gitter.im/silevis-reactgrid/community`, fontAwesomeIcon: 'fab fa-gitter', active: false },
      { title: `Discord`, description: `Join our community`, url: `https://discord.gg/tWYV64j`, fontAwesomeIcon: 'fab fa-discord', active: true },
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
    `gatsby-plugin-react-helmet`,
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
            resolve: "gatsby-remark-embed-gist",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1000,
              showCaptions: true,
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
        defaultDataLayer: { platform: "dataLayer" },
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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: 'GTM-WWDXHMH', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        // },
        environments: ['production', 'development']
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ReactGrid",
        short_name: "ReactGrid",
        start_url: "/",
        background_color: "#f3f4f5",
        theme_color: "#f3f4f5",
        display: "standalone",
        icon: "src/assets/img/icon.png",
        crossOrigin: `use-credentials`,
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  // TODO add source 
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  author: edge.node.frontmatter.author,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(filter: {frontmatter: {posttype: {eq: "blog"}}, fields: {slug: {}}}, sort: {fields: fields___slug, order: ASC}) {
                  edges {
                    node {
                      html
                      excerpt
                      fields {
                        slug
                      }
                      frontmatter {
                        posttype
                        title
                        metaDescription
                        metaTitle
                        tags
                        date
                        author
                        canonicalUrl
                      }
                    }
                  }
                  totalCount
                }
              }
            `,
            output: "/rss.xml",
            title: "ReactGrid's blog RSS feed",
          },
        ],
      },
    },
  ],
}
