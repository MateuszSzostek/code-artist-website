module.exports = {
  //pathPrefix: ``,
  pathPrefix: `/code-artist-gatsby-front-end`,
  siteMetadata: {
    title: `Intresting`,
    description: `Intresting`,
    author: `Mateusz Szostek`,
    siteUrl: "https://www.awesome-test-website.com",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "CodeArtist",
        icon: "src/assets/images/raster/logo/maskable_icon_x128.png",
        background_color: "white",
        theme_color: `#fff`,
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
        icons: [
          {
            src: "src/assets/images/raster/logo/maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "src/assets/images/raster/logo/maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/assets/images/raster/logo/maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    /*
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "",
                sitemap: "",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    //  `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              withWebp: true,
              showCaptions: true,
              quality: 100,
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],
};
