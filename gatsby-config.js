module.exports = {
    //pathPrefix: ``,
    pathPrefix: `/`,
    siteMetadata: {
        title: `Intresting`,
        description: `Intresting`,
        author: `Mateusz Szostek`,
        siteUrl: "https://www.awesome-test-website.com",
    },
    plugins: [
        `babel-plugin-styled-components`,
        `gatsby-plugin-sitemap`,
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
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/locales`,
                name: `locale`,
            },
        },

        {
            resolve: `gatsby-plugin-react-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/locales`,
                // supported language
                languages: [`en`, `pl`],
                // language file path
                defaultLanguage: `pl`,
                // option to redirect to `/ko` when connecting `/`
                redirect: true,
                // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
                redirectDefaultLanguageToRoot: false,
                // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
                ignoredPaths: [],
                // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
                fallbackLanguage: `en`,
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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // Footnotes mode (default: true)
                footnotes: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
    ],
};
