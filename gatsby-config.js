module.exports = {
  siteMetadata: {
    title: "Second Wave Surfing: Surf Equipment from Munich",
    titleTemplate: "",
    description:
      "Local brand from Munich that offers sustainably packaged surf accessories and equipment for SUP, River Surfing, Ocean Surfing, Kite Surfing and more!",
    url: "https://www.secondwavesurfing.com", // No trailing slash allowed!
    siteUrl: "https://www.secondwavesurfing.com",
    image: "/src/assets/logos/logo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@SecondSurfing",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
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
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: `https://secondwavesurfing.com/shop/graphql`,
    //     schema: {
    //       perPage: 20, // currently set to 100
    //       requestConcurrency: 5, // currently set to 15
    //       previewRequestConcurrency: 2, // currently set to 5
    //     },
    //     type: {
    //       Products: {
    //         where: `supportedTypesOnly: true`,
    //       },
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `27192288280`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `27192288280`,
    //     instagram_id: "10111630678898158",
    //     access_token:
    //       "EAAEdGXeE73oBAFREkj4uZCat9dlrLHUe2ZCOnnVDXHMXZCf0glGHoocgIHHKMg32DQ2ZCqfteRwknejxYVYxnKFZAEYnnC5N4ZC2mbWLrOWZAPnE25uTmxVgjJjVo3TX2ivTGDV65caXl2FM0oQySgopwfjt2D3y6SCZCb46bT9OvER3HgeLcVFPDwnRZCiguSGBHZBVHXXZBCgRpHF5bApRupnaonLupNn36vj7m7GNhRQOAZDZD",
    //   },
    // },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://secondwavesurfing.us19.list-manage.com/subscribe/post?u=37a2f35f3b8bc53ace7af50eb&amp;id=7bdc6b47ed",
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-168058937-1", // leave empty if you want to disable the tracker
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: "", // leave empty if you want to disable the tracker
          dataLayerName: "dataLayer", // default
        },
        facebookPixel: {
          pixelId: "", // leave empty if you want to disable the tracker
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Second Wave Surfing`,
        short_name: `SecondWaveSurfing`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FEF9C7`,
        display: `minimal-ui`,
        icon: `src/assets/logos/SWlogo.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    "gatsby-plugin-emotion",
  ],
}
